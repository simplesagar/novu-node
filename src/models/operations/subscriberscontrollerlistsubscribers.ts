/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type SubscribersControllerListSubscribersRequest = {
    page?: number | undefined;
    limit?: number | undefined;
};

export type SubscribersControllerListSubscribersResponseBody = {
    data: Array<components.SubscriberResponseDto>;
    /**
     * Does the list have more items to fetch
     */
    hasMore: boolean;
    /**
     * The current page of the paginated response
     */
    page: number;
    /**
     * Number of items on each page
     */
    pageSize: number;
};

export type SubscribersControllerListSubscribersResponse = {
    result: SubscribersControllerListSubscribersResponseBody;
};

/** @internal */
export namespace SubscribersControllerListSubscribersRequest$ {
    export const inboundSchema: z.ZodType<
        SubscribersControllerListSubscribersRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        page: z.number().optional(),
        limit: z.number().default(10),
    });

    export type Outbound = {
        page?: number | undefined;
        limit: number;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SubscribersControllerListSubscribersRequest
    > = z.object({
        page: z.number().optional(),
        limit: z.number().default(10),
    });
}

/** @internal */
export namespace SubscribersControllerListSubscribersResponseBody$ {
    export const inboundSchema: z.ZodType<
        SubscribersControllerListSubscribersResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.object({
        data: z.array(components.SubscriberResponseDto$.inboundSchema),
        hasMore: z.boolean(),
        page: z.number(),
        pageSize: z.number(),
    });

    export type Outbound = {
        data: Array<components.SubscriberResponseDto$.Outbound>;
        hasMore: boolean;
        page: number;
        pageSize: number;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SubscribersControllerListSubscribersResponseBody
    > = z.object({
        data: z.array(components.SubscriberResponseDto$.outboundSchema),
        hasMore: z.boolean(),
        page: z.number(),
        pageSize: z.number(),
    });
}

/** @internal */
export namespace SubscribersControllerListSubscribersResponse$ {
    export const inboundSchema: z.ZodType<
        SubscribersControllerListSubscribersResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            Result: z.lazy(() => SubscribersControllerListSubscribersResponseBody$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                Result: "result",
            });
        });

    export type Outbound = {
        Result: SubscribersControllerListSubscribersResponseBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SubscribersControllerListSubscribersResponse
    > = z
        .object({
            result: z.lazy(() => SubscribersControllerListSubscribersResponseBody$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                result: "Result",
            });
        });
}
