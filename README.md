# SourceCraft SDK

[![npm version](https://img.shields.io/npm/v/@nikolaymatrosov/sourcecraft-sdk.svg)](https://www.npmjs.com/package/@nikolaymatrosov/sourcecraft-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Changelog](https://img.shields.io/badge/changelog-CHANGELOG.md-blue)](CHANGELOG.md)

A TypeScript/JavaScript SDK for interacting with the SourceCraft API - a platform for managing source code repositories, issues, pull requests, and CI/CD operations.

## Features

- **Type-Safe**: Full TypeScript support with comprehensive type definitions
- **Auto-Generated**: Built from OpenAPI specifications for accuracy and consistency
- **Zero Dependencies**: Uses native fetch API, no external runtime dependencies
- **Comprehensive API Coverage**: 19 API classes covering all SourceCraft operations
- **Modern**: Supports Node.js 20.x and 24.x
- **Well Documented**: Includes detailed examples and inline documentation

## Installation

```bash
npm install @nikolaymatrosov/sourcecraft-sdk
```

## Quick Start

```typescript
import { Configuration, RepositoryApi } from '@nikolaymatrosov/sourcecraft-sdk';

// Configure the SDK
const config = new Configuration({
  basePath: 'https://api.sourcecraft.tech',
  accessToken: process.env.SOURCECRAFT_TOKEN,
});

// Create API client
const repositoryApi = new RepositoryApi(config);

// List repositories
const repos = await repositoryApi.listRepositories({
  pageSize: 10,
});

console.log(repos);
```

## Authentication

SourceCraft SDK requires an access token for authentication. You can provide it in several ways:

### Environment Variable (Recommended)

```bash
export SOURCECRAFT_TOKEN="your-token-here"
```

```typescript
const config = new Configuration({
  basePath: 'https://api.sourcecraft.tech',
  accessToken: process.env.SOURCECRAFT_TOKEN,
});
```

### Direct Configuration

```typescript
const config = new Configuration({
  basePath: 'https://api.sourcecraft.tech',
  accessToken: 'your-token-here',
});
```

### Async Token Provider (for token refresh)

```typescript
const config = new Configuration({
  basePath: 'https://api.sourcecraft.tech',
  accessToken: async () => {
    // Fetch or refresh token
    return await getTokenFromSomewhere();
  },
});
```

## API Coverage

The SDK provides comprehensive coverage of SourceCraft APIs:

### Repository Management

- `RepositoryApi` - Create, read, update, delete repositories
- `RepositoryLabelsApi` - Manage repository labels
- `RepositoryMilestonesApi` - Manage milestones
- `RepositoryPullRequestApi` - Pull request operations
- `RepositoryPullRequestCommentsApi` - PR comments
- `RepositoryPullRequestReviewersApi` - PR reviewers

### Issues Management

- `IssuesApi` - Issue lifecycle management
- `IssuesCommentsApi` - Issue comments
- `IssuesLabelsApi` - Issue labels
- `IssuesAttachmentsApi` - File attachments
- `IssuesCommentsReactionsApi` - Emoji reactions
- `IssuesLinkedIssuesApi` - Link issues together
- `IssuesLinkedPRsApi` - Link issues to pull requests
- `IssuesStatusesApi` - Issue status management

### Organization & Access

- `OrganizationApi` - Organization management
- `RolesApi` - Role-based access control

### CI/CD

- `CIApi` - CI/CD pipeline operations

### User Operations

- `UserPullRequestApi` - User-specific PR operations

## Usage Examples

### Creating a Repository

```typescript
import { Configuration, RepositoryApi } from '@nikolaymatrosov/sourcecraft-sdk';

const config = new Configuration({
  basePath: 'https://api.sourcecraft.tech',
  accessToken: process.env.SOURCECRAFT_TOKEN,
});

const repoApi = new RepositoryApi(config);

const newRepo = await repoApi.createRepository({
  createRepositoryRequest: {
    name: 'my-new-repo',
    description: 'A new repository',
    visibility: 'public',
  },
});

console.log(`Created repository: ${newRepo.name}`);
```

### Managing Issues

```typescript
import { Configuration, IssuesApi } from '@nikolaymatrosov/sourcecraft-sdk';

const config = new Configuration({
  basePath: 'https://api.sourcecraft.tech',
  accessToken: process.env.SOURCECRAFT_TOKEN,
});

const issuesApi = new IssuesApi(config);

// Create an issue
const issue = await issuesApi.createIssue({
  owner: 'myorg',
  repo: 'my-repo',
  createIssueRequest: {
    title: 'Bug: Login not working',
    body: 'Users cannot log in with valid credentials',
    labels: ['bug', 'high-priority'],
  },
});

console.log(`Created issue #${issue.number}`);
```

### Working with Pull Requests

```typescript
import { Configuration, RepositoryPullRequestApi } from '@nikolaymatrosov/sourcecraft-sdk';

const config = new Configuration({
  basePath: 'https://api.sourcecraft.tech',
  accessToken: process.env.SOURCECRAFT_TOKEN,
});

const prApi = new RepositoryPullRequestApi(config);

// Create a pull request
const pr = await prApi.createPullRequest({
  owner: 'myorg',
  repo: 'my-repo',
  createPullRequestRequest: {
    title: 'Add new feature',
    head: 'feature-branch',
    base: 'main',
    body: 'This PR adds a new feature',
  },
});

console.log(`Created PR #${pr.number}`);
```

### Error Handling

```typescript
try {
  const repo = await repoApi.getRepository({
    owner: 'myorg',
    repo: 'my-repo',
  });
  console.log(repo);
} catch (error) {
  console.error('Error fetching repository:', error);
}
```

## Examples Directory

The [examples](examples/) directory contains comprehensive usage examples:

1. **[01-basic-setup.ts](examples/01-basic-setup.ts)** - Configuration patterns and authentication
2. **[02-repository-operations.ts](examples/02-repository-operations.ts)** - Repository CRUD, forking, branches, tags
3. **[03-issues-management.ts](examples/03-issues-management.ts)** - Issues, comments, labels, reactions, attachments
4. **[04-pull-requests.ts](examples/04-pull-requests.ts)** - PR creation, reviewers, merging, comments

### Running Examples

```bash
# Set up environment
cp examples/.env.example examples/.env
# Edit examples/.env and add your SOURCECRAFT_TOKEN

# Method 1: Build and run
npm run build:examples
node examples/dist/01-basic-setup.js

# Method 2: Direct TypeScript execution
npx ts-node -P examples/tsconfig.json examples/01-basic-setup.ts
```

## Development

### Build Commands

```bash
# Install dependencies
npm install

# Full build (prepare spec, generate SDK, format, compile)
npm run build

# TypeScript compilation only
npm run build:ts

# Watch mode for development
npm run build:watch

# Build examples
npm run build:examples
```

### Code Quality

```bash
# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

### SDK Generation

The SDK is auto-generated from OpenAPI specifications. To regenerate:

```bash
# Convert Swagger 2.0 to OpenAPI 3.0 and fix issues
npm run prepare-spec

# Generate SDK from OpenAPI spec
npm run generate-sdk

# Full build
npm run build
```

## Project Structure

```
sourcecraft-sdk/
├── src/                    # Auto-generated SDK source (don't edit manually)
│   ├── apis/              # 19 API classes
│   ├── models/            # TypeScript models
│   └── runtime.ts         # Base runtime/configuration
├── examples/              # Usage examples
│   ├── 01-basic-setup.ts
│   ├── 02-repository-operations.ts
│   ├── 03-issues-management.ts
│   ├── 04-pull-requests.ts
│   └── .env.example       # Environment template
├── spec/                  # OpenAPI specifications
│   ├── swagger.json       # Source Swagger 2.0 spec
│   └── openapi.yaml       # Converted OpenAPI 3.0 spec
├── scripts/               # Build scripts
├── dist/                  # Compiled output
└── .github/workflows/     # CI/CD pipelines
```

## SDK Generation Process

This SDK is automatically generated from OpenAPI specifications:

1. **Source**: Swagger 2.0 specification in `spec/swagger.json`
2. **Conversion**: Converted to OpenAPI 3.0 format
3. **Fixing**: Automated fixes applied via `scripts/fix-openapi.js`
4. **Generation**: SDK generated using `openapi-generator-cli` with TypeScript-Fetch template
5. **Formatting**: Code formatted with Prettier and ESLint

**Important**: Do not edit files in `src/` directory manually. Regenerate the SDK using `npm run build` instead.

## CI/CD

This project uses GitHub Actions for continuous integration and deployment:

- **CI Workflow**: Runs on PRs and pushes to main
  - Tests on Node 20.x and 24.x
  - Runs linter and format checks
  - Builds SDK and examples

- **Publish Workflow**: Runs on GitHub releases
  - Publishes to npm with provenance

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm run lint && npm run build`
5. Submit a pull request

## Requirements

- Node.js 20.x or 24.x (see [.nvmrc](.nvmrc))
- npm or yarn

## License

MIT License - see [LICENSE](LICENSE) file for details

## Author

**Nikolay Matrosov**

- Email: <nikolay.matrosov@gmail.com>
- Package: [@nikolaymatrosov/sourcecraft-sdk](https://www.npmjs.com/package/@nikolaymatrosov/sourcecraft-sdk)

## Links

- [SourceCraft API Documentation](https://api.sourcecraft.tech)
- [API Contact](mailto:info@sourcecraft.dev)
- [npm Package](https://www.npmjs.com/package/@nikolaymatrosov/sourcecraft-sdk)

## Support

For issues and questions:

- Open an issue on GitHub
- Contact: <info@sourcecraft.dev>
