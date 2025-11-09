# IssuesCommentsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createIssueComment**](IssuesCommentsApi.md#createissuecomment) | **POST** /repos/{org_slug}/{repo_slug}/issues/{issue_slug}/comments | Create comment |
| [**createIssueCommentByID**](IssuesCommentsApi.md#createissuecommentbyid) | **POST** /issues/id:{issue_id}/comments | Create comment (by Issue ID) |
| [**deleteIssueComment**](IssuesCommentsApi.md#deleteissuecomment) | **DELETE** /issue_comments/id:{issue_comment_id} | Delete Comment |
| [**getIssueComment**](IssuesCommentsApi.md#getissuecomment) | **GET** /issue_comments/id:{issue_comment_id} | Get Comment |
| [**listIssueComments**](IssuesCommentsApi.md#listissuecomments) | **GET** /repos/{org_slug}/{repo_slug}/issues/{issue_slug}/comments | List Comments |
| [**listIssueCommentsByID**](IssuesCommentsApi.md#listissuecommentsbyid) | **GET** /issues/id:{issue_id}/comments | List Comments (by ID) |
| [**updateIssueComment**](IssuesCommentsApi.md#updateissuecomment) | **PATCH** /issue_comments/id:{issue_comment_id} | Update Comment |



## createIssueComment

> IssueComment createIssueComment(orgSlug, repoSlug, issueSlug, createIssueCommentBody, silent)

Create comment

### Example

```ts
import {
  Configuration,
  IssuesCommentsApi,
} from '';
import type { CreateIssueCommentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesCommentsApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    issueSlug: issueSlug_example,
    // CreateIssueCommentBody
    createIssueCommentBody: ...,
    // boolean | do not notify subscribers (optional)
    silent: true,
  } satisfies CreateIssueCommentRequest;

  try {
    const data = await api.createIssueComment(body);
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
| **orgSlug** | `string` |  | [Defaults to `undefined`] |
| **repoSlug** | `string` |  | [Defaults to `undefined`] |
| **issueSlug** | `string` |  | [Defaults to `undefined`] |
| **createIssueCommentBody** | [CreateIssueCommentBody](CreateIssueCommentBody.md) |  | |
| **silent** | `boolean` | do not notify subscribers | [Optional] [Defaults to `undefined`] |

### Return type

[**IssueComment**](IssueComment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | A successful response. |  -  |
| **0** | Both Client Errors (4xx) and Server Errors (5xx) are serialized into this scheme |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createIssueCommentByID

> IssueComment createIssueCommentByID(issueId, createIssueCommentBody, silent)

Create comment (by Issue ID)

### Example

```ts
import {
  Configuration,
  IssuesCommentsApi,
} from '';
import type { CreateIssueCommentByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesCommentsApi(config);

  const body = {
    // string
    issueId: issueId_example,
    // CreateIssueCommentBody
    createIssueCommentBody: ...,
    // boolean | do not notify subscribers (optional)
    silent: true,
  } satisfies CreateIssueCommentByIDRequest;

  try {
    const data = await api.createIssueCommentByID(body);
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
| **issueId** | `string` |  | [Defaults to `undefined`] |
| **createIssueCommentBody** | [CreateIssueCommentBody](CreateIssueCommentBody.md) |  | |
| **silent** | `boolean` | do not notify subscribers | [Optional] [Defaults to `undefined`] |

### Return type

[**IssueComment**](IssueComment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | A successful response. |  -  |
| **0** | Both Client Errors (4xx) and Server Errors (5xx) are serialized into this scheme |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteIssueComment

> deleteIssueComment(issueCommentId, silent)

Delete Comment

Permanently deletes a comment from an issue. This action cannot be undone.

### Example

```ts
import {
  Configuration,
  IssuesCommentsApi,
} from '';
import type { DeleteIssueCommentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesCommentsApi(config);

  const body = {
    // string
    issueCommentId: issueCommentId_example,
    // boolean (optional)
    silent: true,
  } satisfies DeleteIssueCommentRequest;

  try {
    const data = await api.deleteIssueComment(body);
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
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | A successful response. |  -  |
| **0** | Both Client Errors (4xx) and Server Errors (5xx) are serialized into this scheme |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueComment

> IssueComment getIssueComment(issueCommentId)

Get Comment

### Example

```ts
import {
  Configuration,
  IssuesCommentsApi,
} from '';
import type { GetIssueCommentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesCommentsApi(config);

  const body = {
    // string
    issueCommentId: issueCommentId_example,
  } satisfies GetIssueCommentRequest;

  try {
    const data = await api.getIssueComment(body);
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

### Return type

[**IssueComment**](IssueComment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | Both Client Errors (4xx) and Server Errors (5xx) are serialized into this scheme |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listIssueComments

> ListIssueCommentsResponse listIssueComments(orgSlug, repoSlug, issueSlug, pageSize, pageToken, sortBy)

List Comments

Retrieves comments for an issue

### Example

```ts
import {
  Configuration,
  IssuesCommentsApi,
} from '';
import type { ListIssueCommentsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesCommentsApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    issueSlug: issueSlug_example,
    // string | The maximum number of issues to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
    // string | Ordering options: comma separated list of fields. For example: \"name, created_at\" Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"name, -created_at\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. (optional)
    sortBy: sortBy_example,
  } satisfies ListIssueCommentsRequest;

  try {
    const data = await api.listIssueComments(body);
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
| **orgSlug** | `string` |  | [Defaults to `undefined`] |
| **repoSlug** | `string` |  | [Defaults to `undefined`] |
| **issueSlug** | `string` |  | [Defaults to `undefined`] |
| **pageSize** | `string` | The maximum number of issues to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. For example: \&quot;name, created_at\&quot; Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;name, -created_at\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListIssueCommentsResponse**](ListIssueCommentsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | Both Client Errors (4xx) and Server Errors (5xx) are serialized into this scheme |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listIssueCommentsByID

> ListIssueCommentsResponse listIssueCommentsByID(issueId, pageSize, pageToken, sortBy)

List Comments (by ID)

Retrieves comments for an issue

### Example

```ts
import {
  Configuration,
  IssuesCommentsApi,
} from '';
import type { ListIssueCommentsByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesCommentsApi(config);

  const body = {
    // string
    issueId: issueId_example,
    // string | The maximum number of issues to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
    // string | Ordering options: comma separated list of fields. For example: \"name, created_at\" Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"name, -created_at\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. (optional)
    sortBy: sortBy_example,
  } satisfies ListIssueCommentsByIDRequest;

  try {
    const data = await api.listIssueCommentsByID(body);
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
| **issueId** | `string` |  | [Defaults to `undefined`] |
| **pageSize** | `string` | The maximum number of issues to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. For example: \&quot;name, created_at\&quot; Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;name, -created_at\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListIssueCommentsResponse**](ListIssueCommentsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | Both Client Errors (4xx) and Server Errors (5xx) are serialized into this scheme |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateIssueComment

> IssueComment updateIssueComment(issueCommentId, updateIssueCommentBody, silent)

Update Comment

Update a comment

### Example

```ts
import {
  Configuration,
  IssuesCommentsApi,
} from '';
import type { UpdateIssueCommentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesCommentsApi(config);

  const body = {
    // string
    issueCommentId: issueCommentId_example,
    // UpdateIssueCommentBody
    updateIssueCommentBody: ...,
    // boolean | do not notify subscribers (optional)
    silent: true,
  } satisfies UpdateIssueCommentRequest;

  try {
    const data = await api.updateIssueComment(body);
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
| **updateIssueCommentBody** | [UpdateIssueCommentBody](UpdateIssueCommentBody.md) |  | |
| **silent** | `boolean` | do not notify subscribers | [Optional] [Defaults to `undefined`] |

### Return type

[**IssueComment**](IssueComment.md)

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

