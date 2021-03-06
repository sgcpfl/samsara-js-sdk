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
    VehicleStatsAuxInputDecoration,
    VehicleStatsAuxInputDecorationFromJSON,
    VehicleStatsAuxInputDecorationFromJSONTyped,
    VehicleStatsAuxInputDecorationToJSON,
    VehicleStatsDecorationsAmbientAirTemperatureMilliC,
    VehicleStatsDecorationsAmbientAirTemperatureMilliCFromJSON,
    VehicleStatsDecorationsAmbientAirTemperatureMilliCFromJSONTyped,
    VehicleStatsDecorationsAmbientAirTemperatureMilliCToJSON,
    VehicleStatsDecorationsBarometricPressurePa,
    VehicleStatsDecorationsBarometricPressurePaFromJSON,
    VehicleStatsDecorationsBarometricPressurePaFromJSONTyped,
    VehicleStatsDecorationsBarometricPressurePaToJSON,
    VehicleStatsDecorationsBatteryMilliVolts,
    VehicleStatsDecorationsBatteryMilliVoltsFromJSON,
    VehicleStatsDecorationsBatteryMilliVoltsFromJSONTyped,
    VehicleStatsDecorationsBatteryMilliVoltsToJSON,
    VehicleStatsDecorationsDefLevelMilliPercent,
    VehicleStatsDecorationsDefLevelMilliPercentFromJSON,
    VehicleStatsDecorationsDefLevelMilliPercentFromJSONTyped,
    VehicleStatsDecorationsDefLevelMilliPercentToJSON,
    VehicleStatsDecorationsEcuSpeedMph,
    VehicleStatsDecorationsEcuSpeedMphFromJSON,
    VehicleStatsDecorationsEcuSpeedMphFromJSONTyped,
    VehicleStatsDecorationsEcuSpeedMphToJSON,
    VehicleStatsDecorationsEngineCoolantTemperatureMilliC,
    VehicleStatsDecorationsEngineCoolantTemperatureMilliCFromJSON,
    VehicleStatsDecorationsEngineCoolantTemperatureMilliCFromJSONTyped,
    VehicleStatsDecorationsEngineCoolantTemperatureMilliCToJSON,
    VehicleStatsDecorationsEngineLoadPercent,
    VehicleStatsDecorationsEngineLoadPercentFromJSON,
    VehicleStatsDecorationsEngineLoadPercentFromJSONTyped,
    VehicleStatsDecorationsEngineLoadPercentToJSON,
    VehicleStatsDecorationsEngineOilPressureKPa,
    VehicleStatsDecorationsEngineOilPressureKPaFromJSON,
    VehicleStatsDecorationsEngineOilPressureKPaFromJSONTyped,
    VehicleStatsDecorationsEngineOilPressureKPaToJSON,
    VehicleStatsDecorationsEngineRpm,
    VehicleStatsDecorationsEngineRpmFromJSON,
    VehicleStatsDecorationsEngineRpmFromJSONTyped,
    VehicleStatsDecorationsEngineRpmToJSON,
    VehicleStatsDecorationsEngineStates,
    VehicleStatsDecorationsEngineStatesFromJSON,
    VehicleStatsDecorationsEngineStatesFromJSONTyped,
    VehicleStatsDecorationsEngineStatesToJSON,
    VehicleStatsDecorationsFuelPercents,
    VehicleStatsDecorationsFuelPercentsFromJSON,
    VehicleStatsDecorationsFuelPercentsFromJSONTyped,
    VehicleStatsDecorationsFuelPercentsToJSON,
    VehicleStatsDecorationsGps,
    VehicleStatsDecorationsGpsFromJSON,
    VehicleStatsDecorationsGpsFromJSONTyped,
    VehicleStatsDecorationsGpsToJSON,
    VehicleStatsDecorationsGpsDistanceMeters,
    VehicleStatsDecorationsGpsDistanceMetersFromJSON,
    VehicleStatsDecorationsGpsDistanceMetersFromJSONTyped,
    VehicleStatsDecorationsGpsDistanceMetersToJSON,
    VehicleStatsDecorationsGpsOdometerMeters,
    VehicleStatsDecorationsGpsOdometerMetersFromJSON,
    VehicleStatsDecorationsGpsOdometerMetersFromJSONTyped,
    VehicleStatsDecorationsGpsOdometerMetersToJSON,
    VehicleStatsDecorationsIntakeManifoldTemperatureMilliC,
    VehicleStatsDecorationsIntakeManifoldTemperatureMilliCFromJSON,
    VehicleStatsDecorationsIntakeManifoldTemperatureMilliCFromJSONTyped,
    VehicleStatsDecorationsIntakeManifoldTemperatureMilliCToJSON,
    VehicleStatsDecorationsObdEngineSeconds,
    VehicleStatsDecorationsObdEngineSecondsFromJSON,
    VehicleStatsDecorationsObdEngineSecondsFromJSONTyped,
    VehicleStatsDecorationsObdEngineSecondsToJSON,
    VehicleStatsDecorationsObdOdometerMeters,
    VehicleStatsDecorationsObdOdometerMetersFromJSON,
    VehicleStatsDecorationsObdOdometerMetersFromJSONTyped,
    VehicleStatsDecorationsObdOdometerMetersToJSON,
    VehicleStatsEngineImmobilizer,
    VehicleStatsEngineImmobilizerFromJSON,
    VehicleStatsEngineImmobilizerFromJSONTyped,
    VehicleStatsEngineImmobilizerToJSON,
    VehicleStatsFaultCodesValue,
    VehicleStatsFaultCodesValueFromJSON,
    VehicleStatsFaultCodesValueFromJSONTyped,
    VehicleStatsFaultCodesValueToJSON,
    VehicleStatsTirePressures,
    VehicleStatsTirePressuresFromJSON,
    VehicleStatsTirePressuresFromJSONTyped,
    VehicleStatsTirePressuresToJSON,
} from './';

