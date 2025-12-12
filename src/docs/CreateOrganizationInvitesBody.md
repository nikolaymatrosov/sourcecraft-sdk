
# CreateOrganizationInvitesBody


## Properties

Name | Type
------------ | -------------
`invitees` | [Array&lt;InviteeInput&gt;](InviteeInput.md)
`ttlInDays` | number

## Example

```typescript
import type { CreateOrganizationInvitesBody } from ''

// TODO: Update the object below with actual values
const example = {
  "invitees": null,
  "ttlInDays": null,
} satisfies CreateOrganizationInvitesBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateOrganizationInvitesBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


