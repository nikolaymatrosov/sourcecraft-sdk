
# Cube


## Properties

Name | Type
------------ | -------------
`artifacts` | [Array&lt;Artifact&gt;](Artifact.md)
`dates` | [DatesByStage](DatesByStage.md)
`id` | string
`relations` | [Relations](Relations.md)
`slug` | string
`status` | [RunStatus](RunStatus.md)

## Example

```typescript
import type { Cube } from ''

// TODO: Update the object below with actual values
const example = {
  "artifacts": null,
  "dates": null,
  "id": null,
  "relations": null,
  "slug": null,
  "status": null,
} satisfies Cube

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Cube
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


