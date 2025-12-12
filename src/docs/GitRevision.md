
# GitRevision

Exactly one of the fields must be provided

## Properties

Name | Type
------------ | -------------
`branch` | string
`commit` | string
`tag` | string

## Example

```typescript
import type { GitRevision } from ''

// TODO: Update the object below with actual values
const example = {
  "branch": null,
  "commit": null,
  "tag": null,
} satisfies GitRevision

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GitRevision
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


