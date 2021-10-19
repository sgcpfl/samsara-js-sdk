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
    V1DvirBaseAuthorSignature,
    V1DvirBaseAuthorSignatureFromJSON,
    V1DvirBaseAuthorSignatureFromJSONTyped,
    V1DvirBaseAuthorSignatureToJSON,
    V1DvirBaseMechanicOrAgentSignature,
    V1DvirBaseMechanicOrAgentSignatureFromJSON,
    V1DvirBaseMechanicOrAgentSignatureFromJSONTyped,
    V1DvirBaseMechanicOrAgentSignatureToJSON,
    V1DvirBaseNextDriverSignature,
    V1DvirBaseNextDriverSignatureFromJSON,
    V1DvirBaseNextDriverSignatureFromJSONTyped,
    V1DvirBaseNextDriverSignatureToJSON,
    V1DvirBaseVehicle,
    V1DvirBaseVehicleFromJSON,
    V1DvirBaseVehicleFromJSONTyped,
    V1DvirBaseVehicleToJSON,
    V1DvirDefectBase,
    V1DvirDefectBaseFromJSON,
    V1DvirDefectBaseFromJSONTyped,
    V1DvirDefectBaseToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1DvirBase
 */
export interface V1DvirBase {
    /**
     * 
     * @type {V1DvirBaseAuthorSignature}
     * @memberof V1DvirBase
     */
    authorSignature?: V1DvirBaseAuthorSignature;
    /**
     * Signifies if the defects on the vehicle corrected after the DVIR is done.
     * @type {boolean}
     * @memberof V1DvirBase
     */
    defectsCorrected?: boolean;
    /**
     * Signifies if the defects on this vehicle can be ignored.
     * @type {boolean}
     * @memberof V1DvirBase
     */
    defectsNeedNotBeCorrected?: boolean;
    /**
     * The id of this DVIR record.
     * @type {number}
     * @memberof V1DvirBase
     */
    id?: number;
    /**
     * Inspection type of the DVIR.
     * @type {string}
     * @memberof V1DvirBase
     */
    inspectionType?: string;
    /**
     * The mechanics notes on the DVIR.
     * @type {string}
     * @memberof V1DvirBase
     */
    mechanicNotes?: string;
    /**
     * 
     * @type {V1DvirBaseMechanicOrAgentSignature}
     * @memberof V1DvirBase
     */
    mechanicOrAgentSignature?: V1DvirBaseMechanicOrAgentSignature;
    /**
     * 
     * @type {V1DvirBaseNextDriverSignature}
     * @memberof V1DvirBase
     */
    nextDriverSignature?: V1DvirBaseNextDriverSignature;
    /**
     * The odometer reading in miles for the vehicle when the DVIR was done.
     * @type {number}
     * @memberof V1DvirBase
     */
    odometerMiles?: number;
    /**
     * Timestamp when driver began filling out this DVIR, in UNIX milliseconds.
     * @type {number}
     * @memberof V1DvirBase
     */
    startedAtMs?: number;
    /**
     * Timestamp of when this DVIR was signed & completed, in UNIX milliseconds.
     * @type {number}
     * @memberof V1DvirBase
     */
    timeMs?: number;
    /**
     * Defects registered for the trailer which was part of the DVIR.
     * @type {Array<V1DvirDefectBase>}
     * @memberof V1DvirBase
     */
    trailerDefects?: Array<V1DvirDefectBase>;
    /**
     * The id of the trailer which was part of the DVIR.
     * @type {number}
     * @memberof V1DvirBase
     */
    trailerId?: number;
    /**
     * The name of the trailer which was part of the DVIR.
     * @type {string}
     * @memberof V1DvirBase
     */
    trailerName?: string;
    /**
     * 
     * @type {V1DvirBaseVehicle}
     * @memberof V1DvirBase
     */
    vehicle?: V1DvirBaseVehicle;
    /**
     * The condition of vechile on which DVIR was done.
     * @type {string}
     * @memberof V1DvirBase
     */
    vehicleCondition?: string;
    /**
     * Defects registered for the vehicle which was part of the DVIR.
     * @type {Array<V1DvirDefectBase>}
     * @memberof V1DvirBase
     */
    vehicleDefects?: Array<V1DvirDefectBase>;
}

