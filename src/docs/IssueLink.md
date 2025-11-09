
# IssueLink


## Properties

Name | Type
------------ | -------------
`author` | [UserEmbedded](UserEmbedded.md)
`createdAt` | Date
`id` | string
`linkType` | [IssueLinkLinkType](IssueLinkLinkType.md)
`source` | [IssueEmbedded](IssueEmbedded.md)
`target` | [IssueEmbedded](IssueEmbedded.md)
`updatedAt` | Date
`updatedBy` | [UserEmbedded](UserEmbedded.md)

## Example

```typescript
import type { IssueLink } from ''

// TODO: Update the object below with actual values
const example = {
  "author": null,
  "createdAt": null,
  "id": null,
  "linkType": null,
  "source": null,
  "target": null,
  "updatedAt": null,
  "updatedBy": null,
} satisfies IssueLink

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IssueLink
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


