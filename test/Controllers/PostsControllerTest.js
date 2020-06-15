/**
 * HeyaAppLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");
const baseController = require("../../lib/Controllers/BaseController");

const controller = testerlib.PostsController;
const PostPaginationModel = testerlib.PostPaginationModel;
const PostModel = testerlib.PostModel;
const PostCreateModel = testerlib.PostCreateModel;
const PostRegisterModel = testerlib.PostRegisterModel;

describe("PostsController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Testcase for testing endpoint PostController_getMyPosts
     */
    it("should testTestPostControllerGetMyPosts response", function testTestPostControllerGetMyPostsTest(done) {
        // parameters for the API call
        let limit = null;
        let page = null;

        controller.getPostControllerGetMyPosts(limit, page, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = 'application/json';
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            done();
        }).catch(() => undefined);
    });

    /**
     * Testcase for testing endpoint PostController_getPublicPosts
     */
    it("should testTestPostControllerGetPublicPosts response", function testTestPostControllerGetPublicPostsTest(done) {
        // parameters for the API call
        let limit = null;
        let page = null;

        controller.getPostControllerGetPublicPosts(limit, page, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = 'application/json';
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            done();
        }).catch(() => undefined);
    });

    /**
     * Testcase for testing endpoint PostController_testApi
     */
    it("should testTestPostControllerTestApi response", function testTestPostControllerTestApiTest(done) {
        controller.getPostControllerTestApi(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = 'application/json';
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            done();
        }).catch(() => undefined);
    });

});
