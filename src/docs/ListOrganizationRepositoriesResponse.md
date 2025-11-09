
# ListOrganizationRepositoriesResponse


## Properties

Name | Type
------------ | -------------
`nextPageToken` | string
`repositories` | [Array&lt;Repository&gt;](Repository.md)

## Example

```typescript
import type { ListOrganizationRepositoriesResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "nextPageToken": null,
  "repositories": null,
} satisfies ListOrganizationRepositoriesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListOrganizationRepositoriesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


