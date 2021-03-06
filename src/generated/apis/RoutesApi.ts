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
    InlineObject,
    InlineObjectFromJSON,
    InlineObjectToJSON,
    RoutesCreateRouteBadGatewayErrorResponseBody,
    RoutesCreateRouteBadGatewayErrorResponseBodyFromJSON,
    RoutesCreateRouteBadGatewayErrorResponseBodyToJSON,
    RoutesCreateRouteBadRequestErrorResponseBody,
    RoutesCreateRouteBadRequestErrorResponseBodyFromJSON,
    RoutesCreateRouteBadRequestErrorResponseBodyToJSON,
    RoutesCreateRouteGatewayTimeoutErrorResponseBody,
    RoutesCreateRouteGatewayTimeoutErrorResponseBodyFromJSON,
    RoutesCreateRouteGatewayTimeoutErrorResponseBodyToJSON,
    RoutesCreateRouteInternalServerErrorResponseBody,
    RoutesCreateRouteInternalServerErrorResponseBodyFromJSON,
    RoutesCreateRouteInternalServerErrorResponseBodyToJSON,
    RoutesCreateRouteMethodNotAllowedErrorResponseBody,
    RoutesCreateRouteMethodNotAllowedErrorResponseBodyFromJSON,
    RoutesCreateRouteMethodNotAllowedErrorResponseBodyToJSON,
    RoutesCreateRouteNotFoundErrorResponseBody,
    RoutesCreateRouteNotFoundErrorResponseBodyFromJSON,
    RoutesCreateRouteNotFoundErrorResponseBodyToJSON,
    RoutesCreateRouteNotImplementedErrorResponseBody,
    RoutesCreateRouteNotImplementedErrorResponseBodyFromJSON,
    RoutesCreateRouteNotImplementedErrorResponseBodyToJSON,
    RoutesCreateRouteRequestBody,
    RoutesCreateRouteRequestBodyFromJSON,
    RoutesCreateRouteRequestBodyToJSON,
    RoutesCreateRouteResponseBody,
    RoutesCreateRouteResponseBodyFromJSON,
    RoutesCreateRouteResponseBodyToJSON,
    RoutesCreateRouteServiceUnavailableErrorResponseBody,
    RoutesCreateRouteServiceUnavailableErrorResponseBodyFromJSON,
    RoutesCreateRouteServiceUnavailableErrorResponseBodyToJSON,
    RoutesCreateRouteTooManyRequestsErrorResponseBody,
    RoutesCreateRouteTooManyRequestsErrorResponseBodyFromJSON,
    RoutesCreateRouteTooManyRequestsErrorResponseBodyToJSON,
    RoutesCreateRouteUnauthorizedErrorResponseBody,
    RoutesCreateRouteUnauthorizedErrorResponseBodyFromJSON,
    RoutesCreateRouteUnauthorizedErrorResponseBodyToJSON,
    RoutesDeleteRouteBadGatewayErrorResponseBody,
    RoutesDeleteRouteBadGatewayErrorResponseBodyFromJSON,
    RoutesDeleteRouteBadGatewayErrorResponseBodyToJSON,
    RoutesDeleteRouteBadRequestErrorResponseBody,
    RoutesDeleteRouteBadRequestErrorResponseBodyFromJSON,
    RoutesDeleteRouteBadRequestErrorResponseBodyToJSON,
    RoutesDeleteRouteGatewayTimeoutErrorResponseBody,
    RoutesDeleteRouteGatewayTimeoutErrorResponseBodyFromJSON,
    RoutesDeleteRouteGatewayTimeoutErrorResponseBodyToJSON,
    RoutesDeleteRouteInternalServerErrorResponseBody,
    RoutesDeleteRouteInternalServerErrorResponseBodyFromJSON,
    RoutesDeleteRouteInternalServerErrorResponseBodyToJSON,
    RoutesDeleteRouteMethodNotAllowedErrorResponseBody,
    RoutesDeleteRouteMethodNotAllowedErrorResponseBodyFromJSON,
    RoutesDeleteRouteMethodNotAllowedErrorResponseBodyToJSON,
    RoutesDeleteRouteNotFoundErrorResponseBody,
    RoutesDeleteRouteNotFoundErrorResponseBodyFromJSON,
    RoutesDeleteRouteNotFoundErrorResponseBodyToJSON,
    RoutesDeleteRouteNotImplementedErrorResponseBody,
    RoutesDeleteRouteNotImplementedErrorResponseBodyFromJSON,
    RoutesDeleteRouteNotImplementedErrorResponseBodyToJSON,
    RoutesDeleteRouteServiceUnavailableErrorResponseBody,
    RoutesDeleteRouteServiceUnavailableErrorResponseBodyFromJSON,
    RoutesDeleteRouteServiceUnavailableErrorResponseBodyToJSON,
    RoutesDeleteRouteTooManyRequestsErrorResponseBody,
    RoutesDeleteRouteTooManyRequestsErrorResponseBodyFromJSON,
    RoutesDeleteRouteTooManyRequestsErrorResponseBodyToJSON,
    RoutesDeleteRouteUnauthorizedErrorResponseBody,
    RoutesDeleteRouteUnauthorizedErrorResponseBodyFromJSON,
    RoutesDeleteRouteUnauthorizedErrorResponseBodyToJSON,
    RoutesFetchRouteBadGatewayErrorResponseBody,
    RoutesFetchRouteBadGatewayErrorResponseBodyFromJSON,
    RoutesFetchRouteBadGatewayErrorResponseBodyToJSON,
    RoutesFetchRouteBadRequestErrorResponseBody,
    RoutesFetchRouteBadRequestErrorResponseBodyFromJSON,
    RoutesFetchRouteBadRequestErrorResponseBodyToJSON,
    RoutesFetchRouteGatewayTimeoutErrorResponseBody,
    RoutesFetchRouteGatewayTimeoutErrorResponseBodyFromJSON,
    RoutesFetchRouteGatewayTimeoutErrorResponseBodyToJSON,
    RoutesFetchRouteInternalServerErrorResponseBody,
    RoutesFetchRouteInternalServerErrorResponseBodyFromJSON,
    RoutesFetchRouteInternalServerErrorResponseBodyToJSON,
    RoutesFetchRouteMethodNotAllowedErrorResponseBody,
    RoutesFetchRouteMethodNotAllowedErrorResponseBodyFromJSON,
    RoutesFetchRouteMethodNotAllowedErrorResponseBodyToJSON,
    RoutesFetchRouteNotFoundErrorResponseBody,
    RoutesFetchRouteNotFoundErrorResponseBodyFromJSON,
    RoutesFetchRouteNotFoundErrorResponseBodyToJSON,
    RoutesFetchRouteNotImplementedErrorResponseBody,
    RoutesFetchRouteNotImplementedErrorResponseBodyFromJSON,
    RoutesFetchRouteNotImplementedErrorResponseBodyToJSON,
    RoutesFetchRouteResponseBody,
    RoutesFetchRouteResponseBodyFromJSON,
    RoutesFetchRouteResponseBodyToJSON,
    RoutesFetchRouteServiceUnavailableErrorResponseBody,
    RoutesFetchRouteServiceUnavailableErrorResponseBodyFromJSON,
    RoutesFetchRouteServiceUnavailableErrorResponseBodyToJSON,
    RoutesFetchRouteTooManyRequestsErrorResponseBody,
    RoutesFetchRouteTooManyRequestsErrorResponseBodyFromJSON,
    RoutesFetchRouteTooManyRequestsErrorResponseBodyToJSON,
    RoutesFetchRouteUnauthorizedErrorResponseBody,
    RoutesFetchRouteUnauthorizedErrorResponseBodyFromJSON,
    RoutesFetchRouteUnauthorizedErrorResponseBodyToJSON,
    RoutesFetchRoutesBadGatewayErrorResponseBody,
    RoutesFetchRoutesBadGatewayErrorResponseBodyFromJSON,
    RoutesFetchRoutesBadGatewayErrorResponseBodyToJSON,
    RoutesFetchRoutesBadRequestErrorResponseBody,
    RoutesFetchRoutesBadRequestErrorResponseBodyFromJSON,
    RoutesFetchRoutesBadRequestErrorResponseBodyToJSON,
    RoutesFetchRoutesGatewayTimeoutErrorResponseBody,
    RoutesFetchRoutesGatewayTimeoutErrorResponseBodyFromJSON,
    RoutesFetchRoutesGatewayTimeoutErrorResponseBodyToJSON,
    RoutesFetchRoutesInternalServerErrorResponseBody,
    RoutesFetchRoutesInternalServerErrorResponseBodyFromJSON,
    RoutesFetchRoutesInternalServerErrorResponseBodyToJSON,
    RoutesFetchRoutesMethodNotAllowedErrorResponseBody,
    RoutesFetchRoutesMethodNotAllowedErrorResponseBodyFromJSON,
    RoutesFetchRoutesMethodNotAllowedErrorResponseBodyToJSON,
    RoutesFetchRoutesNotFoundErrorResponseBody,
    RoutesFetchRoutesNotFoundErrorResponseBodyFromJSON,
    RoutesFetchRoutesNotFoundErrorResponseBodyToJSON,
    RoutesFetchRoutesNotImplementedErrorResponseBody,
    RoutesFetchRoutesNotImplementedErrorResponseBodyFromJSON,
    RoutesFetchRoutesNotImplementedErrorResponseBodyToJSON,
    RoutesFetchRoutesResponseBody,
    RoutesFetchRoutesResponseBodyFromJSON,
    RoutesFetchRoutesResponseBodyToJSON,
    RoutesFetchRoutesServiceUnavailableErrorResponseBody,
    RoutesFetchRoutesServiceUnavailableErrorResponseBodyFromJSON,
    RoutesFetchRoutesServiceUnavailableErrorResponseBodyToJSON,
    RoutesFetchRoutesTooManyRequestsErrorResponseBody,
    RoutesFetchRoutesTooManyRequestsErrorResponseBodyFromJSON,
    RoutesFetchRoutesTooManyRequestsErrorResponseBodyToJSON,
    RoutesFetchRoutesUnauthorizedErrorResponseBody,
    RoutesFetchRoutesUnauthorizedErrorResponseBodyFromJSON,
    RoutesFetchRoutesUnauthorizedErrorResponseBodyToJSON,
    RoutesGetRoutesFeedBadGatewayErrorResponseBody,
    RoutesGetRoutesFeedBadGatewayErrorResponseBodyFromJSON,
    RoutesGetRoutesFeedBadGatewayErrorResponseBodyToJSON,
    RoutesGetRoutesFeedBadRequestErrorResponseBody,
    RoutesGetRoutesFeedBadRequestErrorResponseBodyFromJSON,
    RoutesGetRoutesFeedBadRequestErrorResponseBodyToJSON,
    RoutesGetRoutesFeedGatewayTimeoutErrorResponseBody,
    RoutesGetRoutesFeedGatewayTimeoutErrorResponseBodyFromJSON,
    RoutesGetRoutesFeedGatewayTimeoutErrorResponseBodyToJSON,
    RoutesGetRoutesFeedInternalServerErrorResponseBody,
    RoutesGetRoutesFeedInternalServerErrorResponseBodyFromJSON,
    RoutesGetRoutesFeedInternalServerErrorResponseBodyToJSON,
    RoutesGetRoutesFeedMethodNotAllowedErrorResponseBody,
    RoutesGetRoutesFeedMethodNotAllowedErrorResponseBodyFromJSON,
    RoutesGetRoutesFeedMethodNotAllowedErrorResponseBodyToJSON,
    RoutesGetRoutesFeedNotFoundErrorResponseBody,
    RoutesGetRoutesFeedNotFoundErrorResponseBodyFromJSON,
    RoutesGetRoutesFeedNotFoundErrorResponseBodyToJSON,
    RoutesGetRoutesFeedNotImplementedErrorResponseBody,
    RoutesGetRoutesFeedNotImplementedErrorResponseBodyFromJSON,
    RoutesGetRoutesFeedNotImplementedErrorResponseBodyToJSON,
    RoutesGetRoutesFeedResponseBody,
    RoutesGetRoutesFeedResponseBodyFromJSON,
    RoutesGetRoutesFeedResponseBodyToJSON,
    RoutesGetRoutesFeedServiceUnavailableErrorResponseBody,
    RoutesGetRoutesFeedServiceUnavailableErrorResponseBodyFromJSON,
    RoutesGetRoutesFeedServiceUnavailableErrorResponseBodyToJSON,
    RoutesGetRoutesFeedTooManyRequestsErrorResponseBody,
    RoutesGetRoutesFeedTooManyRequestsErrorResponseBodyFromJSON,
    RoutesGetRoutesFeedTooManyRequestsErrorResponseBodyToJSON,
    RoutesGetRoutesFeedUnauthorizedErrorResponseBody,
    RoutesGetRoutesFeedUnauthorizedErrorResponseBodyFromJSON,
    RoutesGetRoutesFeedUnauthorizedErrorResponseBodyToJSON,
    RoutesPatchRouteBadGatewayErrorResponseBody,
    RoutesPatchRouteBadGatewayErrorResponseBodyFromJSON,
    RoutesPatchRouteBadGatewayErrorResponseBodyToJSON,
    RoutesPatchRouteBadRequestErrorResponseBody,
    RoutesPatchRouteBadRequestErrorResponseBodyFromJSON,
    RoutesPatchRouteBadRequestErrorResponseBodyToJSON,
    RoutesPatchRouteGatewayTimeoutErrorResponseBody,
    RoutesPatchRouteGatewayTimeoutErrorResponseBodyFromJSON,
    RoutesPatchRouteGatewayTimeoutErrorResponseBodyToJSON,
    RoutesPatchRouteInternalServerErrorResponseBody,
    RoutesPatchRouteInternalServerErrorResponseBodyFromJSON,
    RoutesPatchRouteInternalServerErrorResponseBodyToJSON,
    RoutesPatchRouteMethodNotAllowedErrorResponseBody,
    RoutesPatchRouteMethodNotAllowedErrorResponseBodyFromJSON,
    RoutesPatchRouteMethodNotAllowedErrorResponseBodyToJSON,
    RoutesPatchRouteNotFoundErrorResponseBody,
    RoutesPatchRouteNotFoundErrorResponseBodyFromJSON,
    RoutesPatchRouteNotFoundErrorResponseBodyToJSON,
    RoutesPatchRouteNotImplementedErrorResponseBody,
    RoutesPatchRouteNotImplementedErrorResponseBodyFromJSON,
    RoutesPatchRouteNotImplementedErrorResponseBodyToJSON,
    RoutesPatchRouteRequestBody,
    RoutesPatchRouteRequestBodyFromJSON,
    RoutesPatchRouteRequestBodyToJSON,
    RoutesPatchRouteResponseBody,
    RoutesPatchRouteResponseBodyFromJSON,
    RoutesPatchRouteResponseBodyToJSON,
    RoutesPatchRouteServiceUnavailableErrorResponseBody,
    RoutesPatchRouteServiceUnavailableErrorResponseBodyFromJSON,
    RoutesPatchRouteServiceUnavailableErrorResponseBodyToJSON,
    RoutesPatchRouteTooManyRequestsErrorResponseBody,
    RoutesPatchRouteTooManyRequestsErrorResponseBodyFromJSON,
    RoutesPatchRouteTooManyRequestsErrorResponseBodyToJSON,
    RoutesPatchRouteUnauthorizedErrorResponseBody,
    RoutesPatchRouteUnauthorizedErrorResponseBodyFromJSON,
    RoutesPatchRouteUnauthorizedErrorResponseBodyToJSON,
} from '../models';

