
# SetDecisionResponse

SetDecisionResponse contains information about set decision and pull request id.

## Properties

Name | Type
------------ | -------------
`createdDecision` | [ReviewDecision](ReviewDecision.md)
`pullRequestId` | string

## Example

```typescript
import type { SetDecisionResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "createdDecision": null,
  "pullRequestId": null,
} satisfies SetDecisionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SetDecisionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