export function V1DvirBaseFromJSON(json: any): V1DvirBase {
    return V1DvirBaseFromJSONTyped(json, false);
}

export function V1DvirBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DvirBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authorSignature': !exists(json, 'authorSignature') ? undefined : V1DvirBaseAuthorSignatureFromJSON(json['authorSignature']),
        'defectsCorrected': !exists(json, 'defectsCorrected') ? undefined : json['defectsCorrected'],
        'defectsNeedNotBeCorrected': !exists(json, 'defectsNeedNotBeCorrected') ? undefined : json['defectsNeedNotBeCorrected'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'inspectionType': !exists(json, 'inspectionType') ? undefined : json['inspectionType'],
        'mechanicNotes': !exists(json, 'mechanicNotes') ? undefined : json['mechanicNotes'],
        'mechanicOrAgentSignature': !exists(json, 'mechanicOrAgentSignature') ? undefined : V1DvirBaseMechanicOrAgentSignatureFromJSON(json['mechanicOrAgentSignature']),
        'nextDriverSignature': !exists(json, 'nextDriverSignature') ? undefined : V1DvirBaseNextDriverSignatureFromJSON(json['nextDriverSignature']),
        'odometerMiles': !exists(json, 'odometerMiles') ? undefined : json['odometerMiles'],
        'startedAtMs': !exists(json, 'startedAtMs') ? undefined : json['startedAtMs'],
        'timeMs': !exists(json, 'timeMs') ? undefined : json['timeMs'],
        'trailerDefects': !exists(json, 'trailerDefects') ? undefined : ((json['trailerDefects'] as Array<any>).map(V1DvirDefectBaseFromJSON)),
        'trailerId': !exists(json, 'trailerId') ? undefined : json['trailerId'],
        'trailerName': !exists(json, 'trailerName') ? undefined : json['trailerName'],
        'vehicle': !exists(json, 'vehicle') ? undefined : V1DvirBaseVehicleFromJSON(json['vehicle']),
        'vehicleCondition': !exists(json, 'vehicleCondition') ? undefined : json['vehicleCondition'],
        'vehicleDefects': !exists(json, 'vehicleDefects') ? undefined : ((json['vehicleDefects'] as Array<any>).map(V1DvirDefectBaseFromJSON)),
    };
}

export function V1DvirBaseToJSON(value?: V1DvirBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'authorSignature': V1DvirBaseAuthorSignatureToJSON(value.authorSignature),
        'defectsCorrected': value.defectsCorrected,
        'defectsNeedNotBeCorrected': value.defectsNeedNotBeCorrected,
        'id': value.id,
        'inspectionType': value.inspectionType,
        'mechanicNotes': value.mechanicNotes,
        'mechanicOrAgentSignature': V1DvirBaseMechanicOrAgentSignatureToJSON(value.mechanicOrAgentSignature),
        'nextDriverSignature': V1DvirBaseNextDriverSignatureToJSON(value.nextDriverSignature),
        'odometerMiles': value.odometerMiles,
        'startedAtMs': value.startedAtMs,
        'timeMs': value.timeMs,
        'trailerDefects': value.trailerDefects === undefined ? undefined : ((value.trailerDefects as Array<any>).map(V1DvirDefectBaseToJSON)),
        'trailerId': value.trailerId,
        'trailerName': value.trailerName,
        'vehicle': V1DvirBaseVehicleToJSON(value.vehicle),
        'vehicleCondition': value.vehicleCondition,
        'vehicleDefects': value.vehicleDefects === undefined ? undefined : ((value.vehicleDefects as Array<any>).map(V1DvirDefectBaseToJSON)),
    };
}


