
# MergeInfo


## Properties

Name | Type
------------ | -------------
`error` | string
`mergeCommitHash` | string
`mergeParameters` | [MergeParameters](MergeParameters.md)
`merger` | [UserEmbedded](UserEmbedded.md)
`targetCommitHash` | string

## Example

```typescript
import type { MergeInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "error": null,
  "mergeCommitHash": null,
  "mergeParameters": null,
  "merger": null,
  "targetCommitHash": null,
} satisfies MergeInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MergeInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


