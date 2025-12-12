
# Push


## Properties

Name | Type
------------ | -------------
`commits` | [Array&lt;Commit&gt;](Commit.md)
`defaultBranch` | string
`hasMoreCommits` | boolean
`header` | [EventHeader](EventHeader.md)
`isDefaultBranchUpdated` | boolean
`pushedAt` | Date
`pusher` | [UserEmbedded](UserEmbedded.md)
`refUpdate` | [RefUpdate](RefUpdate.md)
`repository` | [Repository](Repository.md)

## Example

```typescript
import type { Push } from ''

// TODO: Update the object below with actual values
const example = {
  "commits": null,
  "defaultBranch": null,
  "hasMoreCommits": null,
  "header": null,
  "isDefaultBranchUpdated": null,
  "pushedAt": null,
  "pusher": null,
  "refUpdate": null,
  "repository": null,
} satisfies Push

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Push
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


