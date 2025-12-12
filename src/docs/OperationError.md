
# OperationError


## Properties

Name | Type
------------ | -------------
`details` | { [key: string]: string; }
`errorCode` | string
`message` | string

## Example

```typescript
import type { OperationError } from ''

// TODO: Update the object below with actual values
const example = {
  "details": null,
  "errorCode": null,
  "message": null,
} satisfies OperationError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OperationError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


