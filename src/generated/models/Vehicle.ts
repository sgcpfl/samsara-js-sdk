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
    AttributeTiny,
    AttributeTinyFromJSON,
    AttributeTinyFromJSONTyped,
    AttributeTinyToJSON,
    DriverTinyResponse,
    DriverTinyResponseFromJSON,
    DriverTinyResponseFromJSONTyped,
    DriverTinyResponseToJSON,
    GatewayTiny,
    GatewayTinyFromJSON,
    GatewayTinyFromJSONTyped,
    GatewayTinyToJSON,
    TagTinyResponse,
    TagTinyResponseFromJSON,
    TagTinyResponseFromJSONTyped,
    TagTinyResponseToJSON,
    VehicleAuxInputType,
    VehicleAuxInputTypeFromJSON,
    VehicleAuxInputTypeFromJSONTyped,
    VehicleAuxInputTypeToJSON,
    VehicleHarshAccelerationSettingType,
    VehicleHarshAccelerationSettingTypeFromJSON,
    VehicleHarshAccelerationSettingTypeFromJSONTyped,
    VehicleHarshAccelerationSettingTypeToJSON,
} from './';

/**
 * The vehicle object.
 * @export
 * @interface Vehicle
 */
export interface Vehicle {
    /**
     * [beta] A minified attribute
     * @type {Array<AttributeTiny>}
     * @memberof Vehicle
     */
    attributes?: Array<AttributeTiny>;
    /**
     * 
     * @type {VehicleAuxInputType}
     * @memberof Vehicle
     */
    auxInputType1?: VehicleAuxInputType;
    /**
     * 
     * @type {VehicleAuxInputType}
     * @memberof Vehicle
     */
    auxInputType10?: VehicleAuxInputType;
    /**
     * 
     * @type {VehicleAuxInputType}
     * @memberof Vehicle
     */
    auxInputType2?: VehicleAuxInputType;
    /**
     * 
     * @type {VehicleAuxInputType}
     * @memberof Vehicle
     */
    auxInputType3?: VehicleAuxInputType;
    /**
     * 
     * @type {VehicleAuxInputType}
     * @memberof Vehicle
     */
    auxInputType4?: VehicleAuxInputType;
    /**
     * 
     * @type {VehicleAuxInputType}
     * @memberof Vehicle
     */
    auxInputType5?: VehicleAuxInputType;
    /**
     * 
     * @type {VehicleAuxInputType}
     * @memberof Vehicle
     */
    auxInputType6?: VehicleAuxInputType;
    /**
     * 
     * @type {VehicleAuxInputType}
     * @memberof Vehicle
     */
    auxInputType7?: VehicleAuxInputType;
    /**
     * 
     * @type {VehicleAuxInputType}
     * @memberof Vehicle
     */
    auxInputType8?: VehicleAuxInputType;
    /**
     * 
     * @type {VehicleAuxInputType}
     * @memberof Vehicle
     */
    auxInputType9?: VehicleAuxInputType;
    /**
     * The serial number of the camera installed in the vehicle
     * @type {string}
     * @memberof Vehicle
     */
    cameraSerial?: string;
    /**
     * The <a href="/docs/external-ids" target="_blank">external IDs</a> for the given object.
     * @type {object}
     * @memberof Vehicle
     */
    externalIds?: object;
    /**
     * 
     * @type {GatewayTiny}
     * @memberof Vehicle
     */
    gateway?: GatewayTiny;
    /**
     * 
     * @type {VehicleHarshAccelerationSettingType}
     * @memberof Vehicle
     */
    harshAccelerationSettingType?: VehicleHarshAccelerationSettingType;
    /**
     * The unique Samsara ID of the Vehicle. This is automatically generated when the Vehicle object is created. It cannot be changed.
     * @type {string}
     * @memberof Vehicle
     */
    id: string;
    /**
     * The license plate of the Vehicle. **By default**: empty. Can be set or updated through the Samsara Dashboard or the API at any time.
     * @type {string}
     * @memberof Vehicle
     */
    licensePlate?: string;
    /**
     * The Vehicle’s manufacturing make. Automatically read from the engine computer if available. Empty if not available. Cannot be manually set.
     * @type {string}
     * @memberof Vehicle
     */
    make?: string;
    /**
     * The Vehicle’s manufacturing model. Automatically read from the engine computer if available. Empty if not available. Cannot be manually set.
     * @type {string}
     * @memberof Vehicle
     */
    model?: string;
    /**
     * The human-readable name of the Vehicle. This is set by a fleet administrator and will appear in both Samsara’s cloud dashboard as well as the Samsara Driver mobile app. **By default**, this name is the serial number of the Samsara Vehicle Gateway. It can be set or updated through the Samsara Dashboard or through the API at any time.
     * @type {string}
     * @memberof Vehicle
     */
    name?: string;
    /**
     * These are generic notes about the Vehicle. Empty by default. Can be set or updated through the Samsara Dashboard or the API at any time.
     * @type {string}
     * @memberof Vehicle
     */
    notes?: string;
    /**
     * The serial number of the gateway installed in the vehicle.
     * @type {string}
     * @memberof Vehicle
     */
    serial?: string;
    /**
     * 
     * @type {DriverTinyResponse}
     * @memberof Vehicle
     */
    staticAssignedDriver?: DriverTinyResponse;
    /**
     * The list of <a href="https://kb.samsara.com/hc/en-us/articles/360043275091-Creating-and-Using-Tags" target="_blank">tags</a> associated with the Vehicle. **By default**: empty. Can be set or updated through the Samsara Dashboard or the API at any time.
     * @type {Array<TagTinyResponse>}
     * @memberof Vehicle
     */
    tags?: Array<TagTinyResponse>;
    /**
     * The VIN of the Vehicle. Most of the time, this will be automatically read from the engine computer by the Samsara Vehicle Gateway. It will be empty if it cannot be read. It can be set or updated through the Samsara Dashboard or the API at any time.
     * @type {string}
     * @memberof Vehicle
     */
    vin?: string;
    /**
     * The Vehicle’s manufacturing model. Automatically read from the engine computer if available. Empty if not available. Cannot be manually set.
     * @type {string}
     * @memberof Vehicle
     */
    year?: string;
}

