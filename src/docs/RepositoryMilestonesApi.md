# RepositoryMilestonesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createMilestone**](RepositoryMilestonesApi.md#createmilestone) | **POST** /repos/{org_slug}/{repo_slug}/milestones | Create a Milestone |
| [**createMilestoneByID**](RepositoryMilestonesApi.md#createmilestonebyid) | **POST** /repos/id:{repo_id}/milestones | Create a Milestone (By Repo ID) |
| [**deleteMilestone**](RepositoryMilestonesApi.md#deletemilestone) | **DELETE** /repos/{org_slug}/{repo_slug}/milestones/{milestone_slug} | Delete a Milestone (By Slug) |
| [**deleteMilestoneByID**](RepositoryMilestonesApi.md#deletemilestonebyid) | **DELETE** /milestones/id:{milestone_id} | Delete a Milestone (By ID) |
| [**getMilestone**](RepositoryMilestonesApi.md#getmilestone) | **GET** /repos/{org_slug}/{repo_slug}/milestones/{milestone_slug} | Get a Milestone (By Slug) |
| [**getMilestoneByID**](RepositoryMilestonesApi.md#getmilestonebyid) | **GET** /milestones/id:{milestone_id} | Get a Milestone (By ID) |
| [**listMilestonesForRepository**](RepositoryMilestonesApi.md#listmilestonesforrepository) | **GET** /repos/{org_slug}/{repo_slug}/milestones | List Repository Milestones |
| [**listMilestonesForRepositoryByID**](RepositoryMilestonesApi.md#listmilestonesforrepositorybyid) | **GET** /repos/id:{repo_id}/milestones | List Repository Milestones (By Repo ID) |
| [**updateMilestone**](RepositoryMilestonesApi.md#updatemilestone) | **PATCH** /repos/{org_slug}/{repo_slug}/milestones/{milestone_slug} | Update a Milestone (By Slug) |
| [**updateMilestoneByID**](RepositoryMilestonesApi.md#updatemilestonebyid) | **PATCH** /milestones/id:{milestone_id} | Update a Milestone (By ID) |



## createMilestone

> Milestone createMilestone(orgSlug, repoSlug, createMilestoneBody, silent)

Create a Milestone

### Example

```ts
import {
  Configuration,
  RepositoryMilestonesApi,
} from '';
import type { CreateMilestoneRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryMilestonesApi(config);

  const body = {
    // string | Path parameters for different routes
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // CreateMilestoneBody
    createMilestoneBody: ...,
    // boolean (optional)
    silent: true,
  } satisfies CreateMilestoneRequest;

  try {
    const data = await api.createMilestone(body);
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
| **createMilestoneBody** | [CreateMilestoneBody](CreateMilestoneBody.md) |  | |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Milestone**](Milestone.md)

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


## createMilestoneByID

> Milestone createMilestoneByID(repoId, createMilestoneBody, silent)

Create a Milestone (By Repo ID)

### Example

```ts
import {
  Configuration,
  RepositoryMilestonesApi,
} from '';
import type { CreateMilestoneByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryMilestonesApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // CreateMilestoneBody
    createMilestoneBody: ...,
    // boolean (optional)
    silent: true,
  } satisfies CreateMilestoneByIDRequest;

  try {
    const data = await api.createMilestoneByID(body);
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
| **createMilestoneBody** | [CreateMilestoneBody](CreateMilestoneBody.md) |  | |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Milestone**](Milestone.md)

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


## deleteMilestone

> object deleteMilestone(orgSlug, repoSlug, milestoneSlug, silent)

Delete a Milestone (By Slug)

### Example

```ts
import {
  Configuration,
  RepositoryMilestonesApi,
} from '';
import type { DeleteMilestoneRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryMilestonesApi(config);

  const body = {
    // string | Path parameters for different routes
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    milestoneSlug: milestoneSlug_example,
    // boolean (optional)
    silent: true,
  } satisfies DeleteMilestoneRequest;

  try {
    const data = await api.deleteMilestone(body);
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
| **milestoneSlug** | `string` |  | [Defaults to `undefined`] |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

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
| **200** | A successful response. |  -  |
| **0** | Both Client Errors (4xx) and Server Errors (5xx) are serialized into this scheme |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteMilestoneByID

> object deleteMilestoneByID(milestoneId, silent)

Delete a Milestone (By ID)

### Example

```ts
import {
  Configuration,
  RepositoryMilestonesApi,
} from '';
import type { DeleteMilestoneByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryMilestonesApi(config);

  const body = {
    // string
    milestoneId: milestoneId_example,
    // boolean (optional)
    silent: true,
  } satisfies DeleteMilestoneByIDRequest;

  try {
    const data = await api.deleteMilestoneByID(body);
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
| **milestoneId** | `string` |  | [Defaults to `undefined`] |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

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
| **200** | A successful response. |  -  |
| **0** | Both Client Errors (4xx) and Server Errors (5xx) are serialized into this scheme |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMilestone

> Milestone getMilestone(orgSlug, repoSlug, milestoneSlug)

Get a Milestone (By Slug)

### Example

```ts
import {
  Configuration,
  RepositoryMilestonesApi,
} from '';
import type { GetMilestoneRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryMilestonesApi(config);

  const body = {
    // string | Path parameters for different routes
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    milestoneSlug: milestoneSlug_example,
  } satisfies GetMilestoneRequest;

  try {
    const data = await api.getMilestone(body);
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
| **milestoneSlug** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Milestone**](Milestone.md)

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


## getMilestoneByID

> Milestone getMilestoneByID(milestoneId)

Get a Milestone (By ID)

### Example

```ts
import {
  Configuration,
  RepositoryMilestonesApi,
} from '';
import type { GetMilestoneByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryMilestonesApi(config);

  const body = {
    // string
    milestoneId: milestoneId_example,
  } satisfies GetMilestoneByIDRequest;

  try {
    const data = await api.getMilestoneByID(body);
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
| **milestoneId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Milestone**](Milestone.md)

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


## listMilestonesForRepository

> ListMilestonesForRepositoryResponse listMilestonesForRepository(orgSlug, repoSlug, pageSize, pageToken, sortBy, filter)

List Repository Milestones

### Example

```ts
import {
  Configuration,
  RepositoryMilestonesApi,
} from '';
import type { ListMilestonesForRepositoryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryMilestonesApi(config);

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
  } satisfies ListMilestonesForRepositoryRequest;

  try {
    const data = await api.listMilestonesForRepository(body);
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

[**ListMilestonesForRepositoryResponse**](ListMilestonesForRepositoryResponse.md)

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


## listMilestonesForRepositoryByID

> ListMilestonesForRepositoryResponse listMilestonesForRepositoryByID(repoId, pageSize, pageToken, sortBy, filter)

List Repository Milestones (By Repo ID)

### Example

```ts
import {
  Configuration,
  RepositoryMilestonesApi,
} from '';
import type { ListMilestonesForRepositoryByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryMilestonesApi(config);

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
  } satisfies ListMilestonesForRepositoryByIDRequest;

  try {
    const data = await api.listMilestonesForRepositoryByID(body);
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

[**ListMilestonesForRepositoryResponse**](ListMilestonesForRepositoryResponse.md)

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


## updateMilestone

> Milestone updateMilestone(orgSlug, repoSlug, milestoneSlug, updateMilestoneBody, silent)

Update a Milestone (By Slug)

### Example

```ts
import {
  Configuration,
  RepositoryMilestonesApi,
} from '';
import type { UpdateMilestoneRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryMilestonesApi(config);

  const body = {
    // string | Path parameters for different routes
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    milestoneSlug: milestoneSlug_example,
    // UpdateMilestoneBody
    updateMilestoneBody: ...,
    // boolean (optional)
    silent: true,
  } satisfies UpdateMilestoneRequest;

  try {
    const data = await api.updateMilestone(body);
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
| **milestoneSlug** | `string` |  | [Defaults to `undefined`] |
| **updateMilestoneBody** | [UpdateMilestoneBody](UpdateMilestoneBody.md) |  | |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Milestone**](Milestone.md)

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


## updateMilestoneByID

> Milestone updateMilestoneByID(milestoneId, updateMilestoneBody, silent)

Update a Milestone (By ID)

### Example

```ts
import {
  Configuration,
  RepositoryMilestonesApi,
} from '';
import type { UpdateMilestoneByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryMilestonesApi(config);

  const body = {
    // string
    milestoneId: milestoneId_example,
    // UpdateMilestoneBody
    updateMilestoneBody: ...,
    // boolean (optional)
    silent: true,
  } satisfies UpdateMilestoneByIDRequest;

  try {
    const data = await api.updateMilestoneByID(body);
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
| **milestoneId** | `string` |  | [Defaults to `undefined`] |
| **updateMilestoneBody** | [UpdateMilestoneBody](UpdateMilestoneBody.md) |  | |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Milestone**](Milestone.md)

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

