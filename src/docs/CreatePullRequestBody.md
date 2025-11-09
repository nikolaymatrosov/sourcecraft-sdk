
# CreatePullRequestBody


## Properties

Name | Type
------------ | -------------
`description` | string
`forkRepoId` | string
`publish` | boolean
`reviewerIds` | Array&lt;string&gt;
`sourceBranch` | string
`targetBranch` | string
`title` | string

## Example

```typescript
import type { CreatePullRequestBody } from ''

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "forkRepoId": null,
  "publish": null,
  "reviewerIds": null,
  "sourceBranch": null,
  "targetBranch": null,
  "title": null,
} satisfies CreatePullRequestBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePullRequestBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


