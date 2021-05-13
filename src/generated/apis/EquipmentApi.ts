/* tslint:disable */
/* eslint-disable */
/**
 * Samsara API
 * <style type=\"text/css\"> n {     padding: 1em;     width: 100%;     display: block;     margin: 28px 0; } n.info {     background-color: rgba(0, 51, 160, 0.1); } n.warning {     background-color: #fdf6e3; } i:before {     margin-right: 6px; } nh {     font-size: 1.5rem;     font-weight: 700;     line-height: 1.1;     display: block; } nb {     margin-top: 10px;     padding-left: 22px;     display: block; } </style>  # Overview  <n class=\"info\"> <nh> <i class=\"fa fa-info-circle\"></i> Something new! </nh> <nb> Welcome Samsara\'s new and improved API. Check out our FAQ [here](https://developers.samsara.com/docs/introducing-our-next-generation-api) to see what\'s changed and learn how to get started.<br> <br> Want to access the legacy API docs? You can find them [here](https://www.samsara.com/api-legacy).<br> <br> *Note: Because this is a new set of APIs, we have not transitioned all endpoints over to this standard. Endpoints that still use the legacy standards are indicated in the reference documentation. If you can\'t find an API that you\'re looking for, we encourage you to look for it in our [legacy API docs](https://www.samsara.com/api-legacy) as we continue to transition all endpoints over. Check back here for updates!*<br> <br> Submit your feedback [here](https://forms.gle/r4bs6HQshQAvBuwv6)! </nb> </n>  Samsara provides API endpoints so that you can build powerful applications and custom solutions with sensor data. Samsara has endpoints available to track and analyze sensors, vehicles, and entire fleets.  The Samsara API is a [RESTful API](https://en.wikipedia.org/wiki/Representational_state_transfer). It uses standard [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) authentication, verbs, and response codes, and it returns [JSON](http://www.json.org/) response bodies. If you\'re familiar with what you can build with a REST API, then this will be your go-to API reference.  Visit [developers.samsara.com](https://developers.samsara.com) to find getting started guides and an API overview.  If you have any questions, please visit https://samsara.com/help.  ## Endpoints  All our APIs can be accessed through HTTP requests to URLs like:  ``` https://api.samsara.com/<endpoint> ```  For EU customers, this URL will be:  ``` https://api.eu.samsara.com/<endpoint> ```  <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> Note </nh> <nb> Legacy endpoints will have the URL: `https://api.samsara.com/v1/<endpoint>` or `https://api.eu.samsara.com/v1/<endpoint>` </nb> </n>  ## Authentication  To authenticate your API request you will need to include your secret token. You can manage your API tokens in the [Dashboard](https://cloud.samsara.com). They are visible under `Settings->Organization->API Tokens`.  Your API tokens carry many privileges, so be sure to keep them secure. Do not share your secret API tokens in publicly accessible areas such as GitHub, client-side code, and so on.  Authentication to the API is performed via Bearer Token in the HTTP Authorization header. Provide your API token as the `access_token` value in an `Authorization: Bearer` header. You do not need to provide a password:  ```curl Authorization: Bearer {access_token} ```  All API requests must be made over [HTTPS](https://en.wikipedia.org/wiki/HTTPS). Calls made over plain HTTP or without authentication will fail.  ### OAuth2 If building an application for our marketplace, our API is accessible via. OAuth2 as well.  | Type  | Value | | ------------- |:-------------:| | Security scheme      | OAuth2                                   | | OAuth2 Flow          | accessCode                               | | Authorization URL    | https://api.samsara.com/oauth2/authorize | | Token URL            | https://api.samsara.com/oauth2/token     |    ## Common Patterns  You can find more info about request methods, response codes, error codes, versioning, pagination, timestamps, and mini-objects [here](https://developers.samsara.com/docs/common-structures). 
 *
 * The version of the OpenAPI document: 2020-06-15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    EquipmentListResponse,
    EquipmentListResponseFromJSON,
    EquipmentListResponseToJSON,
    EquipmentLocationsListResponse,
    EquipmentLocationsListResponseFromJSON,
    EquipmentLocationsListResponseToJSON,
    EquipmentLocationsResponse,
    EquipmentLocationsResponseFromJSON,
    EquipmentLocationsResponseToJSON,
    EquipmentResponse,
    EquipmentResponseFromJSON,
    EquipmentResponseToJSON,
    EquipmentStatsListResponse,
    EquipmentStatsListResponseFromJSON,
    EquipmentStatsListResponseToJSON,
    EquipmentStatsResponse,
    EquipmentStatsResponseFromJSON,
    EquipmentStatsResponseToJSON,
    StandardErrorResponse,
    StandardErrorResponseFromJSON,
    StandardErrorResponseToJSON,
} from '../models';

export interface GetEquipmentRequest {
    id: string;
}

export interface GetEquipmentLocationsRequest {
    after?: string;
    parentTagIds?: Array<string>;
    tagIds?: Array<string>;
    equipmentIds?: Array<string>;
}

export interface GetEquipmentLocationsFeedRequest {
    after?: string;
    parentTagIds?: Array<string>;
    tagIds?: Array<string>;
    equipmentIds?: Array<string>;
}

export interface GetEquipmentLocationsHistoryRequest {
    startTime: string;
    endTime: string;
    after?: string;
    parentTagIds?: Array<string>;
    tagIds?: Array<string>;
    equipmentIds?: Array<string>;
}

export interface GetEquipmentStatsRequest {
    types: Array<GetEquipmentStatsTypesEnum>;
    after?: string;
    parentTagIds?: Array<string>;
    tagIds?: Array<string>;
    equipmentIds?: Array<string>;
}

export interface GetEquipmentStatsFeedRequest {
    types: Array<GetEquipmentStatsFeedTypesEnum>;
    after?: string;
    parentTagIds?: Array<string>;
    tagIds?: Array<string>;
    equipmentIds?: Array<string>;
}

export interface GetEquipmentStatsHistoryRequest {
    startTime: string;
    endTime: string;
    types: Array<GetEquipmentStatsHistoryTypesEnum>;
    after?: string;
    parentTagIds?: Array<string>;
    tagIds?: Array<string>;
    equipmentIds?: Array<string>;
}

export interface ListEquipmentRequest {
    limit?: number;
    after?: string;
    parentTagIds?: Array<string>;
    tagIds?: Array<string>;
}

/**
 * 
 */
