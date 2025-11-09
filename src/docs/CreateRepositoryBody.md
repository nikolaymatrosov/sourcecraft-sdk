
# CreateRepositoryBody


## Properties

Name | Type
------------ | -------------
`description` | string
`initSettings` | [InitSettings](InitSettings.md)
`name` | string
`slug` | string
`templatingOptions` | [TemplatingOptions](TemplatingOptions.md)
`visibility` | [RepositoryVisibility](RepositoryVisibility.md)

## Example

```typescript
import type { CreateRepositoryBody } from ''

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "initSettings": null,
  "name": null,
  "slug": null,
  "templatingOptions": null,
  "visibility": null,
} satisfies CreateRepositoryBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateRepositoryBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


