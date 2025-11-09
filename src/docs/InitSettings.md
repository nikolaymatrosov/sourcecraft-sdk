
# InitSettings


## Properties

Name | Type
------------ | -------------
`createReadme` | boolean
`defaultBranch` | string
`gitignorePresets` | Array&lt;string&gt;
`licenseSlug` | string
`srcYamlTemplateSlug` | string

## Example

```typescript
import type { InitSettings } from ''

// TODO: Update the object below with actual values
const example = {
  "createReadme": null,
  "defaultBranch": null,
  "gitignorePresets": null,
  "licenseSlug": null,
  "srcYamlTemplateSlug": null,
} satisfies InitSettings

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InitSettings
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


