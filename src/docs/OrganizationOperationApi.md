# OrganizationOperationApi

All URIs are relative to *https://api.sourcecraft.tech*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getOrganizationInvitesOperation**](OrganizationOperationApi.md#getorganizationinvitesoperation) | **GET** /orgs/{org_slug}/operations/create-invites/{operation_id} | Get invitation creation operation status |
| [**getOrganizationInvitesOperationByID**](OrganizationOperationApi.md#getorganizationinvitesoperationbyid) | **GET** /orgs/id:{org_id}/operations/create-invites/{operation_id} | Get invitation creation operation status (By Organization ID) |



## getOrganizationInvitesOperation

> CreateInvitesOperation getOrganizationInvitesOperation(orgSlug, operationId, orgId)

Get invitation creation operation status

### Example

```ts
import {
  Configuration,
  OrganizationOperationApi,
} from '';
import type { GetOrganizationInvitesOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrganizationOperationApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string | Operation ID
    operationId: operationId_example,
    // string (optional)
    orgId: orgId_example,
  } satisfies GetOrganizationInvitesOperationRequest;

  try {
    const data = await api.getOrganizationInvitesOperation(body);
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
| **operationId** | `string` | Operation ID | [Defaults to `undefined`] |
| **orgId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**CreateInvitesOperation**](CreateInvitesOperation.md)

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


## getOrganizationInvitesOperationByID

> CreateInvitesOperation getOrganizationInvitesOperationByID(orgId, operationId)

Get invitation creation operation status (By Organization ID)

### Example

```ts
import {
  Configuration,
  OrganizationOperationApi,
} from '';
import type { GetOrganizationInvitesOperationByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrganizationOperationApi(config);

  const body = {
    // string
    orgId: orgId_example,
    // string | Operation ID
    operationId: operationId_example,
  } satisfies GetOrganizationInvitesOperationByIDRequest;

  try {
    const data = await api.getOrganizationInvitesOperationByID(body);
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
| **operationId** | `string` | Operation ID | [Defaults to `undefined`] |

### Return type

[**CreateInvitesOperation**](CreateInvitesOperation.md)

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

