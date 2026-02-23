
# PullRequestNewIteration


## Properties

Name | Type
------------ | -------------
`commitSha` | string
`createdAt` | Date
`header` | [EventHeader](EventHeader.md)
`mergeBaseSha` | string
`pullRequest` | [PullRequest](PullRequest.md)
`repository` | [Repository](Repository.md)
`updatedAt` | Date

## Example

```typescript
import type { PullRequestNewIteration } from ''

// TODO: Update the object below with actual values
const example = {
  "commitSha": null,
  "createdAt": null,
  "header": null,
  "mergeBaseSha": null,
  "pullRequest": null,
  "repository": null,
  "updatedAt": null,
} satisfies PullRequestNewIteration

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PullRequestNewIteration
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


