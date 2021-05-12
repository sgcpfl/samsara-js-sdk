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
    AttributeTiny,
    AttributeTinyFromJSON,
    AttributeTinyFromJSONTyped,
    AttributeTinyToJSON,
    DriverActivationStatus,
    DriverActivationStatusFromJSON,
    DriverActivationStatusFromJSONTyped,
    DriverActivationStatusToJSON,
    DriverCarrierSettings,
    DriverCarrierSettingsFromJSON,
    DriverCarrierSettingsFromJSONTyped,
    DriverCarrierSettingsToJSON,
    DriverEldSettings,
    DriverEldSettingsFromJSON,
    DriverEldSettingsFromJSONTyped,
    DriverEldSettingsToJSON,
    DriverLocale,
    DriverLocaleFromJSON,
    DriverLocaleFromJSONTyped,
    DriverLocaleToJSON,
    DriverStaticAssignedVehicle,
    DriverStaticAssignedVehicleFromJSON,
    DriverStaticAssignedVehicleFromJSONTyped,
    DriverStaticAssignedVehicleToJSON,
    DriverVehicleGroupTag,
    DriverVehicleGroupTagFromJSON,
    DriverVehicleGroupTagFromJSONTyped,
    DriverVehicleGroupTagToJSON,
    TagTinyResponse,
    TagTinyResponseFromJSON,
    TagTinyResponseFromJSONTyped,
    TagTinyResponseToJSON,
} from './';

/**
 * A driver object
 * @export
 * @interface Driver
 */
export interface Driver {
    /**
     * [beta] A minified attribute
     * @type {Array<AttributeTiny>}
     * @memberof Driver
     */
    attributes?: Array<AttributeTiny>;
    /**
     * 
     * @type {DriverCarrierSettings}
     * @memberof Driver
     */
    carrierSettings?: DriverCarrierSettings;
    /**
     * The date and time this driver was created in RFC 3339 format.
     * @type {string}
     * @memberof Driver
     */
    createdAtTime?: string;
    /**
     * The ID Card Code on the back of the physical card assigned to the driver.  Contact Samsara if you would like to enable this feature.
     * @type {string}
     * @memberof Driver
     */
    currentIdCardCode?: string;
    /**
     * 
     * @type {DriverActivationStatus}
     * @memberof Driver
     */
    driverActivationStatus?: DriverActivationStatus;
    /**
     * Flag indicating this driver may use Adverse Weather exemptions in ELD logs.
     * @type {boolean}
     * @memberof Driver
     */
    eldAdverseWeatherExemptionEnabled?: boolean;
    /**
     * Flag indicating this driver may use Big Day exemption in ELD logs.
     * @type {boolean}
     * @memberof Driver
     */
    eldBigDayExemptionEnabled?: boolean;
    /**
     * `0` indicating midnight-to-midnight ELD driving hours, `12` to indicate noon-to-noon driving hours.
     * @type {number}
     * @memberof Driver
     */
    eldDayStartHour?: number;
    /**
     * Flag indicating this driver is exempt from the Electronic Logging Mandate.
     * @type {boolean}
     * @memberof Driver
     */
    eldExempt?: boolean;
    /**
     * Reason that this driver is exempt from the Electronic Logging Mandate (see eldExempt).
     * @type {string}
     * @memberof Driver
     */
    eldExemptReason?: string;
    /**
     * Flag indicating this driver may select the Personal Conveyance duty status in ELD logs.
     * @type {boolean}
     * @memberof Driver
     */
    eldPcEnabled?: boolean;
    /**
     * 
     * @type {DriverEldSettings}
     * @memberof Driver
     */
    eldSettings?: DriverEldSettings;
    /**
     * Flag indicating this driver may select the Yard Move duty status in ELD logs.
     * @type {boolean}
     * @memberof Driver
     */
    eldYmEnabled?: boolean;
    /**
     * The [external IDs](https://developers.samsara.com/docs/external-ids) for the given object.
     * @type {object}
     * @memberof Driver
     */
    externalIds?: object;
    /**
     * Samsara ID for the driver.
     * @type {string}
     * @memberof Driver
     */
    id?: string;
    /**
     * [DEPRECATED] A boolean indicating whether or not the driver is deactivated. Use `driverActivationStatus` instead.
     * @type {boolean}
     * @memberof Driver
     */
    isDeactivated?: boolean;
    /**
     * Driver's state issued license number. The combination of this number and `licenseState` must be unique.
     * @type {string}
     * @memberof Driver
     */
    licenseNumber?: string;
    /**
     * Abbreviation of US state, Canadian province, or US territory that issued driver's license.
     * @type {string}
     * @memberof Driver
     */
    licenseState?: string;
    /**
     * 
     * @type {DriverLocale}
     * @memberof Driver
     */
    locale?: DriverLocale;
    /**
     * Driver's name.
     * @type {string}
     * @memberof Driver
     */
    name?: string;
    /**
     * Notes about the driver.
     * @type {string}
     * @memberof Driver
     */
    notes?: string;
    /**
     * Phone number of the driver.
     * @type {string}
     * @memberof Driver
     */
    phone?: string;
    /**
     * 
     * @type {DriverStaticAssignedVehicle}
     * @memberof Driver
     */
    staticAssignedVehicle?: DriverStaticAssignedVehicle;
    /**
     * Driver's assigned tachograph card number (Europe specific)
     * @type {string}
     * @memberof Driver
     */
    tachographCardNumber?: string;
    /**
     * The tags this driver belongs to.
     * @type {Array<TagTinyResponse>}
     * @memberof Driver
     */
    tags?: Array<TagTinyResponse>;
    /**
     * Home terminal timezone, in order to indicate what time zone should be used to calculate the ELD logs. Driver timezones use [IANA timezone database](https://www.iana.org/time-zones) keys (e.g. `America/Los_Angeles`, `America/New_York`, `Europe/London`, etc.). You can find a mapping of common timezone formats to IANA timezone keys [here](https://unicode.org/cldr/charts/latest/supplemental/zone_tzid.html).
     * @type {string}
     * @memberof Driver
     */
    timezone?: string;
    /**
     * The date and time this driver was last updated in RFC 3339 format.
     * @type {string}
     * @memberof Driver
     */
    updatedAtTime?: string;
    /**
     * Driver's login username into the driver app. The username may not contain spaces or the '@' symbol. The username must be unique.
     * @type {string}
     * @memberof Driver
     */
    username?: string;
    /**
     * 
     * @type {DriverVehicleGroupTag}
     * @memberof Driver
     */
    vehicleGroupTag?: DriverVehicleGroupTag;
}

