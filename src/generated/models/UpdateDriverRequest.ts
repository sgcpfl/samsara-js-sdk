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
    CreateDriverRequestAttributes,
    CreateDriverRequestAttributesFromJSON,
    CreateDriverRequestAttributesFromJSONTyped,
    CreateDriverRequestAttributesToJSON,
    DriverCarrierSettings,
    DriverCarrierSettingsFromJSON,
    DriverCarrierSettingsFromJSONTyped,
    DriverCarrierSettingsToJSON,
    UsDriverRulesetOverride,
    UsDriverRulesetOverrideFromJSON,
    UsDriverRulesetOverrideFromJSONTyped,
    UsDriverRulesetOverrideToJSON,
} from './';

/**
 * Driver that should be updated.
 * @export
 * @interface UpdateDriverRequest
 */
export interface UpdateDriverRequest {
    /**
     * 
     * @type {Array<CreateDriverRequestAttributes>}
     * @memberof UpdateDriverRequest
     */
    attributes?: Array<CreateDriverRequestAttributes>;
    /**
     * 
     * @type {DriverCarrierSettings}
     * @memberof UpdateDriverRequest
     */
    carrierSettings?: DriverCarrierSettings;
    /**
     * The ID Card Code on the back of the physical card assigned to the driver.  Contact Samsara if you would like to enable this feature.
     * @type {string}
     * @memberof UpdateDriverRequest
     */
    currentIdCardCode?: string;
    /**
     * The date and time this driver is considered to be deactivated in RFC 3339 format.
     * @type {string}
     * @memberof UpdateDriverRequest
     */
    deactivatedAtTime?: string;
    /**
     * A value indicating whether the driver is active or deactivated.
     * @type {string}
     * @memberof UpdateDriverRequest
     */
    driverActivationStatus?: UpdateDriverRequestDriverActivationStatusEnum;
    /**
     * Flag indicating this driver may use Adverse Weather exemptions in ELD logs.
     * @type {boolean}
     * @memberof UpdateDriverRequest
     */
    eldAdverseWeatherExemptionEnabled?: boolean;
    /**
     * Flag indicating this driver may use Big Day exemption in ELD logs.
     * @type {boolean}
     * @memberof UpdateDriverRequest
     */
    eldBigDayExemptionEnabled?: boolean;
    /**
     * `0` indicating midnight-to-midnight ELD driving hours, `12` to indicate noon-to-noon driving hours.
     * @type {number}
     * @memberof UpdateDriverRequest
     */
    eldDayStartHour?: number;
    /**
     * Flag indicating this driver is exempt from the Electronic Logging Mandate.
     * @type {boolean}
     * @memberof UpdateDriverRequest
     */
    eldExempt?: boolean;
    /**
     * Reason that this driver is exempt from the Electronic Logging Mandate (see eldExempt).
     * @type {string}
     * @memberof UpdateDriverRequest
     */
    eldExemptReason?: string;
    /**
     * Flag indicating this driver may select the Personal Conveyance duty status in ELD logs.
     * @type {boolean}
     * @memberof UpdateDriverRequest
     */
    eldPcEnabled?: boolean;
    /**
     * Flag indicating this driver may select the Yard Move duty status in ELD logs.
     * @type {boolean}
     * @memberof UpdateDriverRequest
     */
    eldYmEnabled?: boolean;
    /**
     * The [external IDs](https://developers.samsara.com/docs/external-ids) for the given object.
     * @type {{ [key: string]: string; }}
     * @memberof UpdateDriverRequest
     */
    externalIds?: { [key: string]: string; };
    /**
     * Driver's state issued license number. The combination of this number and `licenseState` must be unique.
     * @type {string}
     * @memberof UpdateDriverRequest
     */
    licenseNumber?: string;
    /**
     * Abbreviation of US state, Canadian province, or US territory that issued driver's license.
     * @type {string}
     * @memberof UpdateDriverRequest
     */
    licenseState?: string;
    /**
     * Locale override (uncommon). These are specified by ISO 3166-2 country codes for supported locales.
     * @type {string}
     * @memberof UpdateDriverRequest
     */
    locale?: UpdateDriverRequestLocaleEnum;
    /**
     * Driver's name.
     * @type {string}
     * @memberof UpdateDriverRequest
     */
    name?: string;
    /**
     * Notes about the driver.
     * @type {string}
     * @memberof UpdateDriverRequest
     */
    notes?: string;
    /**
     * Password that the driver can use to login to the Samsara driver app.
     * @type {string}
     * @memberof UpdateDriverRequest
     */
    password?: string;
    /**
     * Phone number of the driver.
     * @type {string}
     * @memberof UpdateDriverRequest
     */
    phone?: string;
    /**
     * ID of vehicle that the driver is permanently assigned to. (uncommon).
     * @type {string}
     * @memberof UpdateDriverRequest
     */
    staticAssignedVehicleId?: string;
    /**
     * Driver's assigned tachograph card number (Europe specific)
     * @type {string}
     * @memberof UpdateDriverRequest
     */
    tachographCardNumber?: string;
    /**
     * IDs of tags the driver is associated with.
     * @type {Array<string>}
     * @memberof UpdateDriverRequest
     */
    tagIds?: Array<string>;
    /**
     * Home terminal timezone, in order to indicate what time zone should be used to calculate the ELD logs. Driver timezones use [IANA timezone database](https://www.iana.org/time-zones) keys (e.g. `America/Los_Angeles`, `America/New_York`, `Europe/London`, etc.). You can find a mapping of common timezone formats to IANA timezone keys [here](https://unicode.org/cldr/charts/latest/supplemental/zone_tzid.html).
     * @type {string}
     * @memberof UpdateDriverRequest
     */
    timezone?: string;
    /**
     * 
     * @type {UsDriverRulesetOverride}
     * @memberof UpdateDriverRequest
     */
    usDriverRulesetOverride?: UsDriverRulesetOverride;
    /**
     * Driver's login username into the driver app. The username may not contain spaces or the '@' symbol. The username must be unique.
     * @type {string}
     * @memberof UpdateDriverRequest
     */
    username?: string;
    /**
     * Tag ID which determines which vehicles a driver will see when selecting vehicles.
     * @type {string}
     * @memberof UpdateDriverRequest
     */
    vehicleGroupTagId?: string;
}

