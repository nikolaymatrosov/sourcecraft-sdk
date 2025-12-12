
# Ping


## Properties

Name | Type
------------ | -------------
`header` | [EventHeader](EventHeader.md)
`pingedAt` | Date
`repository` | [RepositoryEmbedded](RepositoryEmbedded.md)
`webhookSlug` | string

## Example

```typescript
import type { Ping } from ''

// TODO: Update the object below with actual values
const example = {
  "header": null,
  "pingedAt": null,
  "repository": null,
  "webhookSlug": null,
} satisfies Ping

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Ping
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


