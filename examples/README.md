# SourceCraft SDK Examples

This directory contains examples demonstrating how to use the SourceCraft SDK for various operations.

## Prerequisites

Before running the examples, make sure you have:

1. Installed the SDK dependencies:

   ```bash
   npm install
   ```

2. Built the SDK:

   ```bash
   npm run build:ts
   ```

3. Set up your environment variables:

   **Option A: Using a .env file (recommended)**

   Copy the example environment file and fill in your values:

   ```bash
   cp examples/.env.example examples/.env
   ```

   Then edit `examples/.env` with your actual credentials:

   ```bash
   SOURCECRAFT_TOKEN=your-actual-token-here
   SOURCECRAFT_ORG=your-org-slug
   SOURCECRAFT_REPO=your-repo-slug
   ```

   **Option B: Using environment variables**

   Set the environment variables directly:

   ```bash
   export SOURCECRAFT_TOKEN="your-access-token-here"
   export SOURCECRAFT_ORG="your-org-slug"
   export SOURCECRAFT_REPO="your-repo-slug"
   export SOURCECRAFT_API_BASE="https://api.sourcecraft.tech"  # optional
   ```

## Examples Overview

### 01. Basic Setup

**File:** [01-basic-setup.ts](./01-basic-setup.ts)

Learn how to configure and initialize the SourceCraft SDK with different authentication methods:

- Basic configuration with access token
- Configuration with custom headers
- Configuration with async access token
- Configuration with custom fetch implementation

### 02. Repository Operations

**File:** [02-repository-operations.ts](./02-repository-operations.ts)

Comprehensive examples of repository management:

- Getting repository details
- Creating new repositories
- Updating repository settings
- Forking repositories
- Listing branches and tags
- Browsing repository tree structure
- Deleting repositories

### 03. Issues Management

**File:** [03-issues-management.ts](./03-issues-management.ts)

Complete guide to managing issues:

- Creating and updating issues
- Listing issues (repository-wide and user-assigned)
- Adding and managing comments
- Working with issue labels
- Adding reactions to comments
- Uploading attachments
- Deleting issues and comments

### 04. Pull Requests

**File:** [04-pull-requests.ts](./04-pull-requests.ts)

Everything you need to know about pull requests:

- Creating and updating pull requests
- Managing reviewers
- Adding and updating comments
- Viewing diffs and commits
- Merging pull requests
- Closing pull requests
- Working with draft PRs

## Running the Examples

### Method 1: Build and Run (Recommended)

This is the recommended approach for running the examples:

```bash
# Build the examples
npm run build:examples

# Run any example with Node
node examples/dist/01-basic-setup.js
node examples/dist/02-repository-operations.js
node examples/dist/03-issues-management.js
node examples/dist/04-pull-requests.js
```

### Method 2: Using ts-node from Project Root

If you prefer to run TypeScript directly without compiling:

```bash
# Run from the project root directory (not from examples/)
npx ts-node -P examples/tsconfig.json examples/01-basic-setup.ts
npx ts-node -P examples/tsconfig.json examples/02-repository-operations.ts
npx ts-node -P examples/tsconfig.json examples/03-issues-management.ts
npx ts-node -P examples/tsconfig.json examples/04-pull-requests.ts
```

**Note:** Make sure to run these commands from the project root directory, not from the `examples/` directory.

## API Configuration

All examples use the following configuration pattern:

```typescript
import { Configuration, RepositoryApi } from '../src';

const config = new Configuration({
  basePath: 'https://api.sourcecraft.tech',
  accessToken: process.env.SOURCECRAFT_TOKEN || 'your-access-token-here',
});

const api = new RepositoryApi(config);
```

### Configuration Options

| Option | Type | Description |
|--------|------|-------------|
| `basePath` | string | API base URL (default: <https://api.sourcecraft.tech>) |
| `accessToken` | string \| Promise<string> \| function | Access token for authentication |
| `headers` | object | Custom headers to include in all requests |
| `fetchApi` | function | Custom fetch implementation |
| `middleware` | array | Middleware to apply before/after requests |

## Error Handling

All API calls can throw errors. Always wrap them in try-catch blocks:

```typescript
try {
  const repo = await repositoryApi.getRepository({
    orgSlug: 'my-org',
    repoSlug: 'my-repo',
  });
  console.log('Repository:', repo.name);
} catch (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error('API Error:', error.response.status);
    console.error('Error details:', await error.response.json());
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error:', error.message);
  }
}
```

## Common Use Cases

### Authentication

```typescript
// Using environment variable
const config = new Configuration({
  accessToken: process.env.SOURCECRAFT_TOKEN,
});

// Using async token provider (e.g., for token refresh)
const config = new Configuration({
  accessToken: async () => {
    return await getTokenFromSecureStorage();
  },
});
```

### Pagination

```typescript
// List items with pagination
const issues = await issuesApi.listRepositoryIssues({
  orgSlug: 'my-org',
  repoSlug: 'my-repo',
  pageSize: '50',
  pageToken: 'next-page-token', // From previous response
});

// Check if there are more pages
if (issues.nextPageToken) {
  console.log('More results available');
}
```

### Filtering and Sorting

```typescript
// Filter open issues with specific labels
const issues = await issuesApi.listRepositoryIssues({
  orgSlug: 'my-org',
  repoSlug: 'my-repo',
  filter: 'status:open labels:bug,high-priority',
  sortBy: 'created:desc',
});
```

## Available APIs

The SDK provides the following API classes:

- **RepositoryApi** - Repository management
- **IssuesApi** - Issue management
- **IssuesCommentsApi** - Issue comments
- **IssuesLabelsApi** - Issue labels
- **IssuesAttachmentsApi** - Issue attachments
- **IssuesCommentsReactionsApi** - Comment reactions
- **RepositoryPullRequestApi** - Pull request management
- **RepositoryPullRequestCommentsApi** - PR comments
- **RepositoryPullRequestReviewersApi** - PR reviewers
- **OrganizationApi** - Organization management
- **RolesApi** - Role management
- **CIApi** - CI/CD operations
- **UserPullRequestApi** - User-specific PR operations

## Additional Resources

- [SourceCraft API Documentation](https://api.sourcecraft.tech/docs)
- [SDK Source Code](../src)
- [GitHub Repository](https://github.com/sourcecraft/sourcecraft-sdk)

## Need Help?

If you encounter any issues or have questions:

1. Check the [API documentation](https://api.sourcecraft.tech/docs)
2. Review the example code in this directory
3. Open an issue on the GitHub repository
4. Contact support at <info@sourcecraft.dev>

## License

These examples are provided as-is for educational purposes.
