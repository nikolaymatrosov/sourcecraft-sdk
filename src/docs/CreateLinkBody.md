
# CreateLinkBody


## Properties

Name | Type
------------ | -------------
`linkType` | [IssueLinkLinkType](IssueLinkLinkType.md)
`targetIssueId` | string
`targetIssueSlug` | string

## Example

```typescript
import type { CreateLinkBody } from ''

// TODO: Update the object below with actual values
const example = {
  "linkType": null,
  "targetIssueId": null,
  "targetIssueSlug": null,
} satisfies CreateLinkBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateLinkBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


