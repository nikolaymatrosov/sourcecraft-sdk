
# RefsUpdate


## Properties

Name | Type
------------ | -------------
`defaultBranch` | string
`header` | [EventHeader](EventHeader.md)
`isDefaultBranchUpdated` | boolean
`pushedAt` | Date
`pusher` | [UserEmbedded](UserEmbedded.md)
`refUpdates` | [Array&lt;RefUpdate&gt;](RefUpdate.md)
`repository` | [RepositoryEmbedded](RepositoryEmbedded.md)

## Example

```typescript
import type { RefsUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "defaultBranch": null,
  "header": null,
  "isDefaultBranchUpdated": null,
  "pushedAt": null,
  "pusher": null,
  "refUpdates": null,
  "repository": null,
} satisfies RefsUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RefsUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


