# RepositoryApi

All URIs are relative to *https://api.sourcecraft.tech*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addRepoRoles**](RepositoryApi.md#addreporoles) | **POST** /repos/{org_slug}/{repo_slug}/roles | Add Repository Roles |
| [**addRepoRolesByID**](RepositoryApi.md#addreporolesbyid) | **POST** /repos/id:{repo_id}/roles | Add Repository Roles (By ID) |
| [**createRepository**](RepositoryApi.md#createrepository) | **POST** /orgs/{org_slug}/repos | Create Repository in Organization |
| [**createRepositoryByID**](RepositoryApi.md#createrepositorybyid) | **POST** /orgs/id:{org_id}/repos | Create Repository in Organization (By Organization ID) |
| [**deleteRepository**](RepositoryApi.md#deleterepository) | **DELETE** /{org_slug}/{repo_slug} | Delete Repository |
| [**deleteRepositoryByID**](RepositoryApi.md#deleterepositorybyid) | **DELETE** /repos/id:{repo_id} | Delete Repository (By Repository ID) |
| [**forkRepository**](RepositoryApi.md#forkrepository) | **POST** /repos/{org_slug}/{repo_slug}/fork | Fork Repository |
| [**forkRepositoryByID**](RepositoryApi.md#forkrepositorybyid) | **POST** /repos/id:{repo_id}/fork | Fork Repository (By ID) |
| [**getRepository**](RepositoryApi.md#getrepository) | **GET** /repos/{org_slug}/{repo_slug} | Get Repository |
| [**getRepositoryByID**](RepositoryApi.md#getrepositorybyid) | **GET** /repos/id:{repo_id} | Get Repository (By ID) |
| [**listBranches**](RepositoryApi.md#listbranches) | **GET** /repos/{org_slug}/{repo_slug}/branches | List Repository Branches |
| [**listBranchesByID**](RepositoryApi.md#listbranchesbyid) | **GET** /repos/id:{repo_id}/branches | List Repository Branches (By Repo ID) |
| [**listRepoRoles**](RepositoryApi.md#listreporoles) | **GET** /repos/{org_slug}/{repo_slug}/roles | List Repository Roles |
| [**listRepoRolesByID**](RepositoryApi.md#listreporolesbyid) | **GET** /repos/id:{repo_id}/roles | List Repository Roles (By ID) |
| [**listTags**](RepositoryApi.md#listtags) | **GET** /repos/{org_slug}/{repo_slug}/tags | List Repository Tags |
| [**listTagsByID**](RepositoryApi.md#listtagsbyid) | **GET** /repos/id:{repo_id}/tags | List Repository Tags (By Repo ID) |
| [**listTree**](RepositoryApi.md#listtree) | **GET** /repos/{org_slug}/{repo_slug}/trees | List Repository File Tree |
| [**listTreeByID**](RepositoryApi.md#listtreebyid) | **GET** /repos/id:{repo_id}/trees | List Repository File Tree (By Repo ID) |
| [**removeRepoRoles**](RepositoryApi.md#removereporoles) | **POST** /repos/{org_slug}/{repo_slug}/roles/remove | Remove Repository Roles |
| [**removeRepoRolesByID**](RepositoryApi.md#removereporolesbyid) | **POST** /repos/id:{repo_id}/roles/remove | Remove Repository Roles (By ID) |
| [**updateRepository**](RepositoryApi.md#updaterepository) | **PATCH** /{org_slug}/{repo_slug} | Update Repository |
| [**updateRepositoryByID**](RepositoryApi.md#updaterepositorybyid) | **PATCH** /repos/id:{repo_id} | Update Repository (By Repo ID) |



## addRepoRoles

> any addRepoRoles(orgSlug, repoSlug, addRepoRolesBody)

Add Repository Roles

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from '';
import type { AddRepoRolesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

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
  RepositoryApi,
} from '';
import type { AddRepoRolesByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

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


## createRepository

> Repository createRepository(orgSlug, createRepositoryBody, orgId)

Create Repository in Organization

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from '';
import type { CreateRepositoryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // CreateRepositoryBody
    createRepositoryBody: ...,
    // string (optional)
    orgId: orgId_example,
  } satisfies CreateRepositoryRequest;

  try {
    const data = await api.createRepository(body);
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
| **createRepositoryBody** | [CreateRepositoryBody](CreateRepositoryBody.md) |  | |
| **orgId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Repository**](Repository.md)

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


## createRepositoryByID

> Repository createRepositoryByID(orgId, createRepositoryBody)

Create Repository in Organization (By Organization ID)

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from '';
import type { CreateRepositoryByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

  const body = {
    // string
    orgId: orgId_example,
    // CreateRepositoryBody
    createRepositoryBody: ...,
  } satisfies CreateRepositoryByIDRequest;

  try {
    const data = await api.createRepositoryByID(body);
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
| **orgId** | `string` |  | [Defaults to `undefined`] |
| **createRepositoryBody** | [CreateRepositoryBody](CreateRepositoryBody.md) |  | |

### Return type

[**Repository**](Repository.md)

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


## deleteRepository

> deleteRepository(orgSlug, repoSlug, silent)

Delete Repository

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from '';
import type { DeleteRepositoryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // boolean | Flag for deleting without any notifications. NOT IMPLEMENTED YET. (optional)
    silent: true,
  } satisfies DeleteRepositoryRequest;

  try {
    const data = await api.deleteRepository(body);
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
| **silent** | `boolean` | Flag for deleting without any notifications. NOT IMPLEMENTED YET. | [Optional] [Defaults to `undefined`] |

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


## deleteRepositoryByID

> deleteRepositoryByID(repoId, silent)

Delete Repository (By Repository ID)

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from '';
import type { DeleteRepositoryByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // boolean | Flag for deleting without any notifications. NOT IMPLEMENTED YET. (optional)
    silent: true,
  } satisfies DeleteRepositoryByIDRequest;

  try {
    const data = await api.deleteRepositoryByID(body);
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
| **silent** | `boolean` | Flag for deleting without any notifications. NOT IMPLEMENTED YET. | [Optional] [Defaults to `undefined`] |

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


## forkRepository

> Repository forkRepository(orgSlug, repoSlug, forkRepositoryBody)

Fork Repository

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from '';
import type { ForkRepositoryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // ForkRepositoryBody
    forkRepositoryBody: ...,
  } satisfies ForkRepositoryRequest;

  try {
    const data = await api.forkRepository(body);
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
| **forkRepositoryBody** | [ForkRepositoryBody](ForkRepositoryBody.md) |  | |

### Return type

[**Repository**](Repository.md)

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


## forkRepositoryByID

> Repository forkRepositoryByID(repoId, forkRepositoryBody)

Fork Repository (By ID)

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from '';
import type { ForkRepositoryByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // ForkRepositoryBody
    forkRepositoryBody: ...,
  } satisfies ForkRepositoryByIDRequest;

  try {
    const data = await api.forkRepositoryByID(body);
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
| **forkRepositoryBody** | [ForkRepositoryBody](ForkRepositoryBody.md) |  | |

### Return type

[**Repository**](Repository.md)

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


## getRepository

> Repository getRepository(orgSlug, repoSlug)

Get Repository

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from '';
import type { GetRepositoryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
  } satisfies GetRepositoryRequest;

  try {
    const data = await api.getRepository(body);
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

### Return type

[**Repository**](Repository.md)

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


## getRepositoryByID

> Repository getRepositoryByID(repoId)

Get Repository (By ID)

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from '';
import type { GetRepositoryByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

  const body = {
    // string
    repoId: repoId_example,
  } satisfies GetRepositoryByIDRequest;

  try {
    const data = await api.getRepositoryByID(body);
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

### Return type

[**Repository**](Repository.md)

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


## listBranches

> ListBranchesResponse listBranches(orgSlug, repoSlug, filter, sortBy, pageSize, pageToken)

List Repository Branches

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from '';
import type { ListBranchesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string | Filter branches by name contains (optional)
    filter: filter_example,
    // string | Ordering options: comma separated list of fields. Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"foo, -bar\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. Available fields: name (optional)
    sortBy: sortBy_example,
    // string | The maximum number of branches to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
  } satisfies ListBranchesRequest;

  try {
    const data = await api.listBranches(body);
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
| **filter** | `string` | Filter branches by name contains | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;foo, -bar\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. Available fields: name | [Optional] [Defaults to `undefined`] |
| **pageSize** | `string` | The maximum number of branches to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListBranchesResponse**](ListBranchesResponse.md)

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


## listBranchesByID

> ListBranchesResponse listBranchesByID(repoId, filter, sortBy, pageSize, pageToken)

List Repository Branches (By Repo ID)

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from '';
import type { ListBranchesByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // string | Filter branches by name contains (optional)
    filter: filter_example,
    // string | Ordering options: comma separated list of fields. Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"foo, -bar\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. Available fields: name (optional)
    sortBy: sortBy_example,
    // string | The maximum number of branches to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
  } satisfies ListBranchesByIDRequest;

  try {
    const data = await api.listBranchesByID(body);
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
| **filter** | `string` | Filter branches by name contains | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;foo, -bar\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. Available fields: name | [Optional] [Defaults to `undefined`] |
| **pageSize** | `string` | The maximum number of branches to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListBranchesResponse**](ListBranchesResponse.md)

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


## listRepoRoles

> any listRepoRoles(orgSlug, repoSlug, pageSize, pageToken, sortBy)

List Repository Roles

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from '';
import type { ListRepoRolesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

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
  RepositoryApi,
} from '';
import type { ListRepoRolesByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

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


## listTags

> ListTagsResponse listTags(orgSlug, repoSlug, filter, sortBy, pageSize, pageToken)

List Repository Tags

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from '';
import type { ListTagsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string | Filter tags by name contains (optional)
    filter: filter_example,
    // string | Ordering options: comma separated list of fields. Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"foo, -bar\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. Available fields: name (optional)
    sortBy: sortBy_example,
    // string | The maximum number of tags to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
  } satisfies ListTagsRequest;

  try {
    const data = await api.listTags(body);
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
| **filter** | `string` | Filter tags by name contains | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;foo, -bar\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. Available fields: name | [Optional] [Defaults to `undefined`] |
| **pageSize** | `string` | The maximum number of tags to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListTagsResponse**](ListTagsResponse.md)

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


## listTagsByID

> ListTagsResponse listTagsByID(repoId, filter, sortBy, pageSize, pageToken)

List Repository Tags (By Repo ID)

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from '';
import type { ListTagsByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // string | Filter tags by name contains (optional)
    filter: filter_example,
    // string | Ordering options: comma separated list of fields. Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"foo, -bar\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. Available fields: name (optional)
    sortBy: sortBy_example,
    // string | The maximum number of tags to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
  } satisfies ListTagsByIDRequest;

  try {
    const data = await api.listTagsByID(body);
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
| **filter** | `string` | Filter tags by name contains | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;foo, -bar\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. Available fields: name | [Optional] [Defaults to `undefined`] |
| **pageSize** | `string` | The maximum number of tags to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListTagsResponse**](ListTagsResponse.md)

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


## listTree

> ListTreeResponse listTree(orgSlug, repoSlug, revision, path, recursive, pageSize, pageToken)

List Repository File Tree

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from '';
import type { ListTreeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string | Git reference (branch, tag, or commit SHA). If empty, the default branch (usually main) will be used. Examples: `mybranch`, `tags:v1.0.0` (optional)
    revision: revision_example,
    // string | Path within repository to get the tree for. If not specified, returns the root tree (optional)
    path: path_example,
    // boolean | Whether to retrieve tree entries recursively. If false, only immediate children are returned (optional)
    recursive: true,
    // string | The maximum number of tree entries to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
  } satisfies ListTreeRequest;

  try {
    const data = await api.listTree(body);
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
| **revision** | `string` | Git reference (branch, tag, or commit SHA). If empty, the default branch (usually main) will be used. Examples: &#x60;mybranch&#x60;, &#x60;tags:v1.0.0&#x60; | [Optional] [Defaults to `undefined`] |
| **path** | `string` | Path within repository to get the tree for. If not specified, returns the root tree | [Optional] [Defaults to `undefined`] |
| **recursive** | `boolean` | Whether to retrieve tree entries recursively. If false, only immediate children are returned | [Optional] [Defaults to `undefined`] |
| **pageSize** | `string` | The maximum number of tree entries to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListTreeResponse**](ListTreeResponse.md)

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


## listTreeByID

> ListTreeResponse listTreeByID(repoId, revision, path, recursive, pageSize, pageToken)

List Repository File Tree (By Repo ID)

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from '';
import type { ListTreeByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // string | Git reference (branch, tag, or commit SHA). If empty, the default branch (usually main) will be used. Examples: `mybranch`, `tags:v1.0.0` (optional)
    revision: revision_example,
    // string | Path within repository to get the tree for. If not specified, returns the root tree (optional)
    path: path_example,
    // boolean | Whether to retrieve tree entries recursively. If false, only immediate children are returned (optional)
    recursive: true,
    // string | The maximum number of tree entries to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
  } satisfies ListTreeByIDRequest;

  try {
    const data = await api.listTreeByID(body);
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
| **revision** | `string` | Git reference (branch, tag, or commit SHA). If empty, the default branch (usually main) will be used. Examples: &#x60;mybranch&#x60;, &#x60;tags:v1.0.0&#x60; | [Optional] [Defaults to `undefined`] |
| **path** | `string` | Path within repository to get the tree for. If not specified, returns the root tree | [Optional] [Defaults to `undefined`] |
| **recursive** | `boolean` | Whether to retrieve tree entries recursively. If false, only immediate children are returned | [Optional] [Defaults to `undefined`] |
| **pageSize** | `string` | The maximum number of tree entries to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListTreeResponse**](ListTreeResponse.md)

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
  RepositoryApi,
} from '';
import type { RemoveRepoRolesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

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
  RepositoryApi,
} from '';
import type { RemoveRepoRolesByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

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


## updateRepository

> Repository updateRepository(orgSlug, repoSlug, updateRepositoryBody, silent)

Update Repository

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from '';
import type { UpdateRepositoryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // UpdateRepositoryBody
    updateRepositoryBody: ...,
    // boolean | Flag for update without any notifications. NOT IMPLEMENTED YET. (optional)
    silent: true,
  } satisfies UpdateRepositoryRequest;

  try {
    const data = await api.updateRepository(body);
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
| **updateRepositoryBody** | [UpdateRepositoryBody](UpdateRepositoryBody.md) |  | |
| **silent** | `boolean` | Flag for update without any notifications. NOT IMPLEMENTED YET. | [Optional] [Defaults to `undefined`] |

### Return type

[**Repository**](Repository.md)

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


## updateRepositoryByID

> Repository updateRepositoryByID(repoId, updateRepositoryBody, silent)

Update Repository (By Repo ID)

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from '';
import type { UpdateRepositoryByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // UpdateRepositoryBody
    updateRepositoryBody: ...,
    // boolean | Flag for update without any notifications. NOT IMPLEMENTED YET. (optional)
    silent: true,
  } satisfies UpdateRepositoryByIDRequest;

  try {
    const data = await api.updateRepositoryByID(body);
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
| **updateRepositoryBody** | [UpdateRepositoryBody](UpdateRepositoryBody.md) |  | |
| **silent** | `boolean` | Flag for update without any notifications. NOT IMPLEMENTED YET. | [Optional] [Defaults to `undefined`] |

### Return type

[**Repository**](Repository.md)

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

