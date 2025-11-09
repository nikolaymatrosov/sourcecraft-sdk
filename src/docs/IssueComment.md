
# IssueComment


## Properties

Name | Type
------------ | -------------
`attachments` | [Array&lt;AttachmentEmbedded&gt;](AttachmentEmbedded.md)
`author` | [UserEmbedded](UserEmbedded.md)
`body` | string
`createdAt` | Date
`id` | string
`parent` | [IssueCommentEmbedded](IssueCommentEmbedded.md)
`reactions` | [{ [key: string]: ReactionCount; }](ReactionCount.md)
`updatedAt` | Date
`updatedBy` | [UserEmbedded](UserEmbedded.md)

## Example

```typescript
import type { IssueComment } from ''

// TODO: Update the object below with actual values
const example = {
  "attachments": null,
  "author": null,
  "body": null,
  "createdAt": null,
  "id": null,
  "parent": null,
  "reactions": null,
  "updatedAt": null,
  "updatedBy": null,
} satisfies IssueComment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IssueComment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


