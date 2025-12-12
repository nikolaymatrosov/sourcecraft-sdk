
# Commit


## Properties

Name | Type
------------ | -------------
`author` | [Signature](Signature.md)
`committer` | [Signature](Signature.md)
`hash` | string
`mergeTag` | string
`message` | string
`parentHashes` | Array&lt;string&gt;
`treeHash` | string

## Example

```typescript
import type { Commit } from ''

// TODO: Update the object below with actual values
const example = {
  "author": null,
  "committer": null,
  "hash": null,
  "mergeTag": null,
  "message": null,
  "parentHashes": null,
  "treeHash": null,
} satisfies Commit

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Commit
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


