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
    GoaTagTinyResponseResponseBody,
    GoaTagTinyResponseResponseBodyFromJSON,
    GoaTagTinyResponseResponseBodyFromJSONTyped,
    GoaTagTinyResponseResponseBodyToJSON,
    TrailerGoaGatewayTinyResponseResponseBody,
    TrailerGoaGatewayTinyResponseResponseBodyFromJSON,
    TrailerGoaGatewayTinyResponseResponseBodyFromJSONTyped,
    TrailerGoaGatewayTinyResponseResponseBodyToJSON,
} from './';

/**
 * 
 * @export
 * @interface TrailerResponseObjectResponseBody
 */
export interface TrailerResponseObjectResponseBody {
    /**
     * Indicates if the trailer is visible on the Samsara mobile apps.
     * @type {boolean}
     * @memberof TrailerResponseObjectResponseBody
     */
    enabledForMobile?: boolean;
    /**
     * A map of external ids
     * @type {{ [key: string]: string; }}
     * @memberof TrailerResponseObjectResponseBody
     */
    externalIds?: { [key: string]: string; };
    /**
     * The unique Samsara ID of the Trailer. This is automatically generated when the Trailer object is created. It cannot be changed.
     * @type {string}
     * @memberof TrailerResponseObjectResponseBody
     */
    id: string;
    /**
     * 
     * @type {TrailerGoaGatewayTinyResponseResponseBody}
     * @memberof TrailerResponseObjectResponseBody
     */
    installedGateway?: TrailerGoaGatewayTinyResponseResponseBody;
    /**
     * The license plate of the Trailer. **By default**: empty. Can be set or updated through the Samsara Dashboard or the API at any time.
     * @type {string}
     * @memberof TrailerResponseObjectResponseBody
     */
    licensePlate?: string;
    /**
     * The human-readable name of the Trailer. This is set by a fleet administrator and will appear in both Samsara’s cloud dashboard as well as the Samsara Driver mobile app. By default, this name is the serial number of the Samsara Asset Gateway. It can be set or updated through the Samsara Dashboard or through the API at any time.
     * @type {string}
     * @memberof TrailerResponseObjectResponseBody
     */
    name?: string;
    /**
     * These are generic notes about the Trailer. Empty by default. Can be set or updated through the Samsara Dashboard or the API at any time.
     * @type {string}
     * @memberof TrailerResponseObjectResponseBody
     */
    notes?: string;
    /**
     * The list of [tags](https://kb.samsara.com/hc/en-us/articles/360026674631-Using-Tags-and-Tag-Nesting) associated with the Trailer.
     * @type {Array<GoaTagTinyResponseResponseBody>}
     * @memberof TrailerResponseObjectResponseBody
     */
    tags?: Array<GoaTagTinyResponseResponseBody>;
    /**
     * The serial number of the trailer.
     * @type {string}
     * @memberof TrailerResponseObjectResponseBody
     */
    trailerSerialNumber?: string;
}

export function TrailerResponseObjectResponseBodyFromJSON(json: any): TrailerResponseObjectResponseBody {
    return TrailerResponseObjectResponseBodyFromJSONTyped(json, false);
}

export function TrailerResponseObjectResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrailerResponseObjectResponseBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabledForMobile': !exists(json, 'enabledForMobile') ? undefined : json['enabledForMobile'],
        'externalIds': !exists(json, 'externalIds') ? undefined : json['externalIds'],
        'id': json['id'],
        'installedGateway': !exists(json, 'installedGateway') ? undefined : TrailerGoaGatewayTinyResponseResponseBodyFromJSON(json['installedGateway']),
        'licensePlate': !exists(json, 'licensePlate') ? undefined : json['licensePlate'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(GoaTagTinyResponseResponseBodyFromJSON)),
        'trailerSerialNumber': !exists(json, 'trailerSerialNumber') ? undefined : json['trailerSerialNumber'],
    };
}

export function TrailerResponseObjectResponseBodyToJSON(value?: TrailerResponseObjectResponseBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabledForMobile': value.enabledForMobile,
        'externalIds': value.externalIds,
        'id': value.id,
        'installedGateway': TrailerGoaGatewayTinyResponseResponseBodyToJSON(value.installedGateway),
        'licensePlate': value.licensePlate,
        'name': value.name,
        'notes': value.notes,
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(GoaTagTinyResponseResponseBodyToJSON)),
        'trailerSerialNumber': value.trailerSerialNumber,
    };
}


