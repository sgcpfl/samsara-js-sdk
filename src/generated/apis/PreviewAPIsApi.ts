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


import * as runtime from '../runtime';
import {
    AempEquipmentGetAempEquipmentBadGatewayErrorResponseBody,
    AempEquipmentGetAempEquipmentBadGatewayErrorResponseBodyFromJSON,
    AempEquipmentGetAempEquipmentBadGatewayErrorResponseBodyToJSON,
    AempEquipmentGetAempEquipmentBadRequestErrorResponseBody,
    AempEquipmentGetAempEquipmentBadRequestErrorResponseBodyFromJSON,
    AempEquipmentGetAempEquipmentBadRequestErrorResponseBodyToJSON,
    AempEquipmentGetAempEquipmentGatewayTimeoutErrorResponseBody,
    AempEquipmentGetAempEquipmentGatewayTimeoutErrorResponseBodyFromJSON,
    AempEquipmentGetAempEquipmentGatewayTimeoutErrorResponseBodyToJSON,
    AempEquipmentGetAempEquipmentInternalServerErrorResponseBody,
    AempEquipmentGetAempEquipmentInternalServerErrorResponseBodyFromJSON,
    AempEquipmentGetAempEquipmentInternalServerErrorResponseBodyToJSON,
    AempEquipmentGetAempEquipmentMethodNotAllowedErrorResponseBody,
    AempEquipmentGetAempEquipmentMethodNotAllowedErrorResponseBodyFromJSON,
    AempEquipmentGetAempEquipmentMethodNotAllowedErrorResponseBodyToJSON,
    AempEquipmentGetAempEquipmentNotFoundErrorResponseBody,
    AempEquipmentGetAempEquipmentNotFoundErrorResponseBodyFromJSON,
    AempEquipmentGetAempEquipmentNotFoundErrorResponseBodyToJSON,
    AempEquipmentGetAempEquipmentNotImplementedErrorResponseBody,
    AempEquipmentGetAempEquipmentNotImplementedErrorResponseBodyFromJSON,
    AempEquipmentGetAempEquipmentNotImplementedErrorResponseBodyToJSON,
    AempEquipmentGetAempEquipmentResponseBody,
    AempEquipmentGetAempEquipmentResponseBodyFromJSON,
    AempEquipmentGetAempEquipmentResponseBodyToJSON,
    AempEquipmentGetAempEquipmentServiceUnavailableErrorResponseBody,
    AempEquipmentGetAempEquipmentServiceUnavailableErrorResponseBodyFromJSON,
    AempEquipmentGetAempEquipmentServiceUnavailableErrorResponseBodyToJSON,
    AempEquipmentGetAempEquipmentTooManyRequestsErrorResponseBody,
    AempEquipmentGetAempEquipmentTooManyRequestsErrorResponseBodyFromJSON,
    AempEquipmentGetAempEquipmentTooManyRequestsErrorResponseBodyToJSON,
    AempEquipmentGetAempEquipmentUnauthorizedErrorResponseBody,
    AempEquipmentGetAempEquipmentUnauthorizedErrorResponseBodyFromJSON,
    AempEquipmentGetAempEquipmentUnauthorizedErrorResponseBodyToJSON,
    JobsCreateJobBadGatewayErrorResponseBody,
    JobsCreateJobBadGatewayErrorResponseBodyFromJSON,
    JobsCreateJobBadGatewayErrorResponseBodyToJSON,
    JobsCreateJobBadRequestErrorResponseBody,
    JobsCreateJobBadRequestErrorResponseBodyFromJSON,
    JobsCreateJobBadRequestErrorResponseBodyToJSON,
    JobsCreateJobGatewayTimeoutErrorResponseBody,
    JobsCreateJobGatewayTimeoutErrorResponseBodyFromJSON,
    JobsCreateJobGatewayTimeoutErrorResponseBodyToJSON,
    JobsCreateJobInternalServerErrorResponseBody,
    JobsCreateJobInternalServerErrorResponseBodyFromJSON,
    JobsCreateJobInternalServerErrorResponseBodyToJSON,
    JobsCreateJobMethodNotAllowedErrorResponseBody,
    JobsCreateJobMethodNotAllowedErrorResponseBodyFromJSON,
    JobsCreateJobMethodNotAllowedErrorResponseBodyToJSON,
    JobsCreateJobNotFoundErrorResponseBody,
    JobsCreateJobNotFoundErrorResponseBodyFromJSON,
    JobsCreateJobNotFoundErrorResponseBodyToJSON,
    JobsCreateJobNotImplementedErrorResponseBody,
    JobsCreateJobNotImplementedErrorResponseBodyFromJSON,
    JobsCreateJobNotImplementedErrorResponseBodyToJSON,
    JobsCreateJobRequestBody,
    JobsCreateJobRequestBodyFromJSON,
    JobsCreateJobRequestBodyToJSON,
    JobsCreateJobResponseBody,
    JobsCreateJobResponseBodyFromJSON,
    JobsCreateJobResponseBodyToJSON,
    JobsCreateJobServiceUnavailableErrorResponseBody,
    JobsCreateJobServiceUnavailableErrorResponseBodyFromJSON,
    JobsCreateJobServiceUnavailableErrorResponseBodyToJSON,
    JobsCreateJobTooManyRequestsErrorResponseBody,
    JobsCreateJobTooManyRequestsErrorResponseBodyFromJSON,
    JobsCreateJobTooManyRequestsErrorResponseBodyToJSON,
    JobsCreateJobUnauthorizedErrorResponseBody,
    JobsCreateJobUnauthorizedErrorResponseBodyFromJSON,
    JobsCreateJobUnauthorizedErrorResponseBodyToJSON,
    JobsDeleteJobBadGatewayErrorResponseBody,
    JobsDeleteJobBadGatewayErrorResponseBodyFromJSON,
    JobsDeleteJobBadGatewayErrorResponseBodyToJSON,
    JobsDeleteJobBadRequestErrorResponseBody,
    JobsDeleteJobBadRequestErrorResponseBodyFromJSON,
    JobsDeleteJobBadRequestErrorResponseBodyToJSON,
    JobsDeleteJobGatewayTimeoutErrorResponseBody,
    JobsDeleteJobGatewayTimeoutErrorResponseBodyFromJSON,
    JobsDeleteJobGatewayTimeoutErrorResponseBodyToJSON,
    JobsDeleteJobInternalServerErrorResponseBody,
    JobsDeleteJobInternalServerErrorResponseBodyFromJSON,
    JobsDeleteJobInternalServerErrorResponseBodyToJSON,
    JobsDeleteJobMethodNotAllowedErrorResponseBody,
    JobsDeleteJobMethodNotAllowedErrorResponseBodyFromJSON,
    JobsDeleteJobMethodNotAllowedErrorResponseBodyToJSON,
    JobsDeleteJobNotFoundErrorResponseBody,
    JobsDeleteJobNotFoundErrorResponseBodyFromJSON,
    JobsDeleteJobNotFoundErrorResponseBodyToJSON,
    JobsDeleteJobNotImplementedErrorResponseBody,
    JobsDeleteJobNotImplementedErrorResponseBodyFromJSON,
    JobsDeleteJobNotImplementedErrorResponseBodyToJSON,
    JobsDeleteJobResponseBody,
    JobsDeleteJobResponseBodyFromJSON,
    JobsDeleteJobResponseBodyToJSON,
    JobsDeleteJobServiceUnavailableErrorResponseBody,
    JobsDeleteJobServiceUnavailableErrorResponseBodyFromJSON,
    JobsDeleteJobServiceUnavailableErrorResponseBodyToJSON,
    JobsDeleteJobTooManyRequestsErrorResponseBody,
    JobsDeleteJobTooManyRequestsErrorResponseBodyFromJSON,
    JobsDeleteJobTooManyRequestsErrorResponseBodyToJSON,
    JobsDeleteJobUnauthorizedErrorResponseBody,
    JobsDeleteJobUnauthorizedErrorResponseBodyFromJSON,
    JobsDeleteJobUnauthorizedErrorResponseBodyToJSON,
    JobsGetJobsBadGatewayErrorResponseBody,
    JobsGetJobsBadGatewayErrorResponseBodyFromJSON,
    JobsGetJobsBadGatewayErrorResponseBodyToJSON,
    JobsGetJobsBadRequestErrorResponseBody,
    JobsGetJobsBadRequestErrorResponseBodyFromJSON,
    JobsGetJobsBadRequestErrorResponseBodyToJSON,
    JobsGetJobsGatewayTimeoutErrorResponseBody,
    JobsGetJobsGatewayTimeoutErrorResponseBodyFromJSON,
    JobsGetJobsGatewayTimeoutErrorResponseBodyToJSON,
    JobsGetJobsInternalServerErrorResponseBody,
    JobsGetJobsInternalServerErrorResponseBodyFromJSON,
    JobsGetJobsInternalServerErrorResponseBodyToJSON,
    JobsGetJobsMethodNotAllowedErrorResponseBody,
    JobsGetJobsMethodNotAllowedErrorResponseBodyFromJSON,
    JobsGetJobsMethodNotAllowedErrorResponseBodyToJSON,
    JobsGetJobsNotFoundErrorResponseBody,
    JobsGetJobsNotFoundErrorResponseBodyFromJSON,
    JobsGetJobsNotFoundErrorResponseBodyToJSON,
    JobsGetJobsNotImplementedErrorResponseBody,
    JobsGetJobsNotImplementedErrorResponseBodyFromJSON,
    JobsGetJobsNotImplementedErrorResponseBodyToJSON,
    JobsGetJobsResponseBody,
    JobsGetJobsResponseBodyFromJSON,
    JobsGetJobsResponseBodyToJSON,
    JobsGetJobsServiceUnavailableErrorResponseBody,
    JobsGetJobsServiceUnavailableErrorResponseBodyFromJSON,
    JobsGetJobsServiceUnavailableErrorResponseBodyToJSON,
    JobsGetJobsTooManyRequestsErrorResponseBody,
    JobsGetJobsTooManyRequestsErrorResponseBodyFromJSON,
    JobsGetJobsTooManyRequestsErrorResponseBodyToJSON,
    JobsGetJobsUnauthorizedErrorResponseBody,
    JobsGetJobsUnauthorizedErrorResponseBodyFromJSON,
    JobsGetJobsUnauthorizedErrorResponseBodyToJSON,
    JobsPatchJobBadGatewayErrorResponseBody,
    JobsPatchJobBadGatewayErrorResponseBodyFromJSON,
    JobsPatchJobBadGatewayErrorResponseBodyToJSON,
    JobsPatchJobBadRequestErrorResponseBody,
    JobsPatchJobBadRequestErrorResponseBodyFromJSON,
    JobsPatchJobBadRequestErrorResponseBodyToJSON,
    JobsPatchJobGatewayTimeoutErrorResponseBody,
    JobsPatchJobGatewayTimeoutErrorResponseBodyFromJSON,
    JobsPatchJobGatewayTimeoutErrorResponseBodyToJSON,
    JobsPatchJobInternalServerErrorResponseBody,
    JobsPatchJobInternalServerErrorResponseBodyFromJSON,
    JobsPatchJobInternalServerErrorResponseBodyToJSON,
    JobsPatchJobMethodNotAllowedErrorResponseBody,
    JobsPatchJobMethodNotAllowedErrorResponseBodyFromJSON,
    JobsPatchJobMethodNotAllowedErrorResponseBodyToJSON,
    JobsPatchJobNotFoundErrorResponseBody,
    JobsPatchJobNotFoundErrorResponseBodyFromJSON,
    JobsPatchJobNotFoundErrorResponseBodyToJSON,
    JobsPatchJobNotImplementedErrorResponseBody,
    JobsPatchJobNotImplementedErrorResponseBodyFromJSON,
    JobsPatchJobNotImplementedErrorResponseBodyToJSON,
    JobsPatchJobRequestBody,
    JobsPatchJobRequestBodyFromJSON,
    JobsPatchJobRequestBodyToJSON,
    JobsPatchJobResponseBody,
    JobsPatchJobResponseBodyFromJSON,
    JobsPatchJobResponseBodyToJSON,
    JobsPatchJobServiceUnavailableErrorResponseBody,
    JobsPatchJobServiceUnavailableErrorResponseBodyFromJSON,
    JobsPatchJobServiceUnavailableErrorResponseBodyToJSON,
    JobsPatchJobTooManyRequestsErrorResponseBody,
    JobsPatchJobTooManyRequestsErrorResponseBodyFromJSON,
    JobsPatchJobTooManyRequestsErrorResponseBodyToJSON,
    JobsPatchJobUnauthorizedErrorResponseBody,
    JobsPatchJobUnauthorizedErrorResponseBodyFromJSON,
    JobsPatchJobUnauthorizedErrorResponseBodyToJSON,
    SafetyEventsGetSafetyEventActivityFeedBadGatewayErrorResponseBody,
    SafetyEventsGetSafetyEventActivityFeedBadGatewayErrorResponseBodyFromJSON,
    SafetyEventsGetSafetyEventActivityFeedBadGatewayErrorResponseBodyToJSON,
    SafetyEventsGetSafetyEventActivityFeedBadRequestErrorResponseBody,
    SafetyEventsGetSafetyEventActivityFeedBadRequestErrorResponseBodyFromJSON,
    SafetyEventsGetSafetyEventActivityFeedBadRequestErrorResponseBodyToJSON,
    SafetyEventsGetSafetyEventActivityFeedGatewayTimeoutErrorResponseBody,
    SafetyEventsGetSafetyEventActivityFeedGatewayTimeoutErrorResponseBodyFromJSON,
    SafetyEventsGetSafetyEventActivityFeedGatewayTimeoutErrorResponseBodyToJSON,
    SafetyEventsGetSafetyEventActivityFeedInternalServerErrorResponseBody,
    SafetyEventsGetSafetyEventActivityFeedInternalServerErrorResponseBodyFromJSON,
    SafetyEventsGetSafetyEventActivityFeedInternalServerErrorResponseBodyToJSON,
    SafetyEventsGetSafetyEventActivityFeedMethodNotAllowedErrorResponseBody,
    SafetyEventsGetSafetyEventActivityFeedMethodNotAllowedErrorResponseBodyFromJSON,
    SafetyEventsGetSafetyEventActivityFeedMethodNotAllowedErrorResponseBodyToJSON,
    SafetyEventsGetSafetyEventActivityFeedNotFoundErrorResponseBody,
    SafetyEventsGetSafetyEventActivityFeedNotFoundErrorResponseBodyFromJSON,
    SafetyEventsGetSafetyEventActivityFeedNotFoundErrorResponseBodyToJSON,
    SafetyEventsGetSafetyEventActivityFeedNotImplementedErrorResponseBody,
    SafetyEventsGetSafetyEventActivityFeedNotImplementedErrorResponseBodyFromJSON,
    SafetyEventsGetSafetyEventActivityFeedNotImplementedErrorResponseBodyToJSON,
    SafetyEventsGetSafetyEventActivityFeedResponseBody,
    SafetyEventsGetSafetyEventActivityFeedResponseBodyFromJSON,
    SafetyEventsGetSafetyEventActivityFeedResponseBodyToJSON,
    SafetyEventsGetSafetyEventActivityFeedServiceUnavailableErrorResponseBody,
    SafetyEventsGetSafetyEventActivityFeedServiceUnavailableErrorResponseBodyFromJSON,
    SafetyEventsGetSafetyEventActivityFeedServiceUnavailableErrorResponseBodyToJSON,
    SafetyEventsGetSafetyEventActivityFeedTooManyRequestsErrorResponseBody,
    SafetyEventsGetSafetyEventActivityFeedTooManyRequestsErrorResponseBodyFromJSON,
    SafetyEventsGetSafetyEventActivityFeedTooManyRequestsErrorResponseBodyToJSON,
    SafetyEventsGetSafetyEventActivityFeedUnauthorizedErrorResponseBody,
    SafetyEventsGetSafetyEventActivityFeedUnauthorizedErrorResponseBodyFromJSON,
    SafetyEventsGetSafetyEventActivityFeedUnauthorizedErrorResponseBodyToJSON,
} from '../models';

