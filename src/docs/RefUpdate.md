
# RefUpdate


## Properties

Name | Type
------------ | -------------
`afterSha` | string
`beforeSha` | string
`checkoutSha` | string
`operation` | [RefUpdateOperation](RefUpdateOperation.md)
`ref` | string

## Example

```typescript
import type { RefUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "afterSha": null,
  "beforeSha": null,
  "checkoutSha": null,
  "operation": null,
  "ref": null,
} satisfies RefUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RefUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