/**
* @export
* @enum {string}
*/
export enum UpdateDriverRequestDriverActivationStatusEnum {
    Active = 'active',
    Deactivated = 'deactivated'
}/**
* @export
* @enum {string}
*/
export enum UpdateDriverRequestLocaleEnum {
    Us = 'us',
    At = 'at',
    Be = 'be',
    Ca = 'ca',
    Gb = 'gb',
    Fr = 'fr',
    De = 'de',
    Ie = 'ie',
    It = 'it',
    Lu = 'lu',
    Mx = 'mx',
    Nl = 'nl',
    Es = 'es',
    Ch = 'ch',
    Pr = 'pr'
}

export function UpdateDriverRequestFromJSON(json: any): UpdateDriverRequest {
    return UpdateDriverRequestFromJSONTyped(json, false);
}

export function UpdateDriverRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateDriverRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': !exists(json, 'attributes') ? undefined : ((json['attributes'] as Array<any>).map(CreateDriverRequestAttributesFromJSON)),
        'carrierSettings': !exists(json, 'carrierSettings') ? undefined : DriverCarrierSettingsFromJSON(json['carrierSettings']),
        'currentIdCardCode': !exists(json, 'currentIdCardCode') ? undefined : json['currentIdCardCode'],
        'deactivatedAtTime': !exists(json, 'deactivatedAtTime') ? undefined : json['deactivatedAtTime'],
        'driverActivationStatus': !exists(json, 'driverActivationStatus') ? undefined : json['driverActivationStatus'],
        'eldAdverseWeatherExemptionEnabled': !exists(json, 'eldAdverseWeatherExemptionEnabled') ? undefined : json['eldAdverseWeatherExemptionEnabled'],
        'eldBigDayExemptionEnabled': !exists(json, 'eldBigDayExemptionEnabled') ? undefined : json['eldBigDayExemptionEnabled'],
        'eldDayStartHour': !exists(json, 'eldDayStartHour') ? undefined : json['eldDayStartHour'],
        'eldExempt': !exists(json, 'eldExempt') ? undefined : json['eldExempt'],
        'eldExemptReason': !exists(json, 'eldExemptReason') ? undefined : json['eldExemptReason'],
        'eldPcEnabled': !exists(json, 'eldPcEnabled') ? undefined : json['eldPcEnabled'],
        'eldYmEnabled': !exists(json, 'eldYmEnabled') ? undefined : json['eldYmEnabled'],
        'externalIds': !exists(json, 'externalIds') ? undefined : json['externalIds'],
        'licenseNumber': !exists(json, 'licenseNumber') ? undefined : json['licenseNumber'],
        'licenseState': !exists(json, 'licenseState') ? undefined : json['licenseState'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'staticAssignedVehicleId': !exists(json, 'staticAssignedVehicleId') ? undefined : json['staticAssignedVehicleId'],
        'tachographCardNumber': !exists(json, 'tachographCardNumber') ? undefined : json['tachographCardNumber'],
        'tagIds': !exists(json, 'tagIds') ? undefined : json['tagIds'],
        'timezone': !exists(json, 'timezone') ? undefined : json['timezone'],
        'usDriverRulesetOverride': !exists(json, 'usDriverRulesetOverride') ? undefined : UsDriverRulesetOverrideFromJSON(json['usDriverRulesetOverride']),
        'username': !exists(json, 'username') ? undefined : json['username'],
        'vehicleGroupTagId': !exists(json, 'vehicleGroupTagId') ? undefined : json['vehicleGroupTagId'],
    };
}

export function UpdateDriverRequestToJSON(value?: UpdateDriverRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': value.attributes === undefined ? undefined : ((value.attributes as Array<any>).map(CreateDriverRequestAttributesToJSON)),
        'carrierSettings': DriverCarrierSettingsToJSON(value.carrierSettings),
        'currentIdCardCode': value.currentIdCardCode,
        'deactivatedAtTime': value.deactivatedAtTime,
        'driverActivationStatus': value.driverActivationStatus,
        'eldAdverseWeatherExemptionEnabled': value.eldAdverseWeatherExemptionEnabled,
        'eldBigDayExemptionEnabled': value.eldBigDayExemptionEnabled,
        'eldDayStartHour': value.eldDayStartHour,
        'eldExempt': value.eldExempt,
        'eldExemptReason': value.eldExemptReason,
        'eldPcEnabled': value.eldPcEnabled,
        'eldYmEnabled': value.eldYmEnabled,
        'externalIds': value.externalIds,
        'licenseNumber': value.licenseNumber,
        'licenseState': value.licenseState,
        'locale': value.locale,
        'name': value.name,
        'notes': value.notes,
        'password': value.password,
        'phone': value.phone,
        'staticAssignedVehicleId': value.staticAssignedVehicleId,
        'tachographCardNumber': value.tachographCardNumber,
        'tagIds': value.tagIds,
        'timezone': value.timezone,
        'usDriverRulesetOverride': UsDriverRulesetOverrideToJSON(value.usDriverRulesetOverride),
        'username': value.username,
        'vehicleGroupTagId': value.vehicleGroupTagId,
    };
}


