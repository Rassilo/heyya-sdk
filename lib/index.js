/**
  * @module HeyaAppLib
  *
  * Heya API description
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const HeyaAPIController = require('./Controllers/HeyaAPIController');
const UsersController = require('./Controllers/UsersController');
const PostsController = require('./Controllers/PostsController');
const ResourceController = require('./Controllers/ResourceController');
const CommentsController = require('./Controllers/CommentsController');
const FollowController = require('./Controllers/FollowController');
const AuthenticationController = require('./Controllers/AuthenticationController');
const UserModel = require('./Models/UserModel');
const UserPaginationModel = require('./Models/UserPaginationModel');
const UserCreateModel = require('./Models/UserCreateModel');
const UserUpdateModel = require('./Models/UserUpdateModel');
const UserUpdatePasswordModel = require('./Models/UserUpdatePasswordModel');
const MediaModel = require('./Models/MediaModel');
const PostModel = require('./Models/PostModel');
const PostPaginationModel = require('./Models/PostPaginationModel');
const PostCreateModel = require('./Models/PostCreateModel');
const PostRegisterModel = require('./Models/PostRegisterModel');
const PostCommentCreateModel = require('./Models/PostCommentCreateModel');
const PostCommentUpdateModel = require('./Models/PostCommentUpdateModel');
const MediaResource = require('./Models/MediaResource');
const PostLikes = require('./Models/PostLikes');
const Post = require('./Models/Post');
const PostComment = require('./Models/PostComment');
const Follows = require('./Models/Follows');
const User = require('./Models/User');
const PostCommentModel = require('./Models/PostCommentModel');
const CommentsPaginationModel = require('./Models/CommentsPaginationModel');
const LoginUserModel = require('./Models/LoginUserModel');
const LoginResponseModel = require('./Models/LoginResponseModel');
const CreateUserDto = require('./Models/CreateUserDto');
const RoleEnum = require('./Models/RoleEnum');
const Role3Enum = require('./Models/Role3Enum');
const ErrorResponseException = require('./Exceptions/ErrorResponseException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of HeyaAppLib
    Configuration,
    Environments,
    // controllers of HeyaAppLib
    HeyaAPIController,
    UsersController,
    PostsController,
    ResourceController,
    CommentsController,
    FollowController,
    AuthenticationController,
    // models of HeyaAppLib
    UserModel,
    UserPaginationModel,
    UserCreateModel,
    UserUpdateModel,
    UserUpdatePasswordModel,
    MediaModel,
    PostModel,
    PostPaginationModel,
    PostCreateModel,
    PostRegisterModel,
    PostCommentCreateModel,
    PostCommentUpdateModel,
    MediaResource,
    PostLikes,
    Post,
    PostComment,
    Follows,
    User,
    PostCommentModel,
    CommentsPaginationModel,
    LoginUserModel,
    LoginResponseModel,
    CreateUserDto,
    RoleEnum,
    Role3Enum,
    // exceptions of HeyaAppLib
    ErrorResponseException,
    APIException,
};

module.exports = initializer;
