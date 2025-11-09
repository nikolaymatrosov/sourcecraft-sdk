
# Repository


## Properties

Name | Type
------------ | -------------
`cloneUrl` | [CloneURL](CloneURL.md)
`counters` | [RepositoryCounters](RepositoryCounters.md)
`defaultBranch` | string
`description` | string
`id` | string
`isEmpty` | boolean
`language` | [Language](Language.md)
`lastUpdated` | Date
`links` | [Array&lt;Link&gt;](Link.md)
`logo` | [Image](Image.md)
`name` | string
`organization` | [OrganizationEmbedded](OrganizationEmbedded.md)
`parent` | [RepositoryEmbedded](RepositoryEmbedded.md)
`slug` | string
`templateType` | [RepoTemplate](RepoTemplate.md)
`visibility` | [RepositoryVisibility](RepositoryVisibility.md)

## Example

```typescript
import type { Repository } from ''

// TODO: Update the object below with actual values
const example = {
  "cloneUrl": null,
  "counters": null,
  "defaultBranch": null,
  "description": null,
  "id": null,
  "isEmpty": null,
  "language": null,
  "lastUpdated": null,
  "links": null,
  "logo": null,
  "name": null,
  "organization": null,
  "parent": null,
  "slug": null,
  "templateType": null,
  "visibility": null,
} satisfies Repository

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Repository
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


