# CICDApi

All URIs are relative to *https://api.sourcecraft.tech*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCubeArtifacts**](CICDApi.md#getcubeartifacts) | **GET** /{org_slug}/{repo_slug}/cicd/artifacts/{run_slug}/{workflow_slug}/{task_slug}/{cube_slug} | Get Artifacts from a CI Run |
| [**getCubeLogs**](CICDApi.md#getcubelogs) | **GET** /{org_slug}/{repo_slug}/cicd/logs/{run_slug}/{workflow_slug}/{task_slug}/{cube_slug} | Get Logs from a Running CI Cube in Repository |
| [**getRun**](CICDApi.md#getrun) | **GET** /{org_slug}/{repo_slug}/cicd/runs/{run_slug} | Get CI Run in Repository |
| [**getWorkflow**](CICDApi.md#getworkflow) | **GET** /{org_slug}/{repo_slug}/cicd/runs/{run_slug}/{workflow_slug} | Get Running CI Workflow in Repository |
| [**listRuns**](CICDApi.md#listruns) | **GET** /{org_slug}/{repo_slug}/cicd/runs | List CI Runs in Repository |
| [**listRunsByID**](CICDApi.md#listrunsbyid) | **GET** /repos/id:{repo_id}/cicd/runs | List CI Runs in Repository (By Repo ID) |
| [**runWorkflows**](CICDApi.md#runworkflows) | **POST** /{org_slug}/{repo_slug}/cicd/runs | Run Workflows in Repository |
| [**runWorkflowsByID**](CICDApi.md#runworkflowsbyid) | **POST** /repos/id:{repo_id}/cicd/runs | Run Workflows in Repository (By Repo ID) |



## getCubeArtifacts

> GetCubeArtifactsResponse getCubeArtifacts(orgSlug, repoSlug, runSlug, workflowSlug, taskSlug, cubeSlug)

Get Artifacts from a CI Run

### Example

```ts
import {
  Configuration,
  CICDApi,
} from '';
import type { GetCubeArtifactsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CICDApi(config);

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
  } satisfies GetCubeArtifactsRequest;

  try {
    const data = await api.getCubeArtifacts(body);
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


## getCubeLogs

> GetCubeLogsResponse getCubeLogs(orgSlug, repoSlug, runSlug, workflowSlug, taskSlug, cubeSlug, page)

Get Logs from a Running CI Cube in Repository

### Example

```ts
import {
  Configuration,
  CICDApi,
} from '';
import type { GetCubeLogsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CICDApi(config);

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
  } satisfies GetCubeLogsRequest;

  try {
    const data = await api.getCubeLogs(body);
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


## getRun

> Run getRun(orgSlug, repoSlug, runSlug)

Get CI Run in Repository

### Example

```ts
import {
  Configuration,
  CICDApi,
} from '';
import type { GetRunRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CICDApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    runSlug: runSlug_example,
  } satisfies GetRunRequest;

  try {
    const data = await api.getRun(body);
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


## getWorkflow

> Workflow getWorkflow(orgSlug, repoSlug, runSlug, workflowSlug)

Get Running CI Workflow in Repository

### Example

```ts
import {
  Configuration,
  CICDApi,
} from '';
import type { GetWorkflowRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CICDApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    runSlug: runSlug_example,
    // string | Workflow name as defined in the config.
    workflowSlug: workflowSlug_example,
  } satisfies GetWorkflowRequest;

  try {
    const data = await api.getWorkflow(body);
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


## listRuns

> ListRunsResponse listRuns(orgSlug, repoSlug, pageSize, pageToken)

List CI Runs in Repository

### Example

```ts
import {
  Configuration,
  CICDApi,
} from '';
import type { ListRunsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CICDApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string | The maximum number of runs to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
  } satisfies ListRunsRequest;

  try {
    const data = await api.listRuns(body);
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


## listRunsByID

> ListRunsResponse listRunsByID(repoId, pageSize, pageToken)

List CI Runs in Repository (By Repo ID)

### Example

```ts
import {
  Configuration,
  CICDApi,
} from '';
import type { ListRunsByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CICDApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // string | The maximum number of runs to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
  } satisfies ListRunsByIDRequest;

  try {
    const data = await api.listRunsByID(body);
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


## runWorkflows

> Run runWorkflows(orgSlug, repoSlug, runWorkflowsBody)

Run Workflows in Repository

### Example

```ts
import {
  Configuration,
  CICDApi,
} from '';
import type { RunWorkflowsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CICDApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // RunWorkflowsBody
    runWorkflowsBody: ...,
  } satisfies RunWorkflowsRequest;

  try {
    const data = await api.runWorkflows(body);
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


## runWorkflowsByID

> Run runWorkflowsByID(repoId, runWorkflowsBody)

Run Workflows in Repository (By Repo ID)

### Example

```ts
import {
  Configuration,
  CICDApi,
} from '';
import type { RunWorkflowsByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CICDApi(config);

  const body = {
    // string
    repoId: repoId_example,
    // RunWorkflowsBody
    runWorkflowsBody: ...,
  } satisfies RunWorkflowsByIDRequest;

  try {
    const data = await api.runWorkflowsByID(body);
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

