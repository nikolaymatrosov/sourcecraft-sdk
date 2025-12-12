
# Workflow


## Properties

Name | Type
------------ | -------------
`dates` | [DatesByStage](DatesByStage.md)
`description` | string
`id` | string
`progress` | [Progress](Progress.md)
`slug` | string
`status` | [RunStatus](RunStatus.md)
`tasks` | [Array&lt;Task&gt;](Task.md)

## Example

```typescript
import type { Workflow } from ''

// TODO: Update the object below with actual values
const example = {
  "dates": null,
  "description": null,
  "id": null,
  "progress": null,
  "slug": null,
  "status": null,
  "tasks": null,
} satisfies Workflow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Workflow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


