/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as operations from "../models/operations";
import { createPageIterator, PageIterator, Paginator } from "../types";
import { Authentication } from "./authentication";
import { Credentials } from "./credentials";
import { NovuMessages } from "./novumessages";
import { NovuNotifications } from "./novunotifications";
import { Preferences } from "./preferences";
import { Properties } from "./properties";
import jp from "jsonpath";
import * as z from "zod";

export class Subscribers extends ClientSDK {
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

    private _credentials?: Credentials;
    get credentials(): Credentials {
        return (this._credentials ??= new Credentials(this.options$));
    }

    private _authentication?: Authentication;
    get authentication(): Authentication {
        return (this._authentication ??= new Authentication(this.options$));
    }

    private _messages?: NovuMessages;
    get messages(): NovuMessages {
        return (this._messages ??= new NovuMessages(this.options$));
    }

    private _notifications?: NovuNotifications;
    get notifications(): NovuNotifications {
        return (this._notifications ??= new NovuNotifications(this.options$));
    }

    private _properties?: Properties;
    get properties(): Properties {
        return (this._properties ??= new Properties(this.options$));
    }

    private _preferences?: Preferences;
    get preferences(): Preferences {
        return (this._preferences ??= new Preferences(this.options$));
    }

    /**
     * Mark a subscriber messages as seen, read, unseen or unread
     */
    async subscribersControllerMarkMessagesAs(
        subscriberId: string,
        messageMarkAsRequestDto: components.MessageMarkAsRequestDto,
        options?: RequestOptions
    ): Promise<Array<components.MessageEntity>> {
        const input$: operations.SubscribersControllerMarkMessagesAsRequest = {
            subscriberId: subscriberId,
            messageMarkAsRequestDto: messageMarkAsRequestDto,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.SubscribersControllerMarkMessagesAsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.MessageMarkAsRequestDto, { explode: true });

        const pathParams$ = {
            subscriberId: encodeSimple$("subscriberId", payload$.subscriberId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/subscribers/{subscriberId}/messages/mark-as")(
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
            operationID: "SubscribersController_markMessagesAs",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<Array<components.MessageEntity>>()
            .json(201, z.array(components.MessageEntity$.inboundSchema))
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Create subscriber
     *
     * @remarks
     * Creates a subscriber entity, in the Novu platform. The subscriber will be later used to receive notifications, and access notification feeds. Communication credentials such as email, phone number, and 3 rd party credentials i.e slack tokens could be later associated to this entity.
     */
    async create(
        request: components.CreateSubscriberRequestDto,
        options?: RequestOptions
    ): Promise<components.SubscriberResponseDto> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.CreateSubscriberRequestDto$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/subscribers")();

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
            operationID: "SubscribersController_createSubscriber",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.SubscriberResponseDto>()
            .json(201, components.SubscriberResponseDto$)
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Bulk create subscribers
     *
     * @remarks
     *
     *       Using this endpoint you can create multiple subscribers at once, to avoid multiple calls to the API.
     *       The bulk API is limited to 500 subscribers per request.
     *
     */
    async createBulk(
        request: components.BulkSubscriberCreateDto,
        options?: RequestOptions
    ): Promise<void> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.BulkSubscriberCreateDto$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/subscribers/bulk")();

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
            operationID: "SubscribersController_bulkCreateSubscribers",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<void>()
            .void(201, z.void())
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Delete subscriber
     *
     * @remarks
     * Deletes a subscriber entity from the Novu platform
     */
    async delete(
        subscriberId: string,
        options?: RequestOptions
    ): Promise<components.DeleteSubscriberResponseDto> {
        const input$: operations.SubscribersControllerRemoveSubscriberRequest = {
            subscriberId: subscriberId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.SubscribersControllerRemoveSubscriberRequest$.outboundSchema.parse(
                    value$
                ),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            subscriberId: encodeSimple$("subscriberId", payload$.subscriberId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/subscribers/{subscriberId}")(pathParams$);

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
            operationID: "SubscribersController_removeSubscriber",
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

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.DeleteSubscriberResponseDto>()
            .json(200, components.DeleteSubscriberResponseDto$)
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Get subscribers
     *
     * @remarks
     * Returns a list of subscribers, could paginated using the `page` and `limit` query parameter
     */
    async list(
        page?: number | undefined,
        limit?: number | undefined,
        options?: RequestOptions
    ): Promise<PageIterator<operations.SubscribersControllerListSubscribersResponse>> {
        const input$: operations.SubscribersControllerListSubscribersRequest = {
            page: page,
            limit: limit,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.SubscribersControllerListSubscribersRequest$.outboundSchema.parse(
                    value$
                ),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/subscribers")();

        const query$ = encodeFormQuery$({
            page: payload$.page,
            limit: payload$.limit,
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
            operationID: "SubscribersController_listSubscribers",
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$, raw$] =
            await this.matcher<operations.SubscribersControllerListSubscribersResponse>()
                .json(200, operations.SubscribersControllerListSubscribersResponse$, {
                    key: "Result",
                })
                .fail([409, 429, "4XX", 503, "5XX"])
                .match(response, { extraFields: responseFields$ });

        const nextFunc = (
            responseData: unknown
        ): Paginator<operations.SubscribersControllerListSubscribersResponse> => {
            const page = input$.page || 0;
            const nextPage = page + 1;

            if (!responseData) {
                return () => null;
            }
            const results = jp.value(responseData, "$.data.resultArray");
            if (!results.length) {
                return () => null;
            }
            const limit = input$.limit || 0;
            if (results.length < limit) {
                return () => null;
            }

            return () => this.list(nextPage, limit, options);
        };

        const page$ = { ...result$, next: nextFunc(raw$) };
        return { ...page$, ...createPageIterator(page$) };
    }

    /**
     * Get subscriber
     *
     * @remarks
     * Get subscriber by your internal id used to identify the subscriber
     */
    async retrieve(
        subscriberId: string,
        options?: RequestOptions
    ): Promise<components.SubscriberResponseDto> {
        const input$: operations.SubscribersControllerGetSubscriberRequest = {
            subscriberId: subscriberId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.SubscribersControllerGetSubscriberRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            subscriberId: encodeSimple$("subscriberId", payload$.subscriberId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/subscribers/{subscriberId}")(pathParams$);

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
            operationID: "SubscribersController_getSubscriber",
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

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.SubscriberResponseDto>()
            .json(200, components.SubscriberResponseDto$)
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Update subscriber
     *
     * @remarks
     * Used to update the subscriber entity with new information
     */
    async update(
        subscriberId: string,
        updateSubscriberRequestDto: components.UpdateSubscriberRequestDto,
        options?: RequestOptions
    ): Promise<components.SubscriberResponseDto> {
        const input$: operations.SubscribersControllerUpdateSubscriberRequest = {
            subscriberId: subscriberId,
            updateSubscriberRequestDto: updateSubscriberRequestDto,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.SubscribersControllerUpdateSubscriberRequest$.outboundSchema.parse(
                    value$
                ),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.UpdateSubscriberRequestDto, { explode: true });

        const pathParams$ = {
            subscriberId: encodeSimple$("subscriberId", payload$.subscriberId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/subscribers/{subscriberId}")(pathParams$);

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
            operationID: "SubscribersController_updateSubscriber",
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

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.SubscriberResponseDto>()
            .json(200, components.SubscriberResponseDto$)
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }
}
