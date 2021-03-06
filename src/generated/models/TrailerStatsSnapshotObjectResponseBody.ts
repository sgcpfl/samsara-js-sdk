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

import { exists, mapValues } from '../runtime';
import {
    TrailerStatGpsOdometerMetersTypeResponseBody,
    TrailerStatGpsOdometerMetersTypeResponseBodyFromJSON,
    TrailerStatGpsOdometerMetersTypeResponseBodyFromJSONTyped,
    TrailerStatGpsOdometerMetersTypeResponseBodyToJSON,
    TrailerStatGpsTypeResponseBody,
    TrailerStatGpsTypeResponseBodyFromJSON,
    TrailerStatGpsTypeResponseBodyFromJSONTyped,
    TrailerStatGpsTypeResponseBodyToJSON,
    TrailerStatReeferAlarmTypeResponseBody,
    TrailerStatReeferAlarmTypeResponseBodyFromJSON,
    TrailerStatReeferAlarmTypeResponseBodyFromJSONTyped,
    TrailerStatReeferAlarmTypeResponseBodyToJSON,
    TrailerStatReeferAmbientAirTemperatureMilliCTypeResponseBody,
    TrailerStatReeferAmbientAirTemperatureMilliCTypeResponseBodyFromJSON,
    TrailerStatReeferAmbientAirTemperatureMilliCTypeResponseBodyFromJSONTyped,
    TrailerStatReeferAmbientAirTemperatureMilliCTypeResponseBodyToJSON,
    TrailerStatReeferFuelPercentTypeResponseBody,
    TrailerStatReeferFuelPercentTypeResponseBodyFromJSON,
    TrailerStatReeferFuelPercentTypeResponseBodyFromJSONTyped,
    TrailerStatReeferFuelPercentTypeResponseBodyToJSON,
    TrailerStatReeferObdEngineSecondsTypeResponseBody,
    TrailerStatReeferObdEngineSecondsTypeResponseBodyFromJSON,
    TrailerStatReeferObdEngineSecondsTypeResponseBodyFromJSONTyped,
    TrailerStatReeferObdEngineSecondsTypeResponseBodyToJSON,
    TrailerStatReeferReturnAirTemperatureMilliCZone1TypeResponseBody,
    TrailerStatReeferReturnAirTemperatureMilliCZone1TypeResponseBodyFromJSON,
    TrailerStatReeferReturnAirTemperatureMilliCZone1TypeResponseBodyFromJSONTyped,
    TrailerStatReeferReturnAirTemperatureMilliCZone1TypeResponseBodyToJSON,
    TrailerStatReeferReturnAirTemperatureMilliCZone2TypeResponseBody,
    TrailerStatReeferReturnAirTemperatureMilliCZone2TypeResponseBodyFromJSON,
    TrailerStatReeferReturnAirTemperatureMilliCZone2TypeResponseBodyFromJSONTyped,
    TrailerStatReeferReturnAirTemperatureMilliCZone2TypeResponseBodyToJSON,
    TrailerStatReeferReturnAirTemperatureMilliCZone3TypeResponseBody,
    TrailerStatReeferReturnAirTemperatureMilliCZone3TypeResponseBodyFromJSON,
    TrailerStatReeferReturnAirTemperatureMilliCZone3TypeResponseBodyFromJSONTyped,
    TrailerStatReeferReturnAirTemperatureMilliCZone3TypeResponseBodyToJSON,
    TrailerStatReeferRunModeTypeResponseBody,
    TrailerStatReeferRunModeTypeResponseBodyFromJSON,
    TrailerStatReeferRunModeTypeResponseBodyFromJSONTyped,
    TrailerStatReeferRunModeTypeResponseBodyToJSON,
    TrailerStatReeferSetPointTemperatureMilliCZone1TypeResponseBody,
    TrailerStatReeferSetPointTemperatureMilliCZone1TypeResponseBodyFromJSON,
    TrailerStatReeferSetPointTemperatureMilliCZone1TypeResponseBodyFromJSONTyped,
    TrailerStatReeferSetPointTemperatureMilliCZone1TypeResponseBodyToJSON,
    TrailerStatReeferSetPointTemperatureMilliCZone2TypeResponseBody,
    TrailerStatReeferSetPointTemperatureMilliCZone2TypeResponseBodyFromJSON,
    TrailerStatReeferSetPointTemperatureMilliCZone2TypeResponseBodyFromJSONTyped,
    TrailerStatReeferSetPointTemperatureMilliCZone2TypeResponseBodyToJSON,
    TrailerStatReeferSetPointTemperatureMilliCZone3TypeResponseBody,
    TrailerStatReeferSetPointTemperatureMilliCZone3TypeResponseBodyFromJSON,
    TrailerStatReeferSetPointTemperatureMilliCZone3TypeResponseBodyFromJSONTyped,
    TrailerStatReeferSetPointTemperatureMilliCZone3TypeResponseBodyToJSON,
    TrailerStatReeferStateTypeResponseBody,
    TrailerStatReeferStateTypeResponseBodyFromJSON,
    TrailerStatReeferStateTypeResponseBodyFromJSONTyped,
    TrailerStatReeferStateTypeResponseBodyToJSON,
    TrailerStatReeferStateZone1TypeResponseBody,
    TrailerStatReeferStateZone1TypeResponseBodyFromJSON,
    TrailerStatReeferStateZone1TypeResponseBodyFromJSONTyped,
    TrailerStatReeferStateZone1TypeResponseBodyToJSON,
    TrailerStatReeferStateZone2TypeResponseBody,
    TrailerStatReeferStateZone2TypeResponseBodyFromJSON,
    TrailerStatReeferStateZone2TypeResponseBodyFromJSONTyped,
    TrailerStatReeferStateZone2TypeResponseBodyToJSON,
    TrailerStatReeferStateZone3TypeResponseBody,
    TrailerStatReeferStateZone3TypeResponseBodyFromJSON,
    TrailerStatReeferStateZone3TypeResponseBodyFromJSONTyped,
    TrailerStatReeferStateZone3TypeResponseBodyToJSON,
    TrailerStatReeferSupplyAirTemperatureMilliCZone1TypeResponseBody,
    TrailerStatReeferSupplyAirTemperatureMilliCZone1TypeResponseBodyFromJSON,
    TrailerStatReeferSupplyAirTemperatureMilliCZone1TypeResponseBodyFromJSONTyped,
    TrailerStatReeferSupplyAirTemperatureMilliCZone1TypeResponseBodyToJSON,
    TrailerStatReeferSupplyAirTemperatureMilliCZone2TypeResponseBody,
    TrailerStatReeferSupplyAirTemperatureMilliCZone2TypeResponseBodyFromJSON,
    TrailerStatReeferSupplyAirTemperatureMilliCZone2TypeResponseBodyFromJSONTyped,
    TrailerStatReeferSupplyAirTemperatureMilliCZone2TypeResponseBodyToJSON,
    TrailerStatReeferSupplyAirTemperatureMilliCZone3TypeResponseBody,
    TrailerStatReeferSupplyAirTemperatureMilliCZone3TypeResponseBodyFromJSON,
    TrailerStatReeferSupplyAirTemperatureMilliCZone3TypeResponseBodyFromJSONTyped,
    TrailerStatReeferSupplyAirTemperatureMilliCZone3TypeResponseBodyToJSON,
} from './';

