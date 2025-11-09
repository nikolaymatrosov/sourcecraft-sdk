# RepositoryPullRequestReviewersApi

All URIs are relative to *https://api.sourcecraft.tech*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**autoAssign**](RepositoryPullRequestReviewersApi.md#autoassign) | **POST** /repos/{org_slug}/{repo_slug}/pulls/{pull_request_slug}/reviewers/auto | Automatically assign reviewers to meet review requirements |
| [**autoAssignByID**](RepositoryPullRequestReviewersApi.md#autoassignbyid) | **POST** /pulls/id:{pull_request_id}/reviewers/auto | Automatically assign reviewers to meet review requirements (By ID) |
| [**listReviewers**](RepositoryPullRequestReviewersApi.md#listreviewers) | **GET** /repos/{org_slug}/{repo_slug}/pulls/{pull_request_slug}/reviewers | List Reviewers |
| [**listReviewersByID**](RepositoryPullRequestReviewersApi.md#listreviewersbyid) | **GET** /pulls/id:{pull_request_id}/reviewers | List Reviewers (By ID) |
| [**setDecision**](RepositoryPullRequestReviewersApi.md#setdecision) | **POST** /repos/{org_slug}/{repo_slug}/pulls/{pull_request_slug}/decision | Set Decision |
| [**setDecisionByID**](RepositoryPullRequestReviewersApi.md#setdecisionbyid) | **POST** /pulls/id:{pull_request_id}/decision | Set Decision (By ID) |
| [**updateReviewers**](RepositoryPullRequestReviewersApi.md#updatereviewers) | **POST** /repos/{org_slug}/{repo_slug}/pulls/{pull_request_slug}/reviewers | Update Reviewers |
| [**updateReviewersByID**](RepositoryPullRequestReviewersApi.md#updatereviewersbyid) | **POST** /pulls/id:{pull_request_id}/reviewers | Update Reviewers (By ID) |



## autoAssign

> AutoAssignResponse autoAssign(orgSlug, repoSlug, pullRequestSlug, autoAssignBody, pullRequestId)

Automatically assign reviewers to meet review requirements

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestReviewersApi,
} from '';
import type { AutoAssignRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestReviewersApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    pullRequestSlug: pullRequestSlug_example,
    // AutoAssignBody
    autoAssignBody: ...,
    // string (optional)
    pullRequestId: pullRequestId_example,
  } satisfies AutoAssignRequest;

  try {
    const data = await api.autoAssign(body);
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
| **autoAssignBody** | [AutoAssignBody](AutoAssignBody.md) |  | |
| **pullRequestId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**AutoAssignResponse**](AutoAssignResponse.md)

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


## autoAssignByID

> AutoAssignResponse autoAssignByID(pullRequestId, autoAssignBody, pullRequestSlug)

Automatically assign reviewers to meet review requirements (By ID)

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestReviewersApi,
} from '';
import type { AutoAssignByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestReviewersApi(config);

  const body = {
    // string
    pullRequestId: pullRequestId_example,
    // AutoAssignBody
    autoAssignBody: ...,
    // string (optional)
    pullRequestSlug: pullRequestSlug_example,
  } satisfies AutoAssignByIDRequest;

  try {
    const data = await api.autoAssignByID(body);
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
| **autoAssignBody** | [AutoAssignBody](AutoAssignBody.md) |  | |
| **pullRequestSlug** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**AutoAssignResponse**](AutoAssignResponse.md)

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


## listReviewers

> ListReviewersResponse listReviewers(orgSlug, repoSlug, pullRequestSlug, pullRequestId, pageSize, pageToken, sortBy)

List Reviewers

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestReviewersApi,
} from '';
import type { ListReviewersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestReviewersApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    pullRequestSlug: pullRequestSlug_example,
    // string (optional)
    pullRequestId: pullRequestId_example,
    // string | The maximum number of reviewers to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
    // string | Ordering options: comma separated list of fields. For example: \"name, created_at\" Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"name, -created_at\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent.  Available columns: created_at, decision (optional)
    sortBy: sortBy_example,
  } satisfies ListReviewersRequest;

  try {
    const data = await api.listReviewers(body);
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
| **pageSize** | `string` | The maximum number of reviewers to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. For example: \&quot;name, created_at\&quot; Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;name, -created_at\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent.  Available columns: created_at, decision | [Optional] [Defaults to `undefined`] |

### Return type

[**ListReviewersResponse**](ListReviewersResponse.md)

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


## listReviewersByID

> ListReviewersResponse listReviewersByID(pullRequestId, pullRequestSlug, pageSize, pageToken, sortBy)

List Reviewers (By ID)

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestReviewersApi,
} from '';
import type { ListReviewersByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestReviewersApi(config);

  const body = {
    // string
    pullRequestId: pullRequestId_example,
    // string (optional)
    pullRequestSlug: pullRequestSlug_example,
    // string | The maximum number of reviewers to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
    // string | Ordering options: comma separated list of fields. For example: \"name, created_at\" Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"name, -created_at\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent.  Available columns: created_at, decision (optional)
    sortBy: sortBy_example,
  } satisfies ListReviewersByIDRequest;

  try {
    const data = await api.listReviewersByID(body);
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
| **pageSize** | `string` | The maximum number of reviewers to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. For example: \&quot;name, created_at\&quot; Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;name, -created_at\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent.  Available columns: created_at, decision | [Optional] [Defaults to `undefined`] |

### Return type

[**ListReviewersResponse**](ListReviewersResponse.md)

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


## setDecision

> SetDecisionResponse setDecision(orgSlug, repoSlug, pullRequestSlug, setDecisionBody, pullRequestId)

Set Decision

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestReviewersApi,
} from '';
import type { SetDecisionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestReviewersApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    pullRequestSlug: pullRequestSlug_example,
    // SetDecisionBody
    setDecisionBody: ...,
    // string (optional)
    pullRequestId: pullRequestId_example,
  } satisfies SetDecisionRequest;

  try {
    const data = await api.setDecision(body);
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
| **setDecisionBody** | [SetDecisionBody](SetDecisionBody.md) |  | |
| **pullRequestId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**SetDecisionResponse**](SetDecisionResponse.md)

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


## setDecisionByID

> SetDecisionResponse setDecisionByID(pullRequestId, setDecisionBody, pullRequestSlug)

Set Decision (By ID)

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestReviewersApi,
} from '';
import type { SetDecisionByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestReviewersApi(config);

  const body = {
    // string
    pullRequestId: pullRequestId_example,
    // SetDecisionBody
    setDecisionBody: ...,
    // string (optional)
    pullRequestSlug: pullRequestSlug_example,
  } satisfies SetDecisionByIDRequest;

  try {
    const data = await api.setDecisionByID(body);
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
| **setDecisionBody** | [SetDecisionBody](SetDecisionBody.md) |  | |
| **pullRequestSlug** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**SetDecisionResponse**](SetDecisionResponse.md)

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


## updateReviewers

> UpdateReviewersResponse updateReviewers(orgSlug, repoSlug, pullRequestSlug, updateReviewersBody, pullRequestId)

Update Reviewers

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestReviewersApi,
} from '';
import type { UpdateReviewersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestReviewersApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    pullRequestSlug: pullRequestSlug_example,
    // UpdateReviewersBody
    updateReviewersBody: ...,
    // string (optional)
    pullRequestId: pullRequestId_example,
  } satisfies UpdateReviewersRequest;

  try {
    const data = await api.updateReviewers(body);
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
| **updateReviewersBody** | [UpdateReviewersBody](UpdateReviewersBody.md) |  | |
| **pullRequestId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**UpdateReviewersResponse**](UpdateReviewersResponse.md)

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


## updateReviewersByID

> UpdateReviewersResponse updateReviewersByID(pullRequestId, updateReviewersBody, pullRequestSlug)

Update Reviewers (By ID)

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestReviewersApi,
} from '';
import type { UpdateReviewersByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestReviewersApi(config);

  const body = {
    // string
    pullRequestId: pullRequestId_example,
    // UpdateReviewersBody
    updateReviewersBody: ...,
    // string (optional)
    pullRequestSlug: pullRequestSlug_example,
  } satisfies UpdateReviewersByIDRequest;

  try {
    const data = await api.updateReviewersByID(body);
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
| **updateReviewersBody** | [UpdateReviewersBody](UpdateReviewersBody.md) |  | |
| **pullRequestSlug** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**UpdateReviewersResponse**](UpdateReviewersResponse.md)

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

