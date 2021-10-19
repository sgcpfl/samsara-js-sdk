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
    SafetyEventsListResponse,
    SafetyEventsListResponseFromJSON,
    SafetyEventsListResponseToJSON,
    StandardErrorResponse,
    StandardErrorResponseFromJSON,
    StandardErrorResponseToJSON,
    V1DriverSafetyScoreResponse,
    V1DriverSafetyScoreResponseFromJSON,
    V1DriverSafetyScoreResponseToJSON,
    V1VehicleHarshEventResponse,
    V1VehicleHarshEventResponseFromJSON,
    V1VehicleHarshEventResponseToJSON,
    V1VehicleSafetyScoreResponse,
    V1VehicleSafetyScoreResponseFromJSON,
    V1VehicleSafetyScoreResponseToJSON,
} from '../models';

export interface GetSafetyEventsRequest {
    startTime: string;
    endTime: string;
    after?: string;
    tagIds?: Array<string>;
    parentTagIds?: Array<string>;
    vehicleIds?: Array<string>;
}

export interface V1getDriverSafetyScoreRequest {
    driverId: number;
    startMs: number;
    endMs: number;
}

export interface V1getVehicleHarshEventRequest {
    vehicleId: number;
    timestamp: number;
}

export interface V1getVehicleSafetyScoreRequest {
    vehicleId: number;
    startMs: number;
    endMs: number;
}

/**
 * 
 */
export class SafetyApi extends runtime.BaseAPI {

