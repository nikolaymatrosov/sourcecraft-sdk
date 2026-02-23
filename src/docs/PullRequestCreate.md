
# PullRequestCreate


## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`header` | [EventHeader](EventHeader.md)
`pullRequest` | [PullRequest](PullRequest.md)
`repository` | [Repository](Repository.md)

## Example

```typescript
import type { PullRequestCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "header": null,
  "pullRequest": null,
  "repository": null,
} satisfies PullRequestCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PullRequestCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


