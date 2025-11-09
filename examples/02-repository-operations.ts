/**
 * Repository Operations Example
 *
 * This example demonstrates the complete lifecycle of a repository:
 * creating a new repository, retrieving it, and deleting it.
 */

import { Configuration, RepositoryApi } from 'sourcecraft-sdk';

// Example constants - customize these for your use case or set via environment variables
const ORG_SLUG = process.env.SOURCECRAFT_ORG || 'my-org';
const DEMO_REPO_SLUG = 'demo-repository-example';
const DEMO_REPO_NAME = 'Demo Repository Example';

// Initialize configuration
const config = new Configuration({
  basePath: process.env.SOURCECRAFT_API_BASE || 'https://api.sourcecraft.tech',
  accessToken: process.env.SOURCECRAFT_TOKEN || 'your-access-token-here',
});

const repositoryApi = new RepositoryApi(config);

async function repositoryExamples() {
  try {
    // Step 1: Create a new repository
    console.log('\n=== STEP 1: Creating Repository ===');
    const createdRepo = await repositoryApi.createRepository({
      orgSlug: ORG_SLUG,
      createRepositoryBody: {
        name: DEMO_REPO_NAME,
        slug: DEMO_REPO_SLUG,
        description: 'A demonstration repository created by the SourceCraft SDK example',
        visibility: 'private',
      },
    });
    console.log('✓ Created repository:', createdRepo.name);
    console.log('  Slug:', createdRepo.slug);
    console.log('  Visibility:', createdRepo.visibility);

    // Step 2: Get the repository we just created
    console.log('\n=== STEP 2: Getting Repository ===');
    const retrievedRepo = await repositoryApi.getRepository({
      orgSlug: ORG_SLUG,
      repoSlug: DEMO_REPO_SLUG,
    });
    console.log('✓ Retrieved repository:', retrievedRepo.name);
    console.log('  Description:', retrievedRepo.description);
    console.log('  Default Branch:', retrievedRepo.defaultBranch);

    // Step 3: Delete the repository
    console.log('\n=== STEP 3: Deleting Repository ===');
    console.log('⚠️  Delete is commented out for safety');
    console.log('To actually delete the repository, uncomment the following lines:');
    console.log('');
    // Uncomment to actually delete the repository
    await repositoryApi.deleteRepository({
      orgSlug: ORG_SLUG,
      repoSlug: DEMO_REPO_SLUG,
      silent: false,
    });
    console.log('✓ Repository deleted:', DEMO_REPO_SLUG);

    console.log('\n=== Repository Lifecycle Demo Complete ===');
    console.log(
      `Note: The repository "${DEMO_REPO_NAME}" was created but not deleted.`,
    );
    console.log('You can manually delete it or uncomment the delete code to clean it up.');
  } catch (error) {
    console.error('Error:', error);
  }
}

// ================================================================================
// Additional Examples (optional operations)
// ================================================================================

async function additionalRepositoryExamples() {
  const REPO_SLUG = process.env.SOURCECRAFT_REPO || 'my-repo';

  try {
    // Example: Update a repository
    console.log('\n--- Updating Repository ---');
    const updatedRepo = await repositoryApi.updateRepository({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      updateRepositoryBody: {
        description: 'Updated description for my repository',
        visibility: 'public',
      },
    });
    console.log('Updated repository:', updatedRepo.name);

    // Example: Fork a repository
    console.log('\n--- Forking Repository ---');
    const forkedRepo = await repositoryApi.forkRepository({
      orgSlug: 'source-org',
      repoSlug: 'repo-to-fork',
      forkRepositoryBody: {
        orgSlug: ORG_SLUG,
        slug: 'forked-repo',
        defaultBranchOnly: false,
      },
    });
    console.log('Forked repository:', forkedRepo.name);

    // Example: List branches
    console.log('\n--- Listing Branches ---');
    const branches = await repositoryApi.listBranches({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
    });
    console.log('Branches:');
    branches.branches?.forEach((branch) => {
      console.log(`  - ${branch.name}`);
    });

    // Example: List tags
    console.log('\n--- Listing Tags ---');
    const tags = await repositoryApi.listTags({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
    });
    console.log('Tags:');
    tags.tags?.forEach((tag) => {
      console.log(`  - ${tag.name}`);
    });

    // Example: Get repository tree
    console.log('\n--- Getting Repository Tree ---');
    const tree = await repositoryApi.listTree({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      revision: 'main',
      path: '/',
    });
    console.log('Tree entries:');
    tree.trees?.forEach((entry) => {
      console.log(`  - ${entry.path} (${entry.type})`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run examples
if (require.main === module) {
  repositoryExamples();
}

export { repositoryExamples, additionalRepositoryExamples };
