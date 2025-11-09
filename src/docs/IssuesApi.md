# IssuesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createIssue**](IssuesApi.md#createissue) | **POST** /repos/{org_slug}/{repo_slug}/issues | Create Issue in Repository |
| [**createIssueByID**](IssuesApi.md#createissuebyid) | **POST** /repos/id:{repo_id}/issues | Create Issue in Repository (By Repo ID) |
| [**deleteIssue**](IssuesApi.md#deleteissue) | **DELETE** /repos/{org_slug}/{repo_slug}/issues/{issue_slug} | Delete Issue |
| [**deleteIssueByID**](IssuesApi.md#deleteissuebyid) | **DELETE** /issues/id:{issue_id} | Delete Issue (By Issue ID) |
| [**getIssue**](IssuesApi.md#getissue) | **GET** /repos/{org_slug}/{repo_slug}/issues/{issue_slug} | Get Issue |
| [**getIssueByID**](IssuesApi.md#getissuebyid) | **GET** /issues/id:{issue_id} | Get Issue (By ID) |
| [**listIssuesAssignedToAuthenticatedUser**](IssuesApi.md#listissuesassignedtoauthenticateduser) | **GET** /me/issues | My Issues |
| [**listRepositoryIssues**](IssuesApi.md#listrepositoryissues) | **GET** /repos/{org_slug}/{repo_slug}/issues | List Repository Issues |
| [**listRepositoryIssuesByID**](IssuesApi.md#listrepositoryissuesbyid) | **GET** /repos/id:{repo_id}/issues | List Repository Issues (By Repo ID) |
| [**updateIssue**](IssuesApi.md#updateissue) | **PATCH** /repos/{org_slug}/{repo_slug}/issues/{issue_slug} | Update Issue |
| [**updateIssueByID**](IssuesApi.md#updateissuebyid) | **PATCH** /issues/id:{issue_id} | Update Issue (By Issue ID) |



## createIssue

> Issue createIssue(orgSlug, repoSlug, createIssueBody, silent)

Create Issue in Repository

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from '';
import type { CreateIssueRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // CreateIssueBody
    createIssueBody: ...,
    // boolean | do not notify subscribers (optional)
    silent: true,
  } satisfies CreateIssueRequest;

  try {
    const data = await api.createIssue(body);
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
| **createIssueBody** | [CreateIssueBody](CreateIssueBody.md) |  | |
| **silent** | `boolean` | do not notify subscribers | [Optional] [Defaults to `undefined`] |

### Return type

[**Issue**](Issue.md)

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


## createIssueByID

> Issue createIssueByID(repoId, createIssueBody, silent)

Create Issue in Repository (By Repo ID)

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from '';
import type { CreateIssueByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // CreateIssueBody
    createIssueBody: ...,
    // boolean | do not notify subscribers (optional)
    silent: true,
  } satisfies CreateIssueByIDRequest;

  try {
    const data = await api.createIssueByID(body);
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
| **createIssueBody** | [CreateIssueBody](CreateIssueBody.md) |  | |
| **silent** | `boolean` | do not notify subscribers | [Optional] [Defaults to `undefined`] |

### Return type

[**Issue**](Issue.md)

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


## deleteIssue

> object deleteIssue(orgSlug, repoSlug, issueSlug, silent)

Delete Issue

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from '';
import type { DeleteIssueRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    issueSlug: issueSlug_example,
    // boolean | do not notify subscribers (optional)
    silent: true,
  } satisfies DeleteIssueRequest;

  try {
    const data = await api.deleteIssue(body);
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
| **silent** | `boolean` | do not notify subscribers | [Optional] [Defaults to `undefined`] |

### Return type

**object**

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


## deleteIssueByID

> object deleteIssueByID(issueId, silent)

Delete Issue (By Issue ID)

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from '';
import type { DeleteIssueByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesApi(config);

  const body = {
    // string
    issueId: issueId_example,
    // boolean | do not notify subscribers (optional)
    silent: true,
  } satisfies DeleteIssueByIDRequest;

  try {
    const data = await api.deleteIssueByID(body);
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
| **silent** | `boolean` | do not notify subscribers | [Optional] [Defaults to `undefined`] |

### Return type

**object**

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


## getIssue

> Issue getIssue(orgSlug, repoSlug, issueSlug)

Get Issue

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from '';
import type { GetIssueRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    issueSlug: issueSlug_example,
  } satisfies GetIssueRequest;

  try {
    const data = await api.getIssue(body);
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

### Return type

[**Issue**](Issue.md)

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


## getIssueByID

> Issue getIssueByID(issueId)

Get Issue (By ID)

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from '';
import type { GetIssueByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesApi(config);

  const body = {
    // string
    issueId: issueId_example,
  } satisfies GetIssueByIDRequest;

  try {
    const data = await api.getIssueByID(body);
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

### Return type

[**Issue**](Issue.md)

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


## listIssuesAssignedToAuthenticatedUser

> ListIssuesAssignedToAuthenticatedUserResponse listIssuesAssignedToAuthenticatedUser(pageSize, pageToken, sortBy, filter)

My Issues

Returns a list of issues that are either assigned to or created by the currently authenticated user.

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from '';
import type { ListIssuesAssignedToAuthenticatedUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesApi(config);

  const body = {
    // string (optional)
    pageSize: pageSize_example,
    // string (optional)
    pageToken: pageToken_example,
    // string (optional)
    sortBy: sortBy_example,
    // string (optional)
    filter: filter_example,
  } satisfies ListIssuesAssignedToAuthenticatedUserRequest;

  try {
    const data = await api.listIssuesAssignedToAuthenticatedUser(body);
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
| **pageSize** | `string` |  | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` |  | [Optional] [Defaults to `undefined`] |
| **filter** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ListIssuesAssignedToAuthenticatedUserResponse**](ListIssuesAssignedToAuthenticatedUserResponse.md)

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


## listRepositoryIssues

> ListRepositoryIssuesResponse listRepositoryIssues(orgSlug, repoSlug, pageSize, pageToken, sortBy, filter)

List Repository Issues

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from '';
import type { ListRepositoryIssuesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string | The maximum number of issues to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
    // string | Ordering options: comma separated list of fields. For example: \"name, created_at\" Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"name, -created_at\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. (optional)
    sortBy: sortBy_example,
    // string | Filter using QL language (optional)
    filter: filter_example,
  } satisfies ListRepositoryIssuesRequest;

  try {
    const data = await api.listRepositoryIssues(body);
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
| **pageSize** | `string` | The maximum number of issues to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. For example: \&quot;name, created_at\&quot; Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;name, -created_at\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. | [Optional] [Defaults to `undefined`] |
| **filter** | `string` | Filter using QL language | [Optional] [Defaults to `undefined`] |

### Return type

[**ListRepositoryIssuesResponse**](ListRepositoryIssuesResponse.md)

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


## listRepositoryIssuesByID

> ListRepositoryIssuesResponse listRepositoryIssuesByID(repoId, pageSize, pageToken, sortBy, filter)

List Repository Issues (By Repo ID)

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from '';
import type { ListRepositoryIssuesByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // string | The maximum number of issues to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
    // string | Ordering options: comma separated list of fields. For example: \"name, created_at\" Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"name, -created_at\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. (optional)
    sortBy: sortBy_example,
    // string | Filter using QL language (optional)
    filter: filter_example,
  } satisfies ListRepositoryIssuesByIDRequest;

  try {
    const data = await api.listRepositoryIssuesByID(body);
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
| **pageSize** | `string` | The maximum number of issues to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. For example: \&quot;name, created_at\&quot; Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;name, -created_at\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. | [Optional] [Defaults to `undefined`] |
| **filter** | `string` | Filter using QL language | [Optional] [Defaults to `undefined`] |

### Return type

[**ListRepositoryIssuesResponse**](ListRepositoryIssuesResponse.md)

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


## updateIssue

> Issue updateIssue(orgSlug, repoSlug, issueSlug, updateIssueBody, silent)

Update Issue

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from '';
import type { UpdateIssueRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    issueSlug: issueSlug_example,
    // UpdateIssueBody
    updateIssueBody: ...,
    // boolean (optional)
    silent: true,
  } satisfies UpdateIssueRequest;

  try {
    const data = await api.updateIssue(body);
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
| **updateIssueBody** | [UpdateIssueBody](UpdateIssueBody.md) |  | |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Issue**](Issue.md)

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


## updateIssueByID

> Issue updateIssueByID(issueId, updateIssueBody, silent)

Update Issue (By Issue ID)

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from '';
import type { UpdateIssueByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesApi(config);

  const body = {
    // string
    issueId: issueId_example,
    // UpdateIssueBody
    updateIssueBody: ...,
    // boolean (optional)
    silent: true,
  } satisfies UpdateIssueByIDRequest;

  try {
    const data = await api.updateIssueByID(body);
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
| **updateIssueBody** | [UpdateIssueBody](UpdateIssueBody.md) |  | |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Issue**](Issue.md)

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

