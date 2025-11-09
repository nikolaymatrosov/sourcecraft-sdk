
# PullRequest


## Properties

Name | Type
------------ | -------------
`author` | [UserEmbedded](UserEmbedded.md)
`createdAt` | Date
`description` | string
`id` | string
`mergeInfo` | [MergeInfo](MergeInfo.md)
`repository` | [RepositoryEmbedded](RepositoryEmbedded.md)
`slug` | string
`sourceBranch` | string
`status` | [PullRequestStatus](PullRequestStatus.md)
`targetBranch` | string
`title` | string
`updatedAt` | Date
`updatedBy` | [UserEmbedded](UserEmbedded.md)

## Example

```typescript
import type { PullRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "author": null,
  "createdAt": null,
  "description": null,
  "id": null,
  "mergeInfo": null,
  "repository": null,
  "slug": null,
  "sourceBranch": null,
  "status": null,
  "targetBranch": null,
  "title": null,
  "updatedAt": null,
  "updatedBy": null,
} satisfies PullRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PullRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