export class EquipmentApi extends runtime.BaseAPI {

    /**
     * Retrieves the unit of equipment with the given Samsara ID.
     * Retrieve a unit of equipment
     */
    async getEquipmentRaw(requestParameters: GetEquipmentRequest): Promise<runtime.ApiResponse<EquipmentResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getEquipment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fleet/equipment/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EquipmentResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves the unit of equipment with the given Samsara ID.
     * Retrieve a unit of equipment
     */
    async getEquipment(requestParameters: GetEquipmentRequest): Promise<EquipmentResponse> {
        const response = await this.getEquipmentRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns last known locations for all equipment. This can be optionally filtered by tags or specific equipment IDs.
     * Get most recent locations for all equipment
     */
    async getEquipmentLocationsRaw(requestParameters: GetEquipmentLocationsRequest): Promise<runtime.ApiResponse<EquipmentLocationsResponse>> {
        const queryParameters: any = {};

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = requestParameters.after;
        }

        if (requestParameters.parentTagIds) {
            queryParameters['parentTagIds'] = requestParameters.parentTagIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.tagIds) {
            queryParameters['tagIds'] = requestParameters.tagIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.equipmentIds) {
            queryParameters['equipmentIds'] = requestParameters.equipmentIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fleet/equipment/locations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EquipmentLocationsResponseFromJSON(jsonValue));
    }

