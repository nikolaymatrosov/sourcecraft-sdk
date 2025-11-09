
# UpdateRepositoryBody


## Properties

Name | Type
------------ | -------------
`defaultBranch` | string
`description` | string
`links` | [Array&lt;Link&gt;](Link.md)
`templateType` | [RepoTemplate](RepoTemplate.md)
`visibility` | [RepositoryVisibility](RepositoryVisibility.md)

## Example

```typescript
import type { UpdateRepositoryBody } from ''

// TODO: Update the object below with actual values
const example = {
  "defaultBranch": null,
  "description": null,
  "links": null,
  "templateType": null,
  "visibility": null,
} satisfies UpdateRepositoryBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateRepositoryBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


