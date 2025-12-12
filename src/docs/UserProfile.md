
# UserProfile


## Properties

Name | Type
------------ | -------------
`avatar` | [Image](Image.md)
`backgroundImage` | [Image](Image.md)
`bio` | string
`displayName` | string
`id` | string
`links` | [Array&lt;Link&gt;](Link.md)
`location` | [V1Location](V1Location.md)
`status` | [ProfileStatus](ProfileStatus.md)
`timezone` | [Timezone](Timezone.md)
`username` | string
`visibility` | [ProfileVisibility](ProfileVisibility.md)
`workplace` | [Workplace](Workplace.md)

## Example

```typescript
import type { UserProfile } from ''

// TODO: Update the object below with actual values
const example = {
  "avatar": null,
  "backgroundImage": null,
  "bio": null,
  "displayName": null,
  "id": null,
  "links": null,
  "location": null,
  "status": null,
  "timezone": null,
  "username": null,
  "visibility": null,
  "workplace": null,
} satisfies UserProfile

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserProfile
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