    /**
     * Fetch safety events for the organization in a given time period.
     * List all safety events.
     */
    async getSafetyEventsRaw(requestParameters: GetSafetyEventsRequest): Promise<runtime.ApiResponse<SafetyEventsListResponse>> {
        if (requestParameters.startTime === null || requestParameters.startTime === undefined) {
            throw new runtime.RequiredError('startTime','Required parameter requestParameters.startTime was null or undefined when calling getSafetyEvents.');
        }

        if (requestParameters.endTime === null || requestParameters.endTime === undefined) {
            throw new runtime.RequiredError('endTime','Required parameter requestParameters.endTime was null or undefined when calling getSafetyEvents.');
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

        if (requestParameters.tagIds) {
            queryParameters['tagIds'] = requestParameters.tagIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.parentTagIds) {
            queryParameters['parentTagIds'] = requestParameters.parentTagIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.vehicleIds) {
            queryParameters['vehicleIds'] = requestParameters.vehicleIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fleet/safety-events`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SafetyEventsListResponseFromJSON(jsonValue));
    }

    /**
     * Fetch safety events for the organization in a given time period.
     * List all safety events.
     */
    async getSafetyEvents(requestParameters: GetSafetyEventsRequest): Promise<SafetyEventsListResponse> {
        const response = await this.getSafetyEventsRaw(requestParameters);
        return await response.value();
    }

    /**
     * <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> This endpoint is still on our legacy API. </nh> </n>  Fetch the safety score for the driver.
     * Fetch driver safety score
     */
    async v1getDriverSafetyScoreRaw(requestParameters: V1getDriverSafetyScoreRequest): Promise<runtime.ApiResponse<V1DriverSafetyScoreResponse>> {
        if (requestParameters.driverId === null || requestParameters.driverId === undefined) {
            throw new runtime.RequiredError('driverId','Required parameter requestParameters.driverId was null or undefined when calling v1getDriverSafetyScore.');
        }

        if (requestParameters.startMs === null || requestParameters.startMs === undefined) {
            throw new runtime.RequiredError('startMs','Required parameter requestParameters.startMs was null or undefined when calling v1getDriverSafetyScore.');
        }

        if (requestParameters.endMs === null || requestParameters.endMs === undefined) {
            throw new runtime.RequiredError('endMs','Required parameter requestParameters.endMs was null or undefined when calling v1getDriverSafetyScore.');
        }

        const queryParameters: any = {};

        if (requestParameters.startMs !== undefined) {
            queryParameters['startMs'] = requestParameters.startMs;
        }

        if (requestParameters.endMs !== undefined) {
            queryParameters['endMs'] = requestParameters.endMs;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/fleet/drivers/{driverId}/safety/score`.replace(`{${"driverId"}}`, encodeURIComponent(String(requestParameters.driverId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1DriverSafetyScoreResponseFromJSON(jsonValue));
    }

    /**
     * <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> This endpoint is still on our legacy API. </nh> </n>  Fetch the safety score for the driver.
     * Fetch driver safety score
     */
    async v1getDriverSafetyScore(requestParameters: V1getDriverSafetyScoreRequest): Promise<V1DriverSafetyScoreResponse> {
        const response = await this.v1getDriverSafetyScoreRaw(requestParameters);
        return await response.value();
    }

    /**
     * <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> This endpoint is still on our legacy API. </nh> </n>  Fetch harsh event details for a vehicle.
     * Fetch harsh events
     */
    async v1getVehicleHarshEventRaw(requestParameters: V1getVehicleHarshEventRequest): Promise<runtime.ApiResponse<V1VehicleHarshEventResponse>> {
        if (requestParameters.vehicleId === null || requestParameters.vehicleId === undefined) {
            throw new runtime.RequiredError('vehicleId','Required parameter requestParameters.vehicleId was null or undefined when calling v1getVehicleHarshEvent.');
        }

        if (requestParameters.timestamp === null || requestParameters.timestamp === undefined) {
            throw new runtime.RequiredError('timestamp','Required parameter requestParameters.timestamp was null or undefined when calling v1getVehicleHarshEvent.');
        }

        const queryParameters: any = {};

        if (requestParameters.timestamp !== undefined) {
            queryParameters['timestamp'] = requestParameters.timestamp;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/fleet/vehicles/{vehicleId}/safety/harsh_event`.replace(`{${"vehicleId"}}`, encodeURIComponent(String(requestParameters.vehicleId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1VehicleHarshEventResponseFromJSON(jsonValue));
    }

    /**
     * <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> This endpoint is still on our legacy API. </nh> </n>  Fetch harsh event details for a vehicle.
     * Fetch harsh events
     */
    async v1getVehicleHarshEvent(requestParameters: V1getVehicleHarshEventRequest): Promise<V1VehicleHarshEventResponse> {
        const response = await this.v1getVehicleHarshEventRaw(requestParameters);
        return await response.value();
    }

    /**
     * <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> This endpoint is still on our legacy API. </nh> </n>  Fetch the safety score for the vehicle.
     * Fetch vehicle safety scores
     */
    async v1getVehicleSafetyScoreRaw(requestParameters: V1getVehicleSafetyScoreRequest): Promise<runtime.ApiResponse<V1VehicleSafetyScoreResponse>> {
        if (requestParameters.vehicleId === null || requestParameters.vehicleId === undefined) {
            throw new runtime.RequiredError('vehicleId','Required parameter requestParameters.vehicleId was null or undefined when calling v1getVehicleSafetyScore.');
        }

        if (requestParameters.startMs === null || requestParameters.startMs === undefined) {
            throw new runtime.RequiredError('startMs','Required parameter requestParameters.startMs was null or undefined when calling v1getVehicleSafetyScore.');
        }

        if (requestParameters.endMs === null || requestParameters.endMs === undefined) {
            throw new runtime.RequiredError('endMs','Required parameter requestParameters.endMs was null or undefined when calling v1getVehicleSafetyScore.');
        }

        const queryParameters: any = {};

        if (requestParameters.startMs !== undefined) {
            queryParameters['startMs'] = requestParameters.startMs;
        }

        if (requestParameters.endMs !== undefined) {
            queryParameters['endMs'] = requestParameters.endMs;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/fleet/vehicles/{vehicleId}/safety/score`.replace(`{${"vehicleId"}}`, encodeURIComponent(String(requestParameters.vehicleId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1VehicleSafetyScoreResponseFromJSON(jsonValue));
    }

    /**
     * <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> This endpoint is still on our legacy API. </nh> </n>  Fetch the safety score for the vehicle.
     * Fetch vehicle safety scores
     */
    async v1getVehicleSafetyScore(requestParameters: V1getVehicleSafetyScoreRequest): Promise<V1VehicleSafetyScoreResponse> {
        const response = await this.v1getVehicleSafetyScoreRaw(requestParameters);
        return await response.value();
    }

}
