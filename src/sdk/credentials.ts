/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as retries$ from "../lib/retries.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import * as z from "zod";

export class Credentials extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Modify subscriber credentials
     *
     * @remarks
     * Subscriber credentials associated to the delivery methods such as slack and push tokens.
     *     This endpoint appends provided credentials and deviceTokens to the existing ones.
     */
    async append(
        subscriberId: string,
        updateSubscriberChannelRequestDto: components.UpdateSubscriberChannelRequestDto,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<components.SubscriberResponseDto> {
        const input$: operations.SubscribersControllerModifySubscriberChannelRequest = {
            subscriberId: subscriberId,
            updateSubscriberChannelRequestDto: updateSubscriberChannelRequestDto,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.SubscribersControllerModifySubscriberChannelRequest$.outboundSchema.parse(
                    value$
                ),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.UpdateSubscriberChannelRequestDto, {
            explode: true,
        });

        const pathParams$ = {
            subscriberId: encodeSimple$("subscriberId", payload$.subscriberId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/subscribers/{subscriberId}/credentials")(
            pathParams$
        );

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "SubscribersController_modifySubscriberChannel",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 30000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["408", "409", "429", "5XX"] }
        );

        const [result$] = await this.matcher<components.SubscriberResponseDto>()
            .json(200, components.SubscriberResponseDto$)
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Delete subscriber credentials by providerId
     *
     * @remarks
     * Delete subscriber credentials such as slack and expo tokens.
     */
    async delete(
        subscriberId: string,
        providerId: string,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<void> {
        const input$: operations.SubscribersControllerDeleteSubscriberCredentialsRequest = {
            subscriberId: subscriberId,
            providerId: providerId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.SubscribersControllerDeleteSubscriberCredentialsRequest$.outboundSchema.parse(
                    value$
                ),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            providerId: encodeSimple$("providerId", payload$.providerId, {
                explode: false,
                charEncoding: "percent",
            }),
            subscriberId: encodeSimple$("subscriberId", payload$.subscriberId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/v1/subscribers/{subscriberId}/credentials/{providerId}"
        )(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "SubscribersController_deleteSubscriberCredentials",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 30000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["408", "409", "429", "5XX"] }
        );

        const [result$] = await this.matcher<void>()
            .void(204, z.void())
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Update subscriber credentials
     *
     * @remarks
     * Subscriber credentials associated to the delivery methods such as slack and push tokens.
     */
    async update(
        subscriberId: string,
        updateSubscriberChannelRequestDto: components.UpdateSubscriberChannelRequestDto,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<components.SubscriberResponseDto> {
        const input$: operations.SubscribersControllerUpdateSubscriberChannelRequest = {
            subscriberId: subscriberId,
            updateSubscriberChannelRequestDto: updateSubscriberChannelRequestDto,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.SubscribersControllerUpdateSubscriberChannelRequest$.outboundSchema.parse(
                    value$
                ),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.UpdateSubscriberChannelRequestDto, {
            explode: true,
        });

        const pathParams$ = {
            subscriberId: encodeSimple$("subscriberId", payload$.subscriberId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/subscribers/{subscriberId}/credentials")(
            pathParams$
        );

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "SubscribersController_updateSubscriberChannel",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 30000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["408", "409", "429", "5XX"] }
        );

        const [result$] = await this.matcher<components.SubscriberResponseDto>()
            .json(200, components.SubscriberResponseDto$)
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }
}
