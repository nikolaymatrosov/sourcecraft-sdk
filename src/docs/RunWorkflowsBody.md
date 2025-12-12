
# RunWorkflowsBody


## Properties

Name | Type
------------ | -------------
`configRevision` | [GitRevision](GitRevision.md)
`head` | [GitRevision](GitRevision.md)
`shared` | boolean
`workflows` | [Array&lt;WorkflowData&gt;](WorkflowData.md)

## Example

```typescript
import type { RunWorkflowsBody } from ''

// TODO: Update the object below with actual values
const example = {
  "configRevision": null,
  "head": null,
  "shared": null,
  "workflows": null,
} satisfies RunWorkflowsBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RunWorkflowsBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


