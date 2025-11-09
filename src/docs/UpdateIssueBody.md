
# UpdateIssueBody


## Properties

Name | Type
------------ | -------------
`assigneeId` | string
`deadline` | Date
`description` | string
`milestoneId` | string
`priority` | [Priority](Priority.md)
`statusSlug` | string
`title` | string
`visibility` | [IssueVisibility](IssueVisibility.md)

## Example

```typescript
import type { UpdateIssueBody } from ''

// TODO: Update the object below with actual values
const example = {
  "assigneeId": null,
  "deadline": null,
  "description": null,
  "milestoneId": null,
  "priority": null,
  "statusSlug": null,
  "title": null,
  "visibility": null,
} satisfies UpdateIssueBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateIssueBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


