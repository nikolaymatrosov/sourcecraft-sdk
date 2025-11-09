/**
 * Basic Setup Example
 *
 * This example demonstrates how to configure and initialize the SourceCraft SDK
 * with authentication.
 */

import { Configuration, RepositoryApi } from 'sourcecraft-sdk';

// Example 1: Basic configuration with access token
// You can set these via environment variables or use the default values
const config = new Configuration({
  basePath: process.env.SOURCECRAFT_API_BASE || 'https://api.sourcecraft.tech',
  accessToken: process.env.SOURCECRAFT_TOKEN || 'your-access-token-here',
});

// Create API instances
const repositoryApi = new RepositoryApi(config);

// Example 2: Configuration with custom headers
const configWithHeaders = new Configuration({
  basePath: process.env.SOURCECRAFT_API_BASE || 'https://api.sourcecraft.tech',
  accessToken: process.env.SOURCECRAFT_TOKEN || 'your-access-token-here',
  headers: {
    'User-Agent': 'MyApp/1.0',
  },
});

// Example 3: Configuration with async access token
const configWithAsyncToken = new Configuration({
  basePath: process.env.SOURCECRAFT_API_BASE || 'https://api.sourcecraft.tech',
  accessToken: async () => {
    // Fetch token from secure storage or refresh if expired
    return process.env.SOURCECRAFT_TOKEN || 'your-access-token-here';
  },
});

// Example 4: Configuration with custom fetch implementation
const configWithCustomFetch = new Configuration({
  basePath: process.env.SOURCECRAFT_API_BASE || 'https://api.sourcecraft.tech',
  accessToken: process.env.SOURCECRAFT_TOKEN || 'your-access-token-here',
  fetchApi: fetch, // Use global fetch or a custom implementation
});

console.log('SourceCraft SDK configured successfully!');
console.log('Base Path:', config.basePath);

export { config, repositoryApi };
