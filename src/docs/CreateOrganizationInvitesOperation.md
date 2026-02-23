
# CreateOrganizationInvitesOperation


## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`error` | [OperationError](OperationError.md)
`modifiedAt` | Date
`operationId` | string
`response` | [CreateOrganizationInvitesOperationResult](CreateOrganizationInvitesOperationResult.md)
`status` | [OperationStatus](OperationStatus.md)
`statusUrl` | string

## Example

```typescript
import type { CreateOrganizationInvitesOperation } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "error": null,
  "modifiedAt": null,
  "operationId": null,
  "response": null,
  "status": null,
  "statusUrl": null,
} satisfies CreateOrganizationInvitesOperation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateOrganizationInvitesOperation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


