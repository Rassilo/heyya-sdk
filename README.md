# Getting started

Heya API description

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Heya%20App-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Heya%20App-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `HeyaAppLib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Heya%20App-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Heya%20App-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Heya%20App-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Heya%20App-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Heya AppController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Heya%20AppController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

API client can be initialized as following:

```JavaScript
const lib = require('lib');


```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [HeyaAPIController](#heya_api_controller)
* [UsersController](#users_controller)
* [PostsController](#posts_controller)
* [ResourceController](#resource_controller)
* [CommentsController](#comments_controller)
* [FollowController](#follow_controller)
* [AuthenticationController](#authentication_controller)

## <a name="heya_api_controller"></a>![Class: ](https://apidocs.io/img/class.png ".HeyaAPIController") HeyaAPIController

### Get singleton instance

The singleton instance of the ``` HeyaAPIController ``` class can be accessed from the API Client.

```javascript
var controller = lib.HeyaAPIController;
```

### <a name="get_app_controller_get_hello"></a>![Method: ](https://apidocs.io/img/method.png ".HeyaAPIController.getAppControllerGetHello") getAppControllerGetHello

> TODO: Add a method description


```javascript
function getAppControllerGetHello(callback)
```

#### Example Usage

```javascript


    controller.getAppControllerGetHello(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="users_controller"></a>![Class: ](https://apidocs.io/img/class.png ".UsersController") UsersController

### Get singleton instance

The singleton instance of the ``` UsersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.UsersController;
```

### <a name="get_users_controller_get_user_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.getUsersControllerGetUserById") getUsersControllerGetUserById

> TODO: Add a method description


```javascript
function getUsersControllerGetUserById(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 3.44619634256055;

    controller.getUsersControllerGetUserById(id, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |




### <a name="get_users_controller_get_users"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.getUsersControllerGetUsers") getUsersControllerGetUsers

> TODO: Add a method description


```javascript
function getUsersControllerGetUsers(limit, page, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| limit |  ``` Optional ```  | TODO: Add a parameter description |
| page |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var limit = 3.44619634256055;
    var page = 3.44619634256055;

    controller.getUsersControllerGetUsers(limit, page, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |




### <a name="delete_users_controller_delete_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.deleteUsersControllerDeleteUser") deleteUsersControllerDeleteUser

> TODO: Add a method description


```javascript
function deleteUsersControllerDeleteUser(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 3.44619634256055;

    controller.deleteUsersControllerDeleteUser(id, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |
| 403 | Forbidden. |




### <a name="create_users_controller_create_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.createUsersControllerCreateUser") createUsersControllerCreateUser

> TODO: Add a method description


```javascript
function createUsersControllerCreateUser(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | Create User |



#### Example Usage

```javascript

    var body = new UserCreateModel({"key":"value"});

    controller.createUsersControllerCreateUser(body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |
| 403 | Forbidden. |




### <a name="get_users_controller_get_search_users"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.getUsersControllerGetSearchUsers") getUsersControllerGetSearchUsers

> TODO: Add a method description


```javascript
function getUsersControllerGetSearchUsers(limit, page, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| limit |  ``` Optional ```  | TODO: Add a parameter description |
| page |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var limit = 3.44619634256055;
    var page = 3.44619634256055;

    controller.getUsersControllerGetSearchUsers(limit, page, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |




### <a name="get_users_controller_get_users_by_role"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.getUsersControllerGetUsersByRole") getUsersControllerGetUsersByRole

> TODO: Add a method description


```javascript
function getUsersControllerGetUsersByRole(role, limit, page, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| role |  ``` Required ```  | TODO: Add a parameter description |
| limit |  ``` Optional ```  | TODO: Add a parameter description |
| page |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var role = Object.keys(Role)[0];
    var limit = 3.44619634256055;
    var page = 3.44619634256055;

    controller.getUsersControllerGetUsersByRole(role, limit, page, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |




### <a name="update_users_controller_update_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.updateUsersControllerUpdateUser") updateUsersControllerUpdateUser

> TODO: Add a method description


```javascript
function updateUsersControllerUpdateUser(id, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | Update User |



#### Example Usage

```javascript

    var id = 3.44619634256055;
    var body = new UserUpdateModel({"key":"value"});

    controller.updateUsersControllerUpdateUser(id, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Error updating |
| 401 | Unauthorized. |
| 403 | Forbidden. |




### <a name="update_users_controller_update_user_password"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.updateUsersControllerUpdateUserPassword") updateUsersControllerUpdateUserPassword

> TODO: Add a method description


```javascript
function updateUsersControllerUpdateUserPassword(id, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | Update password |



#### Example Usage

```javascript

    var id = 3.44619634256055;
    var body = new UserUpdatePasswordModel({"key":"value"});

    controller.updateUsersControllerUpdateUserPassword(id, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Error updating |
| 401 | Unauthorized. |
| 403 | Forbidden. |




### <a name="get_users_controller_get_users_by_name"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.getUsersControllerGetUsersByName") getUsersControllerGetUsersByName

> TODO: Add a method description


```javascript
function getUsersControllerGetUsersByName(callback)
```

#### Example Usage

```javascript


    controller.getUsersControllerGetUsersByName(function(error, response, context) {

    
    });
```



### <a name="create_users_controller_upload_file"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.createUsersControllerUploadFile") createUsersControllerUploadFile

> TODO: Add a method description


```javascript
function createUsersControllerUploadFile(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 3.44619634256055;

    controller.createUsersControllerUploadFile(id, function(error, response, context) {

    
    });
```



### <a name="get_users_controller_get_my_profile"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.getUsersControllerGetMyProfile") getUsersControllerGetMyProfile

> TODO: Add a method description


```javascript
function getUsersControllerGetMyProfile(callback)
```

#### Example Usage

```javascript


    controller.getUsersControllerGetMyProfile(function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |




[Back to List of Controllers](#list_of_controllers)

## <a name="posts_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PostsController") PostsController

### Get singleton instance

The singleton instance of the ``` PostsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PostsController;
```

### <a name="get_post_controller_get_posts_by_user"></a>![Method: ](https://apidocs.io/img/method.png ".PostsController.getPostControllerGetPostsByUser") getPostControllerGetPostsByUser

> TODO: Add a method description


```javascript
function getPostControllerGetPostsByUser(id, limit, page, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| limit |  ``` Optional ```  | TODO: Add a parameter description |
| page |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 3.44619634256055;
    var limit = 3.44619634256055;
    var page = 3.44619634256055;

    controller.getPostControllerGetPostsByUser(id, limit, page, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |




### <a name="get_post_controller_get_posts_followers"></a>![Method: ](https://apidocs.io/img/method.png ".PostsController.getPostControllerGetPostsFollowers") getPostControllerGetPostsFollowers

> TODO: Add a method description


```javascript
function getPostControllerGetPostsFollowers(id, limit, page, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| limit |  ``` Optional ```  | TODO: Add a parameter description |
| page |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 3.44619634256055;
    var limit = 3.44619634256055;
    var page = 3.44619634256055;

    controller.getPostControllerGetPostsFollowers(id, limit, page, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |




### <a name="get_post_controller_get_my_posts"></a>![Method: ](https://apidocs.io/img/method.png ".PostsController.getPostControllerGetMyPosts") getPostControllerGetMyPosts

> TODO: Add a method description


```javascript
function getPostControllerGetMyPosts(limit, page, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| limit |  ``` Optional ```  | TODO: Add a parameter description |
| page |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var limit = 3.44619634256055;
    var page = 3.44619634256055;

    controller.getPostControllerGetMyPosts(limit, page, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |




### <a name="get_post_controller_get_public_posts"></a>![Method: ](https://apidocs.io/img/method.png ".PostsController.getPostControllerGetPublicPosts") getPostControllerGetPublicPosts

> TODO: Add a method description


```javascript
function getPostControllerGetPublicPosts(limit, page, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| limit |  ``` Optional ```  | TODO: Add a parameter description |
| page |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var limit = 3.44619634256055;
    var page = 3.44619634256055;

    controller.getPostControllerGetPublicPosts(limit, page, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |




### <a name="get_post_controller_get_post_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".PostsController.getPostControllerGetPostById") getPostControllerGetPostById

> TODO: Add a method description


```javascript
function getPostControllerGetPostById(id, limit, page, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| limit |  ``` Optional ```  | TODO: Add a parameter description |
| page |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 3.44619634256055;
    var limit = 3.44619634256055;
    var page = 3.44619634256055;

    controller.getPostControllerGetPostById(id, limit, page, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |




### <a name="post_controller_create_post"></a>![Method: ](https://apidocs.io/img/method.png ".PostsController.postControllerCreatePost") postControllerCreatePost

> TODO: Add a method description


```javascript
function postControllerCreatePost(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | Create Post |



#### Example Usage

```javascript

    var body = new PostCreateModel({"key":"value"});

    controller.postControllerCreatePost(body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Error Creating Post |




### <a name="delete_post_controller_delete_user"></a>![Method: ](https://apidocs.io/img/method.png ".PostsController.deletePostControllerDeleteUser") deletePostControllerDeleteUser

> TODO: Add a method description


```javascript
function deletePostControllerDeleteUser(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 3.44619634256055;

    controller.deletePostControllerDeleteUser(id, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |
| 403 | Forbidden. |




### <a name="post_controller_register_post"></a>![Method: ](https://apidocs.io/img/method.png ".PostsController.postControllerRegisterPost") postControllerRegisterPost

> TODO: Add a method description


```javascript
function postControllerRegisterPost(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | Create Post |



#### Example Usage

```javascript

    var body = new PostRegisterModel({"key":"value"});

    controller.postControllerRegisterPost(body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Error Creating Post |




### <a name="get_post_controller_test_api"></a>![Method: ](https://apidocs.io/img/method.png ".PostsController.getPostControllerTestApi") getPostControllerTestApi

> TODO: Add a method description


```javascript
function getPostControllerTestApi(callback)
```

#### Example Usage

```javascript


    controller.getPostControllerTestApi(function(error, response, context) {

    
    });
```



### <a name="get_post_controller_like_post"></a>![Method: ](https://apidocs.io/img/method.png ".PostsController.getPostControllerLikePost") getPostControllerLikePost

> TODO: Add a method description


```javascript
function getPostControllerLikePost(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 3.44619634256055;

    controller.getPostControllerLikePost(id, function(error, response, context) {

    
    });
```



### <a name="get_post_controller_dislike_post"></a>![Method: ](https://apidocs.io/img/method.png ".PostsController.getPostControllerDislikePost") getPostControllerDislikePost

> TODO: Add a method description


```javascript
function getPostControllerDislikePost(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 3.44619634256055;

    controller.getPostControllerDislikePost(id, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="resource_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ResourceController") ResourceController

### Get singleton instance

The singleton instance of the ``` ResourceController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ResourceController;
```

### <a name="delete_media_controller_delete_media"></a>![Method: ](https://apidocs.io/img/method.png ".ResourceController.deleteMediaControllerDeleteMedia") deleteMediaControllerDeleteMedia

> TODO: Add a method description


```javascript
function deleteMediaControllerDeleteMedia(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 3.44619634256055;

    controller.deleteMediaControllerDeleteMedia(id, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |
| 403 | Forbidden. |




[Back to List of Controllers](#list_of_controllers)

## <a name="comments_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CommentsController") CommentsController

### Get singleton instance

The singleton instance of the ``` CommentsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CommentsController;
```

### <a name="create_comment_controller_comment_post"></a>![Method: ](https://apidocs.io/img/method.png ".CommentsController.createCommentControllerCommentPost") createCommentControllerCommentPost

> TODO: Add a method description


```javascript
function createCommentControllerCommentPost(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new PostCommentCreateModel({"key":"value"});

    controller.createCommentControllerCommentPost(body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |
| 403 | Forbidden. |




### <a name="delete_comment_controller_delete_comment"></a>![Method: ](https://apidocs.io/img/method.png ".CommentsController.deleteCommentControllerDeleteComment") deleteCommentControllerDeleteComment

> TODO: Add a method description


```javascript
function deleteCommentControllerDeleteComment(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 3.44619634256055;

    controller.deleteCommentControllerDeleteComment(id, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |
| 403 | Forbidden. |




### <a name="update_comment_controller_update_comment"></a>![Method: ](https://apidocs.io/img/method.png ".CommentsController.updateCommentControllerUpdateComment") updateCommentControllerUpdateComment

> TODO: Add a method description


```javascript
function updateCommentControllerUpdateComment(id, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | Update Comment |



#### Example Usage

```javascript

    var id = 3.44619634256055;
    var body = new PostCommentUpdateModel({"key":"value"});

    controller.updateCommentControllerUpdateComment(id, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Error updating |
| 401 | Unauthorized. |
| 403 | Forbidden. |




### <a name="get_comment_controller_get_comments_by_post"></a>![Method: ](https://apidocs.io/img/method.png ".CommentsController.getCommentControllerGetCommentsByPost") getCommentControllerGetCommentsByPost

> TODO: Add a method description


```javascript
function getCommentControllerGetCommentsByPost(id, limit, page, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| limit |  ``` Optional ```  | TODO: Add a parameter description |
| page |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 3.44619634256055;
    var limit = 3.44619634256055;
    var page = 3.44619634256055;

    controller.getCommentControllerGetCommentsByPost(id, limit, page, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |




[Back to List of Controllers](#list_of_controllers)

## <a name="follow_controller"></a>![Class: ](https://apidocs.io/img/class.png ".FollowController") FollowController

### Get singleton instance

The singleton instance of the ``` FollowController ``` class can be accessed from the API Client.

```javascript
var controller = lib.FollowController;
```

### <a name="get_follow_controller_get_my_followers"></a>![Method: ](https://apidocs.io/img/method.png ".FollowController.getFollowControllerGetMyFollowers") getFollowControllerGetMyFollowers

> TODO: Add a method description


```javascript
function getFollowControllerGetMyFollowers(limit, page, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| limit |  ``` Optional ```  | TODO: Add a parameter description |
| page |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var limit = 3.44619634256055;
    var page = 3.44619634256055;

    controller.getFollowControllerGetMyFollowers(limit, page, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |
| 403 | Forbidden. |




### <a name="get_follow_controller_get_my_followings"></a>![Method: ](https://apidocs.io/img/method.png ".FollowController.getFollowControllerGetMyFollowings") getFollowControllerGetMyFollowings

> TODO: Add a method description


```javascript
function getFollowControllerGetMyFollowings(limit, page, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| limit |  ``` Optional ```  | TODO: Add a parameter description |
| page |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var limit = 3.44619634256055;
    var page = 3.44619634256055;

    controller.getFollowControllerGetMyFollowings(limit, page, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |
| 403 | Forbidden. |




### <a name="get_follow_controller_get_follows"></a>![Method: ](https://apidocs.io/img/method.png ".FollowController.getFollowControllerGetFollows") getFollowControllerGetFollows

> TODO: Add a method description


```javascript
function getFollowControllerGetFollows(id, limit, page, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| limit |  ``` Optional ```  | TODO: Add a parameter description |
| page |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 3.44619634256055;
    var limit = 3.44619634256055;
    var page = 3.44619634256055;

    controller.getFollowControllerGetFollows(id, limit, page, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |
| 403 | Forbidden. |




### <a name="get_follow_controller_follow_user"></a>![Method: ](https://apidocs.io/img/method.png ".FollowController.getFollowControllerFollowUser") getFollowControllerFollowUser

> TODO: Add a method description


```javascript
function getFollowControllerFollowUser(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';

    controller.getFollowControllerFollowUser(id, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |
| 403 | Forbidden. |




### <a name="delete_follow_controller_remove_follow_user"></a>![Method: ](https://apidocs.io/img/method.png ".FollowController.deleteFollowControllerRemoveFollowUser") deleteFollowControllerRemoveFollowUser

> TODO: Add a method description


```javascript
function deleteFollowControllerRemoveFollowUser(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';

    controller.deleteFollowControllerRemoveFollowUser(id, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized. |
| 403 | Forbidden. |




[Back to List of Controllers](#list_of_controllers)

## <a name="authentication_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AuthenticationController") AuthenticationController

### Get singleton instance

The singleton instance of the ``` AuthenticationController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AuthenticationController;
```

### <a name="create_auth_controller_login"></a>![Method: ](https://apidocs.io/img/method.png ".AuthenticationController.createAuthControllerLogin") createAuthControllerLogin

> TODO: Add a method description


```javascript
function createAuthControllerLogin(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new LoginUserModel({"key":"value"});

    controller.createAuthControllerLogin(body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Invalid credentials |




### <a name="create_auth_controller_register"></a>![Method: ](https://apidocs.io/img/method.png ".AuthenticationController.createAuthControllerRegister") createAuthControllerRegister

> TODO: Add a method description


```javascript
function createAuthControllerRegister(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new CreateUserDto({"key":"value"});

    controller.createAuthControllerRegister(body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



