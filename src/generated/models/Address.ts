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
    AddressGeofence,
    AddressGeofenceFromJSON,
    AddressGeofenceFromJSONTyped,
    AddressGeofenceToJSON,
    ContactTinyResponse,
    ContactTinyResponseFromJSON,
    ContactTinyResponseFromJSONTyped,
    ContactTinyResponseToJSON,
    TagTinyResponse,
    TagTinyResponseFromJSON,
    TagTinyResponseFromJSONTyped,
    TagTinyResponseToJSON,
} from './';

/**
 * An Address object.
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * Reporting location type associated with the address (used for ELD reporting purposes).
     * @type {Array<string>}
     * @memberof Address
     */
    addressTypes?: Array<AddressAddressTypesEnum>;
    /**
     * An array Contact mini-objects that are associated the Address.
     * @type {Array<ContactTinyResponse>}
     * @memberof Address
     */
    contacts?: Array<ContactTinyResponse>;
    /**
     * The date and time this address was created in RFC 3339 format.
     * @type {Date}
     * @memberof Address
     */
    createdAtTime?: Date;
    /**
     * The [external IDs](https://developers.samsara.com/docs/external-ids) for the given object.
     * @type {object}
     * @memberof Address
     */
    externalIds?: object;
    /**
     * The full street address for this address/geofence, as it might be recognized by Google Maps.
     * @type {string}
     * @memberof Address
     */
    formattedAddress: string;
    /**
     * 
     * @type {AddressGeofence}
     * @memberof Address
     */
    geofence: AddressGeofence;
    /**
     * ID of the Address.
     * @type {string}
     * @memberof Address
     */
    id: string;
    /**
     * Latitude of the address. Will be geocoded from `formattedAddress` if not provided.
     * @type {number}
     * @memberof Address
     */
    latitude?: number;
    /**
     * Longitude of the address. Will be geocoded from `formattedAddress` if not provided.
     * @type {number}
     * @memberof Address
     */
    longitude?: number;
    /**
     * Name of the address.
     * @type {string}
     * @memberof Address
     */
    name: string;
    /**
     * Notes about the address.
     * @type {string}
     * @memberof Address
     */
    notes?: string;
    /**
     * An array of all tag mini-objects that are associated with the given address entry.
     * @type {Array<TagTinyResponse>}
     * @memberof Address
     */
    tags?: Array<TagTinyResponse>;
}

/**
* @export
* @enum {string}
*/
export enum AddressAddressTypesEnum {
    Yard = 'yard',
    ShortHaul = 'shortHaul',
    WorkforceSite = 'workforceSite',
    RiskZone = 'riskZone',
    IndustrialSite = 'industrialSite'
}

export function AddressFromJSON(json: any): Address {
    return AddressFromJSONTyped(json, false);
}

export function AddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): Address {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressTypes': !exists(json, 'addressTypes') ? undefined : json['addressTypes'],
        'contacts': !exists(json, 'contacts') ? undefined : ((json['contacts'] as Array<any>).map(ContactTinyResponseFromJSON)),
        'createdAtTime': !exists(json, 'createdAtTime') ? undefined : (new Date(json['createdAtTime'])),
        'externalIds': !exists(json, 'externalIds') ? undefined : json['externalIds'],
        'formattedAddress': json['formattedAddress'],
        'geofence': AddressGeofenceFromJSON(json['geofence']),
        'id': json['id'],
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
        'name': json['name'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(TagTinyResponseFromJSON)),
    };
}

export function AddressToJSON(value?: Address | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addressTypes': value.addressTypes,
        'contacts': value.contacts === undefined ? undefined : ((value.contacts as Array<any>).map(ContactTinyResponseToJSON)),
        'createdAtTime': value.createdAtTime === undefined ? undefined : (value.createdAtTime.toISOString()),
        'externalIds': value.externalIds,
        'formattedAddress': value.formattedAddress,
        'geofence': AddressGeofenceToJSON(value.geofence),
        'id': value.id,
        'latitude': value.latitude,
        'longitude': value.longitude,
        'name': value.name,
        'notes': value.notes,
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(TagTinyResponseToJSON)),
    };
}


