
# ListBranchesResponse


## Properties

Name | Type
------------ | -------------
`branches` | [Array&lt;Branch&gt;](Branch.md)
`nextPageToken` | string

## Example

```typescript
import type { ListBranchesResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "branches": null,
  "nextPageToken": null,
} satisfies ListBranchesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListBranchesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


