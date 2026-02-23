
# PullRequestCommentReactionsUpdate


## Properties

Name | Type
------------ | -------------
`addedReactions` | [Array&lt;Reaction&gt;](Reaction.md)
`comment` | [PullRequestComment](PullRequestComment.md)
`header` | [EventHeader](EventHeader.md)
`pullRequest` | [PullRequest](PullRequest.md)
`removedReactions` | [Array&lt;Reaction&gt;](Reaction.md)
`repository` | [Repository](Repository.md)

## Example

```typescript
import type { PullRequestCommentReactionsUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "addedReactions": null,
  "comment": null,
  "header": null,
  "pullRequest": null,
  "removedReactions": null,
  "repository": null,
} satisfies PullRequestCommentReactionsUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PullRequestCommentReactionsUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


