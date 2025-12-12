
# CreateInvitesOperation


## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`error` | [OperationError](OperationError.md)
`id` | string
`modifiedAt` | Date
`response` | [CreateInvitesOperationResult](CreateInvitesOperationResult.md)
`status` | [OperationStatus](OperationStatus.md)

## Example

```typescript
import type { CreateInvitesOperation } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "error": null,
  "id": null,
  "modifiedAt": null,
  "response": null,
  "status": null,
} satisfies CreateInvitesOperation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateInvitesOperation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


