
# AttachmentDownloadable


## Properties

Name | Type
------------ | -------------
`fileType` | [FileType](FileType.md)
`id` | string
`mimeType` | string
`name` | string
`size` | string
`url` | string

## Example

```typescript
import type { AttachmentDownloadable } from ''

// TODO: Update the object below with actual values
const example = {
  "fileType": null,
  "id": null,
  "mimeType": null,
  "name": null,
  "size": null,
  "url": null,
} satisfies AttachmentDownloadable

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AttachmentDownloadable
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


