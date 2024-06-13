/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

/**
 * The type of channel that is enabled or not
 */
export const ChannelPreferenceType = {
    InApp: "in_app",
    Email: "email",
    Sms: "sms",
    Chat: "chat",
    Push: "push",
} as const;
/**
 * The type of channel that is enabled or not
 */
export type ChannelPreferenceType = ClosedEnum<typeof ChannelPreferenceType>;

export type ChannelPreference = {
    /**
     * If channel is enabled or not
     */
    enabled: boolean;
    /**
     * The type of channel that is enabled or not
     */
    type: ChannelPreferenceType;
};

/** @internal */
export namespace ChannelPreferenceType$ {
    export const inboundSchema = z.nativeEnum(ChannelPreferenceType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ChannelPreference$ {
    export const inboundSchema: z.ZodType<ChannelPreference, z.ZodTypeDef, unknown> = z.object({
        enabled: z.boolean(),
        type: ChannelPreferenceType$.inboundSchema,
    });

    export type Outbound = {
        enabled: boolean;
        type: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ChannelPreference> = z.object({
        enabled: z.boolean(),
        type: ChannelPreferenceType$.outboundSchema,
    });
}
