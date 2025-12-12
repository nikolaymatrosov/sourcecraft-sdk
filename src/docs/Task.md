
# Task


## Properties

Name | Type
------------ | -------------
`cubes` | [Array&lt;Cube&gt;](Cube.md)
`dates` | [DatesByStage](DatesByStage.md)
`description` | string
`id` | string
`progress` | [Progress](Progress.md)
`relations` | [Relations](Relations.md)
`slug` | string
`status` | [RunStatus](RunStatus.md)

## Example

```typescript
import type { Task } from ''

// TODO: Update the object below with actual values
const example = {
  "cubes": null,
  "dates": null,
  "description": null,
  "id": null,
  "progress": null,
  "relations": null,
  "slug": null,
  "status": null,
} satisfies Task

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Task
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


