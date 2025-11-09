
# Issue


## Properties

Name | Type
------------ | -------------
`assignee` | [UserEmbedded](UserEmbedded.md)
`author` | [UserEmbedded](UserEmbedded.md)
`completedAt` | Date
`createdAt` | Date
`deadline` | Date
`description` | string
`id` | string
`labels` | [Array&lt;LabelEmbedded&gt;](LabelEmbedded.md)
`linkedPrs` | [Array&lt;PullRequestEmbedded&gt;](PullRequestEmbedded.md)
`milestone` | [MilestoneEmbedded](MilestoneEmbedded.md)
`priority` | [Priority](Priority.md)
`slug` | string
`startedAt` | Date
`status` | [IssueStatus](IssueStatus.md)
`title` | string
`updatedAt` | Date
`updatedBy` | [UserEmbedded](UserEmbedded.md)
`visibility` | [IssueVisibility](IssueVisibility.md)

## Example

```typescript
import type { Issue } from ''

// TODO: Update the object below with actual values
const example = {
  "assignee": null,
  "author": null,
  "completedAt": null,
  "createdAt": null,
  "deadline": null,
  "description": null,
  "id": null,
  "labels": null,
  "linkedPrs": null,
  "milestone": null,
  "priority": null,
  "slug": null,
  "startedAt": null,
  "status": null,
  "title": null,
  "updatedAt": null,
  "updatedBy": null,
  "visibility": null,
} satisfies Issue

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Issue
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


