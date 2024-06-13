/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SubscriberChannelDto, SubscriberChannelDto$ } from "./subscriberchanneldto";
import * as z from "zod";

export type SubscriberPayloadDtoData = {};

export type SubscriberPayloadDto = {
    /**
     * An http url to the profile image of your subscriber
     */
    avatar?: string | undefined;
    channels?: Array<SubscriberChannelDto> | undefined;
    data?: SubscriberPayloadDtoData | undefined;
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    locale?: string | undefined;
    phone?: string | undefined;
    /**
     * The internal identifier you used to create this subscriber, usually correlates to the id the user in your systems
     */
    subscriberId: string;
};

/** @internal */
export namespace SubscriberPayloadDtoData$ {
    export const inboundSchema: z.ZodType<SubscriberPayloadDtoData, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubscriberPayloadDtoData> =
        z.object({});
}

/** @internal */
export namespace SubscriberPayloadDto$ {
    export const inboundSchema: z.ZodType<SubscriberPayloadDto, z.ZodTypeDef, unknown> = z.object({
        avatar: z.string().optional(),
        channels: z.array(SubscriberChannelDto$.inboundSchema).optional(),
        data: z.lazy(() => SubscriberPayloadDtoData$.inboundSchema).optional(),
        email: z.string().optional(),
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        locale: z.string().optional(),
        phone: z.string().optional(),
        subscriberId: z.string(),
    });

    export type Outbound = {
        avatar?: string | undefined;
        channels?: Array<SubscriberChannelDto$.Outbound> | undefined;
        data?: SubscriberPayloadDtoData$.Outbound | undefined;
        email?: string | undefined;
        firstName?: string | undefined;
        lastName?: string | undefined;
        locale?: string | undefined;
        phone?: string | undefined;
        subscriberId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubscriberPayloadDto> = z.object(
        {
            avatar: z.string().optional(),
            channels: z.array(SubscriberChannelDto$.outboundSchema).optional(),
            data: z.lazy(() => SubscriberPayloadDtoData$.outboundSchema).optional(),
            email: z.string().optional(),
            firstName: z.string().optional(),
            lastName: z.string().optional(),
            locale: z.string().optional(),
            phone: z.string().optional(),
            subscriberId: z.string(),
        }
    );
}
