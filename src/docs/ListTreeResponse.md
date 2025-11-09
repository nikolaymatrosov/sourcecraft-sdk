
# ListTreeResponse


## Properties

Name | Type
------------ | -------------
`nextPageToken` | string
`trees` | [Array&lt;TreeEntry&gt;](TreeEntry.md)

## Example

```typescript
import type { ListTreeResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "nextPageToken": null,
  "trees": null,
} satisfies ListTreeResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListTreeResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


