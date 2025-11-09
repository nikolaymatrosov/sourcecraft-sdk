
# ListMilestonesForRepositoryResponse


## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;Milestone&gt;](Milestone.md)
`nextPageToken` | string

## Example

```typescript
import type { ListMilestonesForRepositoryResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "nextPageToken": null,
} satisfies ListMilestonesForRepositoryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListMilestonesForRepositoryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


