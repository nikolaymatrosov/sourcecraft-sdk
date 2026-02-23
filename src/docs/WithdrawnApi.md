# WithdrawnApi

All URIs are relative to *https://api.sourcecraft.tech*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteRepositoryDeprecated**](WithdrawnApi.md#deleterepositorydeprecated) | **DELETE** /{org_slug}/{repo_slug} | Delete Repository |
| [**getCubeArtifactsDeprecated**](WithdrawnApi.md#getcubeartifactsdeprecated) | **GET** /{org_slug}/{repo_slug}/cicd/artifacts/{run_slug}/{workflow_slug}/{task_slug}/{cube_slug} | Get Artifacts from a CI Run |
| [**getCubeLogsDeprecated**](WithdrawnApi.md#getcubelogsdeprecated) | **GET** /{org_slug}/{repo_slug}/cicd/logs/{run_slug}/{workflow_slug}/{task_slug}/{cube_slug} | Get Logs from a Running CI Cube in Repository |
| [**getRunDeprecated**](WithdrawnApi.md#getrundeprecated) | **GET** /{org_slug}/{repo_slug}/cicd/runs/{run_slug} | Get CI Run in Repository |
| [**getWorkflowDeprecated**](WithdrawnApi.md#getworkflowdeprecated) | **GET** /{org_slug}/{repo_slug}/cicd/runs/{run_slug}/{workflow_slug} | Get Running CI Workflow in Repository |
| [**listRunsDeprecated**](WithdrawnApi.md#listrunsdeprecated) | **GET** /{org_slug}/{repo_slug}/cicd/runs | List CI Runs in Repository |
| [**runWorkflow**](WithdrawnApi.md#runworkflow) | **POST** /{org_slug}/{repo_slug}/ci_workflows/{workflow_name}/trigger | Run Workflow in Repository |
| [**runWorkflowByID**](WithdrawnApi.md#runworkflowbyid) | **POST** /repos/id:{repo_id}/ci_workflows/{workflow_name}/trigger | Run Workflow in Repository (By Repo ID) |
| [**runWorkflowsDeprecated**](WithdrawnApi.md#runworkflowsdeprecated) | **POST** /{org_slug}/{repo_slug}/cicd/runs | Run Workflows in Repository |
| [**updateRepositoryDeprecated**](WithdrawnApi.md#updaterepositorydeprecated) | **PATCH** /{org_slug}/{repo_slug} | Update Repository |



## deleteRepositoryDeprecated

> deleteRepositoryDeprecated(orgSlug, repoSlug, silent)

Delete Repository

Endpoint is deprecated, please use &#x60;DELETE /repos/{org_slug}/{repo_slug}&#x60; instead

### Example

```ts
import {
  Configuration,
  WithdrawnApi,
} from '';
import type { DeleteRepositoryDeprecatedRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WithdrawnApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // boolean | Flag for deleting without any notifications. NOT IMPLEMENTED YET. (optional)
    silent: true,
  } satisfies DeleteRepositoryDeprecatedRequest;

  try {
    const data = await api.deleteRepositoryDeprecated(body);
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


## getCubeArtifactsDeprecated

> GetCubeArtifactsResponse getCubeArtifactsDeprecated(orgSlug, repoSlug, runSlug, workflowSlug, taskSlug, cubeSlug)

Get Artifacts from a CI Run

Endpoint is deprecated, please use &#x60;GET /repos/{org_slug}/{repo_slug}/cicd/artifacts/{run_slug}/{workflow_slug}/{task_slug}/{cube_slug}&#x60; instead

### Example

```ts
import {
  Configuration,
  WithdrawnApi,
} from '';
import type { GetCubeArtifactsDeprecatedRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WithdrawnApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    runSlug: runSlug_example,
    // string | Workflow name as defined in the config.
    workflowSlug: workflowSlug_example,
    // string | Task name as defined in the config.
    taskSlug: taskSlug_example,
    // string | Cube name as defined in the config.
    cubeSlug: cubeSlug_example,
  } satisfies GetCubeArtifactsDeprecatedRequest;

  try {
    const data = await api.getCubeArtifactsDeprecated(body);
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
| **runSlug** | `string` |  | [Defaults to `undefined`] |
| **workflowSlug** | `string` | Workflow name as defined in the config. | [Defaults to `undefined`] |
| **taskSlug** | `string` | Task name as defined in the config. | [Defaults to `undefined`] |
| **cubeSlug** | `string` | Cube name as defined in the config. | [Defaults to `undefined`] |

### Return type

[**GetCubeArtifactsResponse**](GetCubeArtifactsResponse.md)

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


## getCubeLogsDeprecated

> GetCubeLogsResponse getCubeLogsDeprecated(orgSlug, repoSlug, runSlug, workflowSlug, taskSlug, cubeSlug, page)

Get Logs from a Running CI Cube in Repository

Endpoint is deprecated, please use &#x60;GET /repos/{org_slug}/{repo_slug}/cicd/logs/{run_slug}/{workflow_slug}/{task_slug}/{cube_slug}&#x60; instead

### Example

```ts
import {
  Configuration,
  WithdrawnApi,
} from '';
import type { GetCubeLogsDeprecatedRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WithdrawnApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    runSlug: runSlug_example,
    // string | Workflow name as defined in the config.
    workflowSlug: workflowSlug_example,
    // string | Task name as defined in the config.
    taskSlug: taskSlug_example,
    // string | Cube name as defined in the config.
    cubeSlug: cubeSlug_example,
    // number | Page number to fetch, by default 1.  Logs are split into pages; pages are not guaranteed to be the same size and are intended to be read in order. When one page is finished, the subsequent one starts being written. (optional)
    page: 789,
  } satisfies GetCubeLogsDeprecatedRequest;

  try {
    const data = await api.getCubeLogsDeprecated(body);
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
| **runSlug** | `string` |  | [Defaults to `undefined`] |
| **workflowSlug** | `string` | Workflow name as defined in the config. | [Defaults to `undefined`] |
| **taskSlug** | `string` | Task name as defined in the config. | [Defaults to `undefined`] |
| **cubeSlug** | `string` | Cube name as defined in the config. | [Defaults to `undefined`] |
| **page** | `number` | Page number to fetch, by default 1.  Logs are split into pages; pages are not guaranteed to be the same size and are intended to be read in order. When one page is finished, the subsequent one starts being written. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetCubeLogsResponse**](GetCubeLogsResponse.md)

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


## getRunDeprecated

> Run getRunDeprecated(orgSlug, repoSlug, runSlug)

Get CI Run in Repository

Endpoint is deprecated, please use &#x60;GET /repos/{org_slug}/{repo_slug}/cicd/runs/{run_slug}&#x60; instead

### Example

```ts
import {
  Configuration,
  WithdrawnApi,
} from '';
import type { GetRunDeprecatedRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WithdrawnApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    runSlug: runSlug_example,
  } satisfies GetRunDeprecatedRequest;

  try {
    const data = await api.getRunDeprecated(body);
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
| **runSlug** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Run**](Run.md)

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


## getWorkflowDeprecated

> Workflow getWorkflowDeprecated(orgSlug, repoSlug, runSlug, workflowSlug)

Get Running CI Workflow in Repository

Endpoint is deprecated, please use &#x60;GET /repos/{org_slug}/{repo_slug}/cicd/runs/{run_slug}/{workflow_slug}&#x60; instead

### Example

```ts
import {
  Configuration,
  WithdrawnApi,
} from '';
import type { GetWorkflowDeprecatedRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WithdrawnApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    runSlug: runSlug_example,
    // string | Workflow name as defined in the config.
    workflowSlug: workflowSlug_example,
  } satisfies GetWorkflowDeprecatedRequest;

  try {
    const data = await api.getWorkflowDeprecated(body);
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
| **runSlug** | `string` |  | [Defaults to `undefined`] |
| **workflowSlug** | `string` | Workflow name as defined in the config. | [Defaults to `undefined`] |

### Return type

[**Workflow**](Workflow.md)

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


## listRunsDeprecated

> ListRunsResponse listRunsDeprecated(orgSlug, repoSlug, pageSize, pageToken)

List CI Runs in Repository

Endpoint is deprecated, please use &#x60;GET /repos/{org_slug}/{repo_slug}/cicd/runs&#x60; instead

### Example

```ts
import {
  Configuration,
  WithdrawnApi,
} from '';
import type { ListRunsDeprecatedRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WithdrawnApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string | The maximum number of runs to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
  } satisfies ListRunsDeprecatedRequest;

  try {
    const data = await api.listRunsDeprecated(body);
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
| **pageSize** | `string` | The maximum number of runs to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListRunsResponse**](ListRunsResponse.md)

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


## runWorkflow

> RunCIWorkflowResponse runWorkflow(orgSlug, repoSlug, workflowName, runCIBody)

Run Workflow in Repository

Endpoint is deprecated, please use &#x60;POST /repos/{org_slug}/{repo_slug}/cicd/runs&#x60; instead

### Example

```ts
import {
  Configuration,
  WithdrawnApi,
} from '';
import type { RunWorkflowRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WithdrawnApi(config);

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

[**RunCIWorkflowResponse**](RunCIWorkflowResponse.md)

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

> RunCIWorkflowResponse runWorkflowByID(repoId, workflowName, runCIBody)

Run Workflow in Repository (By Repo ID)

Endpoint is deprecated, please use &#x60;POST /repos/id:{repo_id}/cicd/runs&#x60; instead

### Example

```ts
import {
  Configuration,
  WithdrawnApi,
} from '';
import type { RunWorkflowByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WithdrawnApi(config);

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

[**RunCIWorkflowResponse**](RunCIWorkflowResponse.md)

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


## runWorkflowsDeprecated

> Run runWorkflowsDeprecated(orgSlug, repoSlug, runWorkflowsBody)

Run Workflows in Repository

Endpoint is deprecated, please use &#x60;POST /repos/{org_slug}/{repo_slug}/cicd/runs&#x60; instead

### Example

```ts
import {
  Configuration,
  WithdrawnApi,
} from '';
import type { RunWorkflowsDeprecatedRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WithdrawnApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // RunWorkflowsBody
    runWorkflowsBody: ...,
  } satisfies RunWorkflowsDeprecatedRequest;

  try {
    const data = await api.runWorkflowsDeprecated(body);
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
| **runWorkflowsBody** | [RunWorkflowsBody](RunWorkflowsBody.md) |  | |

### Return type

[**Run**](Run.md)

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


## updateRepositoryDeprecated

> Repository updateRepositoryDeprecated(orgSlug, repoSlug, updateRepositoryBody, silent)

Update Repository

Endpoint is deprecated, please use &#x60;PATCH /repos/{org_slug}/{repo_slug}&#x60; instead

### Example

```ts
import {
  Configuration,
  WithdrawnApi,
} from '';
import type { UpdateRepositoryDeprecatedRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WithdrawnApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // UpdateRepositoryBody
    updateRepositoryBody: ...,
    // boolean | Flag for update without any notifications. NOT IMPLEMENTED YET. (optional)
    silent: true,
  } satisfies UpdateRepositoryDeprecatedRequest;

  try {
    const data = await api.updateRepositoryDeprecated(body);
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

