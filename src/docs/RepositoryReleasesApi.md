# RepositoryReleasesApi

All URIs are relative to *https://api.sourcecraft.tech*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create**](RepositoryReleasesApi.md#create) | **POST** /repos/{org_slug}/{repo_slug}/releases | Create Release in Repository |
| [**createByID**](RepositoryReleasesApi.md#createbyid) | **POST** /repos/id:{repo_id}/releases | Create Release in Repository (By Repo ID) |
| [**discardByID**](RepositoryReleasesApi.md#discardbyid) | **POST** /releases/id:{release_id}/discard | Discard Release (By ID) |
| [**discardByTag**](RepositoryReleasesApi.md#discardbytag) | **POST** /repos/{org_slug}/{repo_slug}/releases/tag/{release_tag}/discard | Discard Release (By Tag) |
| [**getByID**](RepositoryReleasesApi.md#getbyid) | **GET** /releases/id:{release_id} | Get Release (By ID) |
| [**getByTag**](RepositoryReleasesApi.md#getbytag) | **GET** /repos/{org_slug}/{repo_slug}/releases/tag/{release_tag} | Get Release (By Tag) |
| [**getLatest**](RepositoryReleasesApi.md#getlatest) | **GET** /repos/{org_slug}/{repo_slug}/releases/latest | Get Latest Release |
| [**getLatestByID**](RepositoryReleasesApi.md#getlatestbyid) | **GET** /repos/id:{repo_id}/releases/latest | Get Latest Release (By Repo ID) |
| [**list**](RepositoryReleasesApi.md#list) | **GET** /repos/{org_slug}/{repo_slug}/releases | List Releases in Repository |
| [**listByID**](RepositoryReleasesApi.md#listbyid) | **GET** /repos/id:{repo_id}/releases | List Releases in Repository (By Repo ID) |
| [**publishByID**](RepositoryReleasesApi.md#publishbyid) | **POST** /releases/id:{release_id}/publish | Publish Release (By ID) |
| [**publishByTag**](RepositoryReleasesApi.md#publishbytag) | **POST** /repos/{org_slug}/{repo_slug}/releases/tag/{release_tag}/publish | Publish Release (By Tag) |



## create

> Release create(orgSlug, repoSlug, createReleaseBody)

Create Release in Repository

### Example

```ts
import {
  Configuration,
  RepositoryReleasesApi,
} from '';
import type { CreateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryReleasesApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // CreateReleaseBody
    createReleaseBody: ...,
  } satisfies CreateRequest;

  try {
    const data = await api.create(body);
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
| **createReleaseBody** | [CreateReleaseBody](CreateReleaseBody.md) |  | |

### Return type

[**Release**](Release.md)

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


## createByID

> Release createByID(repoId, createReleaseBody)

Create Release in Repository (By Repo ID)

### Example

```ts
import {
  Configuration,
  RepositoryReleasesApi,
} from '';
import type { CreateByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryReleasesApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // CreateReleaseBody
    createReleaseBody: ...,
  } satisfies CreateByIDRequest;

  try {
    const data = await api.createByID(body);
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
| **createReleaseBody** | [CreateReleaseBody](CreateReleaseBody.md) |  | |

### Return type

[**Release**](Release.md)

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


## discardByID

> Release discardByID(releaseId, releaseTag)

Discard Release (By ID)

Only \&#39;published\&#39; releases may be discarded, drafts can only be deleted or published. Contrary to deleted releases, discarded releases are still visible to maintainers.

### Example

```ts
import {
  Configuration,
  RepositoryReleasesApi,
} from '';
import type { DiscardByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryReleasesApi(config);

  const body = {
    // string
    releaseId: releaseId_example,
    // string (optional)
    releaseTag: releaseTag_example,
  } satisfies DiscardByIDRequest;

  try {
    const data = await api.discardByID(body);
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
| **releaseId** | `string` |  | [Defaults to `undefined`] |
| **releaseTag** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Release**](Release.md)

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


## discardByTag

> Release discardByTag(orgSlug, repoSlug, releaseTag, releaseId)

Discard Release (By Tag)

Only \&#39;published\&#39; releases may be discarded, drafts can only be deleted or published. Contrary to deleted releases, discarded releases are still visible to maintainers.

### Example

```ts
import {
  Configuration,
  RepositoryReleasesApi,
} from '';
import type { DiscardByTagRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryReleasesApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    releaseTag: releaseTag_example,
    // string (optional)
    releaseId: releaseId_example,
  } satisfies DiscardByTagRequest;

  try {
    const data = await api.discardByTag(body);
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
| **releaseTag** | `string` |  | [Defaults to `undefined`] |
| **releaseId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Release**](Release.md)

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


## getByID

> Release getByID(releaseId, releaseTag)

Get Release (By ID)

### Example

```ts
import {
  Configuration,
  RepositoryReleasesApi,
} from '';
import type { GetByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryReleasesApi(config);

  const body = {
    // string
    releaseId: releaseId_example,
    // string (optional)
    releaseTag: releaseTag_example,
  } satisfies GetByIDRequest;

  try {
    const data = await api.getByID(body);
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
| **releaseId** | `string` |  | [Defaults to `undefined`] |
| **releaseTag** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Release**](Release.md)

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


## getByTag

> Release getByTag(orgSlug, repoSlug, releaseTag, releaseId)

Get Release (By Tag)

### Example

```ts
import {
  Configuration,
  RepositoryReleasesApi,
} from '';
import type { GetByTagRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryReleasesApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    releaseTag: releaseTag_example,
    // string (optional)
    releaseId: releaseId_example,
  } satisfies GetByTagRequest;

  try {
    const data = await api.getByTag(body);
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
| **releaseTag** | `string` |  | [Defaults to `undefined`] |
| **releaseId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Release**](Release.md)

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


## getLatest

> Release getLatest(orgSlug, repoSlug)

Get Latest Release

Retrieves a release marked as latest (by default, last published release)

### Example

```ts
import {
  Configuration,
  RepositoryReleasesApi,
} from '';
import type { GetLatestRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryReleasesApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
  } satisfies GetLatestRequest;

  try {
    const data = await api.getLatest(body);
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

[**Release**](Release.md)

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


## getLatestByID

> Release getLatestByID(repoId)

Get Latest Release (By Repo ID)

Retrieves a release marked as latest (by default, last published release)

### Example

```ts
import {
  Configuration,
  RepositoryReleasesApi,
} from '';
import type { GetLatestByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryReleasesApi(config);

  const body = {
    // string
    repoId: repoId_example,
  } satisfies GetLatestByIDRequest;

  try {
    const data = await api.getLatestByID(body);
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

[**Release**](Release.md)

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


## list

> ListReleasesResponse list(orgSlug, repoSlug, pageSize, pageToken, sortBy)

List Releases in Repository

### Example

```ts
import {
  Configuration,
  RepositoryReleasesApi,
} from '';
import type { ListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryReleasesApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string | The maximum number of releases to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
    // string | Ordering options: comma separated list of fields. For example: \"name, created_at\" Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"name, -created_at\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. Available fields: created_at, released_at (optional)
    sortBy: sortBy_example,
  } satisfies ListRequest;

  try {
    const data = await api.list(body);
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
| **pageSize** | `string` | The maximum number of releases to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. For example: \&quot;name, created_at\&quot; Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;name, -created_at\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. Available fields: created_at, released_at | [Optional] [Defaults to `undefined`] |

### Return type

[**ListReleasesResponse**](ListReleasesResponse.md)

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


## listByID

> ListReleasesResponse listByID(repoId, pageSize, pageToken, sortBy)

List Releases in Repository (By Repo ID)

### Example

```ts
import {
  Configuration,
  RepositoryReleasesApi,
} from '';
import type { ListByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryReleasesApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // string | The maximum number of releases to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
    // string | Ordering options: comma separated list of fields. For example: \"name, created_at\" Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"name, -created_at\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. Available fields: created_at, released_at (optional)
    sortBy: sortBy_example,
  } satisfies ListByIDRequest;

  try {
    const data = await api.listByID(body);
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
| **pageSize** | `string` | The maximum number of releases to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. For example: \&quot;name, created_at\&quot; Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;name, -created_at\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. Available fields: created_at, released_at | [Optional] [Defaults to `undefined`] |

### Return type

[**ListReleasesResponse**](ListReleasesResponse.md)

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


## publishByID

> Release publishByID(releaseId, releaseTag)

Publish Release (By ID)

Only \&#39;draft\&#39; releases may be published

### Example

```ts
import {
  Configuration,
  RepositoryReleasesApi,
} from '';
import type { PublishByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryReleasesApi(config);

  const body = {
    // string
    releaseId: releaseId_example,
    // string (optional)
    releaseTag: releaseTag_example,
  } satisfies PublishByIDRequest;

  try {
    const data = await api.publishByID(body);
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
| **releaseId** | `string` |  | [Defaults to `undefined`] |
| **releaseTag** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Release**](Release.md)

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


## publishByTag

> Release publishByTag(orgSlug, repoSlug, releaseTag, releaseId)

Publish Release (By Tag)

Only \&#39;draft\&#39; releases may be published

### Example

```ts
import {
  Configuration,
  RepositoryReleasesApi,
} from '';
import type { PublishByTagRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RepositoryReleasesApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    releaseTag: releaseTag_example,
    // string (optional)
    releaseId: releaseId_example,
  } satisfies PublishByTagRequest;

  try {
    const data = await api.publishByTag(body);
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
| **releaseTag** | `string` |  | [Defaults to `undefined`] |
| **releaseId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Release**](Release.md)

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

