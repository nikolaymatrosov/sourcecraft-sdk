
# Artifact


## Properties

Name | Type
------------ | -------------
`dates` | [ArtifactDates](ArtifactDates.md)
`downloadUrl` | string
`id` | string
`localPath` | string
`status` | [ArtifactStatus](ArtifactStatus.md)

## Example

```typescript
import type { Artifact } from ''

// TODO: Update the object below with actual values
const example = {
  "dates": null,
  "downloadUrl": null,
  "id": null,
  "localPath": null,
  "status": null,
} satisfies Artifact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Artifact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


