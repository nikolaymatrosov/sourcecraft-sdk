
# PullRequestCommentCreate


## Properties

Name | Type
------------ | -------------
`comment` | [PullRequestComment](PullRequestComment.md)
`header` | [EventHeader](EventHeader.md)
`isPublished` | boolean
`isThread` | boolean
`pullRequest` | [PullRequest](PullRequest.md)
`repository` | [Repository](Repository.md)

## Example

```typescript
import type { PullRequestCommentCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "comment": null,
  "header": null,
  "isPublished": null,
  "isThread": null,
  "pullRequest": null,
  "repository": null,
} satisfies PullRequestCommentCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PullRequestCommentCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


