
# ListReviewersResponse


## Properties

Name | Type
------------ | -------------
`nextPageToken` | string
`reviewers` | [Array&lt;PRReviewer&gt;](PRReviewer.md)

## Example

```typescript
import type { ListReviewersResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "nextPageToken": null,
  "reviewers": null,
} satisfies ListReviewersResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListReviewersResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


