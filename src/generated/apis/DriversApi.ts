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
    CreateDriverRequest,
    CreateDriverRequestFromJSON,
    CreateDriverRequestToJSON,
    DriverResponse,
    DriverResponseFromJSON,
    DriverResponseToJSON,
    ListDriversResponse,
    ListDriversResponseFromJSON,
    ListDriversResponseToJSON,
    StandardErrorResponse,
    StandardErrorResponseFromJSON,
    StandardErrorResponseToJSON,
    UpdateDriverRequest,
    UpdateDriverRequestFromJSON,
    UpdateDriverRequestToJSON,
} from '../models';

export interface CreateDriverOperationRequest {
    driver: CreateDriverRequest;
}

export interface GetDriverRequest {
    id: string;
}

export interface ListDriversRequest {
    driverActivationStatus?: ListDriversDriverActivationStatusEnum;
    limit?: number;
    after?: string;
    parentTagIds?: Array<string>;
    tagIds?: Array<string>;
    updatedAfterTime?: string;
    createdAfterTime?: string;
}

export interface UpdateDriverOperationRequest {
    id: string;
    driver: UpdateDriverRequest;
}

/**
 * 
 */
export class DriversApi extends runtime.BaseAPI {

    /**
     * Add a driver to the organization.
     * Create a driver
     */
    async createDriverRaw(requestParameters: CreateDriverOperationRequest): Promise<runtime.ApiResponse<DriverResponse>> {
        if (requestParameters.driver === null || requestParameters.driver === undefined) {
            throw new runtime.RequiredError('driver','Required parameter requestParameters.driver was null or undefined when calling createDriver.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/fleet/drivers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateDriverRequestToJSON(requestParameters.driver),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DriverResponseFromJSON(jsonValue));
    }

    /**
     * Add a driver to the organization.
     * Create a driver
     */
    async createDriver(requestParameters: CreateDriverOperationRequest): Promise<DriverResponse> {
        const response = await this.createDriverRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get information about a driver.
     * Retrieve a driver
     */
    async getDriverRaw(requestParameters: GetDriverRequest): Promise<runtime.ApiResponse<DriverResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getDriver.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fleet/drivers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DriverResponseFromJSON(jsonValue));
    }

    /**
     * Get information about a driver.
     * Retrieve a driver
     */
    async getDriver(requestParameters: GetDriverRequest): Promise<DriverResponse> {
        const response = await this.getDriverRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get all drivers in organization.
     * List all drivers
     */
    async listDriversRaw(requestParameters: ListDriversRequest): Promise<runtime.ApiResponse<ListDriversResponse>> {
        const queryParameters: any = {};

        if (requestParameters.driverActivationStatus !== undefined) {
            queryParameters['driverActivationStatus'] = requestParameters.driverActivationStatus;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = requestParameters.after;
        }

        if (requestParameters.parentTagIds) {
            queryParameters['parentTagIds'] = requestParameters.parentTagIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.tagIds) {
            queryParameters['tagIds'] = requestParameters.tagIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.updatedAfterTime !== undefined) {
            queryParameters['updatedAfterTime'] = requestParameters.updatedAfterTime;
        }

        if (requestParameters.createdAfterTime !== undefined) {
            queryParameters['createdAfterTime'] = requestParameters.createdAfterTime;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fleet/drivers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListDriversResponseFromJSON(jsonValue));
    }

    /**
     * Get all drivers in organization.
     * List all drivers
     */
    async listDrivers(requestParameters: ListDriversRequest): Promise<ListDriversResponse> {
        const response = await this.listDriversRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update a specific driver\'s information. This can also be used to activate or de-activate a given driver by setting the driverActivationStatus field. If the driverActivationStatus field is \'deactivated\' then the user can also specify the deactivatedAtTime. The deactivatedAtTime cannot be more than 6 months in the past and must not come before the dirver\'s latest active HOS log. It will be considered an error if deactivatedAtTime is provided with a driverActivationStatus of active.
     * Update a driver
     */
    async updateDriverRaw(requestParameters: UpdateDriverOperationRequest): Promise<runtime.ApiResponse<DriverResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateDriver.');
        }

        if (requestParameters.driver === null || requestParameters.driver === undefined) {
            throw new runtime.RequiredError('driver','Required parameter requestParameters.driver was null or undefined when calling updateDriver.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/fleet/drivers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateDriverRequestToJSON(requestParameters.driver),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DriverResponseFromJSON(jsonValue));
    }

    /**
     * Update a specific driver\'s information. This can also be used to activate or de-activate a given driver by setting the driverActivationStatus field. If the driverActivationStatus field is \'deactivated\' then the user can also specify the deactivatedAtTime. The deactivatedAtTime cannot be more than 6 months in the past and must not come before the dirver\'s latest active HOS log. It will be considered an error if deactivatedAtTime is provided with a driverActivationStatus of active.
     * Update a driver
     */
    async updateDriver(requestParameters: UpdateDriverOperationRequest): Promise<DriverResponse> {
        const response = await this.updateDriverRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum ListDriversDriverActivationStatusEnum {
    Active = 'active',
    Deactivated = 'deactivated'
}