/**
 * Decorated values for the primary vehicle stat datapoints.
 * @export
 * @interface VehicleStatsDecorations
 */
export interface VehicleStatsDecorations {
    /**
     * 
     * @type {VehicleStatsDecorationsAmbientAirTemperatureMilliC}
     * @memberof VehicleStatsDecorations
     */
    ambientAirTemperatureMilliC?: VehicleStatsDecorationsAmbientAirTemperatureMilliC;
    /**
     * 
     * @type {VehicleStatsAuxInputDecoration}
     * @memberof VehicleStatsDecorations
     */
    auxInput1?: VehicleStatsAuxInputDecoration;
    /**
     * 
     * @type {VehicleStatsAuxInputDecoration}
     * @memberof VehicleStatsDecorations
     */
    auxInput10?: VehicleStatsAuxInputDecoration;
    /**
     * 
     * @type {VehicleStatsAuxInputDecoration}
     * @memberof VehicleStatsDecorations
     */
    auxInput2?: VehicleStatsAuxInputDecoration;
    /**
     * 
     * @type {VehicleStatsAuxInputDecoration}
     * @memberof VehicleStatsDecorations
     */
    auxInput3?: VehicleStatsAuxInputDecoration;
    /**
     * 
     * @type {VehicleStatsAuxInputDecoration}
     * @memberof VehicleStatsDecorations
     */
    auxInput4?: VehicleStatsAuxInputDecoration;
    /**
     * 
     * @type {VehicleStatsAuxInputDecoration}
     * @memberof VehicleStatsDecorations
     */
    auxInput5?: VehicleStatsAuxInputDecoration;
    /**
     * 
     * @type {VehicleStatsAuxInputDecoration}
     * @memberof VehicleStatsDecorations
     */
    auxInput6?: VehicleStatsAuxInputDecoration;
    /**
     * 
     * @type {VehicleStatsAuxInputDecoration}
     * @memberof VehicleStatsDecorations
     */
    auxInput7?: VehicleStatsAuxInputDecoration;
    /**
     * 
     * @type {VehicleStatsAuxInputDecoration}
     * @memberof VehicleStatsDecorations
     */
    auxInput8?: VehicleStatsAuxInputDecoration;
    /**
     * 
     * @type {VehicleStatsAuxInputDecoration}
     * @memberof VehicleStatsDecorations
     */
    auxInput9?: VehicleStatsAuxInputDecoration;
    /**
     * 
     * @type {VehicleStatsDecorationsBarometricPressurePa}
     * @memberof VehicleStatsDecorations
     */
    barometricPressurePa?: VehicleStatsDecorationsBarometricPressurePa;
    /**
     * 
     * @type {VehicleStatsDecorationsBatteryMilliVolts}
     * @memberof VehicleStatsDecorations
     */
    batteryMilliVolts?: VehicleStatsDecorationsBatteryMilliVolts;
    /**
     * 
     * @type {VehicleStatsDecorationsDefLevelMilliPercent}
     * @memberof VehicleStatsDecorations
     */
    defLevelMilliPercent?: VehicleStatsDecorationsDefLevelMilliPercent;
    /**
     * 
     * @type {VehicleStatsDecorationsEcuSpeedMph}
     * @memberof VehicleStatsDecorations
     */
    ecuSpeedMph?: VehicleStatsDecorationsEcuSpeedMph;
    /**
     * 
     * @type {VehicleStatsDecorationsEngineCoolantTemperatureMilliC}
     * @memberof VehicleStatsDecorations
     */
    engineCoolantTemperatureMilliC?: VehicleStatsDecorationsEngineCoolantTemperatureMilliC;
    /**
     * 
     * @type {VehicleStatsEngineImmobilizer}
     * @memberof VehicleStatsDecorations
     */
    engineImmobilizer?: VehicleStatsEngineImmobilizer;
    /**
     * 
     * @type {VehicleStatsDecorationsEngineLoadPercent}
     * @memberof VehicleStatsDecorations
     */
    engineLoadPercent?: VehicleStatsDecorationsEngineLoadPercent;
    /**
     * 
     * @type {VehicleStatsDecorationsEngineOilPressureKPa}
     * @memberof VehicleStatsDecorations
     */
    engineOilPressureKPa?: VehicleStatsDecorationsEngineOilPressureKPa;
    /**
     * 
     * @type {VehicleStatsDecorationsEngineRpm}
     * @memberof VehicleStatsDecorations
     */
    engineRpm?: VehicleStatsDecorationsEngineRpm;
    /**
     * 
     * @type {VehicleStatsDecorationsEngineStates}
     * @memberof VehicleStatsDecorations
     */
    engineStates?: VehicleStatsDecorationsEngineStates;
    /**
     * 
     * @type {VehicleStatsFaultCodesValue}
     * @memberof VehicleStatsDecorations
     */
    faultCodes?: VehicleStatsFaultCodesValue;
    /**
     * 
     * @type {VehicleStatsDecorationsFuelPercents}
     * @memberof VehicleStatsDecorations
     */
    fuelPercents?: VehicleStatsDecorationsFuelPercents;
    /**
     * 
     * @type {VehicleStatsDecorationsGps}
     * @memberof VehicleStatsDecorations
     */
    gps?: VehicleStatsDecorationsGps;
    /**
     * 
     * @type {VehicleStatsDecorationsGpsDistanceMeters}
     * @memberof VehicleStatsDecorations
     */
    gpsDistanceMeters?: VehicleStatsDecorationsGpsDistanceMeters;
    /**
     * 
     * @type {VehicleStatsDecorationsGpsOdometerMeters}
     * @memberof VehicleStatsDecorations
     */
    gpsOdometerMeters?: VehicleStatsDecorationsGpsOdometerMeters;
    /**
     * 
     * @type {VehicleStatsDecorationsIntakeManifoldTemperatureMilliC}
     * @memberof VehicleStatsDecorations
     */
    intakeManifoldTemperatureMilliC?: VehicleStatsDecorationsIntakeManifoldTemperatureMilliC;
    /**
     * 
     * @type {VehicleStatsDecorationsObdEngineSeconds}
     * @memberof VehicleStatsDecorations
     */
    obdEngineSeconds?: VehicleStatsDecorationsObdEngineSeconds;
    /**
     * 
     * @type {VehicleStatsDecorationsObdOdometerMeters}
     * @memberof VehicleStatsDecorations
     */
    obdOdometerMeters?: VehicleStatsDecorationsObdOdometerMeters;
    /**
     * 
     * @type {VehicleStatsTirePressures}
     * @memberof VehicleStatsDecorations
     */
    tirePressure?: VehicleStatsTirePressures;
}

