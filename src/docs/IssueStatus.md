
# IssueStatus


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`slug` | string
`statusType` | [StatusType](StatusType.md)

## Example

```typescript
import type { IssueStatus } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "slug": null,
  "statusType": null,
} satisfies IssueStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IssueStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


