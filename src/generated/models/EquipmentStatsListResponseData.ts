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
    EquipmentEngineRpm,
    EquipmentEngineRpmFromJSON,
    EquipmentEngineRpmFromJSONTyped,
    EquipmentEngineRpmToJSON,
    EquipmentEngineSeconds,
    EquipmentEngineSecondsFromJSON,
    EquipmentEngineSecondsFromJSONTyped,
    EquipmentEngineSecondsToJSON,
    EquipmentEngineState,
    EquipmentEngineStateFromJSON,
    EquipmentEngineStateFromJSONTyped,
    EquipmentEngineStateToJSON,
    EquipmentFuelPercent,
    EquipmentFuelPercentFromJSON,
    EquipmentFuelPercentFromJSONTyped,
    EquipmentFuelPercentToJSON,
    EquipmentGatewayEngineSeconds,
    EquipmentGatewayEngineSecondsFromJSON,
    EquipmentGatewayEngineSecondsFromJSONTyped,
    EquipmentGatewayEngineSecondsToJSON,
    EquipmentGatewayEngineState,
    EquipmentGatewayEngineStateFromJSON,
    EquipmentGatewayEngineStateFromJSONTyped,
    EquipmentGatewayEngineStateToJSON,
    EquipmentGatewayJ1939EngineSeconds,
    EquipmentGatewayJ1939EngineSecondsFromJSON,
    EquipmentGatewayJ1939EngineSecondsFromJSONTyped,
    EquipmentGatewayJ1939EngineSecondsToJSON,
    EquipmentGpsOdometerMeters,
    EquipmentGpsOdometerMetersFromJSON,
    EquipmentGpsOdometerMetersFromJSONTyped,
    EquipmentGpsOdometerMetersToJSON,
    EquipmentObdEngineSeconds,
    EquipmentObdEngineSecondsFromJSON,
    EquipmentObdEngineSecondsFromJSONTyped,
    EquipmentObdEngineSecondsToJSON,
    EquipmentObdEngineState,
    EquipmentObdEngineStateFromJSON,
    EquipmentObdEngineStateFromJSONTyped,
    EquipmentObdEngineStateToJSON,
} from './';

/**
 * A unit of equipment and its time-series of stats events.
 * @export
 * @interface EquipmentStatsListResponseData
 */
export interface EquipmentStatsListResponseData {
    /**
     * A time-series of engine RPM readings for the given unit of equipment.
     * @type {Array<EquipmentEngineRpm>}
     * @memberof EquipmentStatsListResponseData
     */
    engineRpm?: Array<EquipmentEngineRpm>;
    /**
     * [DEPRECATED] Please use either `gatewayEngineSeconds`, `obdEngineSeconds`, or `gatewayJ1939EngineSeconds`.
     * @type {Array<EquipmentEngineSeconds>}
     * @memberof EquipmentStatsListResponseData
     */
    engineSeconds?: Array<EquipmentEngineSeconds>;
    /**
     * [DEPRECATED] Please use either `gatewayEngineStates` or `obdEngineStates`.
     * @type {Array<EquipmentEngineState>}
     * @memberof EquipmentStatsListResponseData
     */
    engineStates?: Array<EquipmentEngineState>;
    /**
     * A time-series of fuel percent level changes for the given unit of equipment.
     * @type {Array<EquipmentFuelPercent>}
     * @memberof EquipmentStatsListResponseData
     */
    fuelPercent?: Array<EquipmentFuelPercent>;
    /**
     * A time-series of engine seconds readings for the given unit of equipment as an approximate based on readings from the AG24's aux/digio cable.
     * @type {Array<EquipmentGatewayEngineSeconds>}
     * @memberof EquipmentStatsListResponseData
     */
    gatewayEngineSeconds?: Array<EquipmentGatewayEngineSeconds>;
    /**
     * A time-series of engine state changes (as read from the AG24's aux/digio cable) for the given unit of equipment.
     * @type {Array<EquipmentGatewayEngineState>}
     * @memberof EquipmentStatsListResponseData
     */
    gatewayEngineState?: Array<EquipmentGatewayEngineState>;
    /**
     * A time-series of engine seconds readings for the given unit of equipment as an approximate based on readings from the AG24's CAT/J1939 cable.
     * @type {Array<EquipmentGatewayJ1939EngineSeconds>}
     * @memberof EquipmentStatsListResponseData
     */
    gatewayJ1939EngineSeconds?: Array<EquipmentGatewayJ1939EngineSeconds>;
    /**
     * A time-series of GPS odometer readings for the given unit of equipment.
     * @type {Array<EquipmentGpsOdometerMeters>}
     * @memberof EquipmentStatsListResponseData
     */
    gpsOdometerMeters?: Array<EquipmentGpsOdometerMeters>;
    /**
     * Unique Samsara ID for the equipment.
     * @type {string}
     * @memberof EquipmentStatsListResponseData
     */
    id: string;
    /**
     * Name of the equipment.
     * @type {string}
     * @memberof EquipmentStatsListResponseData
     */
    name: string;
    /**
     * A time-series of engine seconds readings for the given unit of equipment directly from on-board diagnostics.
     * @type {Array<EquipmentObdEngineSeconds>}
     * @memberof EquipmentStatsListResponseData
     */
    obdEngineSeconds?: Array<EquipmentObdEngineSeconds>;
    /**
     * A time-series of engine state changes (as read from on-board diagnostics) for the given unit of equipment.
     * @type {Array<EquipmentObdEngineState>}
     * @memberof EquipmentStatsListResponseData
     */
    obdEngineState?: Array<EquipmentObdEngineState>;
}

