
# Milestone


## Properties

Name | Type
------------ | -------------
`author` | [UserEmbedded](UserEmbedded.md)
`createdAt` | Date
`deadline` | Date
`description` | string
`id` | string
`name` | string
`slug` | string
`startDate` | Date
`status` | [MilestoneStatus](MilestoneStatus.md)
`updatedAt` | Date
`updatedBy` | [UserEmbedded](UserEmbedded.md)

## Example

```typescript
import type { Milestone } from ''

// TODO: Update the object below with actual values
const example = {
  "author": null,
  "createdAt": null,
  "deadline": null,
  "description": null,
  "id": null,
  "name": null,
  "slug": null,
  "startDate": null,
  "status": null,
  "updatedAt": null,
  "updatedBy": null,
} satisfies Milestone

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Milestone
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


