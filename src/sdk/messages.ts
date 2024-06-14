/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as retries$ from "../lib/retries";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as operations from "../models/operations";
import * as z from "zod";

export class Messages extends ClientSDK {
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
     * Get messages
     *
     * @remarks
     * Returns a list of messages, could paginate using the `page` query parameter
     */
    async retrieve(
        request: operations.MessagesControllerGetMessagesRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<components.ActivitiesResponseDto> {
        const input$ = typeof request === "undefined" ? {} : request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.MessagesControllerGetMessagesRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/v1/messages")();

        const query$ = encodeFormQuery$({
            channel: payload$.channel,
            limit: payload$.limit,
            page: payload$.page,
            subscriberId: payload$.subscriberId,
            transactionId: payload$.transactionId,
        });

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "MessagesController_getMessages",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
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

        const [result$] = await this.matcher<components.ActivitiesResponseDto>()
            .json(200, components.ActivitiesResponseDto$)
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Delete message
     *
     * @remarks
     * Deletes a message entity from the Novu platform
     */
    async delete(
        messageId: string,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<components.DeleteMessageResponseDto> {
        const input$: operations.MessagesControllerDeleteMessageRequest = {
            messageId: messageId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.MessagesControllerDeleteMessageRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            messageId: encodeSimple$("messageId", payload$.messageId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/messages/{messageId}")(pathParams$);

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
            operationID: "MessagesController_deleteMessage",
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

        const [result$] = await this.matcher<components.DeleteMessageResponseDto>()
            .json(200, components.DeleteMessageResponseDto$)
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Delete messages by transactionId
     *
     * @remarks
     * Deletes messages entity from the Novu platform using TransactionId of message
     */
    async deleteByTransactionId(
        transactionId: string,
        channel?: operations.QueryParamChannel | undefined,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<void> {
        const input$: operations.MessagesControllerDeleteMessagesByTransactionIdRequest = {
            channel: channel,
            transactionId: transactionId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.MessagesControllerDeleteMessagesByTransactionIdRequest$.outboundSchema.parse(
                    value$
                ),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            transactionId: encodeSimple$("transactionId", payload$.transactionId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/messages/transaction/{transactionId}")(
            pathParams$
        );

        const query$ = encodeFormQuery$({
            channel: payload$.channel,
        });

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "MessagesController_deleteMessagesByTransactionId",
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
}