export function VehicleStatsDecorationsFromJSON(json: any): VehicleStatsDecorations {
    return VehicleStatsDecorationsFromJSONTyped(json, false);
}

export function VehicleStatsDecorationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): VehicleStatsDecorations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ambientAirTemperatureMilliC': !exists(json, 'ambientAirTemperatureMilliC') ? undefined : VehicleStatsDecorationsAmbientAirTemperatureMilliCFromJSON(json['ambientAirTemperatureMilliC']),
        'auxInput1': !exists(json, 'auxInput1') ? undefined : VehicleStatsAuxInputDecorationFromJSON(json['auxInput1']),
        'auxInput10': !exists(json, 'auxInput10') ? undefined : VehicleStatsAuxInputDecorationFromJSON(json['auxInput10']),
        'auxInput2': !exists(json, 'auxInput2') ? undefined : VehicleStatsAuxInputDecorationFromJSON(json['auxInput2']),
        'auxInput3': !exists(json, 'auxInput3') ? undefined : VehicleStatsAuxInputDecorationFromJSON(json['auxInput3']),
        'auxInput4': !exists(json, 'auxInput4') ? undefined : VehicleStatsAuxInputDecorationFromJSON(json['auxInput4']),
        'auxInput5': !exists(json, 'auxInput5') ? undefined : VehicleStatsAuxInputDecorationFromJSON(json['auxInput5']),
        'auxInput6': !exists(json, 'auxInput6') ? undefined : VehicleStatsAuxInputDecorationFromJSON(json['auxInput6']),
        'auxInput7': !exists(json, 'auxInput7') ? undefined : VehicleStatsAuxInputDecorationFromJSON(json['auxInput7']),
        'auxInput8': !exists(json, 'auxInput8') ? undefined : VehicleStatsAuxInputDecorationFromJSON(json['auxInput8']),
        'auxInput9': !exists(json, 'auxInput9') ? undefined : VehicleStatsAuxInputDecorationFromJSON(json['auxInput9']),
        'barometricPressurePa': !exists(json, 'barometricPressurePa') ? undefined : VehicleStatsDecorationsBarometricPressurePaFromJSON(json['barometricPressurePa']),
        'batteryMilliVolts': !exists(json, 'batteryMilliVolts') ? undefined : VehicleStatsDecorationsBatteryMilliVoltsFromJSON(json['batteryMilliVolts']),
        'defLevelMilliPercent': !exists(json, 'defLevelMilliPercent') ? undefined : VehicleStatsDecorationsDefLevelMilliPercentFromJSON(json['defLevelMilliPercent']),
        'ecuSpeedMph': !exists(json, 'ecuSpeedMph') ? undefined : VehicleStatsDecorationsEcuSpeedMphFromJSON(json['ecuSpeedMph']),
        'engineCoolantTemperatureMilliC': !exists(json, 'engineCoolantTemperatureMilliC') ? undefined : VehicleStatsDecorationsEngineCoolantTemperatureMilliCFromJSON(json['engineCoolantTemperatureMilliC']),
        'engineImmobilizer': !exists(json, 'engineImmobilizer') ? undefined : VehicleStatsEngineImmobilizerFromJSON(json['engineImmobilizer']),
        'engineLoadPercent': !exists(json, 'engineLoadPercent') ? undefined : VehicleStatsDecorationsEngineLoadPercentFromJSON(json['engineLoadPercent']),
        'engineOilPressureKPa': !exists(json, 'engineOilPressureKPa') ? undefined : VehicleStatsDecorationsEngineOilPressureKPaFromJSON(json['engineOilPressureKPa']),
        'engineRpm': !exists(json, 'engineRpm') ? undefined : VehicleStatsDecorationsEngineRpmFromJSON(json['engineRpm']),
        'engineStates': !exists(json, 'engineStates') ? undefined : VehicleStatsDecorationsEngineStatesFromJSON(json['engineStates']),
        'faultCodes': !exists(json, 'faultCodes') ? undefined : VehicleStatsFaultCodesValueFromJSON(json['faultCodes']),
        'fuelPercents': !exists(json, 'fuelPercents') ? undefined : VehicleStatsDecorationsFuelPercentsFromJSON(json['fuelPercents']),
        'gps': !exists(json, 'gps') ? undefined : VehicleStatsDecorationsGpsFromJSON(json['gps']),
        'gpsDistanceMeters': !exists(json, 'gpsDistanceMeters') ? undefined : VehicleStatsDecorationsGpsDistanceMetersFromJSON(json['gpsDistanceMeters']),
        'gpsOdometerMeters': !exists(json, 'gpsOdometerMeters') ? undefined : VehicleStatsDecorationsGpsOdometerMetersFromJSON(json['gpsOdometerMeters']),
        'intakeManifoldTemperatureMilliC': !exists(json, 'intakeManifoldTemperatureMilliC') ? undefined : VehicleStatsDecorationsIntakeManifoldTemperatureMilliCFromJSON(json['intakeManifoldTemperatureMilliC']),
        'obdEngineSeconds': !exists(json, 'obdEngineSeconds') ? undefined : VehicleStatsDecorationsObdEngineSecondsFromJSON(json['obdEngineSeconds']),
        'obdOdometerMeters': !exists(json, 'obdOdometerMeters') ? undefined : VehicleStatsDecorationsObdOdometerMetersFromJSON(json['obdOdometerMeters']),
        'tirePressure': !exists(json, 'tirePressure') ? undefined : VehicleStatsTirePressuresFromJSON(json['tirePressure']),
    };
}

