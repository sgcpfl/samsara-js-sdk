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
    V1DispatchJobDocumentInfo,
    V1DispatchJobDocumentInfoFromJSON,
    V1DispatchJobDocumentInfoFromJSONTyped,
    V1DispatchJobDocumentInfoToJSON,
    V1JobStatus,
    V1JobStatusFromJSON,
    V1JobStatusFromJSONTyped,
    V1JobStatusToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1DispatchJobAllOf
 */
export interface V1DispatchJobAllOf {
    /**
     * The time at which the driver arrived at the job destination.
     * @type {number}
     * @memberof V1DispatchJobAllOf
     */
    arrivedAtMs?: number;
    /**
     * The time at which the job was marked complete (e.g. started driving to the next destination).
     * @type {number}
     * @memberof V1DispatchJobAllOf
     */
    completedAtMs?: number;
    /**
     * ID of the route that this job belongs to.
     * @type {number}
     * @memberof V1DispatchJobAllOf
     */
    dispatchRouteId: number;
    /**
     * Document submissions associated with this job.
     * @type {Array<V1DispatchJobDocumentInfo>}
     * @memberof V1DispatchJobAllOf
     */
    documents?: Array<V1DispatchJobDocumentInfo>;
    /**
     * ID of the driver assigned to the dispatch job.
     * @type {number}
     * @memberof V1DispatchJobAllOf
     */
    driverId?: number;
    /**
     * The time at which the assigned driver started fulfilling the job (e.g. started driving to the destination).
     * @type {number}
     * @memberof V1DispatchJobAllOf
     */
    enRouteAtMs?: number;
    /**
     * The time at which the assigned driver is estimated to arrive at the job destination. Only valid for en-route jobs.
     * @type {number}
     * @memberof V1DispatchJobAllOf
     */
    estimatedArrivalMs?: number;
    /**
     * Fleet viewer url of the dispatch job.
     * @type {string}
     * @memberof V1DispatchJobAllOf
     */
    fleetViewerUrl?: string;
    /**
     * Deprecated.
     * @type {number}
     * @memberof V1DispatchJobAllOf
     */
    groupId?: number;
    /**
     * ID of the Samsara dispatch job.
     * @type {number}
     * @memberof V1DispatchJobAllOf
     */
    id: number;
    /**
     * 
     * @type {V1JobStatus}
     * @memberof V1DispatchJobAllOf
     */
    jobState: V1JobStatus;
    /**
     * The time at which the job was marked skipped.
     * @type {number}
     * @memberof V1DispatchJobAllOf
     */
    skippedAtMs?: number;
    /**
     * ID of the vehicle used for the dispatch job.
     * @type {number}
     * @memberof V1DispatchJobAllOf
     */
    vehicleId?: number;
}

export function V1DispatchJobAllOfFromJSON(json: any): V1DispatchJobAllOf {
    return V1DispatchJobAllOfFromJSONTyped(json, false);
}

export function V1DispatchJobAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DispatchJobAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arrivedAtMs': !exists(json, 'arrived_at_ms') ? undefined : json['arrived_at_ms'],
        'completedAtMs': !exists(json, 'completed_at_ms') ? undefined : json['completed_at_ms'],
        'dispatchRouteId': json['dispatch_route_id'],
        'documents': !exists(json, 'documents') ? undefined : ((json['documents'] as Array<any>).map(V1DispatchJobDocumentInfoFromJSON)),
        'driverId': !exists(json, 'driver_id') ? undefined : json['driver_id'],
        'enRouteAtMs': !exists(json, 'en_route_at_ms') ? undefined : json['en_route_at_ms'],
        'estimatedArrivalMs': !exists(json, 'estimated_arrival_ms') ? undefined : json['estimated_arrival_ms'],
        'fleetViewerUrl': !exists(json, 'fleet_viewer_url') ? undefined : json['fleet_viewer_url'],
        'groupId': !exists(json, 'group_id') ? undefined : json['group_id'],
        'id': json['id'],
        'jobState': V1JobStatusFromJSON(json['job_state']),
        'skippedAtMs': !exists(json, 'skipped_at_ms') ? undefined : json['skipped_at_ms'],
        'vehicleId': !exists(json, 'vehicle_id') ? undefined : json['vehicle_id'],
    };
}

export function V1DispatchJobAllOfToJSON(value?: V1DispatchJobAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arrived_at_ms': value.arrivedAtMs,
        'completed_at_ms': value.completedAtMs,
        'dispatch_route_id': value.dispatchRouteId,
        'documents': value.documents === undefined ? undefined : ((value.documents as Array<any>).map(V1DispatchJobDocumentInfoToJSON)),
        'driver_id': value.driverId,
        'en_route_at_ms': value.enRouteAtMs,
        'estimated_arrival_ms': value.estimatedArrivalMs,
        'fleet_viewer_url': value.fleetViewerUrl,
        'group_id': value.groupId,
        'id': value.id,
        'job_state': V1JobStatusToJSON(value.jobState),
        'skipped_at_ms': value.skippedAtMs,
        'vehicle_id': value.vehicleId,
    };
}


