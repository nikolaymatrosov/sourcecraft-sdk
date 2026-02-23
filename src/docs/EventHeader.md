
# EventHeader


## Properties

Name | Type
------------ | -------------
`aggregateId` | string
`aggregateType` | string
`causationId` | string
`correlationId` | string
`id` | string
`metadata` | { [key: string]: string; }
`occurredAt` | Date
`organizationId` | string
`repositoryId` | string
`triggeredBy` | [UserEmbedded](UserEmbedded.md)
`type` | string

## Example

```typescript
import type { EventHeader } from ''

// TODO: Update the object below with actual values
const example = {
  "aggregateId": null,
  "aggregateType": null,
  "causationId": null,
  "correlationId": null,
  "id": null,
  "metadata": null,
  "occurredAt": null,
  "organizationId": null,
  "repositoryId": null,
  "triggeredBy": null,
  "type": null,
} satisfies EventHeader

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventHeader
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


