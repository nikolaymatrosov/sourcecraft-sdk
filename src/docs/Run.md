
# Run

Run represents an instance of CI/CD run which may contain several workflow launches.  When Run is in `created` status, it is still in preparation for startup and can contain no workflows. After the status is no longer `created` (is `prepared` or `processing`), its workflows list is filled and finalized.  It is possible that \'Run Workflows\' endpoint will return a Run that\'s no longer `created` or `prepared` if those stages were processed fast enough.

## Properties

Name | Type
------------ | -------------
`dates` | [DatesByStage](DatesByStage.md)
`errorMessages` | Array&lt;string&gt;
`eventType` | [EventType](EventType.md)
`id` | string
`pull` | [PullRequestEmbedded](PullRequestEmbedded.md)
`slug` | string
`status` | [RunStatus](RunStatus.md)
`user` | [UserEmbedded](UserEmbedded.md)
`workflows` | [Array&lt;Workflow&gt;](Workflow.md)

## Example

```typescript
import type { Run } from ''

// TODO: Update the object below with actual values
const example = {
  "dates": null,
  "errorMessages": null,
  "eventType": null,
  "id": null,
  "pull": null,
  "slug": null,
  "status": null,
  "user": null,
  "workflows": null,
} satisfies Run

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Run
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


