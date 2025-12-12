# OrganizationInvitesApi

All URIs are relative to *https://api.sourcecraft.tech*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOrganizationInvites**](OrganizationInvitesApi.md#createorganizationinvites) | **POST** /orgs/{org_slug}/invites | Create Organization Invitations |
| [**createOrganizationInvitesByID**](OrganizationInvitesApi.md#createorganizationinvitesbyid) | **POST** /orgs/id:{org_id}/invites | Create Organization Invitations (By Organization ID) |
| [**listOrganizationInvites**](OrganizationInvitesApi.md#listorganizationinvites) | **GET** /orgs/{org_slug}/invites | List Organization Invitations |
| [**listOrganizationInvitesByID**](OrganizationInvitesApi.md#listorganizationinvitesbyid) | **GET** /orgs/id:{org_id}/invites | List Organization Invitations (By Organization ID) |



## createOrganizationInvites

> CreateOrganizationInvitesResponse createOrganizationInvites(orgSlug, createOrganizationInvitesBody, orgId)

Create Organization Invitations

Creates invitations asynchronously. Poll operation status at &#x60;GET /orgs/{org_slug}/operations/create-invites/{operation_id}&#x60;

### Example

```ts
import {
  Configuration,
  OrganizationInvitesApi,
} from '';
import type { CreateOrganizationInvitesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrganizationInvitesApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // CreateOrganizationInvitesBody
    createOrganizationInvitesBody: ...,
    // string (optional)
    orgId: orgId_example,
  } satisfies CreateOrganizationInvitesRequest;

  try {
    const data = await api.createOrganizationInvites(body);
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
| **createOrganizationInvitesBody** | [CreateOrganizationInvitesBody](CreateOrganizationInvitesBody.md) |  | |
| **orgId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**CreateOrganizationInvitesResponse**](CreateOrganizationInvitesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | A successful response. |  -  |
| **0** | Both Client Errors (4xx) and Server Errors (5xx) are serialized into this scheme |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createOrganizationInvitesByID

> CreateOrganizationInvitesResponse createOrganizationInvitesByID(orgId, createOrganizationInvitesBody)

Create Organization Invitations (By Organization ID)

Creates invitations asynchronously. Poll operation status at &#x60;GET /orgs/id:{org_id}/operations/create-invites/{operation_id}&#x60;

### Example

```ts
import {
  Configuration,
  OrganizationInvitesApi,
} from '';
import type { CreateOrganizationInvitesByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrganizationInvitesApi(config);

  const body = {
    // string
    orgId: orgId_example,
    // CreateOrganizationInvitesBody
    createOrganizationInvitesBody: ...,
  } satisfies CreateOrganizationInvitesByIDRequest;

  try {
    const data = await api.createOrganizationInvitesByID(body);
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
| **createOrganizationInvitesBody** | [CreateOrganizationInvitesBody](CreateOrganizationInvitesBody.md) |  | |

### Return type

[**CreateOrganizationInvitesResponse**](CreateOrganizationInvitesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | A successful response. |  -  |
| **0** | Both Client Errors (4xx) and Server Errors (5xx) are serialized into this scheme |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listOrganizationInvites

> ListOrganizationInvitesResponse listOrganizationInvites(orgSlug, orgId, pageSize, pageToken)

List Organization Invitations

### Example

```ts
import {
  Configuration,
  OrganizationInvitesApi,
} from '';
import type { ListOrganizationInvitesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrganizationInvitesApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string (optional)
    orgId: orgId_example,
    // string | The maximum number of repositories to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
  } satisfies ListOrganizationInvitesRequest;

  try {
    const data = await api.listOrganizationInvites(body);
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

[**ListOrganizationInvitesResponse**](ListOrganizationInvitesResponse.md)

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


## listOrganizationInvitesByID

> ListOrganizationInvitesResponse listOrganizationInvitesByID(orgId, pageSize, pageToken)

List Organization Invitations (By Organization ID)

### Example

```ts
import {
  Configuration,
  OrganizationInvitesApi,
} from '';
import type { ListOrganizationInvitesByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrganizationInvitesApi(config);

  const body = {
    // string
    orgId: orgId_example,
    // string | The maximum number of repositories to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
  } satisfies ListOrganizationInvitesByIDRequest;

  try {
    const data = await api.listOrganizationInvitesByID(body);
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

[**ListOrganizationInvitesResponse**](ListOrganizationInvitesResponse.md)

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

