# IssuesCommentsReactionsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addReaction**](IssuesCommentsReactionsApi.md#addreaction) | **POST** /issue_comments/id:{issue_comment_id}/reactions | Add Reaction |
| [**removeReaction**](IssuesCommentsReactionsApi.md#removereaction) | **DELETE** /issue_comments/id:{issue_comment_id}/reactions | Remove Reaction |



## addReaction

> Reactions addReaction(issueCommentId, modifyReactionBody)

Add Reaction

Adds a reaction to an issue comment

### Example

```ts
import {
  Configuration,
  IssuesCommentsReactionsApi,
} from '';
import type { AddReactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesCommentsReactionsApi(config);

  const body = {
    // string
    issueCommentId: issueCommentId_example,
    // ModifyReactionBody
    modifyReactionBody: ...,
  } satisfies AddReactionRequest;

  try {
    const data = await api.addReaction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **issueCommentId** | `string` |  | [Defaults to `undefined`] |
| **modifyReactionBody** | [ModifyReactionBody](ModifyReactionBody.md) |  | |

### Return type

[**Reactions**](Reactions.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | Both Client Errors (4xx) and Server Errors (5xx) are serialized into this scheme |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeReaction

> Reactions removeReaction(issueCommentId, modifyReactionBody)

Remove Reaction

Remove a reaction from an issue comment

### Example

```ts
import {
  Configuration,
  IssuesCommentsReactionsApi,
} from '';
import type { RemoveReactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesCommentsReactionsApi(config);

  const body = {
    // string
    issueCommentId: issueCommentId_example,
    // ModifyReactionBody
    modifyReactionBody: ...,
  } satisfies RemoveReactionRequest;

  try {
    const data = await api.removeReaction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **issueCommentId** | `string` |  | [Defaults to `undefined`] |
| **modifyReactionBody** | [ModifyReactionBody](ModifyReactionBody.md) |  | |

### Return type

[**Reactions**](Reactions.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | Both Client Errors (4xx) and Server Errors (5xx) are serialized into this scheme |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

