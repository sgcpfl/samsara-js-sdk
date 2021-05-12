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
    CarrierProposedAssignmentDriver,
    CarrierProposedAssignmentDriverFromJSON,
    CarrierProposedAssignmentDriverFromJSONTyped,
    CarrierProposedAssignmentDriverToJSON,
    CarrierProposedAssignmentVehicle,
    CarrierProposedAssignmentVehicleFromJSON,
    CarrierProposedAssignmentVehicleFromJSONTyped,
    CarrierProposedAssignmentVehicleToJSON,
    TrailerNameOnlyResponse,
    TrailerNameOnlyResponseFromJSON,
    TrailerNameOnlyResponseFromJSONTyped,
    TrailerNameOnlyResponseToJSON,
} from './';

/**
 * A carrier proposed assignment object
 * @export
 * @interface CarrierProposedAssignment
 */
export interface CarrierProposedAssignment {
    /**
     * Time when the driver accepted this assignment in the mobile app. Will be omitted if the driver hasn't accepted this assignment. RFC 3339 format. Millisecond precision and timezones are supported. (Examples: 2019-06-13T19:08:25Z, 2019-06-13T19:08:25.455Z, OR 2015-09-15T14:00:12-04:00).
     * @type {string}
     * @memberof CarrierProposedAssignment
     */
    acceptedTime?: string;
    /**
     * Time after which this assignment will be active and visible to the driver on the mobile app. Not setting it makes it active now. UTC timestamp in RFC 3339 format. Example: `2020-01-27T07:06:25Z`.
     * @type {string}
     * @memberof CarrierProposedAssignment
     */
    activeTime: string;
    /**
     * 
     * @type {CarrierProposedAssignmentDriver}
     * @memberof CarrierProposedAssignment
     */
    driver?: CarrierProposedAssignmentDriver;
    /**
     * Time when the driver first saw this assignment in the mobile app. Will be omitted if the driver hasn't seen this assignment yet. RFC 3339 format. Millisecond precision and timezones are supported. (Examples: 2019-06-13T19:08:25Z, 2019-06-13T19:08:25.455Z, OR 2015-09-15T14:00:12-04:00).
     * @type {string}
     * @memberof CarrierProposedAssignment
     */
    firstSeenTime?: string;
    /**
     * Samsara ID for the assignment.
     * @type {string}
     * @memberof CarrierProposedAssignment
     */
    id: string;
    /**
     * Time when the driver rejected this assignment in the mobile app. Will be omitted if the driver hasn't rejected this assignment. RFC 3339 format. Millisecond precision and timezones are supported. (Examples: 2019-06-13T19:08:25Z, 2019-06-13T19:08:25.455Z, OR 2015-09-15T14:00:12-04:00).
     * @type {string}
     * @memberof CarrierProposedAssignment
     */
    rejectedTime?: string;
    /**
     * Shipping Documents that this assignment will propose to the driver.
     * @type {string}
     * @memberof CarrierProposedAssignment
     */
    shippingDocs?: string;
    /**
     * Trailers that this assignment will propose to the driver.
     * @type {Array<TrailerNameOnlyResponse>}
     * @memberof CarrierProposedAssignment
     */
    trailers?: Array<TrailerNameOnlyResponse>;
    /**
     * 
     * @type {CarrierProposedAssignmentVehicle}
     * @memberof CarrierProposedAssignment
     */
    vehicle?: CarrierProposedAssignmentVehicle;
}

export function CarrierProposedAssignmentFromJSON(json: any): CarrierProposedAssignment {
    return CarrierProposedAssignmentFromJSONTyped(json, false);
}

export function CarrierProposedAssignmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CarrierProposedAssignment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'acceptedTime': !exists(json, 'acceptedTime') ? undefined : json['acceptedTime'],
        'activeTime': json['activeTime'],
        'driver': !exists(json, 'driver') ? undefined : CarrierProposedAssignmentDriverFromJSON(json['driver']),
        'firstSeenTime': !exists(json, 'firstSeenTime') ? undefined : json['firstSeenTime'],
        'id': json['id'],
        'rejectedTime': !exists(json, 'rejectedTime') ? undefined : json['rejectedTime'],
        'shippingDocs': !exists(json, 'shippingDocs') ? undefined : json['shippingDocs'],
        'trailers': !exists(json, 'trailers') ? undefined : ((json['trailers'] as Array<any>).map(TrailerNameOnlyResponseFromJSON)),
        'vehicle': !exists(json, 'vehicle') ? undefined : CarrierProposedAssignmentVehicleFromJSON(json['vehicle']),
    };
}

export function CarrierProposedAssignmentToJSON(value?: CarrierProposedAssignment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'acceptedTime': value.acceptedTime,
        'activeTime': value.activeTime,
        'driver': CarrierProposedAssignmentDriverToJSON(value.driver),
        'firstSeenTime': value.firstSeenTime,
        'id': value.id,
        'rejectedTime': value.rejectedTime,
        'shippingDocs': value.shippingDocs,
        'trailers': value.trailers === undefined ? undefined : ((value.trailers as Array<any>).map(TrailerNameOnlyResponseToJSON)),
        'vehicle': CarrierProposedAssignmentVehicleToJSON(value.vehicle),
    };
}


