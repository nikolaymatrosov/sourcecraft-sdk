
# PullRequestRefresh


## Properties

Name | Type
------------ | -------------
`headSha` | string
`header` | [EventHeader](EventHeader.md)
`mergeBaseSha` | string
`previousStatus` | [PullRequestStatus](PullRequestStatus.md)
`pullRequest` | [PullRequest](PullRequest.md)
`repository` | [Repository](Repository.md)

## Example

```typescript
import type { PullRequestRefresh } from ''

// TODO: Update the object below with actual values
const example = {
  "headSha": null,
  "header": null,
  "mergeBaseSha": null,
  "previousStatus": null,
  "pullRequest": null,
  "repository": null,
} satisfies PullRequestRefresh

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PullRequestRefresh
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


