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

import { exists, mapValues } from '../runtime';
import {
    V1SafetyReportHarshEvent,
    V1SafetyReportHarshEventFromJSON,
    V1SafetyReportHarshEventFromJSONTyped,
    V1SafetyReportHarshEventToJSON,
} from './';

/**
 * Safety score details for a driver
 * @export
 * @interface V1DriverSafetyScoreResponse
 */
export interface V1DriverSafetyScoreResponse {
    /**
     * Crash event count
     * @type {number}
     * @memberof V1DriverSafetyScoreResponse
     */
    crashCount?: number;
    /**
     * Driver ID
     * @type {number}
     * @memberof V1DriverSafetyScoreResponse
     */
    driverId?: number;
    /**
     * Harsh acceleration event count
     * @type {number}
     * @memberof V1DriverSafetyScoreResponse
     */
    harshAccelCount?: number;
    /**
     * Harsh braking event count
     * @type {number}
     * @memberof V1DriverSafetyScoreResponse
     */
    harshBrakingCount?: number;
    /**
     * 
     * @type {Array<V1SafetyReportHarshEvent>}
     * @memberof V1DriverSafetyScoreResponse
     */
    harshEvents?: Array<V1SafetyReportHarshEvent>;
    /**
     * Harsh turning event count
     * @type {number}
     * @memberof V1DriverSafetyScoreResponse
     */
    harshTurningCount?: number;
    /**
     * Safety Score
     * @type {number}
     * @memberof V1DriverSafetyScoreResponse
     */
    safetyScore?: number;
    /**
     * Safety Score Rank
     * @type {string}
     * @memberof V1DriverSafetyScoreResponse
     */
    safetyScoreRank?: string;
    /**
     * Amount of time driven over the speed limit in milliseconds
     * @type {number}
     * @memberof V1DriverSafetyScoreResponse
     */
    timeOverSpeedLimitMs?: number;
    /**
     * Total distance driven in meters
     * @type {number}
     * @memberof V1DriverSafetyScoreResponse
     */
    totalDistanceDrivenMeters?: number;
    /**
     * Total harsh event count
     * @type {number}
     * @memberof V1DriverSafetyScoreResponse
     */
    totalHarshEventCount?: number;
    /**
     * Amount of time driven in milliseconds
     * @type {number}
     * @memberof V1DriverSafetyScoreResponse
     */
    totalTimeDrivenMs?: number;
}

export function V1DriverSafetyScoreResponseFromJSON(json: any): V1DriverSafetyScoreResponse {
    return V1DriverSafetyScoreResponseFromJSONTyped(json, false);
}

export function V1DriverSafetyScoreResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DriverSafetyScoreResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'crashCount': !exists(json, 'crashCount') ? undefined : json['crashCount'],
        'driverId': !exists(json, 'driverId') ? undefined : json['driverId'],
        'harshAccelCount': !exists(json, 'harshAccelCount') ? undefined : json['harshAccelCount'],
        'harshBrakingCount': !exists(json, 'harshBrakingCount') ? undefined : json['harshBrakingCount'],
        'harshEvents': !exists(json, 'harshEvents') ? undefined : ((json['harshEvents'] as Array<any>).map(V1SafetyReportHarshEventFromJSON)),
        'harshTurningCount': !exists(json, 'harshTurningCount') ? undefined : json['harshTurningCount'],
        'safetyScore': !exists(json, 'safetyScore') ? undefined : json['safetyScore'],
        'safetyScoreRank': !exists(json, 'safetyScoreRank') ? undefined : json['safetyScoreRank'],
        'timeOverSpeedLimitMs': !exists(json, 'timeOverSpeedLimitMs') ? undefined : json['timeOverSpeedLimitMs'],
        'totalDistanceDrivenMeters': !exists(json, 'totalDistanceDrivenMeters') ? undefined : json['totalDistanceDrivenMeters'],
        'totalHarshEventCount': !exists(json, 'totalHarshEventCount') ? undefined : json['totalHarshEventCount'],
        'totalTimeDrivenMs': !exists(json, 'totalTimeDrivenMs') ? undefined : json['totalTimeDrivenMs'],
    };
}

export function V1DriverSafetyScoreResponseToJSON(value?: V1DriverSafetyScoreResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'crashCount': value.crashCount,
        'driverId': value.driverId,
        'harshAccelCount': value.harshAccelCount,
        'harshBrakingCount': value.harshBrakingCount,
        'harshEvents': value.harshEvents === undefined ? undefined : ((value.harshEvents as Array<any>).map(V1SafetyReportHarshEventToJSON)),
        'harshTurningCount': value.harshTurningCount,
        'safetyScore': value.safetyScore,
        'safetyScoreRank': value.safetyScoreRank,
        'timeOverSpeedLimitMs': value.timeOverSpeedLimitMs,
        'totalDistanceDrivenMeters': value.totalDistanceDrivenMeters,
        'totalHarshEventCount': value.totalHarshEventCount,
        'totalTimeDrivenMs': value.totalTimeDrivenMs,
    };
}