/**
 * A trailer and its stats
 * @export
 * @interface TrailerStatsSnapshotObjectResponseBody
 */
export interface TrailerStatsSnapshotObjectResponseBody {
    /**
     * 
     * @type {TrailerStatReeferStateTypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    carrierReeferState?: TrailerStatReeferStateTypeResponseBody;
    /**
     * 
     * @type {TrailerStatGpsTypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    gps?: TrailerStatGpsTypeResponseBody;
    /**
     * 
     * @type {TrailerStatGpsOdometerMetersTypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    gpsOdometerMeters?: TrailerStatGpsOdometerMetersTypeResponseBody;
    /**
     * ID of the trailer.
     * @type {string}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    id: string;
    /**
     * Name of the vehicle.
     * @type {string}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    name: string;
    /**
     * 
     * @type {TrailerStatReeferAlarmTypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    reeferAlarms?: TrailerStatReeferAlarmTypeResponseBody;
    /**
     * 
     * @type {TrailerStatReeferAmbientAirTemperatureMilliCTypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    reeferAmbientAirTemperatureMilliC?: TrailerStatReeferAmbientAirTemperatureMilliCTypeResponseBody;
    /**
     * 
     * @type {TrailerStatReeferFuelPercentTypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    reeferFuelPercent?: TrailerStatReeferFuelPercentTypeResponseBody;
    /**
     * 
     * @type {TrailerStatReeferObdEngineSecondsTypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    reeferObdEngineSeconds?: TrailerStatReeferObdEngineSecondsTypeResponseBody;
    /**
     * 
     * @type {TrailerStatReeferReturnAirTemperatureMilliCZone1TypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    reeferReturnAirTemperatureMilliCZone1?: TrailerStatReeferReturnAirTemperatureMilliCZone1TypeResponseBody;
    /**
     * 
     * @type {TrailerStatReeferReturnAirTemperatureMilliCZone2TypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    reeferReturnAirTemperatureMilliCZone2?: TrailerStatReeferReturnAirTemperatureMilliCZone2TypeResponseBody;
    /**
     * 
     * @type {TrailerStatReeferReturnAirTemperatureMilliCZone3TypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    reeferReturnAirTemperatureMilliCZone3?: TrailerStatReeferReturnAirTemperatureMilliCZone3TypeResponseBody;
    /**
     * 
     * @type {TrailerStatReeferRunModeTypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    reeferRunMode?: TrailerStatReeferRunModeTypeResponseBody;
    /**
     * 
     * @type {TrailerStatReeferSetPointTemperatureMilliCZone1TypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    reeferSetPointTemperatureMilliCZone1?: TrailerStatReeferSetPointTemperatureMilliCZone1TypeResponseBody;
    /**
     * 
     * @type {TrailerStatReeferSetPointTemperatureMilliCZone2TypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    reeferSetPointTemperatureMilliCZone2?: TrailerStatReeferSetPointTemperatureMilliCZone2TypeResponseBody;
    /**
     * 
     * @type {TrailerStatReeferSetPointTemperatureMilliCZone3TypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    reeferSetPointTemperatureMilliCZone3?: TrailerStatReeferSetPointTemperatureMilliCZone3TypeResponseBody;
    /**
     * 
     * @type {TrailerStatReeferStateZone1TypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    reeferStateZone1?: TrailerStatReeferStateZone1TypeResponseBody;
    /**
     * 
     * @type {TrailerStatReeferStateZone2TypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    reeferStateZone2?: TrailerStatReeferStateZone2TypeResponseBody;
    /**
     * 
     * @type {TrailerStatReeferStateZone3TypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    reeferStateZone3?: TrailerStatReeferStateZone3TypeResponseBody;
    /**
     * 
     * @type {TrailerStatReeferSupplyAirTemperatureMilliCZone1TypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    reeferSupplyAirTemperatureMilliCZone1?: TrailerStatReeferSupplyAirTemperatureMilliCZone1TypeResponseBody;
    /**
     * 
     * @type {TrailerStatReeferSupplyAirTemperatureMilliCZone2TypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    reeferSupplyAirTemperatureMilliCZone2?: TrailerStatReeferSupplyAirTemperatureMilliCZone2TypeResponseBody;
    /**
     * 
     * @type {TrailerStatReeferSupplyAirTemperatureMilliCZone3TypeResponseBody}
     * @memberof TrailerStatsSnapshotObjectResponseBody
     */
    reeferSupplyAirTemperatureMilliCZone3?: TrailerStatReeferSupplyAirTemperatureMilliCZone3TypeResponseBody;
}

