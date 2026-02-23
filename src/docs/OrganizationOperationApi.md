# OrganizationOperationApi

All URIs are relative to *https://api.sourcecraft.tech*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getOrganizationInvitesOperationByID**](OrganizationOperationApi.md#getorganizationinvitesoperationbyid) | **GET** /operations/create-invites/id:{operation_id} | Get invitation creation operation status (By Operation ID) |



## getOrganizationInvitesOperationByID

> CreateOrganizationInvitesOperation getOrganizationInvitesOperationByID(operationId)

Get invitation creation operation status (By Operation ID)

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
| **operationId** | `string` | Operation ID | [Defaults to `undefined`] |

### Return type

[**CreateOrganizationInvitesOperation**](CreateOrganizationInvitesOperation.md)

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

