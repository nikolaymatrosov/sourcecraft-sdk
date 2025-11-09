# RepositoryLabelsApi

All URIs are relative to *https://api.sourcecraft.tech*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createLabel**](RepositoryLabelsApi.md#createlabel) | **POST** /repos/{org_slug}/{repo_slug}/labels | Create Label |
| [**createLabelByID**](RepositoryLabelsApi.md#createlabelbyid) | **POST** /repos/id:{repo_id}/labels | Create Label (By ID) |
| [**deleteLabel**](RepositoryLabelsApi.md#deletelabel) | **DELETE** /repos/{org_slug}/{repo_slug}/labels/{label_slug} | Delete label (By Slug) |
| [**deleteLabelByID**](RepositoryLabelsApi.md#deletelabelbyid) | **DELETE** /labels/id:{label_id} | Delete label (By Label ID) |
| [**getLabel**](RepositoryLabelsApi.md#getlabel) | **GET** /repos/{org_slug}/{repo_slug}/labels/{label_slug} | Get Label (By Slug) |
| [**getLabelByID**](RepositoryLabelsApi.md#getlabelbyid) | **GET** /labels/id:{label_id} | Get Label (By Label ID) |
| [**listLabelsForRepository**](RepositoryLabelsApi.md#listlabelsforrepository) | **GET** /repos/{org_slug}/{repo_slug}/labels | List labels |
| [**listLabelsForRepositoryByID**](RepositoryLabelsApi.md#listlabelsforrepositorybyid) | **GET** /repos/id:{repo_id}/labels | List labels (By ID) |
| [**updateLabel**](RepositoryLabelsApi.md#updatelabel) | **PATCH** /repos/{org_slug}/{repo_slug}/labels/{label_slug} | Update Label (By Slug) |
| [**updateLabelByID**](RepositoryLabelsApi.md#updatelabelbyid) | **PATCH** /labels/id:{label_id} | Update Label (By Label ID) |



## createLabel

> V1Label createLabel(orgSlug, repoSlug, createLabelBody, silent)

Create Label

### Example

```ts
import {
  Configuration,
  RepositoryLabelsApi,
} from '';
import type { CreateLabelRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryLabelsApi(config);

  const body = {
    // string | Path parameters for different routes
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // CreateLabelBody
    createLabelBody: ...,
    // boolean (optional)
    silent: true,
  } satisfies CreateLabelRequest;

  try {
    const data = await api.createLabel(body);
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
| **orgSlug** | `string` | Path parameters for different routes | [Defaults to `undefined`] |
| **repoSlug** | `string` |  | [Defaults to `undefined`] |
| **createLabelBody** | [CreateLabelBody](CreateLabelBody.md) |  | |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**V1Label**](V1Label.md)

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


## createLabelByID

> V1Label createLabelByID(repoId, createLabelBody, silent)

Create Label (By ID)

### Example

```ts
import {
  Configuration,
  RepositoryLabelsApi,
} from '';
import type { CreateLabelByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryLabelsApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // CreateLabelBody
    createLabelBody: ...,
    // boolean (optional)
    silent: true,
  } satisfies CreateLabelByIDRequest;

  try {
    const data = await api.createLabelByID(body);
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
| **createLabelBody** | [CreateLabelBody](CreateLabelBody.md) |  | |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**V1Label**](V1Label.md)

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


## deleteLabel

> deleteLabel(orgSlug, repoSlug, labelSlug, silent)

Delete label (By Slug)

### Example

```ts
import {
  Configuration,
  RepositoryLabelsApi,
} from '';
import type { DeleteLabelRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryLabelsApi(config);

  const body = {
    // string | Path parameters for different routes
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    labelSlug: labelSlug_example,
    // boolean (optional)
    silent: true,
  } satisfies DeleteLabelRequest;

  try {
    const data = await api.deleteLabel(body);
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
| **orgSlug** | `string` | Path parameters for different routes | [Defaults to `undefined`] |
| **repoSlug** | `string` |  | [Defaults to `undefined`] |
| **labelSlug** | `string` |  | [Defaults to `undefined`] |
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


## deleteLabelByID

> deleteLabelByID(labelId, silent)

Delete label (By Label ID)

### Example

```ts
import {
  Configuration,
  RepositoryLabelsApi,
} from '';
import type { DeleteLabelByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryLabelsApi(config);

  const body = {
    // string
    labelId: labelId_example,
    // boolean (optional)
    silent: true,
  } satisfies DeleteLabelByIDRequest;

  try {
    const data = await api.deleteLabelByID(body);
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
| **labelId** | `string` |  | [Defaults to `undefined`] |
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


## getLabel

> V1Label getLabel(orgSlug, repoSlug, labelSlug)

Get Label (By Slug)

### Example

```ts
import {
  Configuration,
  RepositoryLabelsApi,
} from '';
import type { GetLabelRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryLabelsApi(config);

  const body = {
    // string | Path parameters for different routes
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    labelSlug: labelSlug_example,
  } satisfies GetLabelRequest;

  try {
    const data = await api.getLabel(body);
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
| **orgSlug** | `string` | Path parameters for different routes | [Defaults to `undefined`] |
| **repoSlug** | `string` |  | [Defaults to `undefined`] |
| **labelSlug** | `string` |  | [Defaults to `undefined`] |

### Return type

[**V1Label**](V1Label.md)

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


## getLabelByID

> V1Label getLabelByID(labelId)

Get Label (By Label ID)

### Example

```ts
import {
  Configuration,
  RepositoryLabelsApi,
} from '';
import type { GetLabelByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryLabelsApi(config);

  const body = {
    // string
    labelId: labelId_example,
  } satisfies GetLabelByIDRequest;

  try {
    const data = await api.getLabelByID(body);
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
| **labelId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**V1Label**](V1Label.md)

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


## listLabelsForRepository

> ListLabelsForRepositoryResponse listLabelsForRepository(orgSlug, repoSlug, pageSize, pageToken, sortBy, filter)

List labels

### Example

```ts
import {
  Configuration,
  RepositoryLabelsApi,
} from '';
import type { ListLabelsForRepositoryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryLabelsApi(config);

  const body = {
    // string | Path parameters for different routes
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string (optional)
    pageSize: pageSize_example,
    // string (optional)
    pageToken: pageToken_example,
    // string (optional)
    sortBy: sortBy_example,
    // string (optional)
    filter: filter_example,
  } satisfies ListLabelsForRepositoryRequest;

  try {
    const data = await api.listLabelsForRepository(body);
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
| **orgSlug** | `string` | Path parameters for different routes | [Defaults to `undefined`] |
| **repoSlug** | `string` |  | [Defaults to `undefined`] |
| **pageSize** | `string` |  | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` |  | [Optional] [Defaults to `undefined`] |
| **filter** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ListLabelsForRepositoryResponse**](ListLabelsForRepositoryResponse.md)

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


## listLabelsForRepositoryByID

> ListLabelsForRepositoryResponse listLabelsForRepositoryByID(repoId, pageSize, pageToken, sortBy, filter)

List labels (By ID)

### Example

```ts
import {
  Configuration,
  RepositoryLabelsApi,
} from '';
import type { ListLabelsForRepositoryByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryLabelsApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // string (optional)
    pageSize: pageSize_example,
    // string (optional)
    pageToken: pageToken_example,
    // string (optional)
    sortBy: sortBy_example,
    // string (optional)
    filter: filter_example,
  } satisfies ListLabelsForRepositoryByIDRequest;

  try {
    const data = await api.listLabelsForRepositoryByID(body);
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
| **pageSize** | `string` |  | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` |  | [Optional] [Defaults to `undefined`] |
| **filter** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ListLabelsForRepositoryResponse**](ListLabelsForRepositoryResponse.md)

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


## updateLabel

> V1Label updateLabel(orgSlug, repoSlug, labelSlug, updateLabelBody, silent)

Update Label (By Slug)

### Example

```ts
import {
  Configuration,
  RepositoryLabelsApi,
} from '';
import type { UpdateLabelRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryLabelsApi(config);

  const body = {
    // string | Path parameters for different routes
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    labelSlug: labelSlug_example,
    // UpdateLabelBody
    updateLabelBody: ...,
    // boolean (optional)
    silent: true,
  } satisfies UpdateLabelRequest;

  try {
    const data = await api.updateLabel(body);
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
| **orgSlug** | `string` | Path parameters for different routes | [Defaults to `undefined`] |
| **repoSlug** | `string` |  | [Defaults to `undefined`] |
| **labelSlug** | `string` |  | [Defaults to `undefined`] |
| **updateLabelBody** | [UpdateLabelBody](UpdateLabelBody.md) |  | |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**V1Label**](V1Label.md)

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


## updateLabelByID

> V1Label updateLabelByID(labelId, updateLabelBody, silent)

Update Label (By Label ID)

### Example

```ts
import {
  Configuration,
  RepositoryLabelsApi,
} from '';
import type { UpdateLabelByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryLabelsApi(config);

  const body = {
    // string
    labelId: labelId_example,
    // UpdateLabelBody
    updateLabelBody: ...,
    // boolean (optional)
    silent: true,
  } satisfies UpdateLabelByIDRequest;

  try {
    const data = await api.updateLabelByID(body);
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
| **labelId** | `string` |  | [Defaults to `undefined`] |
| **updateLabelBody** | [UpdateLabelBody](UpdateLabelBody.md) |  | |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**V1Label**](V1Label.md)

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

