
# PullRequestReviewDecision


## Properties

Name | Type
------------ | -------------
`decision` | [ReviewDecision](ReviewDecision.md)
`header` | [EventHeader](EventHeader.md)
`pullRequest` | [PullRequest](PullRequest.md)
`repository` | [Repository](Repository.md)
`user` | [UserEmbedded](UserEmbedded.md)

## Example

```typescript
import type { PullRequestReviewDecision } from ''

// TODO: Update the object below with actual values
const example = {
  "decision": null,
  "header": null,
  "pullRequest": null,
  "repository": null,
  "user": null,
} satisfies PullRequestReviewDecision

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PullRequestReviewDecision
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