export function VehicleStatsDecorationsToJSON(value?: VehicleStatsDecorations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ambientAirTemperatureMilliC': VehicleStatsDecorationsAmbientAirTemperatureMilliCToJSON(value.ambientAirTemperatureMilliC),
        'auxInput1': VehicleStatsAuxInputDecorationToJSON(value.auxInput1),
        'auxInput10': VehicleStatsAuxInputDecorationToJSON(value.auxInput10),
        'auxInput2': VehicleStatsAuxInputDecorationToJSON(value.auxInput2),
        'auxInput3': VehicleStatsAuxInputDecorationToJSON(value.auxInput3),
        'auxInput4': VehicleStatsAuxInputDecorationToJSON(value.auxInput4),
        'auxInput5': VehicleStatsAuxInputDecorationToJSON(value.auxInput5),
        'auxInput6': VehicleStatsAuxInputDecorationToJSON(value.auxInput6),
        'auxInput7': VehicleStatsAuxInputDecorationToJSON(value.auxInput7),
        'auxInput8': VehicleStatsAuxInputDecorationToJSON(value.auxInput8),
        'auxInput9': VehicleStatsAuxInputDecorationToJSON(value.auxInput9),
        'barometricPressurePa': VehicleStatsDecorationsBarometricPressurePaToJSON(value.barometricPressurePa),
        'batteryMilliVolts': VehicleStatsDecorationsBatteryMilliVoltsToJSON(value.batteryMilliVolts),
        'defLevelMilliPercent': VehicleStatsDecorationsDefLevelMilliPercentToJSON(value.defLevelMilliPercent),
        'ecuSpeedMph': VehicleStatsDecorationsEcuSpeedMphToJSON(value.ecuSpeedMph),
        'engineCoolantTemperatureMilliC': VehicleStatsDecorationsEngineCoolantTemperatureMilliCToJSON(value.engineCoolantTemperatureMilliC),
        'engineImmobilizer': VehicleStatsEngineImmobilizerToJSON(value.engineImmobilizer),
        'engineLoadPercent': VehicleStatsDecorationsEngineLoadPercentToJSON(value.engineLoadPercent),
        'engineOilPressureKPa': VehicleStatsDecorationsEngineOilPressureKPaToJSON(value.engineOilPressureKPa),
        'engineRpm': VehicleStatsDecorationsEngineRpmToJSON(value.engineRpm),
        'engineStates': VehicleStatsDecorationsEngineStatesToJSON(value.engineStates),
        'faultCodes': VehicleStatsFaultCodesValueToJSON(value.faultCodes),
        'fuelPercents': VehicleStatsDecorationsFuelPercentsToJSON(value.fuelPercents),
        'gps': VehicleStatsDecorationsGpsToJSON(value.gps),
        'gpsDistanceMeters': VehicleStatsDecorationsGpsDistanceMetersToJSON(value.gpsDistanceMeters),
        'gpsOdometerMeters': VehicleStatsDecorationsGpsOdometerMetersToJSON(value.gpsOdometerMeters),
        'intakeManifoldTemperatureMilliC': VehicleStatsDecorationsIntakeManifoldTemperatureMilliCToJSON(value.intakeManifoldTemperatureMilliC),
        'obdEngineSeconds': VehicleStatsDecorationsObdEngineSecondsToJSON(value.obdEngineSeconds),
        'obdOdometerMeters': VehicleStatsDecorationsObdOdometerMetersToJSON(value.obdOdometerMeters),
        'tirePressure': VehicleStatsTirePressuresToJSON(value.tirePressure),
    };
}


