/**
 * Issues Management Example
 *
 * This example demonstrates how to manage issues, comments, labels,
 * and reactions using the SourceCraft SDK.
 */

import {
  Configuration,
  IssuesApi,
  IssuesCommentsApi,
  IssuesLabelsApi,
  IssuesCommentsReactionsApi,
  IssuesAttachmentsApi,
  Reaction,
} from '@nikolaymatrosov/sourcecraft-sdk';

// Example constants - customize these for your use case or set via environment variables
const ORG_SLUG = process.env.SOURCECRAFT_ORG || 'my-org';
const REPO_SLUG = process.env.SOURCECRAFT_REPO || 'my-repo';

// Initialize configuration
const config = new Configuration({
  basePath: process.env.SOURCECRAFT_API_BASE || 'https://api.sourcecraft.tech',
  accessToken: process.env.SOURCECRAFT_TOKEN || 'your-access-token-here',
});

const issuesApi = new IssuesApi(config);
const commentsApi = new IssuesCommentsApi(config);
const labelsApi = new IssuesLabelsApi(config);
const reactionsApi = new IssuesCommentsReactionsApi(config);
const attachmentsApi = new IssuesAttachmentsApi(config);

async function issueExamples() {
  try {
    // Example 1: Create a new issue
    console.log('\n--- Creating Issue ---');
    const newIssue = await issuesApi.createIssue({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      createIssueBody: {
        title: 'Bug: Application crashes on startup',
        description: 'The application crashes when starting with the following error...',
        assigneeId: 'user1-id',
        labelSlugs: ['bug', 'high-priority'],
      },
    });
    console.log('Created issue:', newIssue.title);
    console.log('Issue slug:', newIssue.slug);

    // Example 2: Get a specific issue
    console.log('\n--- Getting Issue ---');
    const issue = await issuesApi.getIssue({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      issueSlug: 'bug-application-crashes-1',
    });
    console.log('Issue:', issue.title);
    console.log('Status:', issue.status);
    console.log('Assignee:', issue.assignee?.slug);

    // Example 3: List repository issues
    console.log('\n--- Listing Repository Issues ---');
    const repoIssues = await issuesApi.listRepositoryIssues({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      pageSize: '10',
      filter: 'status:open',
    });
    console.log(`Found ${repoIssues.issues?.length} issues`);
    repoIssues.issues?.forEach((issue) => {
      console.log(`  - ${issue.slug}: ${issue.title}`);
    });

    // Example 4: List issues assigned to authenticated user
    console.log('\n--- Listing My Assigned Issues ---');
    const myIssues = await issuesApi.listIssuesAssignedToAuthenticatedUser({
      pageSize: '20',
      filter: 'status:open',
    });
    console.log(`You have ${myIssues.issues?.length} assigned issues`);

    // Example 5: Update an issue
    console.log('\n--- Updating Issue ---');
    const updatedIssue = await issuesApi.updateIssue({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      issueSlug: 'bug-application-crashes-1',
      updateIssueBody: {
        title: 'Bug: Application crashes on startup [FIXED]',
        statusSlug: 'closed',
        description: 'Updated description with fix details...',
      },
    });
    console.log('Updated issue:', updatedIssue.title);

    // Example 6: Add a comment to an issue
    console.log('\n--- Adding Comment ---');
    const comment = await commentsApi.createIssueComment({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      issueSlug: 'bug-application-crashes-1',
      createIssueCommentBody: {
        body: 'I investigated this issue and found the root cause...',
      },
    });
    console.log('Added comment:', comment.id);

    // Example 7: List issue comments
    console.log('\n--- Listing Comments ---');
    const comments = await commentsApi.listIssueComments({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      issueSlug: 'bug-application-crashes-1',
    });
    console.log(`Issue has ${comments.issueComments?.length} comments`);
    comments.issueComments?.forEach((comment) => {
      console.log(`  - ${comment.author?.slug}: ${comment.body?.substring(0, 50)}...`);
    });

    // Example 8: Update a comment
    console.log('\n--- Updating Comment ---');
    const updatedComment = await commentsApi.updateIssueComment({
      issueCommentId: comment.id!,
      updateIssueCommentBody: {
        body: 'Updated: I investigated this issue and found the root cause...',
      },
    });
    console.log('Updated comment:', updatedComment.id);

    // Example 9: Add labels to an issue
    console.log('\n--- Adding Labels ---');
    const labelsResponse = await labelsApi.addLabels({
      orgSlug: ORG_SLUG,
      repoSlug: REPO_SLUG,
      issueSlug: 'bug-application-crashes-1',
      modifyLabelCollectionRequest: {
        slugs: ['verified', 'needs-review'],
      },
    });
    console.log('Labels:', labelsResponse.labels?.map((l) => l.name).join(', '));

    // Example 10: Add reactions to a comment
    console.log('\n--- Adding Reactions ---');
    await reactionsApi.addReaction({
      issueCommentId: comment.id!,
      modifyReactionBody: {
        reaction: Reaction.Like,
      },
    });
    console.log('Reaction added');

    // Example 11: Upload attachment to an issue
    console.log('\n--- Uploading Attachment ---');
    // Note: This example shows the API structure
    // In real usage, you'd need to handle file uploads properly
    // const attachment = await attachmentsApi.uploadAttachment({
    //   orgSlug: 'my-org',
    //   repoSlug: 'my-repo',
    //   issueSlug: 'bug-application-crashes-1',
    //   file: fileBlob, // Your file blob here
    // });
    console.log('Attachment upload example (commented out - needs actual file)');

    // Example 12: Delete an issue
    console.log('\n--- Deleting Issue ---');
    // Uncomment to actually delete
    // await issuesApi.deleteIssue({
    //   orgSlug: ORG_SLUG,
    //   repoSlug: REPO_SLUG,
    //   issueSlug: 'issue-to-delete',
    // });
    console.log('Issue deleted (example commented out for safety)');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run examples
if (require.main === module) {
  issueExamples();
}

export { issueExamples };
