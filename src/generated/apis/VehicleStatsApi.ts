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
    StandardErrorResponse,
    StandardErrorResponseFromJSON,
    StandardErrorResponseToJSON,
    VehicleStatsListResponse,
    VehicleStatsListResponseFromJSON,
    VehicleStatsListResponseToJSON,
    VehicleStatsResponse,
    VehicleStatsResponseFromJSON,
    VehicleStatsResponseToJSON,
} from '../models';

export interface GetVehicleStatsRequest {
    types: Array<GetVehicleStatsTypesEnum>;
    after?: string;
    time?: string;
    parentTagIds?: Array<string>;
    tagIds?: Array<string>;
    vehicleIds?: Array<string>;
}

export interface GetVehicleStatsFeedRequest {
    types: Array<GetVehicleStatsFeedTypesEnum>;
    after?: string;
    parentTagIds?: Array<string>;
    tagIds?: Array<string>;
    vehicleIds?: Array<string>;
    decorations?: Array<GetVehicleStatsFeedDecorationsEnum>;
}

export interface GetVehicleStatsHistoryRequest {
    startTime: string;
    endTime: string;
    types: Array<GetVehicleStatsHistoryTypesEnum>;
    after?: string;
    parentTagIds?: Array<string>;
    tagIds?: Array<string>;
    vehicleIds?: Array<string>;
    decorations?: Array<GetVehicleStatsHistoryDecorationsEnum>;
}

/**
 * 
 */
export class VehicleStatsApi extends runtime.BaseAPI {

    /**
     * Returns the last known stats of all vehicles at the given `time`. If no `time` is specified, the current time is used.  Related guide: <a href=\"/docs/telematics\" target=\"_blank\">Telematics</a>.
     * Stats snapshot
     */
    async getVehicleStatsRaw(requestParameters: GetVehicleStatsRequest): Promise<runtime.ApiResponse<VehicleStatsResponse>> {
        if (requestParameters.types === null || requestParameters.types === undefined) {
            throw new runtime.RequiredError('types','Required parameter requestParameters.types was null or undefined when calling getVehicleStats.');
        }

        const queryParameters: any = {};

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = requestParameters.after;
        }

        if (requestParameters.time !== undefined) {
            queryParameters['time'] = requestParameters.time;
        }

