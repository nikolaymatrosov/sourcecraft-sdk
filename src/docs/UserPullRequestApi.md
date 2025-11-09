# UserPullRequestApi

All URIs are relative to *https://api.sourcecraft.tech*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listUserPullRequests**](UserPullRequestApi.md#listuserpullrequests) | **GET** /users/{user_slug}/pulls | List User Pull Requests |
| [**listUserPullRequestsByID**](UserPullRequestApi.md#listuserpullrequestsbyid) | **GET** /users/id:{user_id}/pulls | List User Pull Requests (By User ID) |



## listUserPullRequests

> ListRepositoryPullRequestsResponse listUserPullRequests(userSlug, userId, role, pageSize, pageToken, sortBy)

List User Pull Requests

Lists pull requests related to a user identified by user slug.

### Example

```ts
import {
  Configuration,
  UserPullRequestApi,
} from '';
import type { ListUserPullRequestsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserPullRequestApi(config);

  const body = {
    // string
    userSlug: userSlug_example,
    // string (optional)
    userId: userId_example,
    // 'author' | 'reviewer' | 'any' | Role by which PRs should be selected: author, reviewer or any (optional)
    role: role_example,
    // string | The maximum number of pull requests to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
    // string | Ordering options: comma separated list of fields. For example: \"name, created_at\" Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"name, -created_at\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. Available fields: title, created_at, updated_at (optional)
    sortBy: sortBy_example,
  } satisfies ListUserPullRequestsRequest;

  try {
    const data = await api.listUserPullRequests(body);
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
| **userSlug** | `string` |  | [Defaults to `undefined`] |
| **userId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **role** | `author`, `reviewer`, `any` | Role by which PRs should be selected: author, reviewer or any | [Optional] [Defaults to `undefined`] [Enum: author, reviewer, any] |
| **pageSize** | `string` | The maximum number of pull requests to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. For example: \&quot;name, created_at\&quot; Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;name, -created_at\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. Available fields: title, created_at, updated_at | [Optional] [Defaults to `undefined`] |

### Return type

[**ListRepositoryPullRequestsResponse**](ListRepositoryPullRequestsResponse.md)

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


## listUserPullRequestsByID

> ListRepositoryPullRequestsResponse listUserPullRequestsByID(userId, userSlug, role, pageSize, pageToken, sortBy)

List User Pull Requests (By User ID)

Lists pull requests related to a user identified by UUID.

### Example

```ts
import {
  Configuration,
  UserPullRequestApi,
} from '';
import type { ListUserPullRequestsByIDRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserPullRequestApi(config);

  const body = {
    // string
    userId: userId_example,
    // string (optional)
    userSlug: userSlug_example,
    // 'author' | 'reviewer' | 'any' | Role by which PRs should be selected: author, reviewer or any (optional)
    role: role_example,
    // string | The maximum number of pull requests to return. The service may return fewer than this value (optional)
    pageSize: pageSize_example,
    // string | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. (optional)
    pageToken: pageToken_example,
    // string | Ordering options: comma separated list of fields. For example: \"name, created_at\" Default sorting order is ascending. To specify descending order for a field, append a \"-\" prefix; for example: \"name, -created_at\" Redundant space characters in the syntax are insignificant. \"foo, -bar\", \" foo , -bar\", and \"foo,bar\" are all equivalent. Available fields: title, created_at, updated_at (optional)
    sortBy: sortBy_example,
  } satisfies ListUserPullRequestsByIDRequest;

  try {
    const data = await api.listUserPullRequestsByID(body);
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
| **userId** | `string` |  | [Defaults to `undefined`] |
| **userSlug** | `string` |  | [Optional] [Defaults to `undefined`] |
| **role** | `author`, `reviewer`, `any` | Role by which PRs should be selected: author, reviewer or any | [Optional] [Defaults to `undefined`] [Enum: author, reviewer, any] |
| **pageSize** | `string` | The maximum number of pull requests to return. The service may return fewer than this value | [Optional] [Defaults to `undefined`] |
| **pageToken** | `string` | A page token, received from a previous call. Provide this to retrieve the subsequent page.  When paginating, all other parameters must match the call that provided the page token. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Ordering options: comma separated list of fields. For example: \&quot;name, created_at\&quot; Default sorting order is ascending. To specify descending order for a field, append a \&quot;-\&quot; prefix; for example: \&quot;name, -created_at\&quot; Redundant space characters in the syntax are insignificant. \&quot;foo, -bar\&quot;, \&quot; foo , -bar\&quot;, and \&quot;foo,bar\&quot; are all equivalent. Available fields: title, created_at, updated_at | [Optional] [Defaults to `undefined`] |

### Return type

[**ListRepositoryPullRequestsResponse**](ListRepositoryPullRequestsResponse.md)

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