    /**
     * Returns last known locations for all equipment. This can be optionally filtered by tags or specific equipment IDs.
     * Get most recent locations for all equipment
     */
    async getEquipmentLocations(requestParameters: GetEquipmentLocationsRequest): Promise<EquipmentLocationsResponse> {
        const response = await this.getEquipmentLocationsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Follow a continuous feed of all equipment locations from Samsara AG24s.  Your first call to this endpoint will provide you with the most recent location for each unit of equipment and a `pagination` object that contains an `endCursor`.  You can provide the `endCursor` to subsequent calls via the `after` parameter. The response will contain any equipment location updates since that `endCursor`.  If `hasNextPage` is `false`, no updates are readily available yet. We\'d suggest waiting a minimum of 5 seconds before requesting updates.
     * Follow feed of equipment locations
     */
    async getEquipmentLocationsFeedRaw(requestParameters: GetEquipmentLocationsFeedRequest): Promise<runtime.ApiResponse<EquipmentLocationsListResponse>> {
        const queryParameters: any = {};

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = requestParameters.after;
        }

        if (requestParameters.parentTagIds) {
            queryParameters['parentTagIds'] = requestParameters.parentTagIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.tagIds) {
            queryParameters['tagIds'] = requestParameters.tagIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.equipmentIds) {
            queryParameters['equipmentIds'] = requestParameters.equipmentIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fleet/equipment/locations/feed`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EquipmentLocationsListResponseFromJSON(jsonValue));
    }

    /**
     * Follow a continuous feed of all equipment locations from Samsara AG24s.  Your first call to this endpoint will provide you with the most recent location for each unit of equipment and a `pagination` object that contains an `endCursor`.  You can provide the `endCursor` to subsequent calls via the `after` parameter. The response will contain any equipment location updates since that `endCursor`.  If `hasNextPage` is `false`, no updates are readily available yet. We\'d suggest waiting a minimum of 5 seconds before requesting updates.
     * Follow feed of equipment locations
     */
    async getEquipmentLocationsFeed(requestParameters: GetEquipmentLocationsFeedRequest): Promise<EquipmentLocationsListResponse> {
        const response = await this.getEquipmentLocationsFeedRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns historical equipment locations during the given time range. This can be optionally filtered by tags or specific equipment IDs.
     * Get historical equipment locations
     */
    async getEquipmentLocationsHistoryRaw(requestParameters: GetEquipmentLocationsHistoryRequest): Promise<runtime.ApiResponse<EquipmentLocationsListResponse>> {
        if (requestParameters.startTime === null || requestParameters.startTime === undefined) {
            throw new runtime.RequiredError('startTime','Required parameter requestParameters.startTime was null or undefined when calling getEquipmentLocationsHistory.');
        }

        if (requestParameters.endTime === null || requestParameters.endTime === undefined) {
            throw new runtime.RequiredError('endTime','Required parameter requestParameters.endTime was null or undefined when calling getEquipmentLocationsHistory.');
        }

        const queryParameters: any = {};

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = requestParameters.after;
        }

        if (requestParameters.startTime !== undefined) {
            queryParameters['startTime'] = requestParameters.startTime;
        }

        if (requestParameters.endTime !== undefined) {
            queryParameters['endTime'] = requestParameters.endTime;
        }

        if (requestParameters.parentTagIds) {
            queryParameters['parentTagIds'] = requestParameters.parentTagIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.tagIds) {
            queryParameters['tagIds'] = requestParameters.tagIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.equipmentIds) {
            queryParameters['equipmentIds'] = requestParameters.equipmentIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fleet/equipment/locations/history`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EquipmentLocationsListResponseFromJSON(jsonValue));
    }

