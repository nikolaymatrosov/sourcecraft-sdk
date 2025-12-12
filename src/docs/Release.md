
# Release


## Properties

Name | Type
------------ | -------------
`assets` | [Array&lt;ReleaseAsset&gt;](ReleaseAsset.md)
`author` | [UserEmbedded](UserEmbedded.md)
`createdAt` | Date
`hash` | string
`id` | string
`isLatest` | boolean
`isPreRelease` | boolean
`releaseNotes` | string
`releasedAt` | Date
`repoId` | string
`status` | [ReleaseStatus](ReleaseStatus.md)
`tag` | string
`title` | string
`updatedAt` | Date

## Example

```typescript
import type { Release } from ''

// TODO: Update the object below with actual values
const example = {
  "assets": null,
  "author": null,
  "createdAt": null,
  "hash": null,
  "id": null,
  "isLatest": null,
  "isPreRelease": null,
  "releaseNotes": null,
  "releasedAt": null,
  "repoId": null,
  "status": null,
  "tag": null,
  "title": null,
  "updatedAt": null,
} satisfies Release

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Release
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


