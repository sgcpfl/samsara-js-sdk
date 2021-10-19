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
    BaseRouteResponseObjectResponseBody,
    BaseRouteResponseObjectResponseBodyFromJSON,
    BaseRouteResponseObjectResponseBodyFromJSONTyped,
    BaseRouteResponseObjectResponseBodyToJSON,
    RouteChangesResponseBody,
    RouteChangesResponseBodyFromJSON,
    RouteChangesResponseBodyFromJSONTyped,
    RouteChangesResponseBodyToJSON,
} from './';

/**
 * Route feed object.
 * @export
 * @interface RouteFeedObjectResponseBody
 */
export interface RouteFeedObjectResponseBody {
    /**
     * 
     * @type {RouteChangesResponseBody}
     * @memberof RouteFeedObjectResponseBody
     */
    changes: RouteChangesResponseBody;
    /**
     * The operation that was performed as part of this route update.
     * @type {string}
     * @memberof RouteFeedObjectResponseBody
     */
    operation?: RouteFeedObjectResponseBodyOperationEnum;
    /**
     * 
     * @type {BaseRouteResponseObjectResponseBody}
     * @memberof RouteFeedObjectResponseBody
     */
    route: BaseRouteResponseObjectResponseBody;
    /**
     * The source of this route update. Updates that are triggered by time or by the route being completed are 'automatic'.
     * @type {string}
     * @memberof RouteFeedObjectResponseBody
     */
    source: RouteFeedObjectResponseBodySourceEnum;
    /**
     * The timestamp of the route in RFC 3339 format.
     * @type {Date}
     * @memberof RouteFeedObjectResponseBody
     */
    time: Date;
    /**
     * The type of route update. The route tracking updates occur as a route is completed and stops transition from one state to another. Currently only Route Tracking updates are supported, but this will change in the future when additional types are added.
     * @type {string}
     * @memberof RouteFeedObjectResponseBody
     */
    type: RouteFeedObjectResponseBodyTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum RouteFeedObjectResponseBodyOperationEnum {
    Scheduled = 'stop scheduled',
    EnRoute = 'stop en route',
    Skipped = 'stop skipped',
    Arrived = 'stop arrived',
    Departed = 'stop departed',
    EtaUpdated = 'stop ETA updated',
    ArrivalTimeUpdated = 'stop arrival time updated',
    CompletionTimeUpdated = 'stop completion time updated'
}/**
* @export
* @enum {string}
*/
export enum RouteFeedObjectResponseBodySourceEnum {
    Automatic = 'automatic',
    Driver = 'driver',
    Admin = 'admin'
}/**
* @export
* @enum {string}
*/
export enum RouteFeedObjectResponseBodyTypeEnum {
    RouteTracking = 'route tracking'
}

export function RouteFeedObjectResponseBodyFromJSON(json: any): RouteFeedObjectResponseBody {
    return RouteFeedObjectResponseBodyFromJSONTyped(json, false);
}

export function RouteFeedObjectResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): RouteFeedObjectResponseBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changes': RouteChangesResponseBodyFromJSON(json['changes']),
        'operation': !exists(json, 'operation') ? undefined : json['operation'],
        'route': BaseRouteResponseObjectResponseBodyFromJSON(json['route']),
        'source': json['source'],
        'time': (new Date(json['time'])),
        'type': json['type'],
    };
}

export function RouteFeedObjectResponseBodyToJSON(value?: RouteFeedObjectResponseBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changes': RouteChangesResponseBodyToJSON(value.changes),
        'operation': value.operation,
        'route': BaseRouteResponseObjectResponseBodyToJSON(value.route),
        'source': value.source,
        'time': (value.time.toISOString()),
        'type': value.type,
    };
}


