# RolesApi

All URIs are relative to *https://api.sourcecraft.tech*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addRepoRoles**](RolesApi.md#addreporoles) | **POST** /repos/{org_slug}/{repo_slug}/roles | Add Repository Roles |
| [**addRepoRolesByID**](RolesApi.md#addreporolesbyid) | **POST** /repos/id:{repo_id}/roles | Add Repository Roles (By ID) |
| [**listRepoRoles**](RolesApi.md#listreporoles) | **GET** /repos/{org_slug}/{repo_slug}/roles | List Repository Roles |
| [**listRepoRolesByID**](RolesApi.md#listreporolesbyid) | **GET** /repos/id:{repo_id}/roles | List Repository Roles (By ID) |
| [**removeRepoRoles**](RolesApi.md#removereporoles) | **POST** /repos/{org_slug}/{repo_slug}/roles/remove | Remove Repository Roles |
| [**removeRepoRolesByID**](RolesApi.md#removereporolesbyid) | **POST** /repos/id:{repo_id}/roles/remove | Remove Repository Roles (By ID) |



## addRepoRoles

> any addRepoRoles(orgSlug, repoSlug, addRepoRolesBody)

Add Repository Roles

### Example

```ts
import {
  Configuration,
  RolesApi,
} from '';
import type { AddRepoRolesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RolesApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // AddRepoRolesBody
    addRepoRolesBody: ...,
  } satisfies AddRepoRolesRequest;

  try {
    const data = await api.addRepoRoles(body);
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
| **addRepoRolesBody** | [AddRepoRolesBody](AddRepoRolesBody.md) |  | |

### Return type

**any**

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


## addRepoRolesByID

> any addRepoRolesByID(repoId, addRepoRolesBody)

Add Repository Roles (By ID)

### Example

```ts
import {
  Configuration,
  RolesApi,
} from '';
import type { AddRepoRolesByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RolesApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // AddRepoRolesBody
    addRepoRolesBody: ...,
  } satisfies AddRepoRolesByIDRequest;

  try {
    const data = await api.addRepoRolesByID(body);
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
| **addRepoRolesBody** | [AddRepoRolesBody](AddRepoRolesBody.md) |  | |

### Return type

**any**

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


## listRepoRoles

> any listRepoRoles(orgSlug, repoSlug, pageSize, pageToken, sortBy)

List Repository Roles

### Example

```ts
import {
  Configuration,
  RolesApi,
} from '';
import type { ListRepoRolesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RolesApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string | The maximum number of repo roles to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
    // string | Ordering options: comma separated list of fields. Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"foo, -bar\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. Available fields: name (optional)
    sortBy: sortBy_example,
  } satisfies ListRepoRolesRequest;

  try {
    const data = await api.listRepoRoles(body);
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
| **pageSize** | `string` | The maximum number of repo roles to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;foo, -bar\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. Available fields: name | [Optional] [Defaults to `undefined`] |

### Return type

**any**

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


## listRepoRolesByID

> any listRepoRolesByID(repoId, pageSize, pageToken, sortBy)

List Repository Roles (By ID)

### Example

```ts
import {
  Configuration,
  RolesApi,
} from '';
import type { ListRepoRolesByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RolesApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // string | The maximum number of repo roles to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
    // string | Ordering options: comma separated list of fields. Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"foo, -bar\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. Available fields: name (optional)
    sortBy: sortBy_example,
  } satisfies ListRepoRolesByIDRequest;

  try {
    const data = await api.listRepoRolesByID(body);
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
| **pageSize** | `string` | The maximum number of repo roles to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;foo, -bar\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. Available fields: name | [Optional] [Defaults to `undefined`] |

### Return type

**any**

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


## removeRepoRoles

> any removeRepoRoles(orgSlug, repoSlug, removeRepoRolesBody)

Remove Repository Roles

### Example

```ts
import {
  Configuration,
  RolesApi,
} from '';
import type { RemoveRepoRolesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RolesApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // RemoveRepoRolesBody
    removeRepoRolesBody: ...,
  } satisfies RemoveRepoRolesRequest;

  try {
    const data = await api.removeRepoRoles(body);
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
| **removeRepoRolesBody** | [RemoveRepoRolesBody](RemoveRepoRolesBody.md) |  | |

### Return type

**any**

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


## removeRepoRolesByID

> any removeRepoRolesByID(repoId, removeRepoRolesBody)

Remove Repository Roles (By ID)

### Example

```ts
import {
  Configuration,
  RolesApi,
} from '';
import type { RemoveRepoRolesByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RolesApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // RemoveRepoRolesBody
    removeRepoRolesBody: ...,
  } satisfies RemoveRepoRolesByIDRequest;

  try {
    const data = await api.removeRepoRolesByID(body);
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
| **removeRepoRolesBody** | [RemoveRepoRolesBody](RemoveRepoRolesBody.md) |  | |

### Return type

**any**

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

