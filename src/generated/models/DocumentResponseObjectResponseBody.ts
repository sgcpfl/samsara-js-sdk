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
    ConditionalFieldSectionObjectResponseBody,
    ConditionalFieldSectionObjectResponseBodyFromJSON,
    ConditionalFieldSectionObjectResponseBodyFromJSONTyped,
    ConditionalFieldSectionObjectResponseBodyToJSON,
    FieldObjectResponseBody,
    FieldObjectResponseBodyFromJSON,
    FieldObjectResponseBodyFromJSONTyped,
    FieldObjectResponseBodyToJSON,
    GoaDocumentTypeTinyResponseResponseBody,
    GoaDocumentTypeTinyResponseResponseBodyFromJSON,
    GoaDocumentTypeTinyResponseResponseBodyFromJSONTyped,
    GoaDocumentTypeTinyResponseResponseBodyToJSON,
    GoaDriverTinyResponseResponseBody,
    GoaDriverTinyResponseResponseBodyFromJSON,
    GoaDriverTinyResponseResponseBodyFromJSONTyped,
    GoaDriverTinyResponseResponseBodyToJSON,
    GoaRouteStopTinyResponseResponseBody,
    GoaRouteStopTinyResponseResponseBodyFromJSON,
    GoaRouteStopTinyResponseResponseBodyFromJSONTyped,
    GoaRouteStopTinyResponseResponseBodyToJSON,
    GoaVehicleTinyResponseResponseBody,
    GoaVehicleTinyResponseResponseBodyFromJSON,
    GoaVehicleTinyResponseResponseBodyFromJSONTyped,
    GoaVehicleTinyResponseResponseBodyToJSON,
} from './';

/**
 * A single document.
 * @export
 * @interface DocumentResponseObjectResponseBody
 */
export interface DocumentResponseObjectResponseBody {
    /**
     * List of the document conditional field sections.
     * @type {Array<ConditionalFieldSectionObjectResponseBody>}
     * @memberof DocumentResponseObjectResponseBody
     */
    conditionalFieldSections?: Array<ConditionalFieldSectionObjectResponseBody>;
    /**
     * Time the document was created in RFC 3339 format.
     * @type {Date}
     * @memberof DocumentResponseObjectResponseBody
     */
    createdAtTime: Date;
    /**
     * 
     * @type {GoaDocumentTypeTinyResponseResponseBody}
     * @memberof DocumentResponseObjectResponseBody
     */
    documentType: GoaDocumentTypeTinyResponseResponseBody;
    /**
     * 
     * @type {GoaDriverTinyResponseResponseBody}
     * @memberof DocumentResponseObjectResponseBody
     */
    driver: GoaDriverTinyResponseResponseBody;
    /**
     * The fields associated with this document.
     * @type {Array<FieldObjectResponseBody>}
     * @memberof DocumentResponseObjectResponseBody
     */
    fields: Array<FieldObjectResponseBody>;
    /**
     * Universally unique identifier for the document.
     * @type {string}
     * @memberof DocumentResponseObjectResponseBody
     */
    id: string;
    /**
     * Name of the document.
     * @type {string}
     * @memberof DocumentResponseObjectResponseBody
     */
    name?: string;
    /**
     * Notes on the document.
     * @type {string}
     * @memberof DocumentResponseObjectResponseBody
     */
    notes?: string;
    /**
     * 
     * @type {GoaRouteStopTinyResponseResponseBody}
     * @memberof DocumentResponseObjectResponseBody
     */
    routeStop?: GoaRouteStopTinyResponseResponseBody;
    /**
     * The condition of the document created for the driver. Can be either Required or Submitted. Required documents are pre-populated documents for the Driver to fill out in the Driver App and have not yet been submitted. Submitted documents have been submitted by the driver in the Driver App. Archived documents have been archived by the admin in the cloud dashboard.
     * @type {string}
     * @memberof DocumentResponseObjectResponseBody
     */
    state: DocumentResponseObjectResponseBodyStateEnum;
    /**
     * Time the document was updated in RFC 3339 format.
     * @type {Date}
     * @memberof DocumentResponseObjectResponseBody
     */
    updatedAtTime?: Date;
    /**
     * 
     * @type {GoaVehicleTinyResponseResponseBody}
     * @memberof DocumentResponseObjectResponseBody
     */
    vehicle?: GoaVehicleTinyResponseResponseBody;
}

/**
* @export
* @enum {string}
*/
export enum DocumentResponseObjectResponseBodyStateEnum {
    Submitted = 'submitted',
    Required = 'required',
    Archived = 'archived'
}

export function DocumentResponseObjectResponseBodyFromJSON(json: any): DocumentResponseObjectResponseBody {
    return DocumentResponseObjectResponseBodyFromJSONTyped(json, false);
}

export function DocumentResponseObjectResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentResponseObjectResponseBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditionalFieldSections': !exists(json, 'conditionalFieldSections') ? undefined : ((json['conditionalFieldSections'] as Array<any>).map(ConditionalFieldSectionObjectResponseBodyFromJSON)),
        'createdAtTime': (new Date(json['createdAtTime'])),
        'documentType': GoaDocumentTypeTinyResponseResponseBodyFromJSON(json['documentType']),
        'driver': GoaDriverTinyResponseResponseBodyFromJSON(json['driver']),
        'fields': ((json['fields'] as Array<any>).map(FieldObjectResponseBodyFromJSON)),
        'id': json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'routeStop': !exists(json, 'routeStop') ? undefined : GoaRouteStopTinyResponseResponseBodyFromJSON(json['routeStop']),
        'state': json['state'],
        'updatedAtTime': !exists(json, 'updatedAtTime') ? undefined : (new Date(json['updatedAtTime'])),
        'vehicle': !exists(json, 'vehicle') ? undefined : GoaVehicleTinyResponseResponseBodyFromJSON(json['vehicle']),
    };
}

export function DocumentResponseObjectResponseBodyToJSON(value?: DocumentResponseObjectResponseBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditionalFieldSections': value.conditionalFieldSections === undefined ? undefined : ((value.conditionalFieldSections as Array<any>).map(ConditionalFieldSectionObjectResponseBodyToJSON)),
        'createdAtTime': (value.createdAtTime.toISOString()),
        'documentType': GoaDocumentTypeTinyResponseResponseBodyToJSON(value.documentType),
        'driver': GoaDriverTinyResponseResponseBodyToJSON(value.driver),
        'fields': ((value.fields as Array<any>).map(FieldObjectResponseBodyToJSON)),
        'id': value.id,
        'name': value.name,
        'notes': value.notes,
        'routeStop': GoaRouteStopTinyResponseResponseBodyToJSON(value.routeStop),
        'state': value.state,
        'updatedAtTime': value.updatedAtTime === undefined ? undefined : (value.updatedAtTime.toISOString()),
        'vehicle': GoaVehicleTinyResponseResponseBodyToJSON(value.vehicle),
    };
}


