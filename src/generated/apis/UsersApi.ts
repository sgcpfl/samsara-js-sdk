/* tslint:disable */
/* eslint-disable */
/**
 * Samsara API
 * <style type=\"text/css\"> n {     padding: 1em;     width: 100%;     display: block;     margin: 28px 0; } n.info {     background-color: rgba(0, 51, 160, 0.1); } n.warning {     background-color: #fdf6e3; } i:before {     margin-right: 6px; } nh {     font-size: 1.5rem;     font-weight: 700;     line-height: 1.1;     display: block; } nb {     margin-top: 10px;     padding-left: 22px;     display: block; } </style>  # Overview  <n class=\"info\"> <nh> <i class=\"fa fa-info-circle\"></i> Something new! </nh> <nb> Welcome Samsara\'s new and improved API. Check out our FAQ [here](https://developers.samsara.com/docs/introducing-our-next-generation-api) to see what\'s changed and learn how to get started.<br> <br> Want to access the legacy API docs? You can find them [here](https://www.samsara.com/api-legacy).<br> <br> *Note: Because this is a new set of APIs, we have not transitioned all endpoints over to this standard. Endpoints that still use the legacy standards are indicated in the reference documentation. If you can\'t find an API that you\'re looking for, we encourage you to look for it in our [legacy API docs](https://www.samsara.com/api-legacy) as we continue to transition all endpoints over. Check back here for updates!*<br> <br> Submit your feedback [here](https://forms.gle/r4bs6HQshQAvBuwv6)! </nb> </n>  Samsara provides API endpoints so that you can build powerful applications and custom solutions with sensor data. Samsara has endpoints available to track and analyze sensors, vehicles, and entire fleets.  The Samsara API is a [RESTful API](https://en.wikipedia.org/wiki/Representational_state_transfer). It uses standard [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) authentication, verbs, and response codes, and it returns [JSON](http://www.json.org/) response bodies. If you\'re familiar with what you can build with a REST API, then this will be your go-to API reference.  Visit [developers.samsara.com](https://developers.samsara.com) to find getting started guides and an API overview.  If you have any questions, please visit https://samsara.com/help.  ## Endpoints  All our APIs can be accessed through HTTP requests to URLs like:  ``` https://api.samsara.com/<endpoint> ```  For EU customers, this URL will be:  ``` https://api.eu.samsara.com/<endpoint> ```  <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> Note </nh> <nb> Legacy endpoints will have the URL: `https://api.samsara.com/v1/<endpoint>` or `https://api.eu.samsara.com/v1/<endpoint>` </nb> </n>  ## Authentication  To authenticate your API request you will need to include your secret token. You can manage your API tokens in the [Dashboard](https://cloud.samsara.com). They are visible under `Settings->Organization->API Tokens`.  Your API tokens carry many privileges, so be sure to keep them secure. Do not share your secret API tokens in publicly accessible areas such as GitHub, client-side code, and so on.  Authentication to the API is performed via Bearer Token in the HTTP Authorization header. Provide your API token as the `access_token` value in an `Authorization: Bearer` header. You do not need to provide a password:  ```curl Authorization: Bearer {access_token} ```  All API requests must be made over [HTTPS](https://en.wikipedia.org/wiki/HTTPS). Calls made over plain HTTP or without authentication will fail.  ### OAuth2 If building an application for our marketplace, our API is accessible via. OAuth2 as well.  | Type  | Value | | ------------- |:-------------:| | Security scheme      | OAuth2                                   | | OAuth2 Flow          | accessCode                               | | Authorization URL    | https://api.samsara.com/oauth2/authorize | | Token URL            | https://api.samsara.com/oauth2/token     |    ## Common Patterns  You can find more info about request methods, response codes, error codes, versioning, pagination, timestamps, and mini-objects [here](https://developers.samsara.com/docs/common-structures). 
 *
 * The version of the OpenAPI document: 2021-06-09
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CreateUserRequest,
    CreateUserRequestFromJSON,
    CreateUserRequestToJSON,
    ListUserRolesResponse,
    ListUserRolesResponseFromJSON,
    ListUserRolesResponseToJSON,
    ListUsersResponse,
    ListUsersResponseFromJSON,
    ListUsersResponseToJSON,
    StandardErrorResponse,
    StandardErrorResponseFromJSON,
    StandardErrorResponseToJSON,
    UpdateUserRequest,
    UpdateUserRequestFromJSON,
    UpdateUserRequestToJSON,
    UserResponse,
    UserResponseFromJSON,
    UserResponseToJSON,
} from '../models';

export interface CreateUserOperationRequest {
    user: CreateUserRequest;
}

export interface DeleteUserRequest {
    id: string;
}

export interface GetUserRequest {
    id: string;
}

export interface ListUserRolesRequest {
    limit?: number;
    after?: string;
}

export interface ListUsersRequest {
    limit?: number;
    after?: string;
}

export interface UpdateUserOperationRequest {
    id: string;
    user: UpdateUserRequest;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     * Add a user to the organization.
     * Create a user
     */
    async createUserRaw(requestParameters: CreateUserOperationRequest): Promise<runtime.ApiResponse<UserResponse>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling createUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateUserRequestToJSON(requestParameters.user),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
    }

    /**
     * Add a user to the organization.
     * Create a user
     */
    async createUser(requestParameters: CreateUserOperationRequest): Promise<UserResponse> {
        const response = await this.createUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete the given user.
     * Delete a user
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Delete the given user.
     * Delete a user
     */
    async deleteUser(requestParameters: DeleteUserRequest): Promise<string> {
        const response = await this.deleteUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get a specific user\'s information.
     * Retrieve a user
     */
    async getUserRaw(requestParameters: GetUserRequest): Promise<runtime.ApiResponse<UserResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
    }

    /**
     * Get a specific user\'s information.
     * Retrieve a user
     */
    async getUser(requestParameters: GetUserRequest): Promise<UserResponse> {
        const response = await this.getUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of all user roles in an organization.
     * List all user roles
     */
    async listUserRolesRaw(requestParameters: ListUserRolesRequest): Promise<runtime.ApiResponse<ListUserRolesResponse>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = requestParameters.after;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user-roles`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListUserRolesResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of all user roles in an organization.
     * List all user roles
     */
    async listUserRoles(requestParameters: ListUserRolesRequest): Promise<ListUserRolesResponse> {
        const response = await this.listUserRolesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of all users in an organization.
     * List all users
     */
    async listUsersRaw(requestParameters: ListUsersRequest): Promise<runtime.ApiResponse<ListUsersResponse>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = requestParameters.after;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListUsersResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of all users in an organization.
     * List all users
     */
    async listUsers(requestParameters: ListUsersRequest): Promise<ListUsersResponse> {
        const response = await this.listUsersRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update a specific user\'s information.
     * Update a user
     */
    async updateUserRaw(requestParameters: UpdateUserOperationRequest): Promise<runtime.ApiResponse<UserResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateUser.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling updateUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateUserRequestToJSON(requestParameters.user),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
    }

    /**
     * Update a specific user\'s information.
     * Update a user
     */
    async updateUser(requestParameters: UpdateUserOperationRequest): Promise<UserResponse> {
        const response = await this.updateUserRaw(requestParameters);
        return await response.value();
    }

}
