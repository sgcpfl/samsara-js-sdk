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
/**
 * 
 * @export
 * @interface V1DispatchJobCreate
 */
export interface V1DispatchJobCreate {
    /**
     * The address of the job destination, as it would be recognized if provided to maps.google.com. Optional if a valid destination address ID is provided.
     * @type {string}
     * @memberof V1DispatchJobCreate
     */
    destinationAddress?: string;
    /**
     * ID of the job destination associated with an address book entry. Optional if valid values are provided for destination address and latitude/longitude. If a valid destination address ID is provided, address/latitude/longitude will be used from the address book entry. Name of the address book entry will only be used if the destination name is not provided.
     * @type {number}
     * @memberof V1DispatchJobCreate
     */
    destinationAddressId?: number;
    /**
     * Latitude of the destination in decimal degrees. Optional if a valid destination address ID is provided.
     * @type {number}
     * @memberof V1DispatchJobCreate
     */
    destinationLat?: number;
    /**
     * Longitude of the destination in decimal degrees. Optional if a valid destination address ID is provided.
     * @type {number}
     * @memberof V1DispatchJobCreate
     */
    destinationLng?: number;
    /**
     * The name of the job destination. If provided, it will take precedence over the name of the address book entry.
     * @type {string}
     * @memberof V1DispatchJobCreate
     */
    destinationName?: string;
    /**
     * The [external IDs](https://developers.samsara.com/docs/external-ids) for the given object.
     * @type {object}
     * @memberof V1DispatchJobCreate
     */
    externalIds?: object;
    /**
     * Notes regarding the details of this job, maximum of 2000 characters; newline characters ('\n')can be used for formatting.
     * @type {string}
     * @memberof V1DispatchJobCreate
     */
    notes?: string;
    /**
     * The time at which the assigned driver is scheduled to arrive at the job destination.
     * @type {number}
     * @memberof V1DispatchJobCreate
     */
    scheduledArrivalTimeMs: number;
    /**
     * The time at which the assigned driver is scheduled to depart from the job destination.
     * @type {number}
     * @memberof V1DispatchJobCreate
     */
    scheduledDepartureTimeMs?: number;
}

export function V1DispatchJobCreateFromJSON(json: any): V1DispatchJobCreate {
    return V1DispatchJobCreateFromJSONTyped(json, false);
}

export function V1DispatchJobCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DispatchJobCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'destinationAddress': !exists(json, 'destination_address') ? undefined : json['destination_address'],
        'destinationAddressId': !exists(json, 'destination_address_id') ? undefined : json['destination_address_id'],
        'destinationLat': !exists(json, 'destination_lat') ? undefined : json['destination_lat'],
        'destinationLng': !exists(json, 'destination_lng') ? undefined : json['destination_lng'],
        'destinationName': !exists(json, 'destination_name') ? undefined : json['destination_name'],
        'externalIds': !exists(json, 'external_ids') ? undefined : json['external_ids'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'scheduledArrivalTimeMs': json['scheduled_arrival_time_ms'],
        'scheduledDepartureTimeMs': !exists(json, 'scheduled_departure_time_ms') ? undefined : json['scheduled_departure_time_ms'],
    };
}

export function V1DispatchJobCreateToJSON(value?: V1DispatchJobCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'destination_address': value.destinationAddress,
        'destination_address_id': value.destinationAddressId,
        'destination_lat': value.destinationLat,
        'destination_lng': value.destinationLng,
        'destination_name': value.destinationName,
        'external_ids': value.externalIds,
        'notes': value.notes,
        'scheduled_arrival_time_ms': value.scheduledArrivalTimeMs,
        'scheduled_departure_time_ms': value.scheduledDepartureTimeMs,
    };
}


