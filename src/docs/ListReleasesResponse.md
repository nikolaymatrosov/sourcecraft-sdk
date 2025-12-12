
# ListReleasesResponse


## Properties

Name | Type
------------ | -------------
`nextPageToken` | string
`releases` | [Array&lt;Release&gt;](Release.md)

## Example

```typescript
import type { ListReleasesResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "nextPageToken": null,
  "releases": null,
} satisfies ListReleasesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListReleasesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


