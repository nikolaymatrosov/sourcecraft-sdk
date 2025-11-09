# RepositoryPullRequestApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPullRequest**](RepositoryPullRequestApi.md#createpullrequest) | **POST** /repos/{org_slug}/{repo_slug}/pulls | Create PullRequest in Repository |
| [**createPullRequestByID**](RepositoryPullRequestApi.md#createpullrequestbyid) | **POST** /repos/id:{repo_id}/pulls | Create PullRequest in Repository (By Repo ID) |
| [**discardPullRequest**](RepositoryPullRequestApi.md#discardpullrequest) | **POST** /repos/{org_slug}/{repo_slug}/pulls/{pull_request_slug}/discard | Discard PullRequest |
| [**discardPullRequestByID**](RepositoryPullRequestApi.md#discardpullrequestbyid) | **POST** /pulls/id:{pull_request_id}/discard | Discard PullRequest (By ID) |
| [**draftPullRequest**](RepositoryPullRequestApi.md#draftpullrequest) | **POST** /repos/{org_slug}/{repo_slug}/pulls/{pull_request_slug}/draft | Draft PullRequest |
| [**draftPullRequestByID**](RepositoryPullRequestApi.md#draftpullrequestbyid) | **POST** /pulls/id:{pull_request_id}/draft | Draft PullRequest (By ID) |
| [**getPullRequest**](RepositoryPullRequestApi.md#getpullrequest) | **GET** /repos/{org_slug}/{repo_slug}/pulls/{pull_request_slug} | Get PullRequest |
| [**getPullRequestByID**](RepositoryPullRequestApi.md#getpullrequestbyid) | **GET** /pulls/id:{pull_request_id} | Get PullRequest (By ID) |
| [**listRepositoryPullRequests**](RepositoryPullRequestApi.md#listrepositorypullrequests) | **GET** /repos/{org_slug}/{repo_slug}/pulls | List Repository Pull Requests |
| [**listRepositoryPullRequestsByID**](RepositoryPullRequestApi.md#listrepositorypullrequestsbyid) | **GET** /repos/id:{repo_id}/pulls | List Repository Pull Requests (By Repo ID) |
| [**publishPullRequest**](RepositoryPullRequestApi.md#publishpullrequest) | **POST** /repos/{org_slug}/{repo_slug}/pulls/{pull_request_slug}/publish | Publish PullRequest (change status to open) |
| [**publishPullRequestByID**](RepositoryPullRequestApi.md#publishpullrequestbyid) | **POST** /pulls/id:{pull_request_id}/publish | Publish PullRequest (By ID) |
| [**reopenPullRequest**](RepositoryPullRequestApi.md#reopenpullrequest) | **POST** /repos/{org_slug}/{repo_slug}/pulls/{pull_request_slug}/reopen | Reopen PullRequest |
| [**reopenPullRequestByID**](RepositoryPullRequestApi.md#reopenpullrequestbyid) | **POST** /pulls/id:{pull_request_id}/reopen | Reopen PullRequest (By ID) |
| [**updatePullRequest**](RepositoryPullRequestApi.md#updatepullrequest) | **PATCH** /repos/{org_slug}/{repo_slug}/pulls/{pull_request_slug} | Update PullRequest |
| [**updatePullRequestByID**](RepositoryPullRequestApi.md#updatepullrequestbyid) | **PATCH** /pulls/id:{pull_request_id} | Update PullRequest (By ID) |



## createPullRequest

> PullRequest createPullRequest(orgSlug, repoSlug, createPullRequestBody, silent)

Create PullRequest in Repository

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestApi,
} from '';
import type { CreatePullRequestRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // CreatePullRequestBody
    createPullRequestBody: ...,
    // boolean (optional)
    silent: true,
  } satisfies CreatePullRequestRequest;

  try {
    const data = await api.createPullRequest(body);
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
| **createPullRequestBody** | [CreatePullRequestBody](CreatePullRequestBody.md) |  | |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PullRequest**](PullRequest.md)

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


## createPullRequestByID

> PullRequest createPullRequestByID(repoId, createPullRequestBody, silent)

Create PullRequest in Repository (By Repo ID)

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestApi,
} from '';
import type { CreatePullRequestByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // CreatePullRequestBody
    createPullRequestBody: ...,
    // boolean (optional)
    silent: true,
  } satisfies CreatePullRequestByIDRequest;

  try {
    const data = await api.createPullRequestByID(body);
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
| **repoId** | `string` |  | [Defaults to `undefined`] |
| **createPullRequestBody** | [CreatePullRequestBody](CreatePullRequestBody.md) |  | |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PullRequest**](PullRequest.md)

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


## discardPullRequest

> PullRequest discardPullRequest(orgSlug, repoSlug, pullRequestSlug, pullRequestId, silent)

Discard PullRequest

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestApi,
} from '';
import type { DiscardPullRequestRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    pullRequestSlug: pullRequestSlug_example,
    // string (optional)
    pullRequestId: pullRequestId_example,
    // boolean (optional)
    silent: true,
  } satisfies DiscardPullRequestRequest;

  try {
    const data = await api.discardPullRequest(body);
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
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PullRequest**](PullRequest.md)

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


## discardPullRequestByID

> PullRequest discardPullRequestByID(pullRequestId, pullRequestSlug, silent)

Discard PullRequest (By ID)

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestApi,
} from '';
import type { DiscardPullRequestByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestApi(config);

  const body = {
    // string
    pullRequestId: pullRequestId_example,
    // string (optional)
    pullRequestSlug: pullRequestSlug_example,
    // boolean (optional)
    silent: true,
  } satisfies DiscardPullRequestByIDRequest;

  try {
    const data = await api.discardPullRequestByID(body);
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
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PullRequest**](PullRequest.md)

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


## draftPullRequest

> PullRequest draftPullRequest(orgSlug, repoSlug, pullRequestSlug, pullRequestId, silent)

Draft PullRequest

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestApi,
} from '';
import type { DraftPullRequestRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    pullRequestSlug: pullRequestSlug_example,
    // string (optional)
    pullRequestId: pullRequestId_example,
    // boolean (optional)
    silent: true,
  } satisfies DraftPullRequestRequest;

  try {
    const data = await api.draftPullRequest(body);
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
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PullRequest**](PullRequest.md)

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


## draftPullRequestByID

> PullRequest draftPullRequestByID(pullRequestId, pullRequestSlug, silent)

Draft PullRequest (By ID)

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestApi,
} from '';
import type { DraftPullRequestByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestApi(config);

  const body = {
    // string
    pullRequestId: pullRequestId_example,
    // string (optional)
    pullRequestSlug: pullRequestSlug_example,
    // boolean (optional)
    silent: true,
  } satisfies DraftPullRequestByIDRequest;

  try {
    const data = await api.draftPullRequestByID(body);
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
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PullRequest**](PullRequest.md)

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


## getPullRequest

> PullRequest getPullRequest(orgSlug, repoSlug, pullRequestSlug, pullRequestId)

Get PullRequest

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestApi,
} from '';
import type { GetPullRequestRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    pullRequestSlug: pullRequestSlug_example,
    // string (optional)
    pullRequestId: pullRequestId_example,
  } satisfies GetPullRequestRequest;

  try {
    const data = await api.getPullRequest(body);
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

### Return type

[**PullRequest**](PullRequest.md)

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


## getPullRequestByID

> PullRequest getPullRequestByID(pullRequestId, pullRequestSlug)

Get PullRequest (By ID)

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestApi,
} from '';
import type { GetPullRequestByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestApi(config);

  const body = {
    // string
    pullRequestId: pullRequestId_example,
    // string (optional)
    pullRequestSlug: pullRequestSlug_example,
  } satisfies GetPullRequestByIDRequest;

  try {
    const data = await api.getPullRequestByID(body);
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

### Return type

[**PullRequest**](PullRequest.md)

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


## listRepositoryPullRequests

> ListRepositoryPullRequestsResponse listRepositoryPullRequests(orgSlug, repoSlug, pageSize, pageToken, sortBy)

List Repository Pull Requests

Retrieves all pull requests from an repository

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestApi,
} from '';
import type { ListRepositoryPullRequestsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string | The maximum number of pull requests to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
    // string | Ordering options: comma separated list of fields. For example: \"name, created_at\" Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"name, -created_at\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. Available fields: title, created_at, updated_at (optional)
    sortBy: sortBy_example,
  } satisfies ListRepositoryPullRequestsRequest;

  try {
    const data = await api.listRepositoryPullRequests(body);
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
| **pageSize** | `string` | The maximum number of pull requests to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. For example: \&quot;name, created_at\&quot; Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;name, -created_at\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. Available fields: title, created_at, updated_at | [Optional] [Defaults to `undefined`] |

### Return type

[**ListRepositoryPullRequestsResponse**](ListRepositoryPullRequestsResponse.md)

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


## listRepositoryPullRequestsByID

> ListRepositoryPullRequestsResponse listRepositoryPullRequestsByID(repoId, pageSize, pageToken, sortBy)

List Repository Pull Requests (By Repo ID)

Retrieves all pull requests from an repository

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestApi,
} from '';
import type { ListRepositoryPullRequestsByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // string | The maximum number of pull requests to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
    // string | Ordering options: comma separated list of fields. For example: \"name, created_at\" Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"name, -created_at\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. Available fields: title, created_at, updated_at (optional)
    sortBy: sortBy_example,
  } satisfies ListRepositoryPullRequestsByIDRequest;

  try {
    const data = await api.listRepositoryPullRequestsByID(body);
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
| **repoId** | `string` |  | [Defaults to `undefined`] |
| **pageSize** | `string` | The maximum number of pull requests to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. For example: \&quot;name, created_at\&quot; Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;name, -created_at\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. Available fields: title, created_at, updated_at | [Optional] [Defaults to `undefined`] |

### Return type

[**ListRepositoryPullRequestsResponse**](ListRepositoryPullRequestsResponse.md)

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


## publishPullRequest

> PullRequest publishPullRequest(orgSlug, repoSlug, pullRequestSlug, pullRequestId, silent)

Publish PullRequest (change status to open)

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestApi,
} from '';
import type { PublishPullRequestRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    pullRequestSlug: pullRequestSlug_example,
    // string (optional)
    pullRequestId: pullRequestId_example,
    // boolean (optional)
    silent: true,
  } satisfies PublishPullRequestRequest;

  try {
    const data = await api.publishPullRequest(body);
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
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PullRequest**](PullRequest.md)

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


## publishPullRequestByID

> PullRequest publishPullRequestByID(pullRequestId, pullRequestSlug, silent)

Publish PullRequest (By ID)

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestApi,
} from '';
import type { PublishPullRequestByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestApi(config);

  const body = {
    // string
    pullRequestId: pullRequestId_example,
    // string (optional)
    pullRequestSlug: pullRequestSlug_example,
    // boolean (optional)
    silent: true,
  } satisfies PublishPullRequestByIDRequest;

  try {
    const data = await api.publishPullRequestByID(body);
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
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PullRequest**](PullRequest.md)

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


## reopenPullRequest

> PullRequest reopenPullRequest(orgSlug, repoSlug, pullRequestSlug, pullRequestId, silent)

Reopen PullRequest

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestApi,
} from '';
import type { ReopenPullRequestRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    pullRequestSlug: pullRequestSlug_example,
    // string (optional)
    pullRequestId: pullRequestId_example,
    // boolean (optional)
    silent: true,
  } satisfies ReopenPullRequestRequest;

  try {
    const data = await api.reopenPullRequest(body);
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
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PullRequest**](PullRequest.md)

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


## reopenPullRequestByID

> PullRequest reopenPullRequestByID(pullRequestId, pullRequestSlug, silent)

Reopen PullRequest (By ID)

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestApi,
} from '';
import type { ReopenPullRequestByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestApi(config);

  const body = {
    // string
    pullRequestId: pullRequestId_example,
    // string (optional)
    pullRequestSlug: pullRequestSlug_example,
    // boolean (optional)
    silent: true,
  } satisfies ReopenPullRequestByIDRequest;

  try {
    const data = await api.reopenPullRequestByID(body);
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
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PullRequest**](PullRequest.md)

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


## updatePullRequest

> PullRequest updatePullRequest(orgSlug, repoSlug, pullRequestSlug, updatePullRequestBody, pullRequestId, silent)

Update PullRequest

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestApi,
} from '';
import type { UpdatePullRequestRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    pullRequestSlug: pullRequestSlug_example,
    // UpdatePullRequestBody
    updatePullRequestBody: ...,
    // string (optional)
    pullRequestId: pullRequestId_example,
    // boolean (optional)
    silent: true,
  } satisfies UpdatePullRequestRequest;

  try {
    const data = await api.updatePullRequest(body);
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
| **updatePullRequestBody** | [UpdatePullRequestBody](UpdatePullRequestBody.md) |  | |
| **pullRequestId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PullRequest**](PullRequest.md)

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


## updatePullRequestByID

> PullRequest updatePullRequestByID(pullRequestId, updatePullRequestBody, pullRequestSlug, silent)

Update PullRequest (By ID)

### Example

```ts
import {
  Configuration,
  RepositoryPullRequestApi,
} from '';
import type { UpdatePullRequestByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryPullRequestApi(config);

  const body = {
    // string
    pullRequestId: pullRequestId_example,
    // UpdatePullRequestBody
    updatePullRequestBody: ...,
    // string (optional)
    pullRequestSlug: pullRequestSlug_example,
    // boolean (optional)
    silent: true,
  } satisfies UpdatePullRequestByIDRequest;

  try {
    const data = await api.updatePullRequestByID(body);
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
| **updatePullRequestBody** | [UpdatePullRequestBody](UpdatePullRequestBody.md) |  | |
| **pullRequestSlug** | `string` |  | [Optional] [Defaults to `undefined`] |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PullRequest**](PullRequest.md)

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

