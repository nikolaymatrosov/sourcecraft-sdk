
# UpdateMilestoneBody


## Properties

Name | Type
------------ | -------------
`deadline` | Date
`description` | string
`name` | string
`slug` | string
`startDate` | Date
`status` | [MilestoneStatus](MilestoneStatus.md)

## Example

```typescript
import type { UpdateMilestoneBody } from ''

// TODO: Update the object below with actual values
const example = {
  "deadline": null,
  "description": null,
  "name": null,
  "slug": null,
  "startDate": null,
  "status": null,
} satisfies UpdateMilestoneBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateMilestoneBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


