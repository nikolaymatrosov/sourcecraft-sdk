# Scripts

This directory contains utility scripts for the SourceCraft SDK build process.

## add-auth-to-openapi.js

Automatically adds Bearer authentication configuration to the generated OpenAPI specification.

### What it does

1. Adds global `security` configuration with `bearerAuth`
2. Adds `securitySchemes` definition in the components section
3. Configures Bearer token authentication with JWT format

### Usage

**Standalone:**
```bash
node scripts/add-auth-to-openapi.js [path-to-openapi.yaml]
```

**Via npm scripts:**
```bash
# Add auth to existing openapi.yaml
npm run add-auth

# Convert swagger.json + add auth
npm run prepare-spec

# Full build: convert, add auth, and generate SDK
npm run build
```

### How it works

The script:
- Reads the OpenAPI YAML file
- Checks if Bearer auth is already configured (idempotent)
- Adds security configuration at the root level
- Adds securitySchemes definition in components
- Writes the modified file back

### Result

After running this script, the generated SDK will:
- Provide methods to set the bearer token
- Automatically include `Authorization: Bearer {token}` header in all requests
- Support standard authentication patterns for the target language

### Example SDK Usage

**TypeScript/Axios:**
```typescript
import { Configuration, DefaultApi } from './src';

const config = new Configuration({
  accessToken: 'your-jwt-token-here'
});

const api = new DefaultApi(config);
```
