# IssuesLinkedIssuesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createIssueLink**](IssuesLinkedIssuesApi.md#createissuelink) | **POST** /repos/{org_slug}/{repo_slug}/issues/{issue_slug}/issue_links | Create Link between Issues |
| [**createIssueLinkByID**](IssuesLinkedIssuesApi.md#createissuelinkbyid) | **POST** /issues/id:{issue_id}/issue_links | Create Link between Issues (By Issue ID) |
| [**deleteIssueLink**](IssuesLinkedIssuesApi.md#deleteissuelink) | **DELETE** /issue_links/id:{issue_link_id} | Delete Link (By Link ID) |
| [**listIssueLinks**](IssuesLinkedIssuesApi.md#listissuelinks) | **GET** /repos/{org_slug}/{repo_slug}/issues/{issue_slug}/issue_links | List Issue Links |
| [**listIssueLinksByID**](IssuesLinkedIssuesApi.md#listissuelinksbyid) | **GET** /issues/id:{issue_id}/issue_links | List Issue Links (By Issue ID) |



## createIssueLink

> IssueLink createIssueLink(orgSlug, repoSlug, issueSlug, createLinkBody, silent)

Create Link between Issues

Creates a two-way relation from source issue to target issue of a specific type. Only one link can exist between two given issues.

### Example

```ts
import {
  Configuration,
  IssuesLinkedIssuesApi,
} from '';
import type { CreateIssueLinkRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLinkedIssuesApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    issueSlug: issueSlug_example,
    // CreateLinkBody
    createLinkBody: ...,
    // boolean (optional)
    silent: true,
  } satisfies CreateIssueLinkRequest;

  try {
    const data = await api.createIssueLink(body);
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
| **issueSlug** | `string` |  | [Defaults to `undefined`] |
| **createLinkBody** | [CreateLinkBody](CreateLinkBody.md) |  | |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**IssueLink**](IssueLink.md)

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


## createIssueLinkByID

> IssueLink createIssueLinkByID(issueId, createLinkBody, silent)

Create Link between Issues (By Issue ID)

Creates a two-way relation from source issue to target issue of a specific type. Only one link can exist between two given issues.

### Example

```ts
import {
  Configuration,
  IssuesLinkedIssuesApi,
} from '';
import type { CreateIssueLinkByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLinkedIssuesApi(config);

  const body = {
    // string
    issueId: issueId_example,
    // CreateLinkBody
    createLinkBody: ...,
    // boolean (optional)
    silent: true,
  } satisfies CreateIssueLinkByIDRequest;

  try {
    const data = await api.createIssueLinkByID(body);
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
| **issueId** | `string` |  | [Defaults to `undefined`] |
| **createLinkBody** | [CreateLinkBody](CreateLinkBody.md) |  | |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**IssueLink**](IssueLink.md)

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


## deleteIssueLink

> deleteIssueLink(issueLinkId, silent)

Delete Link (By Link ID)

Removes links between issues by ID

### Example

```ts
import {
  Configuration,
  IssuesLinkedIssuesApi,
} from '';
import type { DeleteIssueLinkRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLinkedIssuesApi(config);

  const body = {
    // string
    issueLinkId: issueLinkId_example,
    // boolean (optional)
    silent: true,
  } satisfies DeleteIssueLinkRequest;

  try {
    const data = await api.deleteIssueLink(body);
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
| **issueLinkId** | `string` |  | [Defaults to `undefined`] |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

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


## listIssueLinks

> ListLinksResponse listIssueLinks(orgSlug, repoSlug, issueSlug, pageSize, pageToken, sortBy)

List Issue Links

Retrieves links between this issue and other issues

### Example

```ts
import {
  Configuration,
  IssuesLinkedIssuesApi,
} from '';
import type { ListIssueLinksRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLinkedIssuesApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    issueSlug: issueSlug_example,
    // string | The maximum number of issues to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
    // string | Ordering options: comma separated list of fields. For example: \"name, created_at\" Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"name, -created_at\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. (optional)
    sortBy: sortBy_example,
  } satisfies ListIssueLinksRequest;

  try {
    const data = await api.listIssueLinks(body);
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
| **issueSlug** | `string` |  | [Defaults to `undefined`] |
| **pageSize** | `string` | The maximum number of issues to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. For example: \&quot;name, created_at\&quot; Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;name, -created_at\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListLinksResponse**](ListLinksResponse.md)

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


## listIssueLinksByID

> ListLinksResponse listIssueLinksByID(issueId, pageSize, pageToken, sortBy)

List Issue Links (By Issue ID)

Retrieves links between this issue and other issues

### Example

```ts
import {
  Configuration,
  IssuesLinkedIssuesApi,
} from '';
import type { ListIssueLinksByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesLinkedIssuesApi(config);

  const body = {
    // string
    issueId: issueId_example,
    // string | The maximum number of issues to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
    // string | Ordering options: comma separated list of fields. For example: \"name, created_at\" Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"name, -created_at\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. (optional)
    sortBy: sortBy_example,
  } satisfies ListIssueLinksByIDRequest;

  try {
    const data = await api.listIssueLinksByID(body);
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
| **issueId** | `string` |  | [Defaults to `undefined`] |
| **pageSize** | `string` | The maximum number of issues to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. For example: \&quot;name, created_at\&quot; Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;name, -created_at\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListLinksResponse**](ListLinksResponse.md)

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

