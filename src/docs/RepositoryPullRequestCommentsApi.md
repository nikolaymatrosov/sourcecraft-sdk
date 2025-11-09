# RepositoryPullRequestCommentsApi

All URIs are relative to *https://api.sourcecraft.tech*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPullRequestComment**](RepositoryPullRequestCommentsApi.md#createpullrequestcomment) | **POST** /repos/{org_slug}/{repo_slug}/pulls/{pull_request_slug}/comments | Create comment |
| [**createPullRequestCommentByID**](RepositoryPullRequestCommentsApi.md#createpullrequestcommentbyid) | **POST** /pulls/id:{pull_request_id}/comments | Create comment (by PullRequest ID) |
| [**getPullRequestComment**](RepositoryPullRequestCommentsApi.md#getpullrequestcomment) | **GET** /pull_comments/id:{pull_request_comment_id} | Get Comment |
| [**listPullRequestComments**](RepositoryPullRequestCommentsApi.md#listpullrequestcomments) | **GET** /repos/{org_slug}/{repo_slug}/pulls/{pull_request_slug}/comments | List Comments |
| [**listPullRequestCommentsByID**](RepositoryPullRequestCommentsApi.md#listpullrequestcommentsbyid) | **GET** /pulls/id:{pull_request_id}/comments | List Comments (by ID) |



## createPullRequestComment

> PullRequestComment createPullRequestComment(orgSlug, repoSlug, pullRequestSlug, createPullRequestCommentBody, pullRequestId, silent)

Create comment

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestCommentsApi,
} from '';
import type { CreatePullRequestCommentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestCommentsApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    pullRequestSlug: pullRequestSlug_example,
    // CreatePullRequestCommentBody
    createPullRequestCommentBody: ...,
    // string (optional)
    pullRequestId: pullRequestId_example,
    // boolean | do not notify subscribers (optional)
    silent: true,
  } satisfies CreatePullRequestCommentRequest;

  try {
    const data = await api.createPullRequestComment(body);
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
| **pullRequestSlug** | `string` |  | [Defaults to `undefined`] |
| **createPullRequestCommentBody** | [CreatePullRequestCommentBody](CreatePullRequestCommentBody.md) |  | |
| **pullRequestId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **silent** | `boolean` | do not notify subscribers | [Optional] [Defaults to `undefined`] |

### Return type

[**PullRequestComment**](PullRequestComment.md)

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


## createPullRequestCommentByID

> PullRequestComment createPullRequestCommentByID(pullRequestId, createPullRequestCommentBody, pullRequestSlug, silent)

Create comment (by PullRequest ID)

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestCommentsApi,
} from '';
import type { CreatePullRequestCommentByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestCommentsApi(config);

  const body = {
    // string
    pullRequestId: pullRequestId_example,
    // CreatePullRequestCommentBody
    createPullRequestCommentBody: ...,
    // string (optional)
    pullRequestSlug: pullRequestSlug_example,
    // boolean | do not notify subscribers (optional)
    silent: true,
  } satisfies CreatePullRequestCommentByIDRequest;

  try {
    const data = await api.createPullRequestCommentByID(body);
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
| **pullRequestId** | `string` |  | [Defaults to `undefined`] |
| **createPullRequestCommentBody** | [CreatePullRequestCommentBody](CreatePullRequestCommentBody.md) |  | |
| **pullRequestSlug** | `string` |  | [Optional] [Defaults to `undefined`] |
| **silent** | `boolean` | do not notify subscribers | [Optional] [Defaults to `undefined`] |

### Return type

[**PullRequestComment**](PullRequestComment.md)

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


## getPullRequestComment

> PullRequestComment getPullRequestComment(pullRequestCommentId)

Get Comment

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestCommentsApi,
} from '';
import type { GetPullRequestCommentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestCommentsApi(config);

  const body = {
    // string
    pullRequestCommentId: pullRequestCommentId_example,
  } satisfies GetPullRequestCommentRequest;

  try {
    const data = await api.getPullRequestComment(body);
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
| **pullRequestCommentId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**PullRequestComment**](PullRequestComment.md)

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


## listPullRequestComments

> ListPullRequestCommentsResponse listPullRequestComments(orgSlug, repoSlug, pullRequestSlug, pullRequestId, iteration, onlyDrafts, pageSize, pageToken, sortBy)

List Comments

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestCommentsApi,
} from '';
import type { ListPullRequestCommentsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestCommentsApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    pullRequestSlug: pullRequestSlug_example,
    // string (optional)
    pullRequestId: pullRequestId_example,
    // string (optional)
    iteration: iteration_example,
    // boolean | Only drafts (unpublished) comments (optional)
    onlyDrafts: true,
    // string | The maximum number of comments to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
    // string | Ordering options: comma separated list of fields. For example: \"name, created_at\" Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"name, -created_at\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. Available fields: iteration, author_id, parent_id (optional)
    sortBy: sortBy_example,
  } satisfies ListPullRequestCommentsRequest;

  try {
    const data = await api.listPullRequestComments(body);
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
| **pullRequestSlug** | `string` |  | [Defaults to `undefined`] |
| **pullRequestId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **iteration** | `string` |  | [Optional] [Defaults to `undefined`] |
| **onlyDrafts** | `boolean` | Only drafts (unpublished) comments | [Optional] [Defaults to `undefined`] |
| **pageSize** | `string` | The maximum number of comments to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. For example: \&quot;name, created_at\&quot; Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;name, -created_at\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. Available fields: iteration, author_id, parent_id | [Optional] [Defaults to `undefined`] |

### Return type

[**ListPullRequestCommentsResponse**](ListPullRequestCommentsResponse.md)

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


## listPullRequestCommentsByID

> ListPullRequestCommentsResponse listPullRequestCommentsByID(pullRequestId, pullRequestSlug, iteration, onlyDrafts, pageSize, pageToken, sortBy)

List Comments (by ID)

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestCommentsApi,
} from '';
import type { ListPullRequestCommentsByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestCommentsApi(config);

  const body = {
    // string
    pullRequestId: pullRequestId_example,
    // string (optional)
    pullRequestSlug: pullRequestSlug_example,
    // string (optional)
    iteration: iteration_example,
    // boolean | Only drafts (unpublished) comments (optional)
    onlyDrafts: true,
    // string | The maximum number of comments to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
    // string | Ordering options: comma separated list of fields. For example: \"name, created_at\" Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"name, -created_at\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. Available fields: iteration, author_id, parent_id (optional)
    sortBy: sortBy_example,
  } satisfies ListPullRequestCommentsByIDRequest;

  try {
    const data = await api.listPullRequestCommentsByID(body);
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
| **pullRequestId** | `string` |  | [Defaults to `undefined`] |
| **pullRequestSlug** | `string` |  | [Optional] [Defaults to `undefined`] |
| **iteration** | `string` |  | [Optional] [Defaults to `undefined`] |
| **onlyDrafts** | `boolean` | Only drafts (unpublished) comments | [Optional] [Defaults to `undefined`] |
| **pageSize** | `string` | The maximum number of comments to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. For example: \&quot;name, created_at\&quot; Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;name, -created_at\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. Available fields: iteration, author_id, parent_id | [Optional] [Defaults to `undefined`] |

### Return type

[**ListPullRequestCommentsResponse**](ListPullRequestCommentsResponse.md)

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

