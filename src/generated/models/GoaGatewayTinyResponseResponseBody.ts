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
/**
 * A minified gateway object
 * @export
 * @interface GoaGatewayTinyResponseResponseBody
 */
export interface GoaGatewayTinyResponseResponseBody {
    /**
     * The model of the gateway installed on the asset.
     * @type {string}
     * @memberof GoaGatewayTinyResponseResponseBody
     */
    model: GoaGatewayTinyResponseResponseBodyModelEnum;
    /**
     * The serial number of the gateway installed on the asset.
     * @type {string}
     * @memberof GoaGatewayTinyResponseResponseBody
     */
    serial: string;
}

/**
* @export
* @enum {string}
*/
export enum GoaGatewayTinyResponseResponseBodyModelEnum {
    None = 'none',
    Ag45 = 'AG45',
    Ag41 = 'AG41',
    Ag46Eu = 'AG46EU',
    Ig41 = 'IG41',
    Vg34 = 'VG34',
    Ig15 = 'IG15',
    Em22 = 'EM22',
    Pm7 = 'PM7',
    Vg54Na = 'VG54NA',
    Oemp = 'OEMP',
    Acccrgo = 'ACCCRGO',
    Em01 = 'EM01',
    Baxter = 'Baxter',
    Igmao = 'IGMAO',
    Ekm = 'EKM',
    Dm1 = 'DM1',
    Vg54Eu = 'VG54EU',
    Ig11 = 'IG11',
    Cm12 = 'CM12',
    Ag41Eu = 'AG41EU',
    Im32 = 'IM32',
    Ag46P = 'AG46P',
    Em12 = 'EM12',
    Em21 = 'EM21',
    Cm31 = 'CM31',
    Ag46 = 'AG46',
    Ig61 = 'IG61',
    Oemv = 'OEMV',
    Trailer = 'Trailer',
    Im31 = 'IM31',
    Vg33 = 'VG33',
    Ag24 = 'AG24',
    Hm21 = 'HM21',
    Em23 = 'EM23',
    Vg34Eu = 'VG34EU',
    Ag26Eu = 'AG26EU',
    Ig20 = 'IG20',
    Hm11 = 'HM11',
    Nvr10 = 'NVR10',
    Vg34Fn = 'VG34FN',
    Ig21 = 'IG21',
    Igmai = 'IGMAI',
    Ag15 = 'AG15',
    Oem = 'OEM',
    Ag26 = 'AG26',
    Sg1 = 'SG1',
    Vs25C = 'VS25C',
    Pm20 = 'PM20',
    Accbdh = 'ACCBDH',
    Ag24Eu = 'AG24EU',
    Cmvr = 'CMVR',
    Acchmi10 = 'ACCHMI10',
    Oemr = 'OEMR',
    Vg32 = 'VG32',
    Pm10 = 'PM10',
    Vs2C = 'VS2C',
    Em02 = 'EM02',
    Em11 = 'EM11',
    Im33 = 'IM33',
    Accdm11 = 'ACCDM11',
    Cm52 = 'CM52',
    Cm11 = 'CM11',
    Gw22 = 'GW22',
    Vs25 = 'VS25',
    Cm22 = 'CM22',
    Cm32 = 'CM32',
    Pm8 = 'PM8',
    Wm11 = 'WM11',
    Ag45Eu = 'AG45EU'
}

export function GoaGatewayTinyResponseResponseBodyFromJSON(json: any): GoaGatewayTinyResponseResponseBody {
    return GoaGatewayTinyResponseResponseBodyFromJSONTyped(json, false);
}

export function GoaGatewayTinyResponseResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): GoaGatewayTinyResponseResponseBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'model': json['model'],
        'serial': json['serial'],
    };
}

export function GoaGatewayTinyResponseResponseBodyToJSON(value?: GoaGatewayTinyResponseResponseBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'model': value.model,
        'serial': value.serial,
    };
}

