
# ListOrganizationInvitesResponse


## Properties

Name | Type
------------ | -------------
`invites` | [Array&lt;Invite&gt;](Invite.md)
`nextPageToken` | string

## Example

```typescript
import type { ListOrganizationInvitesResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "invites": null,
  "nextPageToken": null,
} satisfies ListOrganizationInvitesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListOrganizationInvitesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