export function TrailerStatsSnapshotObjectResponseBodyFromJSON(json: any): TrailerStatsSnapshotObjectResponseBody {
    return TrailerStatsSnapshotObjectResponseBodyFromJSONTyped(json, false);
}

export function TrailerStatsSnapshotObjectResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrailerStatsSnapshotObjectResponseBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'carrierReeferState': !exists(json, 'carrierReeferState') ? undefined : TrailerStatReeferStateTypeResponseBodyFromJSON(json['carrierReeferState']),
        'gps': !exists(json, 'gps') ? undefined : TrailerStatGpsTypeResponseBodyFromJSON(json['gps']),
        'gpsOdometerMeters': !exists(json, 'gpsOdometerMeters') ? undefined : TrailerStatGpsOdometerMetersTypeResponseBodyFromJSON(json['gpsOdometerMeters']),
        'id': json['id'],
        'name': json['name'],
        'reeferAlarms': !exists(json, 'reeferAlarms') ? undefined : TrailerStatReeferAlarmTypeResponseBodyFromJSON(json['reeferAlarms']),
        'reeferAmbientAirTemperatureMilliC': !exists(json, 'reeferAmbientAirTemperatureMilliC') ? undefined : TrailerStatReeferAmbientAirTemperatureMilliCTypeResponseBodyFromJSON(json['reeferAmbientAirTemperatureMilliC']),
        'reeferFuelPercent': !exists(json, 'reeferFuelPercent') ? undefined : TrailerStatReeferFuelPercentTypeResponseBodyFromJSON(json['reeferFuelPercent']),
        'reeferObdEngineSeconds': !exists(json, 'reeferObdEngineSeconds') ? undefined : TrailerStatReeferObdEngineSecondsTypeResponseBodyFromJSON(json['reeferObdEngineSeconds']),
        'reeferReturnAirTemperatureMilliCZone1': !exists(json, 'reeferReturnAirTemperatureMilliCZone1') ? undefined : TrailerStatReeferReturnAirTemperatureMilliCZone1TypeResponseBodyFromJSON(json['reeferReturnAirTemperatureMilliCZone1']),
        'reeferReturnAirTemperatureMilliCZone2': !exists(json, 'reeferReturnAirTemperatureMilliCZone2') ? undefined : TrailerStatReeferReturnAirTemperatureMilliCZone2TypeResponseBodyFromJSON(json['reeferReturnAirTemperatureMilliCZone2']),
        'reeferReturnAirTemperatureMilliCZone3': !exists(json, 'reeferReturnAirTemperatureMilliCZone3') ? undefined : TrailerStatReeferReturnAirTemperatureMilliCZone3TypeResponseBodyFromJSON(json['reeferReturnAirTemperatureMilliCZone3']),
        'reeferRunMode': !exists(json, 'reeferRunMode') ? undefined : TrailerStatReeferRunModeTypeResponseBodyFromJSON(json['reeferRunMode']),
        'reeferSetPointTemperatureMilliCZone1': !exists(json, 'reeferSetPointTemperatureMilliCZone1') ? undefined : TrailerStatReeferSetPointTemperatureMilliCZone1TypeResponseBodyFromJSON(json['reeferSetPointTemperatureMilliCZone1']),
        'reeferSetPointTemperatureMilliCZone2': !exists(json, 'reeferSetPointTemperatureMilliCZone2') ? undefined : TrailerStatReeferSetPointTemperatureMilliCZone2TypeResponseBodyFromJSON(json['reeferSetPointTemperatureMilliCZone2']),
        'reeferSetPointTemperatureMilliCZone3': !exists(json, 'reeferSetPointTemperatureMilliCZone3') ? undefined : TrailerStatReeferSetPointTemperatureMilliCZone3TypeResponseBodyFromJSON(json['reeferSetPointTemperatureMilliCZone3']),
        'reeferStateZone1': !exists(json, 'reeferStateZone1') ? undefined : TrailerStatReeferStateZone1TypeResponseBodyFromJSON(json['reeferStateZone1']),
        'reeferStateZone2': !exists(json, 'reeferStateZone2') ? undefined : TrailerStatReeferStateZone2TypeResponseBodyFromJSON(json['reeferStateZone2']),
        'reeferStateZone3': !exists(json, 'reeferStateZone3') ? undefined : TrailerStatReeferStateZone3TypeResponseBodyFromJSON(json['reeferStateZone3']),
        'reeferSupplyAirTemperatureMilliCZone1': !exists(json, 'reeferSupplyAirTemperatureMilliCZone1') ? undefined : TrailerStatReeferSupplyAirTemperatureMilliCZone1TypeResponseBodyFromJSON(json['reeferSupplyAirTemperatureMilliCZone1']),
        'reeferSupplyAirTemperatureMilliCZone2': !exists(json, 'reeferSupplyAirTemperatureMilliCZone2') ? undefined : TrailerStatReeferSupplyAirTemperatureMilliCZone2TypeResponseBodyFromJSON(json['reeferSupplyAirTemperatureMilliCZone2']),
        'reeferSupplyAirTemperatureMilliCZone3': !exists(json, 'reeferSupplyAirTemperatureMilliCZone3') ? undefined : TrailerStatReeferSupplyAirTemperatureMilliCZone3TypeResponseBodyFromJSON(json['reeferSupplyAirTemperatureMilliCZone3']),
    };
}

