# OrganizationApi

All URIs are relative to *https://api.sourcecraft.tech*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listOrganizationRepositories**](OrganizationApi.md#listorganizationrepositories) | **GET** /orgs/{org_slug}/repos | List Organization Repositories |
| [**listOrganizationRepositoriesByID**](OrganizationApi.md#listorganizationrepositoriesbyid) | **GET** /orgs/id:{org_id}/repos | List Organization Repositories (By Organization ID) |



## listOrganizationRepositories

> ListOrganizationRepositoriesResponse listOrganizationRepositories(orgSlug, orgId, pageSize, pageToken)

List Organization Repositories

### Example

```ts
import {
  Configuration,
  OrganizationApi,
} from '';
import type { ListOrganizationRepositoriesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrganizationApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string (optional)
    orgId: orgId_example,
    // string | The maximum number of repositories to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
  } satisfies ListOrganizationRepositoriesRequest;

  try {
    const data = await api.listOrganizationRepositories(body);
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
| **orgId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **pageSize** | `string` | The maximum number of repositories to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListOrganizationRepositoriesResponse**](ListOrganizationRepositoriesResponse.md)

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


## listOrganizationRepositoriesByID

> ListOrganizationRepositoriesResponse listOrganizationRepositoriesByID(orgId, pageSize, pageToken)

List Organization Repositories (By Organization ID)

### Example

```ts
import {
  Configuration,
  OrganizationApi,
} from '';
import type { ListOrganizationRepositoriesByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrganizationApi(config);

  const body = {
    // string
    orgId: orgId_example,
    // string | The maximum number of repositories to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
  } satisfies ListOrganizationRepositoriesByIDRequest;

  try {
    const data = await api.listOrganizationRepositoriesByID(body);
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
| **pageSize** | `string` | The maximum number of repositories to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListOrganizationRepositoriesResponse**](ListOrganizationRepositoriesResponse.md)

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

