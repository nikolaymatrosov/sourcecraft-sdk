
# PullRequestReviewAssignment


## Properties

Name | Type
------------ | -------------
`header` | [EventHeader](EventHeader.md)
`pullRequest` | [PullRequest](PullRequest.md)
`repository` | [Repository](Repository.md)
`reviewerDeltas` | [Array&lt;V1ReviewerDelta&gt;](V1ReviewerDelta.md)
`user` | [UserEmbedded](UserEmbedded.md)

## Example

```typescript
import type { PullRequestReviewAssignment } from ''

// TODO: Update the object below with actual values
const example = {
  "header": null,
  "pullRequest": null,
  "repository": null,
  "reviewerDeltas": null,
  "user": null,
} satisfies PullRequestReviewAssignment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PullRequestReviewAssignment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


