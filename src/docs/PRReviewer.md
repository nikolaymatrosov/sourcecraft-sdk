
# PRReviewer


## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`reviewDecision` | [ReviewDecision](ReviewDecision.md)
`updatedAt` | Date
`user` | [UserEmbedded](UserEmbedded.md)

## Example

```typescript
import type { PRReviewer } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "reviewDecision": null,
  "updatedAt": null,
  "user": null,
} satisfies PRReviewer

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PRReviewer
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


