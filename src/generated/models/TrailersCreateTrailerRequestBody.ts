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
    GoaAttributeTinyRequestBody,
    GoaAttributeTinyRequestBodyFromJSON,
    GoaAttributeTinyRequestBodyFromJSONTyped,
    GoaAttributeTinyRequestBodyToJSON,
} from './';

/**
 * 
 * @export
 * @interface TrailersCreateTrailerRequestBody
 */
export interface TrailersCreateTrailerRequestBody {
    /**
     * A list of attributes to assign to the trailer.
     * @type {Array<GoaAttributeTinyRequestBody>}
     * @memberof TrailersCreateTrailerRequestBody
     */
    attributes?: Array<GoaAttributeTinyRequestBody>;
    /**
     * Indicates if the trailer is visible on the Samsara mobile apps.
     * @type {boolean}
     * @memberof TrailersCreateTrailerRequestBody
     */
    enabledForMobile?: boolean;
    /**
     * A map of external ids
     * @type {{ [key: string]: string; }}
     * @memberof TrailersCreateTrailerRequestBody
     */
    externalIds?: { [key: string]: string; };
    /**
     * The license plate of the Trailer. **By default**: empty. Can be set or updated through the Samsara Dashboard or the API at any time.
     * @type {string}
     * @memberof TrailersCreateTrailerRequestBody
     */
    licensePlate?: string;
    /**
     * The human-readable name of the Trailer. This is set by a fleet administrator and will appear in both Samsara’s cloud dashboard as well as the Samsara Driver mobile app. By default, this name is the serial number of the Samsara Asset Gateway. It can be set or updated through the Samsara Dashboard or through the API at any time.
     * @type {string}
     * @memberof TrailersCreateTrailerRequestBody
     */
    name: string;
    /**
     * These are generic notes about the Trailer. Empty by default. Can be set or updated through the Samsara Dashboard or the API at any time.
     * @type {string}
     * @memberof TrailersCreateTrailerRequestBody
     */
    notes?: string;
    /**
     * An array of IDs of tags to associate with this trailer.
     * @type {Array<string>}
     * @memberof TrailersCreateTrailerRequestBody
     */
    tagIds?: Array<string>;
    /**
     * The serial number of the trailer.
     * @type {string}
     * @memberof TrailersCreateTrailerRequestBody
     */
    trailerSerialNumber?: string;
}

export function TrailersCreateTrailerRequestBodyFromJSON(json: any): TrailersCreateTrailerRequestBody {
    return TrailersCreateTrailerRequestBodyFromJSONTyped(json, false);
}

export function TrailersCreateTrailerRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrailersCreateTrailerRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': !exists(json, 'attributes') ? undefined : ((json['attributes'] as Array<any>).map(GoaAttributeTinyRequestBodyFromJSON)),
        'enabledForMobile': !exists(json, 'enabledForMobile') ? undefined : json['enabledForMobile'],
        'externalIds': !exists(json, 'externalIds') ? undefined : json['externalIds'],
        'licensePlate': !exists(json, 'licensePlate') ? undefined : json['licensePlate'],
        'name': json['name'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'tagIds': !exists(json, 'tagIds') ? undefined : json['tagIds'],
        'trailerSerialNumber': !exists(json, 'trailerSerialNumber') ? undefined : json['trailerSerialNumber'],
    };
}

export function TrailersCreateTrailerRequestBodyToJSON(value?: TrailersCreateTrailerRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': value.attributes === undefined ? undefined : ((value.attributes as Array<any>).map(GoaAttributeTinyRequestBodyToJSON)),
        'enabledForMobile': value.enabledForMobile,
        'externalIds': value.externalIds,
        'licensePlate': value.licensePlate,
        'name': value.name,
        'notes': value.notes,
        'tagIds': value.tagIds,
        'trailerSerialNumber': value.trailerSerialNumber,
    };
}

