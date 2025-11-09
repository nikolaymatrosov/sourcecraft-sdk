
# CreateMilestoneBody


## Properties

Name | Type
------------ | -------------
`deadline` | Date
`description` | string
`name` | string
`slug` | string
`startDate` | Date

## Example

```typescript
import type { CreateMilestoneBody } from ''

// TODO: Update the object below with actual values
const example = {
  "deadline": null,
  "description": null,
  "name": null,
  "slug": null,
  "startDate": null,
} satisfies CreateMilestoneBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateMilestoneBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


