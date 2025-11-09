
# CreatePullRequestCommentBody


## Properties

Name | Type
------------ | -------------
`anchor` | [ShortAnchor](ShortAnchor.md)
`body` | string
`iteration` | string
`needResolution` | boolean
`parentId` | string
`publish` | boolean

## Example

```typescript
import type { CreatePullRequestCommentBody } from ''

// TODO: Update the object below with actual values
const example = {
  "anchor": null,
  "body": null,
  "iteration": null,
  "needResolution": null,
  "parentId": null,
  "publish": null,
} satisfies CreatePullRequestCommentBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePullRequestCommentBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