export function TrailerStatsSnapshotObjectResponseBodyToJSON(value?: TrailerStatsSnapshotObjectResponseBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'carrierReeferState': TrailerStatReeferStateTypeResponseBodyToJSON(value.carrierReeferState),
        'gps': TrailerStatGpsTypeResponseBodyToJSON(value.gps),
        'gpsOdometerMeters': TrailerStatGpsOdometerMetersTypeResponseBodyToJSON(value.gpsOdometerMeters),
        'id': value.id,
        'name': value.name,
        'reeferAlarms': TrailerStatReeferAlarmTypeResponseBodyToJSON(value.reeferAlarms),
        'reeferAmbientAirTemperatureMilliC': TrailerStatReeferAmbientAirTemperatureMilliCTypeResponseBodyToJSON(value.reeferAmbientAirTemperatureMilliC),
        'reeferFuelPercent': TrailerStatReeferFuelPercentTypeResponseBodyToJSON(value.reeferFuelPercent),
        'reeferObdEngineSeconds': TrailerStatReeferObdEngineSecondsTypeResponseBodyToJSON(value.reeferObdEngineSeconds),
        'reeferReturnAirTemperatureMilliCZone1': TrailerStatReeferReturnAirTemperatureMilliCZone1TypeResponseBodyToJSON(value.reeferReturnAirTemperatureMilliCZone1),
        'reeferReturnAirTemperatureMilliCZone2': TrailerStatReeferReturnAirTemperatureMilliCZone2TypeResponseBodyToJSON(value.reeferReturnAirTemperatureMilliCZone2),
        'reeferReturnAirTemperatureMilliCZone3': TrailerStatReeferReturnAirTemperatureMilliCZone3TypeResponseBodyToJSON(value.reeferReturnAirTemperatureMilliCZone3),
        'reeferRunMode': TrailerStatReeferRunModeTypeResponseBodyToJSON(value.reeferRunMode),
        'reeferSetPointTemperatureMilliCZone1': TrailerStatReeferSetPointTemperatureMilliCZone1TypeResponseBodyToJSON(value.reeferSetPointTemperatureMilliCZone1),
        'reeferSetPointTemperatureMilliCZone2': TrailerStatReeferSetPointTemperatureMilliCZone2TypeResponseBodyToJSON(value.reeferSetPointTemperatureMilliCZone2),
        'reeferSetPointTemperatureMilliCZone3': TrailerStatReeferSetPointTemperatureMilliCZone3TypeResponseBodyToJSON(value.reeferSetPointTemperatureMilliCZone3),
        'reeferStateZone1': TrailerStatReeferStateZone1TypeResponseBodyToJSON(value.reeferStateZone1),
        'reeferStateZone2': TrailerStatReeferStateZone2TypeResponseBodyToJSON(value.reeferStateZone2),
        'reeferStateZone3': TrailerStatReeferStateZone3TypeResponseBodyToJSON(value.reeferStateZone3),
        'reeferSupplyAirTemperatureMilliCZone1': TrailerStatReeferSupplyAirTemperatureMilliCZone1TypeResponseBodyToJSON(value.reeferSupplyAirTemperatureMilliCZone1),
        'reeferSupplyAirTemperatureMilliCZone2': TrailerStatReeferSupplyAirTemperatureMilliCZone2TypeResponseBodyToJSON(value.reeferSupplyAirTemperatureMilliCZone2),
        'reeferSupplyAirTemperatureMilliCZone3': TrailerStatReeferSupplyAirTemperatureMilliCZone3TypeResponseBodyToJSON(value.reeferSupplyAirTemperatureMilliCZone3),
    };
}


