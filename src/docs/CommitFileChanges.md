
# CommitFileChanges


## Properties

Name | Type
------------ | -------------
`added` | Array&lt;string&gt;
`modified` | Array&lt;string&gt;
`removed` | Array&lt;string&gt;

## Example

```typescript
import type { CommitFileChanges } from ''

// TODO: Update the object below with actual values
const example = {
  "added": null,
  "modified": null,
  "removed": null,
} satisfies CommitFileChanges

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommitFileChanges
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