    /**
     * Returns historical equipment locations during the given time range. This can be optionally filtered by tags or specific equipment IDs.
     * Get historical equipment locations
     */
    async getEquipmentLocationsHistory(requestParameters: GetEquipmentLocationsHistoryRequest): Promise<EquipmentLocationsListResponse> {
        const response = await this.getEquipmentLocationsHistoryRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns the last known stats for all equipment. This can be optionally filtered by tags or specific equipment IDs.
     * Get most recent stats for all equipment
     */
    async getEquipmentStatsRaw(requestParameters: GetEquipmentStatsRequest): Promise<runtime.ApiResponse<EquipmentStatsResponse>> {
        if (requestParameters.types === null || requestParameters.types === undefined) {
            throw new runtime.RequiredError('types','Required parameter requestParameters.types was null or undefined when calling getEquipmentStats.');
        }

        const queryParameters: any = {};

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = requestParameters.after;
        }

        if (requestParameters.parentTagIds) {
            queryParameters['parentTagIds'] = requestParameters.parentTagIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.tagIds) {
            queryParameters['tagIds'] = requestParameters.tagIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.equipmentIds) {
            queryParameters['equipmentIds'] = requestParameters.equipmentIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.types) {
            queryParameters['types'] = requestParameters.types.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fleet/equipment/stats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EquipmentStatsResponseFromJSON(jsonValue));
    }

    /**
     * Returns the last known stats for all equipment. This can be optionally filtered by tags or specific equipment IDs.
     * Get most recent stats for all equipment
     */
    async getEquipmentStats(requestParameters: GetEquipmentStatsRequest): Promise<EquipmentStatsResponse> {
        const response = await this.getEquipmentStatsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Follow a continuous feed of all equipment stats from Samsara AG24s.  Your first call to this endpoint will provide you with the most recent stats for each unit of equipment and a `pagination` object that contains an `endCursor`.  You can provide the `endCursor` to subsequent calls via the `after` parameter. The response will contain any equipment stats updates since that `endCursor`.  If `hasNextPage` is `false`, no updates are readily available yet. Each stat type has a different refresh rate, but in general we\'d suggest waiting a minimum of 5 seconds before requesting updates.
     * Follow a feed of equipment stats
     */
    async getEquipmentStatsFeedRaw(requestParameters: GetEquipmentStatsFeedRequest): Promise<runtime.ApiResponse<EquipmentStatsListResponse>> {
        if (requestParameters.types === null || requestParameters.types === undefined) {
            throw new runtime.RequiredError('types','Required parameter requestParameters.types was null or undefined when calling getEquipmentStatsFeed.');
        }

        const queryParameters: any = {};

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = requestParameters.after;
        }

        if (requestParameters.parentTagIds) {
            queryParameters['parentTagIds'] = requestParameters.parentTagIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.tagIds) {
            queryParameters['tagIds'] = requestParameters.tagIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.equipmentIds) {
            queryParameters['equipmentIds'] = requestParameters.equipmentIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.types) {
            queryParameters['types'] = requestParameters.types.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fleet/equipment/stats/feed`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EquipmentStatsListResponseFromJSON(jsonValue));
    }

    /**
     * Follow a continuous feed of all equipment stats from Samsara AG24s.  Your first call to this endpoint will provide you with the most recent stats for each unit of equipment and a `pagination` object that contains an `endCursor`.  You can provide the `endCursor` to subsequent calls via the `after` parameter. The response will contain any equipment stats updates since that `endCursor`.  If `hasNextPage` is `false`, no updates are readily available yet. Each stat type has a different refresh rate, but in general we\'d suggest waiting a minimum of 5 seconds before requesting updates.
     * Follow a feed of equipment stats
     */
    async getEquipmentStatsFeed(requestParameters: GetEquipmentStatsFeedRequest): Promise<EquipmentStatsListResponse> {
        const response = await this.getEquipmentStatsFeedRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns historical equipment status during the given time range. This can be optionally filtered by tags or specific equipment IDs.
     * Get historical equipment stats
     */
    async getEquipmentStatsHistoryRaw(requestParameters: GetEquipmentStatsHistoryRequest): Promise<runtime.ApiResponse<EquipmentStatsListResponse>> {
        if (requestParameters.startTime === null || requestParameters.startTime === undefined) {
            throw new runtime.RequiredError('startTime','Required parameter requestParameters.startTime was null or undefined when calling getEquipmentStatsHistory.');
        }

        if (requestParameters.endTime === null || requestParameters.endTime === undefined) {
            throw new runtime.RequiredError('endTime','Required parameter requestParameters.endTime was null or undefined when calling getEquipmentStatsHistory.');
        }

        if (requestParameters.types === null || requestParameters.types === undefined) {
            throw new runtime.RequiredError('types','Required parameter requestParameters.types was null or undefined when calling getEquipmentStatsHistory.');
        }

        const queryParameters: any = {};

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = requestParameters.after;
        }

        if (requestParameters.startTime !== undefined) {
            queryParameters['startTime'] = requestParameters.startTime;
        }

        if (requestParameters.endTime !== undefined) {
            queryParameters['endTime'] = requestParameters.endTime;
        }

        if (requestParameters.parentTagIds) {
            queryParameters['parentTagIds'] = requestParameters.parentTagIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.tagIds) {
            queryParameters['tagIds'] = requestParameters.tagIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.equipmentIds) {
            queryParameters['equipmentIds'] = requestParameters.equipmentIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.types) {
            queryParameters['types'] = requestParameters.types.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fleet/equipment/stats/history`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EquipmentStatsListResponseFromJSON(jsonValue));
    }

