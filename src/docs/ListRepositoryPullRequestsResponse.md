
# ListRepositoryPullRequestsResponse


## Properties

Name | Type
------------ | -------------
`nextPageToken` | string
`pullRequests` | [Array&lt;PullRequest&gt;](PullRequest.md)

## Example

```typescript
import type { ListRepositoryPullRequestsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "nextPageToken": null,
  "pullRequests": null,
} satisfies ListRepositoryPullRequestsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListRepositoryPullRequestsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


