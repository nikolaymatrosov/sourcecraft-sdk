/**
 * Pull Requests Example
 *
 * This example demonstrates how to manage pull requests, reviewers,
 * and comments using the SourceCraft SDK.
 */

import {
  Configuration,
  RepositoryPullRequestApi,
  RepositoryPullRequestReviewersApi,
  RepositoryPullRequestCommentsApi,
  UserPullRequestApi,
} from '@nikolaymatrosov/sourcecraft-sdk';

// Example constants - customize these for your use case or set via environment variables
const ORG_SLUG = process.env.SOURCECRAFT_ORG || 'my-org';
const REPO_SLUG = process.env.SOURCECRAFT_REPO || 'my-repo';

// Initialize configuration
const config = new Configuration({
  basePath: process.env.SOURCECRAFT_API_BASE || 'https://api.sourcecraft.tech',
  accessToken: process.env.SOURCECRAFT_TOKEN || 'your-access-token-here',
});

const pullRequestApi = new RepositoryPullRequestApi(config);
const reviewersApi = new RepositoryPullRequestReviewersApi(config);
const commentsApi = new RepositoryPullRequestCommentsApi(config);
const userPRApi = new UserPullRequestApi(config);

async function pullRequestExamples() {
  try {
    // Example 1: Create a new pull request
    console.log('\n--- Creating Pull Request ---');
    const newPR = await pullRequestApi.createPullRequest({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      createPullRequestBody: {
        title: 'Add new feature: User authentication',
        description: 'This PR implements user authentication using JWT tokens...',
        sourceBranch: 'feature/user-auth',
        targetBranch: 'main',
        publish: true,
      },
    });
    console.log('Created PR:', newPR.title);
    console.log('PR slug:', newPR.slug);

    // Example 2: Get a specific pull request
    console.log('\n--- Getting Pull Request ---');
    const pr = await pullRequestApi.getPullRequest({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      pullRequestSlug: 'add-new-feature-1',
    });
    console.log('PR:', pr.title);
    console.log('Status:', pr.status);
    console.log('Author:', pr.author?.slug);
    console.log('Source:', pr.sourceBranch, '→ Target:', pr.targetBranch);

    // Example 3: List repository pull requests
    console.log('\n--- Listing Repository PRs ---');
    const repoPRs = await pullRequestApi.listRepositoryPullRequests({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      pageSize: '10',
    });
    console.log(`Found ${repoPRs.pullRequests?.length} pull requests`);
    repoPRs.pullRequests?.forEach((pr) => {
      console.log(`  - ${pr.slug}: ${pr.title}`);
    });

    // Example 4: List user's pull requests
    console.log('\n--- Listing User Pull Requests ---');
    const myPRs = await userPRApi.listUserPullRequests({
      userSlug: 'my-username',
      pageSize: '20',
    });
    console.log(`User has ${myPRs.pullRequests?.length} pull requests`);

    // Example 5: Update a pull request
    console.log('\n--- Updating Pull Request ---');
    const updatedPR = await pullRequestApi.updatePullRequest({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      pullRequestSlug: 'add-new-feature-1',
      updatePullRequestBody: {
        title: 'Add new feature: User authentication [READY FOR REVIEW]',
        description: 'Updated: This PR implements user authentication...',
      },
    });
    console.log('Updated PR:', updatedPR.title);

    // Example 6: Add reviewers to a pull request
    console.log('\n--- Adding Reviewers ---');
    await reviewersApi.updateReviewers({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      pullRequestSlug: 'add-new-feature-1',
      updateReviewersBody: {
        reviewersDelta: [
          { action: 'add', userId: 'reviewer1-id' },
          { action: 'add', userId: 'reviewer2-id' },
        ],
      },
    });
    console.log('Reviewers added');

    // Example 7: Remove a reviewer
    console.log('\n--- Removing Reviewer ---');
    await reviewersApi.updateReviewers({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      pullRequestSlug: 'add-new-feature-1',
      updateReviewersBody: {
        reviewersDelta: [{ action: 'remove', userId: 'reviewer2-id' }],
      },
    });
    console.log('Reviewer removed');

    // Example 8: Add a comment to a pull request
    console.log('\n--- Adding Comment ---');
    const comment = await commentsApi.createPullRequestComment({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      pullRequestSlug: 'add-new-feature-1',
      createPullRequestCommentBody: {
        body: 'Great work! I have a few suggestions...',
        publish: true,
      },
    });
    console.log('Added comment:', comment.id);

    // Example 9: List pull request comments
    console.log('\n--- Listing Comments ---');
    const comments = await commentsApi.listPullRequestComments({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      pullRequestSlug: 'add-new-feature-1',
    });
    console.log(`PR has ${comments.pullRequestComments?.length} comments`);
    comments.pullRequestComments?.forEach((comment) => {
      console.log(`  - ${comment.author?.slug}: ${comment.body?.substring(0, 50)}...`);
    });

    // Example 10: Get a specific comment
    console.log('\n--- Getting Comment ---');
    const retrievedComment = await commentsApi.getPullRequestComment({
      pullRequestCommentId: comment.id!,
    });
    console.log('Retrieved comment:', retrievedComment.id);

    // Example 11: Draft a pull request
    console.log('\n--- Drafting Pull Request ---');
    const draftedPR = await pullRequestApi.draftPullRequest({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      pullRequestSlug: 'add-new-feature-1',
    });
    console.log('PR drafted:', draftedPR.slug);

    // Example 12: Publish a draft pull request
    console.log('\n--- Publishing Pull Request ---');
    const publishedPR = await pullRequestApi.publishPullRequest({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      pullRequestSlug: 'add-new-feature-1',
    });
    console.log('PR published:', publishedPR.slug);

    // Example 13: Discard (close) a pull request without merging
    console.log('\n--- Discarding Pull Request ---');
    // Uncomment to actually discard
    // const discardedPR = await pullRequestApi.discardPullRequest({
    //   orgSlug: ORG_SLUG,
    //   repoSlug: REPO_SLUG,
    //   pullRequestSlug: 'another-pr',
    // });
    // console.log('PR discarded:', discardedPR.slug);
    console.log('PR discard example commented out for safety');

    // Example 14: Reopen a closed pull request
    console.log('\n--- Reopening Pull Request ---');
    // Uncomment to actually reopen
    // const reopenedPR = await pullRequestApi.reopenPullRequest({
    //   orgSlug: ORG_SLUG,
    //   repoSlug: REPO_SLUG,
    //   pullRequestSlug: 'closed-pr',
    // });
    // console.log('PR reopened:', reopenedPR.slug);
    console.log('PR reopen example commented out for safety');

    // Example 15: Note about comment operations
    console.log('\n--- Comment Operations ---');
    console.log('Comments can be created, retrieved, and listed.');
    console.log('For updating or deleting, check the API documentation.');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run examples
if (require.main === module) {
  pullRequestExamples();
}

export { pullRequestExamples };