export function VehicleFromJSON(json: any): Vehicle {
    return VehicleFromJSONTyped(json, false);
}

export function VehicleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Vehicle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': !exists(json, 'attributes') ? undefined : ((json['attributes'] as Array<any>).map(AttributeTinyFromJSON)),
        'auxInputType1': !exists(json, 'auxInputType1') ? undefined : VehicleAuxInputTypeFromJSON(json['auxInputType1']),
        'auxInputType10': !exists(json, 'auxInputType10') ? undefined : VehicleAuxInputTypeFromJSON(json['auxInputType10']),
        'auxInputType2': !exists(json, 'auxInputType2') ? undefined : VehicleAuxInputTypeFromJSON(json['auxInputType2']),
        'auxInputType3': !exists(json, 'auxInputType3') ? undefined : VehicleAuxInputTypeFromJSON(json['auxInputType3']),
        'auxInputType4': !exists(json, 'auxInputType4') ? undefined : VehicleAuxInputTypeFromJSON(json['auxInputType4']),
        'auxInputType5': !exists(json, 'auxInputType5') ? undefined : VehicleAuxInputTypeFromJSON(json['auxInputType5']),
        'auxInputType6': !exists(json, 'auxInputType6') ? undefined : VehicleAuxInputTypeFromJSON(json['auxInputType6']),
        'auxInputType7': !exists(json, 'auxInputType7') ? undefined : VehicleAuxInputTypeFromJSON(json['auxInputType7']),
        'auxInputType8': !exists(json, 'auxInputType8') ? undefined : VehicleAuxInputTypeFromJSON(json['auxInputType8']),
        'auxInputType9': !exists(json, 'auxInputType9') ? undefined : VehicleAuxInputTypeFromJSON(json['auxInputType9']),
        'cameraSerial': !exists(json, 'cameraSerial') ? undefined : json['cameraSerial'],
        'externalIds': !exists(json, 'externalIds') ? undefined : json['externalIds'],
        'gateway': !exists(json, 'gateway') ? undefined : GatewayTinyFromJSON(json['gateway']),
        'harshAccelerationSettingType': !exists(json, 'harshAccelerationSettingType') ? undefined : VehicleHarshAccelerationSettingTypeFromJSON(json['harshAccelerationSettingType']),
        'id': json['id'],
        'licensePlate': !exists(json, 'licensePlate') ? undefined : json['licensePlate'],
        'make': !exists(json, 'make') ? undefined : json['make'],
        'model': !exists(json, 'model') ? undefined : json['model'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'serial': !exists(json, 'serial') ? undefined : json['serial'],
        'staticAssignedDriver': !exists(json, 'staticAssignedDriver') ? undefined : DriverTinyResponseFromJSON(json['staticAssignedDriver']),
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(TagTinyResponseFromJSON)),
        'vin': !exists(json, 'vin') ? undefined : json['vin'],
        'year': !exists(json, 'year') ? undefined : json['year'],
    };
}

export function VehicleToJSON(value?: Vehicle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': value.attributes === undefined ? undefined : ((value.attributes as Array<any>).map(AttributeTinyToJSON)),
        'auxInputType1': VehicleAuxInputTypeToJSON(value.auxInputType1),
        'auxInputType10': VehicleAuxInputTypeToJSON(value.auxInputType10),
        'auxInputType2': VehicleAuxInputTypeToJSON(value.auxInputType2),
        'auxInputType3': VehicleAuxInputTypeToJSON(value.auxInputType3),
        'auxInputType4': VehicleAuxInputTypeToJSON(value.auxInputType4),
        'auxInputType5': VehicleAuxInputTypeToJSON(value.auxInputType5),
        'auxInputType6': VehicleAuxInputTypeToJSON(value.auxInputType6),
        'auxInputType7': VehicleAuxInputTypeToJSON(value.auxInputType7),
        'auxInputType8': VehicleAuxInputTypeToJSON(value.auxInputType8),
        'auxInputType9': VehicleAuxInputTypeToJSON(value.auxInputType9),
        'cameraSerial': value.cameraSerial,
        'externalIds': value.externalIds,
        'gateway': GatewayTinyToJSON(value.gateway),
        'harshAccelerationSettingType': VehicleHarshAccelerationSettingTypeToJSON(value.harshAccelerationSettingType),
        'id': value.id,
        'licensePlate': value.licensePlate,
        'make': value.make,
        'model': value.model,
        'name': value.name,
        'notes': value.notes,
        'serial': value.serial,
        'staticAssignedDriver': DriverTinyResponseToJSON(value.staticAssignedDriver),
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(TagTinyResponseToJSON)),
        'vin': value.vin,
        'year': value.year,
    };
}

