# IssuesLinkedPRsApi

All URIs are relative to *https://api.sourcecraft.tech*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addLinkedPRs**](IssuesLinkedPRsApi.md#addlinkedprs) | **POST** /repos/{org_slug}/{repo_slug}/issues/{issue_slug}/linked_prs | Add Linked PRs |
| [**addLinkedPRsByID**](IssuesLinkedPRsApi.md#addlinkedprsbyid) | **POST** /issues/id:{issue_id}/linked_prs | Add linked PRs (By ID) |
| [**getLinkedPRs**](IssuesLinkedPRsApi.md#getlinkedprs) | **GET** /repos/{org_slug}/{repo_slug}/issues/{issue_slug}/linked_prs | List Linked PRs |
| [**getLinkedPRsByID**](IssuesLinkedPRsApi.md#getlinkedprsbyid) | **GET** /issues/id:{issue_id}/linked_prs | List Linked PRs (By Issue ID) |
| [**removeLinkedPRs**](IssuesLinkedPRsApi.md#removelinkedprs) | **DELETE** /repos/{org_slug}/{repo_slug}/issues/{issue_slug}/linked_prs | Remove linked PRs |
| [**removeLinkedPRsByID**](IssuesLinkedPRsApi.md#removelinkedprsbyid) | **DELETE** /issues/id:{issue_id}/linked_prs | Remove linked PRs (by ID) |



## addLinkedPRs

> IssueLinkedPRsResponse addLinkedPRs(orgSlug, repoSlug, issueSlug, modifyPullRequestCollectionRequest, silent)

Add Linked PRs

Associates one or more pull requests with a specific issue. Returns resulting collection

### Example

```ts
import {
  Configuration,
  IssuesLinkedPRsApi,
} from '';
import type { AddLinkedPRsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLinkedPRsApi(config);

  const body = {
    // string | depending on which route is used, either parent or repoId is filled
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    issueSlug: issueSlug_example,
    // ModifyPullRequestCollectionRequest
    modifyPullRequestCollectionRequest: ...,
    // boolean | creation options (query) (optional)
    silent: true,
  } satisfies AddLinkedPRsRequest;

  try {
    const data = await api.addLinkedPRs(body);
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
| **orgSlug** | `string` | depending on which route is used, either parent or repoId is filled | [Defaults to `undefined`] |
| **repoSlug** | `string` |  | [Defaults to `undefined`] |
| **issueSlug** | `string` |  | [Defaults to `undefined`] |
| **modifyPullRequestCollectionRequest** | [ModifyPullRequestCollectionRequest](ModifyPullRequestCollectionRequest.md) |  | |
| **silent** | `boolean` | creation options (query) | [Optional] [Defaults to `undefined`] |

### Return type

[**IssueLinkedPRsResponse**](IssueLinkedPRsResponse.md)

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


## addLinkedPRsByID

> IssueLinkedPRsResponse addLinkedPRsByID(issueId, modifyPullRequestCollectionRequest, silent)

Add linked PRs (By ID)

Associates one or more pull requests with a specific issue. Returns resulting collection

### Example

```ts
import {
  Configuration,
  IssuesLinkedPRsApi,
} from '';
import type { AddLinkedPRsByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLinkedPRsApi(config);

  const body = {
    // string
    issueId: issueId_example,
    // ModifyPullRequestCollectionRequest
    modifyPullRequestCollectionRequest: ...,
    // boolean | creation options (query) (optional)
    silent: true,
  } satisfies AddLinkedPRsByIDRequest;

  try {
    const data = await api.addLinkedPRsByID(body);
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
| **modifyPullRequestCollectionRequest** | [ModifyPullRequestCollectionRequest](ModifyPullRequestCollectionRequest.md) |  | |
| **silent** | `boolean` | creation options (query) | [Optional] [Defaults to `undefined`] |

### Return type

[**IssueLinkedPRsResponse**](IssueLinkedPRsResponse.md)

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


## getLinkedPRs

> IssueLinkedPRsResponse getLinkedPRs(orgSlug, repoSlug, issueSlug)

List Linked PRs

Retrieves all pull requests that are linked to the specified issue.

### Example

```ts
import {
  Configuration,
  IssuesLinkedPRsApi,
} from '';
import type { GetLinkedPRsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLinkedPRsApi(config);

  const body = {
    // string | depending on which route is used, either parent or repoId is filled
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    issueSlug: issueSlug_example,
  } satisfies GetLinkedPRsRequest;

  try {
    const data = await api.getLinkedPRs(body);
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
| **orgSlug** | `string` | depending on which route is used, either parent or repoId is filled | [Defaults to `undefined`] |
| **repoSlug** | `string` |  | [Defaults to `undefined`] |
| **issueSlug** | `string` |  | [Defaults to `undefined`] |

### Return type

[**IssueLinkedPRsResponse**](IssueLinkedPRsResponse.md)

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


## getLinkedPRsByID

> IssueLinkedPRsResponse getLinkedPRsByID(issueId)

List Linked PRs (By Issue ID)

Retrieves all pull requests that are linked to the specified issue.

### Example

```ts
import {
  Configuration,
  IssuesLinkedPRsApi,
} from '';
import type { GetLinkedPRsByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLinkedPRsApi(config);

  const body = {
    // string
    issueId: issueId_example,
  } satisfies GetLinkedPRsByIDRequest;

  try {
    const data = await api.getLinkedPRsByID(body);
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

[**IssueLinkedPRsResponse**](IssueLinkedPRsResponse.md)

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


## removeLinkedPRs

> IssueLinkedPRsResponse removeLinkedPRs(orgSlug, repoSlug, issueSlug, modifyPullRequestCollectionRequest, silent)

Remove linked PRs

Removes one or more pull requests with a specific issue. Returns resulting collection

### Example

```ts
import {
  Configuration,
  IssuesLinkedPRsApi,
} from '';
import type { RemoveLinkedPRsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLinkedPRsApi(config);

  const body = {
    // string | depending on which route is used, either parent or repoId is filled
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    issueSlug: issueSlug_example,
    // ModifyPullRequestCollectionRequest
    modifyPullRequestCollectionRequest: ...,
    // boolean | creation options (query) (optional)
    silent: true,
  } satisfies RemoveLinkedPRsRequest;

  try {
    const data = await api.removeLinkedPRs(body);
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
| **orgSlug** | `string` | depending on which route is used, either parent or repoId is filled | [Defaults to `undefined`] |
| **repoSlug** | `string` |  | [Defaults to `undefined`] |
| **issueSlug** | `string` |  | [Defaults to `undefined`] |
| **modifyPullRequestCollectionRequest** | [ModifyPullRequestCollectionRequest](ModifyPullRequestCollectionRequest.md) |  | |
| **silent** | `boolean` | creation options (query) | [Optional] [Defaults to `undefined`] |

### Return type

[**IssueLinkedPRsResponse**](IssueLinkedPRsResponse.md)

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


## removeLinkedPRsByID

> IssueLinkedPRsResponse removeLinkedPRsByID(issueId, modifyPullRequestCollectionRequest, silent)

Remove linked PRs (by ID)

Removes one or more pull requests with a specific issue. Returns resulting collection

### Example

```ts
import {
  Configuration,
  IssuesLinkedPRsApi,
} from '';
import type { RemoveLinkedPRsByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLinkedPRsApi(config);

  const body = {
    // string
    issueId: issueId_example,
    // ModifyPullRequestCollectionRequest
    modifyPullRequestCollectionRequest: ...,
    // boolean | creation options (query) (optional)
    silent: true,
  } satisfies RemoveLinkedPRsByIDRequest;

  try {
    const data = await api.removeLinkedPRsByID(body);
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
| **modifyPullRequestCollectionRequest** | [ModifyPullRequestCollectionRequest](ModifyPullRequestCollectionRequest.md) |  | |
| **silent** | `boolean` | creation options (query) | [Optional] [Defaults to `undefined`] |

### Return type

[**IssueLinkedPRsResponse**](IssueLinkedPRsResponse.md)

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

