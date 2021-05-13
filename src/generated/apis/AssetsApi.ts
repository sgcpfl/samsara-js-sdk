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
    InlineResponse2001,
    InlineResponse2001FromJSON,
    InlineResponse2001ToJSON,
    InlineResponse2002,
    InlineResponse2002FromJSON,
    InlineResponse2002ToJSON,
    InlineResponse2003,
    InlineResponse2003FromJSON,
    InlineResponse2003ToJSON,
    V1AssetReeferResponse,
    V1AssetReeferResponseFromJSON,
    V1AssetReeferResponseToJSON,
} from '../models';

export interface V1getAllAssetCurrentLocationsRequest {
    startingAfter?: string;
    endingBefore?: string;
    limit?: number;
}

export interface V1getAssetLocationRequest {
    assetId: number;
    startMs: number;
    endMs: number;
}

export interface V1getAssetReeferRequest {
    assetId: number;
    startMs: number;
    endMs: number;
}

export interface V1getAssetsReefersRequest {
    startMs: number;
    endMs: number;
    startingAfter?: string;
    endingBefore?: string;
    limit?: number;
}

/**
 * 
 */
export class AssetsApi extends runtime.BaseAPI {

    /**
     * <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> This endpoint is still on our legacy API. </nh> </n>  Fetch current locations of all assets.
     * List current location for all assets
     */
    async v1getAllAssetCurrentLocationsRaw(requestParameters: V1getAllAssetCurrentLocationsRequest): Promise<runtime.ApiResponse<InlineResponse2002>> {
        const queryParameters: any = {};

        if (requestParameters.startingAfter !== undefined) {
            queryParameters['startingAfter'] = requestParameters.startingAfter;
        }

        if (requestParameters.endingBefore !== undefined) {
            queryParameters['endingBefore'] = requestParameters.endingBefore;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/fleet/assets/locations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2002FromJSON(jsonValue));
    }

    /**
     * <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> This endpoint is still on our legacy API. </nh> </n>  Fetch current locations of all assets.
     * List current location for all assets
     */
    async v1getAllAssetCurrentLocations(requestParameters: V1getAllAssetCurrentLocationsRequest): Promise<InlineResponse2002> {
        const response = await this.v1getAllAssetCurrentLocationsRaw(requestParameters);
        return await response.value();
    }

    /**
     * <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> This endpoint is still on our legacy API. </nh> </n>  Fetch all of the assets.
     * List all assets
     */
    async v1getAllAssetsRaw(): Promise<runtime.ApiResponse<InlineResponse2001>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/fleet/assets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

    /**
     * <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> This endpoint is still on our legacy API. </nh> </n>  Fetch all of the assets.
     * List all assets
     */
    async v1getAllAssets(): Promise<InlineResponse2001> {
        const response = await this.v1getAllAssetsRaw();
        return await response.value();
    }

    /**
     * <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> This endpoint is still on our legacy API. </nh> </n>  List historical locations for a given asset.
     * List historical locations for a given asset
     */
    async v1getAssetLocationRaw(requestParameters: V1getAssetLocationRequest): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters.assetId === null || requestParameters.assetId === undefined) {
            throw new runtime.RequiredError('assetId','Required parameter requestParameters.assetId was null or undefined when calling v1getAssetLocation.');
        }

        if (requestParameters.startMs === null || requestParameters.startMs === undefined) {
            throw new runtime.RequiredError('startMs','Required parameter requestParameters.startMs was null or undefined when calling v1getAssetLocation.');
        }

        if (requestParameters.endMs === null || requestParameters.endMs === undefined) {
            throw new runtime.RequiredError('endMs','Required parameter requestParameters.endMs was null or undefined when calling v1getAssetLocation.');
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
            path: `/v1/fleet/assets/{asset_id}/locations`.replace(`{${"asset_id"}}`, encodeURIComponent(String(requestParameters.assetId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> This endpoint is still on our legacy API. </nh> </n>  List historical locations for a given asset.
     * List historical locations for a given asset
     */
    async v1getAssetLocation(requestParameters: V1getAssetLocationRequest): Promise<Array<object>> {
        const response = await this.v1getAssetLocationRaw(requestParameters);
        return await response.value();
    }

    /**
     * <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> This endpoint is still on our legacy API. </nh> </n>  Fetch the reefer-specific stats of an asset.
     * List stats for a given reefer
     */
    async v1getAssetReeferRaw(requestParameters: V1getAssetReeferRequest): Promise<runtime.ApiResponse<V1AssetReeferResponse>> {
        if (requestParameters.assetId === null || requestParameters.assetId === undefined) {
            throw new runtime.RequiredError('assetId','Required parameter requestParameters.assetId was null or undefined when calling v1getAssetReefer.');
        }

        if (requestParameters.startMs === null || requestParameters.startMs === undefined) {
            throw new runtime.RequiredError('startMs','Required parameter requestParameters.startMs was null or undefined when calling v1getAssetReefer.');
        }

        if (requestParameters.endMs === null || requestParameters.endMs === undefined) {
            throw new runtime.RequiredError('endMs','Required parameter requestParameters.endMs was null or undefined when calling v1getAssetReefer.');
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
            path: `/v1/fleet/assets/{asset_id}/reefer`.replace(`{${"asset_id"}}`, encodeURIComponent(String(requestParameters.assetId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1AssetReeferResponseFromJSON(jsonValue));
    }

    /**
     * <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> This endpoint is still on our legacy API. </nh> </n>  Fetch the reefer-specific stats of an asset.
     * List stats for a given reefer
     */
    async v1getAssetReefer(requestParameters: V1getAssetReeferRequest): Promise<V1AssetReeferResponse> {
        const response = await this.v1getAssetReeferRaw(requestParameters);
        return await response.value();
    }

    /**
     * <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> This endpoint is still on our legacy API. </nh> </n>  Fetches all reefers and reefer-specific stats.
     * List stats for all reefers
     */
    async v1getAssetsReefersRaw(requestParameters: V1getAssetsReefersRequest): Promise<runtime.ApiResponse<InlineResponse2003>> {
        if (requestParameters.startMs === null || requestParameters.startMs === undefined) {
            throw new runtime.RequiredError('startMs','Required parameter requestParameters.startMs was null or undefined when calling v1getAssetsReefers.');
        }

        if (requestParameters.endMs === null || requestParameters.endMs === undefined) {
            throw new runtime.RequiredError('endMs','Required parameter requestParameters.endMs was null or undefined when calling v1getAssetsReefers.');
        }

        const queryParameters: any = {};

        if (requestParameters.startMs !== undefined) {
            queryParameters['startMs'] = requestParameters.startMs;
        }

        if (requestParameters.endMs !== undefined) {
            queryParameters['endMs'] = requestParameters.endMs;
        }

        if (requestParameters.startingAfter !== undefined) {
            queryParameters['startingAfter'] = requestParameters.startingAfter;
        }

        if (requestParameters.endingBefore !== undefined) {
            queryParameters['endingBefore'] = requestParameters.endingBefore;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/fleet/assets/reefers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2003FromJSON(jsonValue));
    }

    /**
     * <n class=\"warning\"> <nh> <i class=\"fa fa-exclamation-circle\"></i> This endpoint is still on our legacy API. </nh> </n>  Fetches all reefers and reefer-specific stats.
     * List stats for all reefers
     */
    async v1getAssetsReefers(requestParameters: V1getAssetsReefersRequest): Promise<InlineResponse2003> {
        const response = await this.v1getAssetsReefersRaw(requestParameters);
        return await response.value();
    }

}