        if (requestParameters.parentTagIds) {
            queryParameters['parentTagIds'] = requestParameters.parentTagIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.tagIds) {
            queryParameters['tagIds'] = requestParameters.tagIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.vehicleIds) {
            queryParameters['vehicleIds'] = requestParameters.vehicleIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.types) {
            queryParameters['types'] = requestParameters.types.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fleet/vehicles/stats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VehicleStatsResponseFromJSON(jsonValue));
    }

    /**
     * Returns the last known stats of all vehicles at the given `time`. If no `time` is specified, the current time is used.  Related guide: <a href=\"/docs/telematics\" target=\"_blank\">Telematics</a>.
     * Stats snapshot
     */
    async getVehicleStats(requestParameters: GetVehicleStatsRequest): Promise<VehicleStatsResponse> {
        const response = await this.getVehicleStatsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Follow a feed of vehicle stats.   Your first call to this endpoint will provide you with the most recent stats for each vehicle and an `endCursor`.  You can the provide the `endCursor` value to the `after` query parameter to get all updates since the last call you made.  If `hasNextPage` is `false`, no new data is immediately available. You should wait a minimum of 5 seconds making a subsequent request.  Related guide: <a href=\"/docs/telematics\" target=\"_blank\">Telematics</a>.
     * Stats feed
     */
    async getVehicleStatsFeedRaw(requestParameters: GetVehicleStatsFeedRequest): Promise<runtime.ApiResponse<VehicleStatsListResponse>> {
        if (requestParameters.types === null || requestParameters.types === undefined) {
            throw new runtime.RequiredError('types','Required parameter requestParameters.types was null or undefined when calling getVehicleStatsFeed.');
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

        if (requestParameters.vehicleIds) {
            queryParameters['vehicleIds'] = requestParameters.vehicleIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.types) {
            queryParameters['types'] = requestParameters.types.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.decorations) {
            queryParameters['decorations'] = requestParameters.decorations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fleet/vehicles/stats/feed`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VehicleStatsListResponseFromJSON(jsonValue));
    }

    /**
     * Follow a feed of vehicle stats.   Your first call to this endpoint will provide you with the most recent stats for each vehicle and an `endCursor`.  You can the provide the `endCursor` value to the `after` query parameter to get all updates since the last call you made.  If `hasNextPage` is `false`, no new data is immediately available. You should wait a minimum of 5 seconds making a subsequent request.  Related guide: <a href=\"/docs/telematics\" target=\"_blank\">Telematics</a>.
     * Stats feed
     */
    async getVehicleStatsFeed(requestParameters: GetVehicleStatsFeedRequest): Promise<VehicleStatsListResponse> {
        const response = await this.getVehicleStatsFeedRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns vehicle stats during the given time range for all vehicles. This can be optionally filtered by tags or specific vehicle IDs.  Related guide: <a href=\"/docs/telematics\" target=\"_blank\">Telematics</a>.
     * Historical stats
     */
    async getVehicleStatsHistoryRaw(requestParameters: GetVehicleStatsHistoryRequest): Promise<runtime.ApiResponse<VehicleStatsListResponse>> {
        if (requestParameters.startTime === null || requestParameters.startTime === undefined) {
            throw new runtime.RequiredError('startTime','Required parameter requestParameters.startTime was null or undefined when calling getVehicleStatsHistory.');
        }

        if (requestParameters.endTime === null || requestParameters.endTime === undefined) {
            throw new runtime.RequiredError('endTime','Required parameter requestParameters.endTime was null or undefined when calling getVehicleStatsHistory.');
        }

        if (requestParameters.types === null || requestParameters.types === undefined) {
            throw new runtime.RequiredError('types','Required parameter requestParameters.types was null or undefined when calling getVehicleStatsHistory.');
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

        if (requestParameters.vehicleIds) {
            queryParameters['vehicleIds'] = requestParameters.vehicleIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.types) {
            queryParameters['types'] = requestParameters.types.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.decorations) {
            queryParameters['decorations'] = requestParameters.decorations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fleet/vehicles/stats/history`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VehicleStatsListResponseFromJSON(jsonValue));
    }

    /**
     * Returns vehicle stats during the given time range for all vehicles. This can be optionally filtered by tags or specific vehicle IDs.  Related guide: <a href=\"/docs/telematics\" target=\"_blank\">Telematics</a>.
     * Historical stats
     */
    async getVehicleStatsHistory(requestParameters: GetVehicleStatsHistoryRequest): Promise<VehicleStatsListResponse> {
        const response = await this.getVehicleStatsHistoryRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetVehicleStatsTypesEnum {
    AmbientAirTemperatureMilliC = 'ambientAirTemperatureMilliC',
    AuxInput1 = 'auxInput1',
    AuxInput2 = 'auxInput2',
    AuxInput3 = 'auxInput3',
    AuxInput4 = 'auxInput4',
    AuxInput5 = 'auxInput5',
    AuxInput6 = 'auxInput6',
    AuxInput7 = 'auxInput7',
    AuxInput8 = 'auxInput8',
    AuxInput9 = 'auxInput9',
    AuxInput10 = 'auxInput10',
    BarometricPressurePa = 'barometricPressurePa',
    BatteryMilliVolts = 'batteryMilliVolts',
    DefLevelMilliPercent = 'defLevelMilliPercent',
    EcuSpeedMph = 'ecuSpeedMph',
    EngineCoolantTemperatureMilliC = 'engineCoolantTemperatureMilliC',
    EngineImmobilizer = 'engineImmobilizer',
    EngineLoadPercent = 'engineLoadPercent',
    EngineOilPressureKpa = 'engineOilPressureKPa',
    EngineRpm = 'engineRpm',
    EngineStates = 'engineStates',
    FaultCodes = 'faultCodes',
    FuelPercents = 'fuelPercents',
    Gps = 'gps',
    GpsDistanceMeters = 'gpsDistanceMeters',
    GpsOdometerMeters = 'gpsOdometerMeters',
    IntakeManifoldTemperatureMilliC = 'intakeManifoldTemperatureMilliC',
    NfcCardScans = 'nfcCardScans',
    ObdEngineSeconds = 'obdEngineSeconds',
    ObdOdometerMeters = 'obdOdometerMeters',
    SyntheticEngineSeconds = 'syntheticEngineSeconds'
}
/**
    * @export
    * @enum {string}
    */
export enum GetVehicleStatsFeedTypesEnum {
    AmbientAirTemperatureMilliC = 'ambientAirTemperatureMilliC',
    AuxInput1 = 'auxInput1',
    AuxInput2 = 'auxInput2',
    AuxInput3 = 'auxInput3',
    AuxInput4 = 'auxInput4',
    AuxInput5 = 'auxInput5',
    AuxInput6 = 'auxInput6',
    AuxInput7 = 'auxInput7',
    AuxInput8 = 'auxInput8',
    AuxInput9 = 'auxInput9',
    AuxInput10 = 'auxInput10',
    BarometricPressurePa = 'barometricPressurePa',
    BatteryMilliVolts = 'batteryMilliVolts',
    DefLevelMilliPercent = 'defLevelMilliPercent',
    EcuSpeedMph = 'ecuSpeedMph',
    EngineCoolantTemperatureMilliC = 'engineCoolantTemperatureMilliC',
    EngineImmobilizer = 'engineImmobilizer',
    EngineLoadPercent = 'engineLoadPercent',
    EngineOilPressureKpa = 'engineOilPressureKPa',
    EngineRpm = 'engineRpm',
    EngineStates = 'engineStates',
    FaultCodes = 'faultCodes',
    FuelPercents = 'fuelPercents',
    Gps = 'gps',
    GpsDistanceMeters = 'gpsDistanceMeters',
    GpsOdometerMeters = 'gpsOdometerMeters',
    IntakeManifoldTemperatureMilliC = 'intakeManifoldTemperatureMilliC',
    NfcCardScans = 'nfcCardScans',
    ObdEngineSeconds = 'obdEngineSeconds',
    ObdOdometerMeters = 'obdOdometerMeters',
    SyntheticEngineSeconds = 'syntheticEngineSeconds'
}
/**
    * @export
    * @enum {string}
    */
export enum GetVehicleStatsFeedDecorationsEnum {
    AmbientAirTemperatureMilliC = 'ambientAirTemperatureMilliC',
    AuxInput1 = 'auxInput1',
    AuxInput2 = 'auxInput2',
    AuxInput3 = 'auxInput3',
    AuxInput4 = 'auxInput4',
    AuxInput5 = 'auxInput5',
    AuxInput6 = 'auxInput6',
    AuxInput7 = 'auxInput7',
    AuxInput8 = 'auxInput8',
    AuxInput9 = 'auxInput9',
    AuxInput10 = 'auxInput10',
    BatteryMilliVolts = 'batteryMilliVolts',
    BarometricPressurePa = 'barometricPressurePa',
    DefLevelMilliPercent = 'defLevelMilliPercent',
    EcuSpeedMph = 'ecuSpeedMph',
    EngineCoolantTemperatureMilliC = 'engineCoolantTemperatureMilliC',
    EngineImmobilizer = 'engineImmobilizer',
    EngineLoadPercent = 'engineLoadPercent',
    EngineOilPressureKpa = 'engineOilPressureKPa',
    EngineRpm = 'engineRpm',
    EngineStates = 'engineStates',
    FaultCodes = 'faultCodes',
    FuelPercents = 'fuelPercents',
    Gps = 'gps',
    GpsDistanceMeters = 'gpsDistanceMeters',
    IntakeManifoldTemperatureMilliC = 'intakeManifoldTemperatureMilliC',
    NfcCardScans = 'nfcCardScans',
    ObdEngineSeconds = 'obdEngineSeconds',
    ObdOdometerMeters = 'obdOdometerMeters'
}
/**
    * @export
    * @enum {string}
    */
export enum GetVehicleStatsHistoryTypesEnum {
    AmbientAirTemperatureMilliC = 'ambientAirTemperatureMilliC',
    AuxInput1 = 'auxInput1',
    AuxInput2 = 'auxInput2',
    AuxInput3 = 'auxInput3',
    AuxInput4 = 'auxInput4',
    AuxInput5 = 'auxInput5',
    AuxInput6 = 'auxInput6',
    AuxInput7 = 'auxInput7',
    AuxInput8 = 'auxInput8',
    AuxInput9 = 'auxInput9',
    AuxInput10 = 'auxInput10',
    BarometricPressurePa = 'barometricPressurePa',
    BatteryMilliVolts = 'batteryMilliVolts',
    DefLevelMilliPercent = 'defLevelMilliPercent',
    EcuSpeedMph = 'ecuSpeedMph',
    EngineCoolantTemperatureMilliC = 'engineCoolantTemperatureMilliC',
    EngineImmobilizer = 'engineImmobilizer',
    EngineLoadPercent = 'engineLoadPercent',
    EngineOilPressureKpa = 'engineOilPressureKPa',
    EngineRpm = 'engineRpm',
    EngineStates = 'engineStates',
    FaultCodes = 'faultCodes',
    FuelPercents = 'fuelPercents',
    Gps = 'gps',
    GpsDistanceMeters = 'gpsDistanceMeters',
    GpsOdometerMeters = 'gpsOdometerMeters',
    IntakeManifoldTemperatureMilliC = 'intakeManifoldTemperatureMilliC',
    NfcCardScans = 'nfcCardScans',
    ObdEngineSeconds = 'obdEngineSeconds',
    ObdOdometerMeters = 'obdOdometerMeters',
    SyntheticEngineSeconds = 'syntheticEngineSeconds'
}
/**
    * @export
    * @enum {string}
    */
export enum GetVehicleStatsHistoryDecorationsEnum {
    AmbientAirTemperatureMilliC = 'ambientAirTemperatureMilliC',
    AuxInput1 = 'auxInput1',
    AuxInput2 = 'auxInput2',
    AuxInput3 = 'auxInput3',
    AuxInput4 = 'auxInput4',
    AuxInput5 = 'auxInput5',
    AuxInput6 = 'auxInput6',
    AuxInput7 = 'auxInput7',
    AuxInput8 = 'auxInput8',
    AuxInput9 = 'auxInput9',
    AuxInput10 = 'auxInput10',
    BatteryMilliVolts = 'batteryMilliVolts',
    BarometricPressurePa = 'barometricPressurePa',
    DefLevelMilliPercent = 'defLevelMilliPercent',
    EcuSpeedMph = 'ecuSpeedMph',
    EngineCoolantTemperatureMilliC = 'engineCoolantTemperatureMilliC',
    EngineImmobilizer = 'engineImmobilizer',
    EngineLoadPercent = 'engineLoadPercent',
    EngineOilPressureKpa = 'engineOilPressureKPa',
    EngineRpm = 'engineRpm',
    EngineStates = 'engineStates',
    FaultCodes = 'faultCodes',
    FuelPercents = 'fuelPercents',
    Gps = 'gps',
    GpsDistanceMeters = 'gpsDistanceMeters',
    IntakeManifoldTemperatureMilliC = 'intakeManifoldTemperatureMilliC',
    NfcCardScans = 'nfcCardScans',
    ObdEngineSeconds = 'obdEngineSeconds',
    ObdOdometerMeters = 'obdOdometerMeters'
}
