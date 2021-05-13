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

/**
 * The cycle of the ELD ruleset applied to this driver.
 * @export
 * @enum {string}
 */
export enum DriverEldRulesetCycle {
    Usa60Hour7Day = 'USA 60 hour / 7 day',
    Usa70Hour8Day = 'USA 70 hour / 8 day',
    Ak80Hour8Day = 'AK 80 hour / 8 day',
    Ak70Hour7Day = 'AK 70 hour / 7 day',
    Ca80Hour8Day = 'CA 80 hour / 8 day',
    Ca112Hour8Day = 'CA 112 hour / 8 day',
    Fl80Hour8Day = 'FL 80 hour / 8 day',
    Fl70Hour7Day = 'FL 70 hour / 7 day',
    Ne80Hour8Day = 'NE 80 hour / 8 day',
    Ne70Hour7Day = 'NE 70 hour / 7 day',
    Nc80Hour8Day = 'NC 80 hour / 8 day',
    Nc70Hour7Day = 'NC 70 hour / 7 day',
    Ok70Hour8Day = 'OK 70 hour / 8 day',
    Ok60Hour7Day = 'OK 60 hour / 7 day',
    Or80Hour8Day = 'OR 80 hour / 8 day',
    Or70Hour7Day = 'OR 70 hour / 7 day',
    Sc80Hour8Day = 'SC 80 hour / 8 day',
    Sc70Hour7Day = 'SC 70 hour / 7 day',
    Tx70Hour7Day = 'TX 70 hour / 7 day',
    Wi80Hour8Day = 'WI 80 hour / 8 day',
    Wi70Hour7Day = 'WI 70 hour / 7 day',
    CanadaSouthCycle170Hour7Day = 'Canada South Cycle 1 (70 hour / 7 day)',
    CanadaSouthCycle2120Hour14Day = 'Canada South Cycle 2 (120 hour / 14 day)',
    CanadaNorthCycle180Hour7Day = 'Canada North Cycle 1 (80 hour / 7 day)',
    CanadaNorthCycle2120Hour14Day = 'Canada North Cycle 2 (120 hour / 14 day)'
}

export function DriverEldRulesetCycleFromJSON(json: any): DriverEldRulesetCycle {
    return DriverEldRulesetCycleFromJSONTyped(json, false);
}

export function DriverEldRulesetCycleFromJSONTyped(json: any, ignoreDiscriminator: boolean): DriverEldRulesetCycle {
    return json as DriverEldRulesetCycle;
}

export function DriverEldRulesetCycleToJSON(value?: DriverEldRulesetCycle | null): any {
    return value as any;
}
