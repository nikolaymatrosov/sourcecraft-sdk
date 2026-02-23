
# PullRequestCommentCreateBulk


## Properties

Name | Type
------------ | -------------
`comments` | [Array&lt;PullRequestComment&gt;](PullRequestComment.md)
`header` | [EventHeader](EventHeader.md)
`pullRequest` | [PullRequest](PullRequest.md)
`repository` | [Repository](Repository.md)

## Example

```typescript
import type { PullRequestCommentCreateBulk } from ''

// TODO: Update the object below with actual values
const example = {
  "comments": null,
  "header": null,
  "pullRequest": null,
  "repository": null,
} satisfies PullRequestCommentCreateBulk

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PullRequestCommentCreateBulk
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


