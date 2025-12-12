
# CreateInvitesOperationResult


## Properties

Name | Type
------------ | -------------
`errors` | [Array&lt;InviteError&gt;](InviteError.md)
`invites` | [Array&lt;Invite&gt;](Invite.md)

## Example

```typescript
import type { CreateInvitesOperationResult } from ''

// TODO: Update the object below with actual values
const example = {
  "errors": null,
  "invites": null,
} satisfies CreateInvitesOperationResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateInvitesOperationResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


