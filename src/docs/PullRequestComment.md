
# PullRequestComment


## Properties

Name | Type
------------ | -------------
`anchor` | [Anchor](Anchor.md)
`author` | [UserEmbedded](UserEmbedded.md)
`body` | string
`createdAt` | Date
`id` | string
`isDeleted` | boolean
`isOutdated` | boolean
`isPublished` | boolean
`isResolved` | boolean
`iteration` | string
`needResolution` | boolean
`parentId` | string
`reactions` | [{ [key: string]: ReactionCount; }](ReactionCount.md)
`type` | [PullRequestCommentType](PullRequestCommentType.md)
`updatedAt` | Date
`updatedBy` | [UserEmbedded](UserEmbedded.md)

## Example

```typescript
import type { PullRequestComment } from ''

// TODO: Update the object below with actual values
const example = {
  "anchor": null,
  "author": null,
  "body": null,
  "createdAt": null,
  "id": null,
  "isDeleted": null,
  "isOutdated": null,
  "isPublished": null,
  "isResolved": null,
  "iteration": null,
  "needResolution": null,
  "parentId": null,
  "reactions": null,
  "type": null,
  "updatedAt": null,
  "updatedBy": null,
} satisfies PullRequestComment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PullRequestComment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


