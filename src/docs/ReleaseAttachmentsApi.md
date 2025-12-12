# ReleaseAttachmentsApi

All URIs are relative to *https://api.sourcecraft.tech*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addReleaseAssetAttachment**](ReleaseAttachmentsApi.md#addreleaseassetattachment) | **POST** /repos/{org_slug}/{repo_slug}/releases/tag/{release_tag}/attachments | Upload Attachment As Release Asset (By Release Tag) |
| [**addReleaseAssetAttachmentByID**](ReleaseAttachmentsApi.md#addreleaseassetattachmentbyid) | **POST** /releases/id:{release_id}/attachments | Upload Attachment As Release Asset (By Release ID) |



## addReleaseAssetAttachment

> ReleaseAsset addReleaseAssetAttachment(orgSlug, repoSlug, releaseTag, file, name)

Upload Attachment As Release Asset (By Release Tag)

Uploads attachment to a release and adds it as an asset

### Example

```ts
import {
  Configuration,
  ReleaseAttachmentsApi,
} from '';
import type { AddReleaseAssetAttachmentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReleaseAttachmentsApi(config);

  const body = {
    // string
    orgSlug: orgSlug_example,
    // string
    repoSlug: repoSlug_example,
    // string
    releaseTag: releaseTag_example,
    // Blob | The file to upload
    file: BINARY_DATA_HERE,
    // string | The intended name of the asset
    name: name_example,
  } satisfies AddReleaseAssetAttachmentRequest;

  try {
    const data = await api.addReleaseAssetAttachment(body);
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
| **releaseTag** | `string` |  | [Defaults to `undefined`] |
| **file** | `Blob` | The file to upload | [Defaults to `undefined`] |
| **name** | `string` | The intended name of the asset | [Defaults to `undefined`] |

### Return type

[**ReleaseAsset**](ReleaseAsset.md)

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


## addReleaseAssetAttachmentByID

> ReleaseAsset addReleaseAssetAttachmentByID(releaseId, file)

Upload Attachment As Release Asset (By Release ID)

Uploads attachment to a release and adds it as an asset

### Example

```ts
import {
  Configuration,
  ReleaseAttachmentsApi,
} from '';
import type { AddReleaseAssetAttachmentByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReleaseAttachmentsApi(config);

  const body = {
    // string
    releaseId: releaseId_example,
    // Blob | The file to upload
    file: BINARY_DATA_HERE,
  } satisfies AddReleaseAssetAttachmentByIDRequest;

  try {
    const data = await api.addReleaseAssetAttachmentByID(body);
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
| **releaseId** | `string` |  | [Defaults to `undefined`] |
| **file** | `Blob` | The file to upload | [Defaults to `undefined`] |

### Return type

[**ReleaseAsset**](ReleaseAsset.md)

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