export function DriverFromJSON(json: any): Driver {
    return DriverFromJSONTyped(json, false);
}

export function DriverFromJSONTyped(json: any, ignoreDiscriminator: boolean): Driver {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': !exists(json, 'attributes') ? undefined : ((json['attributes'] as Array<any>).map(AttributeTinyFromJSON)),
        'carrierSettings': !exists(json, 'carrierSettings') ? undefined : DriverCarrierSettingsFromJSON(json['carrierSettings']),
        'createdAtTime': !exists(json, 'createdAtTime') ? undefined : json['createdAtTime'],
        'currentIdCardCode': !exists(json, 'currentIdCardCode') ? undefined : json['currentIdCardCode'],
        'driverActivationStatus': !exists(json, 'driverActivationStatus') ? undefined : DriverActivationStatusFromJSON(json['driverActivationStatus']),
        'eldAdverseWeatherExemptionEnabled': !exists(json, 'eldAdverseWeatherExemptionEnabled') ? undefined : json['eldAdverseWeatherExemptionEnabled'],
        'eldBigDayExemptionEnabled': !exists(json, 'eldBigDayExemptionEnabled') ? undefined : json['eldBigDayExemptionEnabled'],
        'eldDayStartHour': !exists(json, 'eldDayStartHour') ? undefined : json['eldDayStartHour'],
        'eldExempt': !exists(json, 'eldExempt') ? undefined : json['eldExempt'],
        'eldExemptReason': !exists(json, 'eldExemptReason') ? undefined : json['eldExemptReason'],
        'eldPcEnabled': !exists(json, 'eldPcEnabled') ? undefined : json['eldPcEnabled'],
        'eldSettings': !exists(json, 'eldSettings') ? undefined : DriverEldSettingsFromJSON(json['eldSettings']),
        'eldYmEnabled': !exists(json, 'eldYmEnabled') ? undefined : json['eldYmEnabled'],
        'externalIds': !exists(json, 'externalIds') ? undefined : json['externalIds'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isDeactivated': !exists(json, 'isDeactivated') ? undefined : json['isDeactivated'],
        'licenseNumber': !exists(json, 'licenseNumber') ? undefined : json['licenseNumber'],
        'licenseState': !exists(json, 'licenseState') ? undefined : json['licenseState'],
        'locale': !exists(json, 'locale') ? undefined : DriverLocaleFromJSON(json['locale']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'staticAssignedVehicle': !exists(json, 'staticAssignedVehicle') ? undefined : DriverStaticAssignedVehicleFromJSON(json['staticAssignedVehicle']),
        'tachographCardNumber': !exists(json, 'tachographCardNumber') ? undefined : json['tachographCardNumber'],
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(TagTinyResponseFromJSON)),
        'timezone': !exists(json, 'timezone') ? undefined : json['timezone'],
        'updatedAtTime': !exists(json, 'updatedAtTime') ? undefined : json['updatedAtTime'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'vehicleGroupTag': !exists(json, 'vehicleGroupTag') ? undefined : DriverVehicleGroupTagFromJSON(json['vehicleGroupTag']),
    };
}

export function DriverToJSON(value?: Driver | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': value.attributes === undefined ? undefined : ((value.attributes as Array<any>).map(AttributeTinyToJSON)),
        'carrierSettings': DriverCarrierSettingsToJSON(value.carrierSettings),
        'createdAtTime': value.createdAtTime,
        'currentIdCardCode': value.currentIdCardCode,
        'driverActivationStatus': DriverActivationStatusToJSON(value.driverActivationStatus),
        'eldAdverseWeatherExemptionEnabled': value.eldAdverseWeatherExemptionEnabled,
        'eldBigDayExemptionEnabled': value.eldBigDayExemptionEnabled,
        'eldDayStartHour': value.eldDayStartHour,
        'eldExempt': value.eldExempt,
        'eldExemptReason': value.eldExemptReason,
        'eldPcEnabled': value.eldPcEnabled,
        'eldSettings': DriverEldSettingsToJSON(value.eldSettings),
        'eldYmEnabled': value.eldYmEnabled,
        'externalIds': value.externalIds,
        'id': value.id,
        'isDeactivated': value.isDeactivated,
        'licenseNumber': value.licenseNumber,
        'licenseState': value.licenseState,
        'locale': DriverLocaleToJSON(value.locale),
        'name': value.name,
        'notes': value.notes,
        'phone': value.phone,
        'staticAssignedVehicle': DriverStaticAssignedVehicleToJSON(value.staticAssignedVehicle),
        'tachographCardNumber': value.tachographCardNumber,
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(TagTinyResponseToJSON)),
        'timezone': value.timezone,
        'updatedAtTime': value.updatedAtTime,
        'username': value.username,
        'vehicleGroupTag': DriverVehicleGroupTagToJSON(value.vehicleGroupTag),
    };
}