    /**
     * Returns historical equipment status during the given time range. This can be optionally filtered by tags or specific equipment IDs.
     * Get historical equipment stats
     */
    async getEquipmentStatsHistory(requestParameters: GetEquipmentStatsHistoryRequest): Promise<EquipmentStatsListResponse> {
        const response = await this.getEquipmentStatsHistoryRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of all equipment in an organization. Equipment objects represent powered assets connected to a [Samsara AG24](https://www.samsara.com/products/models/ag24) via an APWR, CAT, or J1939 cable. They are automatically created with a unique Samsara Equipment ID whenever an AG24 is activated in your organization.
     * List all equipment
     */
    async listEquipmentRaw(requestParameters: ListEquipmentRequest): Promise<runtime.ApiResponse<EquipmentListResponse>> {
        const queryParameters: any = {};

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

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fleet/equipment`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EquipmentListResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of all equipment in an organization. Equipment objects represent powered assets connected to a [Samsara AG24](https://www.samsara.com/products/models/ag24) via an APWR, CAT, or J1939 cable. They are automatically created with a unique Samsara Equipment ID whenever an AG24 is activated in your organization.
     * List all equipment
     */
    async listEquipment(requestParameters: ListEquipmentRequest): Promise<EquipmentListResponse> {
        const response = await this.listEquipmentRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetEquipmentStatsTypesEnum {
    GatewayEngineStates = 'gatewayEngineStates',
    ObdEngineStates = 'obdEngineStates',
    FuelPercents = 'fuelPercents',
    EngineRpm = 'engineRpm',
    GatewayEngineSeconds = 'gatewayEngineSeconds',
    ObdEngineSeconds = 'obdEngineSeconds',
    GatewayJ1939EngineSeconds = 'gatewayJ1939EngineSeconds',
    GpsOdometerMeters = 'gpsOdometerMeters'
}
/**
    * @export
    * @enum {string}
    */
export enum GetEquipmentStatsFeedTypesEnum {
    GatewayEngineStates = 'gatewayEngineStates',
    ObdEngineStates = 'obdEngineStates',
    FuelPercents = 'fuelPercents',
    EngineRpm = 'engineRpm',
    GatewayEngineSeconds = 'gatewayEngineSeconds',
    ObdEngineSeconds = 'obdEngineSeconds',
    GatewayJ1939EngineSeconds = 'gatewayJ1939EngineSeconds',
    GpsOdometerMeters = 'gpsOdometerMeters'
}
/**
    * @export
    * @enum {string}
    */
export enum GetEquipmentStatsHistoryTypesEnum {
    GatewayEngineStates = 'gatewayEngineStates',
    ObdEngineStates = 'obdEngineStates',
    FuelPercents = 'fuelPercents',
    EngineRpm = 'engineRpm',
    GatewayEngineSeconds = 'gatewayEngineSeconds',
    ObdEngineSeconds = 'obdEngineSeconds',
    GatewayJ1939EngineSeconds = 'gatewayJ1939EngineSeconds',
    GpsOdometerMeters = 'gpsOdometerMeters'
}