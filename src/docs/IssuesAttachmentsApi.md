# IssuesAttachmentsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteIssueAttachment**](IssuesAttachmentsApi.md#deleteissueattachment) | **DELETE** /repos/{org_slug}/{repo_slug}/issues/{issue_slug}/attachments/{attachment_id} | Remove attachment |
| [**deleteIssueAttachmentByID**](IssuesAttachmentsApi.md#deleteissueattachmentbyid) | **DELETE** /issues/id:{issue_id}/attachments/{attachment_id} | Remove attachment (by Issue ID) |
| [**getIssueAttachment**](IssuesAttachmentsApi.md#getissueattachment) | **GET** /repos/{org_slug}/{repo_slug}/issues/{issue_slug}/attachments/{attachment_id} | Get attachment |
| [**getIssueAttachmentByID**](IssuesAttachmentsApi.md#getissueattachmentbyid) | **GET** /issues/id:{issue_id}/attachments/{attachment_id} | Get attachment (By Issue ID) |
| [**listIssueAttachments**](IssuesAttachmentsApi.md#listissueattachments) | **GET** /repos/{org_slug}/{repo_slug}/issues/{issue_slug}/attachments | List attachments |
| [**listIssueAttachmentsByID**](IssuesAttachmentsApi.md#listissueattachmentsbyid) | **GET** /issues/id:{issue_id}/attachments | List attachments (By Issue ID) |
| [**uploadIssueAttachment**](IssuesAttachmentsApi.md#uploadissueattachment) | **POST** /repos/{org_slug}/{repo_slug}/issues/{issue_slug}/attachments | Upload attachment |



## deleteIssueAttachment

> deleteIssueAttachment(orgSlug, repoSlug, issueSlug, attachmentId, silent)

Remove attachment

Permanently removes an attachment from an issue. The file will be deleted and cannot be reused.

### Example

```ts
import {
  Configuration,
  IssuesAttachmentsApi,
} from '';
import type { DeleteIssueAttachmentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesAttachmentsApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    issueSlug: issueSlug_example,
    // string
    attachmentId: attachmentId_example,
    // boolean | creation options (query) (optional)
    silent: true,
  } satisfies DeleteIssueAttachmentRequest;

  try {
    const data = await api.deleteIssueAttachment(body);
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
| **attachmentId** | `string` |  | [Defaults to `undefined`] |
| **silent** | `boolean` | creation options (query) | [Optional] [Defaults to `undefined`] |

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


## deleteIssueAttachmentByID

> deleteIssueAttachmentByID(issueId, attachmentId, silent)

Remove attachment (by Issue ID)

Permanently removes an attachment from an issue. The file will be deleted and cannot be reused.

### Example

```ts
import {
  Configuration,
  IssuesAttachmentsApi,
} from '';
import type { DeleteIssueAttachmentByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesAttachmentsApi(config);

  const body = {
    // string
    issueId: issueId_example,
    // string
    attachmentId: attachmentId_example,
    // boolean | creation options (query) (optional)
    silent: true,
  } satisfies DeleteIssueAttachmentByIDRequest;

  try {
    const data = await api.deleteIssueAttachmentByID(body);
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
| **attachmentId** | `string` |  | [Defaults to `undefined`] |
| **silent** | `boolean` | creation options (query) | [Optional] [Defaults to `undefined`] |

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


## getIssueAttachment

> AttachmentDownloadable getIssueAttachment(orgSlug, repoSlug, issueSlug, attachmentId)

Get attachment

Gets attachment details and download URL

### Example

```ts
import {
  Configuration,
  IssuesAttachmentsApi,
} from '';
import type { GetIssueAttachmentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesAttachmentsApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    issueSlug: issueSlug_example,
    // string
    attachmentId: attachmentId_example,
  } satisfies GetIssueAttachmentRequest;

  try {
    const data = await api.getIssueAttachment(body);
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
| **attachmentId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**AttachmentDownloadable**](AttachmentDownloadable.md)

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


## getIssueAttachmentByID

> AttachmentDownloadable getIssueAttachmentByID(issueId, attachmentId)

Get attachment (By Issue ID)

Gets attachment details and download URL

### Example

```ts
import {
  Configuration,
  IssuesAttachmentsApi,
} from '';
import type { GetIssueAttachmentByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesAttachmentsApi(config);

  const body = {
    // string
    issueId: issueId_example,
    // string
    attachmentId: attachmentId_example,
  } satisfies GetIssueAttachmentByIDRequest;

  try {
    const data = await api.getIssueAttachmentByID(body);
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
| **attachmentId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**AttachmentDownloadable**](AttachmentDownloadable.md)

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


## listIssueAttachments

> AttachmentsResponse listIssueAttachments(orgSlug, repoSlug, issueSlug)

List attachments

Retrieves all attachments from an issue

### Example

```ts
import {
  Configuration,
  IssuesAttachmentsApi,
} from '';
import type { ListIssueAttachmentsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesAttachmentsApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    issueSlug: issueSlug_example,
  } satisfies ListIssueAttachmentsRequest;

  try {
    const data = await api.listIssueAttachments(body);
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

### Return type

[**AttachmentsResponse**](AttachmentsResponse.md)

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


## listIssueAttachmentsByID

> AttachmentsResponse listIssueAttachmentsByID(issueId)

List attachments (By Issue ID)

Retrieves all attachments from an issue

### Example

```ts
import {
  Configuration,
  IssuesAttachmentsApi,
} from '';
import type { ListIssueAttachmentsByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesAttachmentsApi(config);

  const body = {
    // string
    issueId: issueId_example,
  } satisfies ListIssueAttachmentsByIDRequest;

  try {
    const data = await api.listIssueAttachmentsByID(body);
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

### Return type

[**AttachmentsResponse**](AttachmentsResponse.md)

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


## uploadIssueAttachment

> Attachment uploadIssueAttachment(orgSlug, repoSlug, issueSlug, file)

Upload attachment

Uploads attachment to an issue

### Example

```ts
import {
  Configuration,
  IssuesAttachmentsApi,
} from '';
import type { UploadIssueAttachmentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesAttachmentsApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    issueSlug: issueSlug_example,
    // Blob | The file to upload
    file: BINARY_DATA_HERE,
  } satisfies UploadIssueAttachmentRequest;

  try {
    const data = await api.uploadIssueAttachment(body);
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
| **file** | `Blob` | The file to upload | [Defaults to `undefined`] |

### Return type

[**Attachment**](Attachment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | A successful response. |  -  |
| **0** | Both Client Errors (4xx) and Server Errors (5xx) are serialized into this scheme |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

