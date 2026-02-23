
# Invite

Invite represents an organization invitation. Exactly one of email, alias, or invitee is set depending on invite type.

## Properties

Name | Type
------------ | -------------
`alias` | string
`createdAt` | Date
`email` | string
`expiresAt` | Date
`id` | string
`inviteLink` | string
`invitee` | [UserEmbedded](UserEmbedded.md)
`status` | [InviteStatus](InviteStatus.md)
`subject` | [Subject](Subject.md)

## Example

```typescript
import type { Invite } from ''

// TODO: Update the object below with actual values
const example = {
  "alias": null,
  "createdAt": null,
  "email": null,
  "expiresAt": null,
  "id": null,
  "inviteLink": null,
  "invitee": null,
  "status": null,
  "subject": null,
} satisfies Invite

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Invite
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


