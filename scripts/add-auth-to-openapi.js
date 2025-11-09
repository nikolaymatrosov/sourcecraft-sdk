#!/usr/bin/env node

/**
 * Script to add Bearer authentication to generated OpenAPI spec
 *
 * This script modifies the openapi.yaml file to include:
 * 1. Global security configuration (bearerAuth)
 * 2. Security scheme definition in components
 *
 * Usage: node scripts/add-auth-to-openapi.js [path-to-openapi.yaml]
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Get the OpenAPI file path from arguments or use default
const openapiPath = process.argv[2] || path.join(__dirname, '..', 'spec', 'openapi.yaml');

console.log(`Processing OpenAPI spec: ${openapiPath}`);

// Check if file exists
if (!fs.existsSync(openapiPath)) {
  console.error(`Error: File not found at ${openapiPath}`);
  process.exit(1);
}

try {
  // Read and parse the OpenAPI file
  const fileContent = fs.readFileSync(openapiPath, 'utf8');
  const spec = yaml.load(fileContent);

  // Check if auth is already configured
  if (spec.security && spec.security.some(item => item.bearerAuth !== undefined)) {
    console.log('✓ Bearer authentication is already configured in the OpenAPI spec');
    process.exit(0);
  }

  console.log('Adding Bearer authentication to OpenAPI spec...');

  // 1. Add global security configuration
  if (!spec.security) {
    spec.security = [];
  }
  spec.security.push({ bearerAuth: [] });
  console.log('✓ Added global security configuration');

  // 2. Ensure components section exists
  if (!spec.components) {
    spec.components = {};
  }

  // 3. Add securitySchemes
  if (!spec.components.securitySchemes) {
    spec.components.securitySchemes = {};
  }

  spec.components.securitySchemes.bearerAuth = {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT'
  };
  console.log('✓ Added security scheme definition');

  // Clean up invalid 'properties: null' from enum schemas
  if (spec.components && spec.components.schemas) {
    let cleanedPropertiesCount = 0;
    Object.keys(spec.components.schemas).forEach(schemaName => {
      const schema = spec.components.schemas[schemaName];
      // Remove 'properties: null' from enum-only schemas
      if (schema.enum && schema.properties === null) {
        delete schema.properties;
        cleanedPropertiesCount++;
      }
    });
    if (cleanedPropertiesCount > 0) {
      console.log(`✓ Cleaned up ${cleanedPropertiesCount} invalid 'properties: null' entries`);
    }
  }

  // Clean up invalid 'type: object' from array items with $ref
  // OpenAPI spec doesn't allow sibling properties with $ref
  function cleanupRefWithType(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return 0;
    }

    let count = 0;

    // Check if this is an array items definition with both $ref and type
    if (obj.$ref && obj.type === 'object') {
      delete obj.type;
      count++;
    }

    // Recursively process all properties
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
        count += cleanupRefWithType(obj[key]);
      }
    }

    return count;
  }

  const cleanedRefCount = cleanupRefWithType(spec);
  if (cleanedRefCount > 0) {
    console.log(`✓ Cleaned up ${cleanedRefCount} invalid 'type: object' entries from items with $ref`);
  }

  // Write the modified spec back to file
  const yamlOutput = yaml.dump(spec, {
    indent: 2,
    lineWidth: -1, // Don't wrap lines
    noRefs: true,
    sortKeys: false // Preserve original key order
  });

  fs.writeFileSync(openapiPath, yamlOutput, 'utf8');

  console.log('✓ Successfully updated OpenAPI spec with Bearer authentication');
  console.log('\nGenerated SDKs will now automatically:');
  console.log('  - Include methods to set the bearer token');
  console.log('  - Add "Authorization: Bearer {token}" header to all API requests');

} catch (error) {
  console.error('Error processing OpenAPI spec:', error.message);
  process.exit(1);
}
