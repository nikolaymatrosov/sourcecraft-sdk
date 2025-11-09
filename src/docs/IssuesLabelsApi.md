# IssuesLabelsApi

All URIs are relative to *https://api.sourcecraft.tech*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addLabels**](IssuesLabelsApi.md#addlabels) | **POST** /repos/{org_slug}/{repo_slug}/issues/{issue_slug}/labels | Add Labels |
| [**addLabelsByID**](IssuesLabelsApi.md#addlabelsbyid) | **POST** /issues/id:{issue_id}/labels | Add Labels (By Issue ID) |
| [**getLabels**](IssuesLabelsApi.md#getlabels) | **GET** /repos/{org_slug}/{repo_slug}/issues/{issue_slug}/labels | List Labels |
| [**getLabelsByID**](IssuesLabelsApi.md#getlabelsbyid) | **GET** /issues/id:{issue_id}/labels | List Labels (By Issue ID) |
| [**removeLabels**](IssuesLabelsApi.md#removelabels) | **DELETE** /repos/{org_slug}/{repo_slug}/issues/{issue_slug}/labels | Remove labels |
| [**removeLabelsByID**](IssuesLabelsApi.md#removelabelsbyid) | **DELETE** /issues/id:{issue_id}/labels | Remove labels (By Issue ID) |
| [**replaceLabels**](IssuesLabelsApi.md#replacelabels) | **PUT** /repos/{org_slug}/{repo_slug}/issues/{issue_slug}/labels | Replace Labels |
| [**replaceLabelsByID**](IssuesLabelsApi.md#replacelabelsbyid) | **PUT** /issues/id:{issue_id}/labels | Replace Labels (By Issue ID) |



## addLabels

> IssueLabelsResponse addLabels(orgSlug, repoSlug, issueSlug, modifyLabelCollectionRequest, silent)

Add Labels

Associates one or more labels with a specific issue. Returns resulting collection.

### Example

```ts
import {
  Configuration,
  IssuesLabelsApi,
} from '';
import type { AddLabelsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLabelsApi(config);

  const body = {
    // string | depending on which route is used, either parent or repoId is filled
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    issueSlug: issueSlug_example,
    // ModifyLabelCollectionRequest
    modifyLabelCollectionRequest: ...,
    // boolean (optional)
    silent: true,
  } satisfies AddLabelsRequest;

  try {
    const data = await api.addLabels(body);
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
| **modifyLabelCollectionRequest** | [ModifyLabelCollectionRequest](ModifyLabelCollectionRequest.md) |  | |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**IssueLabelsResponse**](IssueLabelsResponse.md)

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


## addLabelsByID

> IssueLabelsResponse addLabelsByID(issueId, modifyLabelCollectionRequest, silent)

Add Labels (By Issue ID)

Associates one or more labels with a specific issue. Returns resulting collection.

### Example

```ts
import {
  Configuration,
  IssuesLabelsApi,
} from '';
import type { AddLabelsByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLabelsApi(config);

  const body = {
    // string
    issueId: issueId_example,
    // ModifyLabelCollectionRequest
    modifyLabelCollectionRequest: ...,
    // boolean (optional)
    silent: true,
  } satisfies AddLabelsByIDRequest;

  try {
    const data = await api.addLabelsByID(body);
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
| **modifyLabelCollectionRequest** | [ModifyLabelCollectionRequest](ModifyLabelCollectionRequest.md) |  | |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**IssueLabelsResponse**](IssueLabelsResponse.md)

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


## getLabels

> IssueLabelsResponse getLabels(orgSlug, repoSlug, issueSlug)

List Labels

Retrieves all labels that are linked to the specified issue.

### Example

```ts
import {
  Configuration,
  IssuesLabelsApi,
} from '';
import type { GetLabelsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLabelsApi(config);

  const body = {
    // string | depending on which route is used, either parent or repoId is filled
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    issueSlug: issueSlug_example,
  } satisfies GetLabelsRequest;

  try {
    const data = await api.getLabels(body);
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

[**IssueLabelsResponse**](IssueLabelsResponse.md)

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


## getLabelsByID

> IssueLabelsResponse getLabelsByID(issueId)

List Labels (By Issue ID)

Retrieves all labels that are linked to the specified issue.

### Example

```ts
import {
  Configuration,
  IssuesLabelsApi,
} from '';
import type { GetLabelsByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLabelsApi(config);

  const body = {
    // string
    issueId: issueId_example,
  } satisfies GetLabelsByIDRequest;

  try {
    const data = await api.getLabelsByID(body);
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

[**IssueLabelsResponse**](IssueLabelsResponse.md)

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


## removeLabels

> IssueLabelsResponse removeLabels(orgSlug, repoSlug, issueSlug, modifyLabelCollectionRequest, silent)

Remove labels

Removes one or more labels from a specific issue. Returns resulting collection.

### Example

```ts
import {
  Configuration,
  IssuesLabelsApi,
} from '';
import type { RemoveLabelsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLabelsApi(config);

  const body = {
    // string | depending on which route is used, either parent or repoId is filled
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    issueSlug: issueSlug_example,
    // ModifyLabelCollectionRequest
    modifyLabelCollectionRequest: ...,
    // boolean | creation options (query) (optional)
    silent: true,
  } satisfies RemoveLabelsRequest;

  try {
    const data = await api.removeLabels(body);
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
| **modifyLabelCollectionRequest** | [ModifyLabelCollectionRequest](ModifyLabelCollectionRequest.md) |  | |
| **silent** | `boolean` | creation options (query) | [Optional] [Defaults to `undefined`] |

### Return type

[**IssueLabelsResponse**](IssueLabelsResponse.md)

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


## removeLabelsByID

> IssueLabelsResponse removeLabelsByID(issueId, modifyLabelCollectionRequest, silent)

Remove labels (By Issue ID)

Removes one or more labels from a specific issue. Returns resulting collection.

### Example

```ts
import {
  Configuration,
  IssuesLabelsApi,
} from '';
import type { RemoveLabelsByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLabelsApi(config);

  const body = {
    // string
    issueId: issueId_example,
    // ModifyLabelCollectionRequest
    modifyLabelCollectionRequest: ...,
    // boolean | creation options (query) (optional)
    silent: true,
  } satisfies RemoveLabelsByIDRequest;

  try {
    const data = await api.removeLabelsByID(body);
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
| **modifyLabelCollectionRequest** | [ModifyLabelCollectionRequest](ModifyLabelCollectionRequest.md) |  | |
| **silent** | `boolean` | creation options (query) | [Optional] [Defaults to `undefined`] |

### Return type

[**IssueLabelsResponse**](IssueLabelsResponse.md)

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


## replaceLabels

> IssueLabelsResponse replaceLabels(orgSlug, repoSlug, issueSlug, modifyLabelCollectionRequest, silent)

Replace Labels

Completely replaces the current set of labels on an issue with the provided set.

### Example

```ts
import {
  Configuration,
  IssuesLabelsApi,
} from '';
import type { ReplaceLabelsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLabelsApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    issueSlug: issueSlug_example,
    // ModifyLabelCollectionRequest
    modifyLabelCollectionRequest: ...,
    // boolean | creation options (query) (optional)
    silent: true,
  } satisfies ReplaceLabelsRequest;

  try {
    const data = await api.replaceLabels(body);
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
| **modifyLabelCollectionRequest** | [ModifyLabelCollectionRequest](ModifyLabelCollectionRequest.md) |  | |
| **silent** | `boolean` | creation options (query) | [Optional] [Defaults to `undefined`] |

### Return type

[**IssueLabelsResponse**](IssueLabelsResponse.md)

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


## replaceLabelsByID

> IssueLabelsResponse replaceLabelsByID(issueId, modifyLabelCollectionRequest, silent)

Replace Labels (By Issue ID)

Completely replaces the current set of labels on an issue with the provided set.

### Example

```ts
import {
  Configuration,
  IssuesLabelsApi,
} from '';
import type { ReplaceLabelsByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLabelsApi(config);

  const body = {
    // string
    issueId: issueId_example,
    // ModifyLabelCollectionRequest
    modifyLabelCollectionRequest: ...,
    // boolean | creation options (query) (optional)
    silent: true,
  } satisfies ReplaceLabelsByIDRequest;

  try {
    const data = await api.replaceLabelsByID(body);
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
| **modifyLabelCollectionRequest** | [ModifyLabelCollectionRequest](ModifyLabelCollectionRequest.md) |  | |
| **silent** | `boolean` | creation options (query) | [Optional] [Defaults to `undefined`] |

### Return type

[**IssueLabelsResponse**](IssueLabelsResponse.md)

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

