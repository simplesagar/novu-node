/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { ChannelSettings, ChannelSettings$ } from "./channelsettings";
import * as z from "zod";

export type SubscriberResponseDto = {
    v?: number | undefined;
    environmentId: string;
    /**
     * The internal id novu generated for your subscriber, this is not the subscriberId matching your query. See `subscriberId` for that
     */
    id?: string | undefined;
    organizationId: string;
    avatar?: string | undefined;
    /**
     * Channels settings for subscriber
     */
    channels?: Array<ChannelSettings> | undefined;
    createdAt: string;
    deleted: boolean;
    email?: string | undefined;
    firstName?: string | undefined;
    isOnline?: boolean | undefined;
    lastName?: string | undefined;
    lastOnlineAt?: string | undefined;
    locale?: string | undefined;
    phone?: string | undefined;
    /**
     * The internal identifier you used to create this subscriber, usually correlates to the id the user in your systems
     */
    subscriberId: string;
    updatedAt: string;
};

/** @internal */
export namespace SubscriberResponseDto$ {
    export const inboundSchema: z.ZodType<SubscriberResponseDto, z.ZodTypeDef, unknown> = z
        .object({
            __v: z.number().optional(),
            _environmentId: z.string(),
            _id: z.string().optional(),
            _organizationId: z.string(),
            avatar: z.string().optional(),
            channels: z.array(ChannelSettings$.inboundSchema).optional(),
            createdAt: z.string(),
            deleted: z.boolean(),
            email: z.string().optional(),
            firstName: z.string().optional(),
            isOnline: z.boolean().optional(),
            lastName: z.string().optional(),
            lastOnlineAt: z.string().optional(),
            locale: z.string().optional(),
            phone: z.string().optional(),
            subscriberId: z.string(),
            updatedAt: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                __v: "v",
                _environmentId: "environmentId",
                _id: "id",
                _organizationId: "organizationId",
            });
        });

    export type Outbound = {
        __v?: number | undefined;
        _environmentId: string;
        _id?: string | undefined;
        _organizationId: string;
        avatar?: string | undefined;
        channels?: Array<ChannelSettings$.Outbound> | undefined;
        createdAt: string;
        deleted: boolean;
        email?: string | undefined;
        firstName?: string | undefined;
        isOnline?: boolean | undefined;
        lastName?: string | undefined;
        lastOnlineAt?: string | undefined;
        locale?: string | undefined;
        phone?: string | undefined;
        subscriberId: string;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubscriberResponseDto> = z
        .object({
            v: z.number().optional(),
            environmentId: z.string(),
            id: z.string().optional(),
            organizationId: z.string(),
            avatar: z.string().optional(),
            channels: z.array(ChannelSettings$.outboundSchema).optional(),
            createdAt: z.string(),
            deleted: z.boolean(),
            email: z.string().optional(),
            firstName: z.string().optional(),
            isOnline: z.boolean().optional(),
            lastName: z.string().optional(),
            lastOnlineAt: z.string().optional(),
            locale: z.string().optional(),
            phone: z.string().optional(),
            subscriberId: z.string(),
            updatedAt: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                v: "__v",
                environmentId: "_environmentId",
                id: "_id",
                organizationId: "_organizationId",
            });
        });
}
