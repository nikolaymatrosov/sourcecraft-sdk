# CIApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**runWorkflow**](CIApi.md#runworkflow) | **POST** /{org_slug}/{repo_slug}/ci_workflows/{workflow_name}/trigger | Run Workflow in Repository |
| [**runWorkflowByID**](CIApi.md#runworkflowbyid) | **POST** /repos/id:{repo_id}/ci_workflows/{workflow_name}/trigger | Run Workflow in Repository (By Repo ID) |



## runWorkflow

> any runWorkflow(orgSlug, repoSlug, workflowName, runCIBody)

Run Workflow in Repository

### Example

```ts
import {
  Configuration,
  CIApi,
} from '';
import type { RunWorkflowRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CIApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    workflowName: workflowName_example,
    // RunCIBody
    runCIBody: ...,
  } satisfies RunWorkflowRequest;

  try {
    const data = await api.runWorkflow(body);
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
| **workflowName** | `string` |  | [Defaults to `undefined`] |
| **runCIBody** | [RunCIBody](RunCIBody.md) |  | |

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


## runWorkflowByID

> any runWorkflowByID(repoId, workflowName, runCIBody)

Run Workflow in Repository (By Repo ID)

### Example

```ts
import {
  Configuration,
  CIApi,
} from '';
import type { RunWorkflowByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CIApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // string
    workflowName: workflowName_example,
    // RunCIBody
    runCIBody: ...,
  } satisfies RunWorkflowByIDRequest;

  try {
    const data = await api.runWorkflowByID(body);
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
| **workflowName** | `string` |  | [Defaults to `undefined`] |
| **runCIBody** | [RunCIBody](RunCIBody.md) |  | |

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