export function EquipmentStatsListResponseDataFromJSON(json: any): EquipmentStatsListResponseData {
    return EquipmentStatsListResponseDataFromJSONTyped(json, false);
}

export function EquipmentStatsListResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): EquipmentStatsListResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'engineRpm': !exists(json, 'engineRpm') ? undefined : ((json['engineRpm'] as Array<any>).map(EquipmentEngineRpmFromJSON)),
        'engineSeconds': !exists(json, 'engineSeconds') ? undefined : ((json['engineSeconds'] as Array<any>).map(EquipmentEngineSecondsFromJSON)),
        'engineStates': !exists(json, 'engineStates') ? undefined : ((json['engineStates'] as Array<any>).map(EquipmentEngineStateFromJSON)),
        'fuelPercent': !exists(json, 'fuelPercent') ? undefined : ((json['fuelPercent'] as Array<any>).map(EquipmentFuelPercentFromJSON)),
        'gatewayEngineSeconds': !exists(json, 'gatewayEngineSeconds') ? undefined : ((json['gatewayEngineSeconds'] as Array<any>).map(EquipmentGatewayEngineSecondsFromJSON)),
        'gatewayEngineState': !exists(json, 'gatewayEngineState') ? undefined : ((json['gatewayEngineState'] as Array<any>).map(EquipmentGatewayEngineStateFromJSON)),
        'gatewayJ1939EngineSeconds': !exists(json, 'gatewayJ1939EngineSeconds') ? undefined : ((json['gatewayJ1939EngineSeconds'] as Array<any>).map(EquipmentGatewayJ1939EngineSecondsFromJSON)),
        'gpsOdometerMeters': !exists(json, 'gpsOdometerMeters') ? undefined : ((json['gpsOdometerMeters'] as Array<any>).map(EquipmentGpsOdometerMetersFromJSON)),
        'id': json['id'],
        'name': json['name'],
        'obdEngineSeconds': !exists(json, 'obdEngineSeconds') ? undefined : ((json['obdEngineSeconds'] as Array<any>).map(EquipmentObdEngineSecondsFromJSON)),
        'obdEngineState': !exists(json, 'obdEngineState') ? undefined : ((json['obdEngineState'] as Array<any>).map(EquipmentObdEngineStateFromJSON)),
    };
}

export function EquipmentStatsListResponseDataToJSON(value?: EquipmentStatsListResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'engineRpm': value.engineRpm === undefined ? undefined : ((value.engineRpm as Array<any>).map(EquipmentEngineRpmToJSON)),
        'engineSeconds': value.engineSeconds === undefined ? undefined : ((value.engineSeconds as Array<any>).map(EquipmentEngineSecondsToJSON)),
        'engineStates': value.engineStates === undefined ? undefined : ((value.engineStates as Array<any>).map(EquipmentEngineStateToJSON)),
        'fuelPercent': value.fuelPercent === undefined ? undefined : ((value.fuelPercent as Array<any>).map(EquipmentFuelPercentToJSON)),
        'gatewayEngineSeconds': value.gatewayEngineSeconds === undefined ? undefined : ((value.gatewayEngineSeconds as Array<any>).map(EquipmentGatewayEngineSecondsToJSON)),
        'gatewayEngineState': value.gatewayEngineState === undefined ? undefined : ((value.gatewayEngineState as Array<any>).map(EquipmentGatewayEngineStateToJSON)),
        'gatewayJ1939EngineSeconds': value.gatewayJ1939EngineSeconds === undefined ? undefined : ((value.gatewayJ1939EngineSeconds as Array<any>).map(EquipmentGatewayJ1939EngineSecondsToJSON)),
        'gpsOdometerMeters': value.gpsOdometerMeters === undefined ? undefined : ((value.gpsOdometerMeters as Array<any>).map(EquipmentGpsOdometerMetersToJSON)),
        'id': value.id,
        'name': value.name,
        'obdEngineSeconds': value.obdEngineSeconds === undefined ? undefined : ((value.obdEngineSeconds as Array<any>).map(EquipmentObdEngineSecondsToJSON)),
        'obdEngineState': value.obdEngineState === undefined ? undefined : ((value.obdEngineState as Array<any>).map(EquipmentObdEngineStateToJSON)),
    };
}


