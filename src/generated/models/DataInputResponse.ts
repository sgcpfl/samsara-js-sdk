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
    DataInputResponseAllOf,
    DataInputResponseAllOfFromJSON,
    DataInputResponseAllOfFromJSONTyped,
    DataInputResponseAllOfToJSON,
    DataInputTinyResponse,
    DataInputTinyResponseFromJSON,
    DataInputTinyResponseFromJSONTyped,
    DataInputTinyResponseToJSON,
    FftSpectraDataPoint,
    FftSpectraDataPointFromJSON,
    FftSpectraDataPointFromJSONTyped,
    FftSpectraDataPointToJSON,
    J1939D1StatusDataPoint,
    J1939D1StatusDataPointFromJSON,
    J1939D1StatusDataPointFromJSONTyped,
    J1939D1StatusDataPointToJSON,
    LocationDataPoint,
    LocationDataPointFromJSON,
    LocationDataPointFromJSONTyped,
    LocationDataPointToJSON,
    NumberDataPoint,
    NumberDataPointFromJSON,
    NumberDataPointFromJSONTyped,
    NumberDataPointToJSON,
    StringDataPoint,
    StringDataPointFromJSON,
    StringDataPointFromJSONTyped,
    StringDataPointToJSON,
} from './';

/**
 * 
 * @export
 * @interface DataInputResponse
 */
export interface DataInputResponse {
    /**
     * Unique identifier for the data input's asset.
     * @type {string}
     * @memberof DataInputResponse
     */
    assetId?: string;
    /**
     * Data group for this data input.
     * @type {string}
     * @memberof DataInputResponse
     */
    dataGroup?: string;
    /**
     * Unique identifier for the data input.
     * @type {string}
     * @memberof DataInputResponse
     */
    id?: string;
    /**
     * Name of this data input.
     * @type {string}
     * @memberof DataInputResponse
     */
    name?: string;
    /**
     * Units of data for this data input.
     * @type {string}
     * @memberof DataInputResponse
     */
    units?: string;
    /**
     * List of FFT spectra data points from the data input.
     * @type {Array<FftSpectraDataPoint>}
     * @memberof DataInputResponse
     */
    fftSpectraPoints?: Array<FftSpectraDataPoint>;
    /**
     * List of active J1939D1 statuses.
     * @type {Array<J1939D1StatusDataPoint>}
     * @memberof DataInputResponse
     */
    j1939D1StatusPoints?: Array<J1939D1StatusDataPoint>;
    /**
     * List of location data points from the data input.
     * @type {Array<LocationDataPoint>}
     * @memberof DataInputResponse
     */
    locationPoints?: Array<LocationDataPoint>;
    /**
     * List of numeric data points from the data input.
     * @type {Array<NumberDataPoint>}
     * @memberof DataInputResponse
     */
    numberPoints?: Array<NumberDataPoint>;
    /**
     * List of string data points from the data input.
     * @type {Array<StringDataPoint>}
     * @memberof DataInputResponse
     */
    stringPoints?: Array<StringDataPoint>;
}

export function DataInputResponseFromJSON(json: any): DataInputResponse {
    return DataInputResponseFromJSONTyped(json, false);
}

export function DataInputResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataInputResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assetId': !exists(json, 'assetId') ? undefined : json['assetId'],
        'dataGroup': !exists(json, 'dataGroup') ? undefined : json['dataGroup'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'units': !exists(json, 'units') ? undefined : json['units'],
        'fftSpectraPoints': !exists(json, 'fftSpectraPoints') ? undefined : ((json['fftSpectraPoints'] as Array<any>).map(FftSpectraDataPointFromJSON)),
        'j1939D1StatusPoints': !exists(json, 'j1939D1StatusPoints') ? undefined : ((json['j1939D1StatusPoints'] as Array<any>).map(J1939D1StatusDataPointFromJSON)),
        'locationPoints': !exists(json, 'locationPoints') ? undefined : ((json['locationPoints'] as Array<any>).map(LocationDataPointFromJSON)),
        'numberPoints': !exists(json, 'numberPoints') ? undefined : ((json['numberPoints'] as Array<any>).map(NumberDataPointFromJSON)),
        'stringPoints': !exists(json, 'stringPoints') ? undefined : ((json['stringPoints'] as Array<any>).map(StringDataPointFromJSON)),
    };
}

export function DataInputResponseToJSON(value?: DataInputResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assetId': value.assetId,
        'dataGroup': value.dataGroup,
        'id': value.id,
        'name': value.name,
        'units': value.units,
        'fftSpectraPoints': value.fftSpectraPoints === undefined ? undefined : ((value.fftSpectraPoints as Array<any>).map(FftSpectraDataPointToJSON)),
        'j1939D1StatusPoints': value.j1939D1StatusPoints === undefined ? undefined : ((value.j1939D1StatusPoints as Array<any>).map(J1939D1StatusDataPointToJSON)),
        'locationPoints': value.locationPoints === undefined ? undefined : ((value.locationPoints as Array<any>).map(LocationDataPointToJSON)),
        'numberPoints': value.numberPoints === undefined ? undefined : ((value.numberPoints as Array<any>).map(NumberDataPointToJSON)),
        'stringPoints': value.stringPoints === undefined ? undefined : ((value.stringPoints as Array<any>).map(StringDataPointToJSON)),
    };
}

