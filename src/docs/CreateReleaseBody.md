
# CreateReleaseBody


## Properties

Name | Type
------------ | -------------
`publish` | boolean
`releaseNotes` | string
`tag` | string
`targetBranch` | string
`title` | string

## Example

```typescript
import type { CreateReleaseBody } from ''

// TODO: Update the object below with actual values
const example = {
  "publish": null,
  "releaseNotes": null,
  "tag": null,
  "targetBranch": null,
  "title": null,
} satisfies CreateReleaseBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateReleaseBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


