# IssuesCommentsAttachmentsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteIssueCommentAttachment**](IssuesCommentsAttachmentsApi.md#deleteissuecommentattachment) | **DELETE** /issue_comments/id:{issue_comment_id}/attachments/{attachment_id} | Remove attachment |
| [**getIssueCommentAttachment**](IssuesCommentsAttachmentsApi.md#getissuecommentattachment) | **GET** /issue_comments/id:{issue_comment_id}/attachments/{attachment_id} | Get attachment |
| [**listIssueCommentAttachments**](IssuesCommentsAttachmentsApi.md#listissuecommentattachments) | **GET** /issue_comments/id:{issue_comment_id}/attachments | List attachments |
| [**uploadIssueCommentAttachment**](IssuesCommentsAttachmentsApi.md#uploadissuecommentattachment) | **POST** /issue_comments/id:{issue_comment_id}/attachments | Upload attachment |



## deleteIssueCommentAttachment

> object deleteIssueCommentAttachment(issueCommentId, attachmentId, silent)

Remove attachment

Permanently removes an attachment from a comment. The file will be deleted and cannot be reused.

### Example

```ts
import {
  Configuration,
  IssuesCommentsAttachmentsApi,
} from '';
import type { DeleteIssueCommentAttachmentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesCommentsAttachmentsApi(config);

  const body = {
    // string
    issueCommentId: issueCommentId_example,
    // string
    attachmentId: attachmentId_example,
    // boolean (optional)
    silent: true,
  } satisfies DeleteIssueCommentAttachmentRequest;

  try {
    const data = await api.deleteIssueCommentAttachment(body);
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
| **issueCommentId** | `string` |  | [Defaults to `undefined`] |
| **attachmentId** | `string` |  | [Defaults to `undefined`] |
| **silent** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

**object**

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


## getIssueCommentAttachment

> AttachmentDownloadable getIssueCommentAttachment(issueCommentId, attachmentId)

Get attachment

Gets attachment details and download URL

### Example

```ts
import {
  Configuration,
  IssuesCommentsAttachmentsApi,
} from '';
import type { GetIssueCommentAttachmentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesCommentsAttachmentsApi(config);

  const body = {
    // string
    issueCommentId: issueCommentId_example,
    // string
    attachmentId: attachmentId_example,
  } satisfies GetIssueCommentAttachmentRequest;

  try {
    const data = await api.getIssueCommentAttachment(body);
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
| **issueCommentId** | `string` |  | [Defaults to `undefined`] |
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


## listIssueCommentAttachments

> AttachmentsResponse listIssueCommentAttachments(issueCommentId)

List attachments

Retrieves all attachments from an issue

### Example

```ts
import {
  Configuration,
  IssuesCommentsAttachmentsApi,
} from '';
import type { ListIssueCommentAttachmentsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesCommentsAttachmentsApi(config);

  const body = {
    // string
    issueCommentId: issueCommentId_example,
  } satisfies ListIssueCommentAttachmentsRequest;

  try {
    const data = await api.listIssueCommentAttachments(body);
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
| **issueCommentId** | `string` |  | [Defaults to `undefined`] |

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


## uploadIssueCommentAttachment

> Attachment uploadIssueCommentAttachment(issueCommentId, file)

Upload attachment

Uploads attachment to an issue

### Example

```ts
import {
  Configuration,
  IssuesCommentsAttachmentsApi,
} from '';
import type { UploadIssueCommentAttachmentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IssuesCommentsAttachmentsApi(config);

  const body = {
    // string
    issueCommentId: issueCommentId_example,
    // Blob | The file to upload
    file: BINARY_DATA_HERE,
  } satisfies UploadIssueCommentAttachmentRequest;

  try {
    const data = await api.uploadIssueCommentAttachment(body);
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
| **issueCommentId** | `string` |  | [Defaults to `undefined`] |
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

