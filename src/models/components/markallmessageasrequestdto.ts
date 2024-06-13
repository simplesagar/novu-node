/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

/**
 * Optional feed identifier or array of feed identifiers
 */
export type FeedIdentifier = string | Array<string>;

/**
 * Mark all subscriber messages as read, unread, seen or unseen
 */
export const MarkAs = {
    Read: "read",
    Seen: "seen",
    Unread: "unread",
    Unseen: "unseen",
} as const;
/**
 * Mark all subscriber messages as read, unread, seen or unseen
 */
export type MarkAs = ClosedEnum<typeof MarkAs>;

export type MarkAllMessageAsRequestDto = {
    /**
     * Optional feed identifier or array of feed identifiers
     */
    feedIdentifier?: string | Array<string> | undefined;
    /**
     * Mark all subscriber messages as read, unread, seen or unseen
     */
    markAs: MarkAs;
};

/** @internal */
export namespace FeedIdentifier$ {
    export const inboundSchema: z.ZodType<FeedIdentifier, z.ZodTypeDef, unknown> = z.union([
        z.string(),
        z.array(z.string()),
    ]);

    export type Outbound = string | Array<string>;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FeedIdentifier> = z.union([
        z.string(),
        z.array(z.string()),
    ]);
}

/** @internal */
export namespace MarkAs$ {
    export const inboundSchema = z.nativeEnum(MarkAs);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace MarkAllMessageAsRequestDto$ {
    export const inboundSchema: z.ZodType<MarkAllMessageAsRequestDto, z.ZodTypeDef, unknown> =
        z.object({
            feedIdentifier: z.union([z.string(), z.array(z.string())]).optional(),
            markAs: MarkAs$.inboundSchema,
        });

    export type Outbound = {
        feedIdentifier?: string | Array<string> | undefined;
        markAs: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MarkAllMessageAsRequestDto> =
        z.object({
            feedIdentifier: z.union([z.string(), z.array(z.string())]).optional(),
            markAs: MarkAs$.outboundSchema,
        });
}