export interface CreateRouteRequest {
    createRouteRequestBody: RoutesCreateRouteRequestBody;
}

export interface DeleteRouteRequest {
    id: string;
}

export interface FetchRouteRequest {
    id: string;
}

export interface FetchRoutesRequest {
    startTime: string;
    endTime: string;
    limit?: number;
    after?: string;
}

export interface GetRoutesFeedRequest {
    after?: string;
    expand?: GetRoutesFeedExpandEnum;
}

export interface PatchRouteRequest {
    id: string;
    patchRouteRequestBody: RoutesPatchRouteRequestBody;
}

export interface V1deleteDispatchRouteByIdRequest {
    routeIdOrExternalId: string;
    applyToFutureRoutes?: InlineObject;
}

/**
 * 
 */
export class RoutesApi extends runtime.BaseAPI {

    /**
     * Create a route. The legacy version of this endpoint can be found at [samsara.com/api-legacy](https://www.samsara.com/api-legacy#operation/createDispatchRoute).
     * Create a route
     */
    async createRouteRaw(requestParameters: CreateRouteRequest): Promise<runtime.ApiResponse<RoutesCreateRouteResponseBody>> {
        if (requestParameters.createRouteRequestBody === null || requestParameters.createRouteRequestBody === undefined) {
            throw new runtime.RequiredError('createRouteRequestBody','Required parameter requestParameters.createRouteRequestBody was null or undefined when calling createRoute.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/fleet/routes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RoutesCreateRouteRequestBodyToJSON(requestParameters.createRouteRequestBody),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RoutesCreateRouteResponseBodyFromJSON(jsonValue));
    }

    /**
     * Create a route. The legacy version of this endpoint can be found at [samsara.com/api-legacy](https://www.samsara.com/api-legacy#operation/createDispatchRoute).
     * Create a route
     */
    async createRoute(requestParameters: CreateRouteRequest): Promise<RoutesCreateRouteResponseBody> {
        const response = await this.createRouteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete a dispatch route and its associated stops.
     * Delete a route.
     */
    async deleteRouteRaw(requestParameters: DeleteRouteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteRoute.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fleet/routes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a dispatch route and its associated stops.
     * Delete a route.
     */
    async deleteRoute(requestParameters: DeleteRouteRequest): Promise<void> {
        await this.deleteRouteRaw(requestParameters);
    }

    /**
     * Returns a single route. The legacy version of this endpoint can be found at [samsara.com/api-legacy](https://www.samsara.com/api-legacy#operation/getDispatchRouteById).
     * Fetch a route
     */
    async fetchRouteRaw(requestParameters: FetchRouteRequest): Promise<runtime.ApiResponse<RoutesFetchRouteResponseBody>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling fetchRoute.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fleet/routes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RoutesFetchRouteResponseBodyFromJSON(jsonValue));
    }

    /**
     * Returns a single route. The legacy version of this endpoint can be found at [samsara.com/api-legacy](https://www.samsara.com/api-legacy#operation/getDispatchRouteById).
     * Fetch a route
     */
    async fetchRoute(requestParameters: FetchRouteRequest): Promise<RoutesFetchRouteResponseBody> {
        const response = await this.fetchRouteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns multiple routes. The legacy version of this endpoint can be found at [samsara.com/api-legacy](https://www.samsara.com/api-legacy#operation/fetchAllDispatchRoutes).
     * Fetch all routes
     */
    async fetchRoutesRaw(requestParameters: FetchRoutesRequest): Promise<runtime.ApiResponse<RoutesFetchRoutesResponseBody>> {
        if (requestParameters.startTime === null || requestParameters.startTime === undefined) {
            throw new runtime.RequiredError('startTime','Required parameter requestParameters.startTime was null or undefined when calling fetchRoutes.');
        }

        if (requestParameters.endTime === null || requestParameters.endTime === undefined) {
            throw new runtime.RequiredError('endTime','Required parameter requestParameters.endTime was null or undefined when calling fetchRoutes.');
        }

        const queryParameters: any = {};

        if (requestParameters.startTime !== undefined) {
            queryParameters['startTime'] = requestParameters.startTime;
        }

        if (requestParameters.endTime !== undefined) {
            queryParameters['endTime'] = requestParameters.endTime;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = requestParameters.after;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fleet/routes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RoutesFetchRoutesResponseBodyFromJSON(jsonValue));
    }

    /**
     * Returns multiple routes. The legacy version of this endpoint can be found at [samsara.com/api-legacy](https://www.samsara.com/api-legacy#operation/fetchAllDispatchRoutes).
     * Fetch all routes
     */
    async fetchRoutes(requestParameters: FetchRoutesRequest): Promise<RoutesFetchRoutesResponseBody> {
        const response = await this.fetchRoutesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Subscribes to a feed of immutable, append-only updates for routes. The initial request to this feed endpoint returns a cursor, which can be used on the next request to fetch updated routes that have had state changes since that request.  The legacy version of this endpoint can be found at [samsara.com/api-legacy](https://www.samsara.com/api-legacy#operation/fetchAllRouteJobUpdates).
     * Get route updates
     */
    async getRoutesFeedRaw(requestParameters: GetRoutesFeedRequest): Promise<runtime.ApiResponse<RoutesGetRoutesFeedResponseBody>> {
        const queryParameters: any = {};

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = requestParameters.after;
        }

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fleet/routes/audit-logs/feed`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RoutesGetRoutesFeedResponseBodyFromJSON(jsonValue));
    }

    /**
     * Subscribes to a feed of immutable, append-only updates for routes. The initial request to this feed endpoint returns a cursor, which can be used on the next request to fetch updated routes that have had state changes since that request.  The legacy version of this endpoint can be found at [samsara.com/api-legacy](https://www.samsara.com/api-legacy#operation/fetchAllRouteJobUpdates).
     * Get route updates
     */
    async getRoutesFeed(requestParameters: GetRoutesFeedRequest): Promise<RoutesGetRoutesFeedResponseBody> {
        const response = await this.getRoutesFeedRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update a route.  **Note** this implementation of patch uses [the JSON merge patch](https://tools.ietf.org/html/rfc7396) proposed standard.  This means that any fields included in the patch request will _overwrite_ fields which exist on the target resource.  For arrays, this means any array included in the request will _replace_ the array that exists at the specified path, it will not _add_ to the existing array.  The legacy version of this endpoint (which uses PUT instead of PATCH) can be found at [samsara.com/api-legacy](https://www.samsara.com/api-legacy#operation/updateDispatchRouteById).
     * Update a route
     */
    async patchRouteRaw(requestParameters: PatchRouteRequest): Promise<runtime.ApiResponse<RoutesPatchRouteResponseBody>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchRoute.');
        }

        if (requestParameters.patchRouteRequestBody === null || requestParameters.patchRouteRequestBody === undefined) {
            throw new runtime.RequiredError('patchRouteRequestBody','Required parameter requestParameters.patchRouteRequestBody was null or undefined when calling patchRoute.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/fleet/routes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: RoutesPatchRouteRequestBodyToJSON(requestParameters.patchRouteRequestBody),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RoutesPatchRouteResponseBodyFromJSON(jsonValue));
    }

    /**
     * Update a route.  **Note** this implementation of patch uses [the JSON merge patch](https://tools.ietf.org/html/rfc7396) proposed standard.  This means that any fields included in the patch request will _overwrite_ fields which exist on the target resource.  For arrays, this means any array included in the request will _replace_ the array that exists at the specified path, it will not _add_ to the existing array.  The legacy version of this endpoint (which uses PUT instead of PATCH) can be found at [samsara.com/api-legacy](https://www.samsara.com/api-legacy#operation/updateDispatchRouteById).
     * Update a route
     */
    async patchRoute(requestParameters: PatchRouteRequest): Promise<RoutesPatchRouteResponseBody> {
        const response = await this.patchRouteRaw(requestParameters);
        return await response.value();
    }

    /**
     * <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> This endpoint is still on our legacy API. </nh> </n>  Delete a dispatch route and its associated jobs.
     * Delete a route
     */
    async v1deleteDispatchRouteByIdRaw(requestParameters: V1deleteDispatchRouteByIdRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.routeIdOrExternalId === null || requestParameters.routeIdOrExternalId === undefined) {
            throw new runtime.RequiredError('routeIdOrExternalId','Required parameter requestParameters.routeIdOrExternalId was null or undefined when calling v1deleteDispatchRouteById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/fleet/dispatch/routes/{route_id_or_external_id}`.replace(`{${"route_id_or_external_id"}}`, encodeURIComponent(String(requestParameters.routeIdOrExternalId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObjectToJSON(requestParameters.applyToFutureRoutes),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> This endpoint is still on our legacy API. </nh> </n>  Delete a dispatch route and its associated jobs.
     * Delete a route
     */
    async v1deleteDispatchRouteById(requestParameters: V1deleteDispatchRouteByIdRequest): Promise<void> {
        await this.v1deleteDispatchRouteByIdRaw(requestParameters);
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetRoutesFeedExpandEnum {
    Route = 'route'
}