export interface CreateJobRequest {
    createJobRequestBody: JobsCreateJobRequestBody;
}

export interface DeleteJobRequest {
    id: string;
}

export interface GetAempEquipmentRequest {
    id: string;
}

export interface GetJobsRequest {
    id?: string;
    startDate?: string;
    endDate?: string;
    industrialAssetIds?: Array<string>;
    status?: GetJobsStatusEnum;
    customerName?: string;
    after?: string;
}

export interface GetSafetyEventActivityFeedRequest {
    after?: string;
}

export interface PatchJobRequest {
    id: string;
    patchJobRequestBody: JobsPatchJobRequestBody;
}

/**
 * 
 */
export class PreviewAPIsApi extends runtime.BaseAPI {

    /**
     * Creates a new job and returns it
     * [preview] Create a job
     */
    async createJobRaw(requestParameters: CreateJobRequest): Promise<runtime.ApiResponse<JobsCreateJobResponseBody>> {
        if (requestParameters.createJobRequestBody === null || requestParameters.createJobRequestBody === undefined) {
            throw new runtime.RequiredError('createJobRequestBody','Required parameter requestParameters.createJobRequestBody was null or undefined when calling createJob.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/preview/industrial/jobs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: JobsCreateJobRequestBodyToJSON(requestParameters.createJobRequestBody),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => JobsCreateJobResponseBodyFromJSON(jsonValue));
    }

    /**
     * Creates a new job and returns it
     * [preview] Create a job
     */
    async createJob(requestParameters: CreateJobRequest): Promise<JobsCreateJobResponseBody> {
        const response = await this.createJobRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes an existing job
     * [preview] Deletes an existing job
     */
    async deleteJobRaw(requestParameters: DeleteJobRequest): Promise<runtime.ApiResponse<JobsDeleteJobResponseBody>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteJob.');
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/preview/industrial/jobs`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => JobsDeleteJobResponseBodyFromJSON(jsonValue));
    }

    /**
     * Deletes an existing job
     * [preview] Deletes an existing job
     */
    async deleteJob(requestParameters: DeleteJobRequest): Promise<JobsDeleteJobResponseBody> {
        const response = await this.deleteJobRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get an equipment following the AEMP ISO 15143-3 standard.
     * [preview] Get an AEMP equipment
     */
    async getAempEquipmentRaw(requestParameters: GetAempEquipmentRequest): Promise<runtime.ApiResponse<AempEquipmentGetAempEquipmentResponseBody>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getAempEquipment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/preview/aemp/fleet/equipment/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AempEquipmentGetAempEquipmentResponseBodyFromJSON(jsonValue));
    }

    /**
     * Get an equipment following the AEMP ISO 15143-3 standard.
     * [preview] Get an AEMP equipment
     */
    async getAempEquipment(requestParameters: GetAempEquipmentRequest): Promise<AempEquipmentGetAempEquipmentResponseBody> {
        const response = await this.getAempEquipmentRaw(requestParameters);
        return await response.value();
    }

    /**
     * Fetches jobs based on id/uuid or provided filters
     * [preview] Fetches all jobs
     */
    async getJobsRaw(requestParameters: GetJobsRequest): Promise<runtime.ApiResponse<JobsGetJobsResponseBody>> {
        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.startDate !== undefined) {
            queryParameters['startDate'] = requestParameters.startDate;
        }

        if (requestParameters.endDate !== undefined) {
            queryParameters['endDate'] = requestParameters.endDate;
        }

        if (requestParameters.industrialAssetIds) {
            queryParameters['industrialAssetIds'] = requestParameters.industrialAssetIds;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        if (requestParameters.customerName !== undefined) {
            queryParameters['customerName'] = requestParameters.customerName;
        }

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = requestParameters.after;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/preview/industrial/jobs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => JobsGetJobsResponseBodyFromJSON(jsonValue));
    }

    /**
     * Fetches jobs based on id/uuid or provided filters
     * [preview] Fetches all jobs
     */
    async getJobs(requestParameters: GetJobsRequest): Promise<JobsGetJobsResponseBody> {
        const response = await this.getJobsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get continuous safety event activity feed.
     * [preview] Fetches safety event activity feed
     */
    async getSafetyEventActivityFeedRaw(requestParameters: GetSafetyEventActivityFeedRequest): Promise<runtime.ApiResponse<SafetyEventsGetSafetyEventActivityFeedResponseBody>> {
        const queryParameters: any = {};

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = requestParameters.after;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/preview/fleet/safety-events/audit-logs/feed`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SafetyEventsGetSafetyEventActivityFeedResponseBodyFromJSON(jsonValue));
    }

    /**
     * Get continuous safety event activity feed.
     * [preview] Fetches safety event activity feed
     */
    async getSafetyEventActivityFeed(requestParameters: GetSafetyEventActivityFeedRequest): Promise<SafetyEventsGetSafetyEventActivityFeedResponseBody> {
        const response = await this.getSafetyEventActivityFeedRaw(requestParameters);
        return await response.value();
    }

    /**
     * Patches an existing job and returns it
     * [preview] Patches a job
     */
    async patchJobRaw(requestParameters: PatchJobRequest): Promise<runtime.ApiResponse<JobsPatchJobResponseBody>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchJob.');
        }

        if (requestParameters.patchJobRequestBody === null || requestParameters.patchJobRequestBody === undefined) {
            throw new runtime.RequiredError('patchJobRequestBody','Required parameter requestParameters.patchJobRequestBody was null or undefined when calling patchJob.');
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/preview/industrial/jobs`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: JobsPatchJobRequestBodyToJSON(requestParameters.patchJobRequestBody),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => JobsPatchJobResponseBodyFromJSON(jsonValue));
    }

    /**
     * Patches an existing job and returns it
     * [preview] Patches a job
     */
    async patchJob(requestParameters: PatchJobRequest): Promise<JobsPatchJobResponseBody> {
        const response = await this.patchJobRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetJobsStatusEnum {
    Active = 'active',
    Scheduled = 'scheduled',
    Completed = 'completed'
}