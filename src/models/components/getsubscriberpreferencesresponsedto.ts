/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Preference, Preference$ } from "./preference";
import { TemplateResponse, TemplateResponse$ } from "./templateresponse";
import * as z from "zod";

export type GetSubscriberPreferencesResponseDto = {
    /**
     * The preferences of the subscriber regarding the related workflow
     */
    preference: Preference;
    /**
     * The workflow information and if it is critical or not
     */
    template?: TemplateResponse | undefined;
};

/** @internal */
export namespace GetSubscriberPreferencesResponseDto$ {
    export const inboundSchema: z.ZodType<
        GetSubscriberPreferencesResponseDto,
        z.ZodTypeDef,
        unknown
    > = z.object({
        preference: Preference$.inboundSchema,
        template: TemplateResponse$.inboundSchema.optional(),
    });

    export type Outbound = {
        preference: Preference$.Outbound;
        template?: TemplateResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetSubscriberPreferencesResponseDto
    > = z.object({
        preference: Preference$.outboundSchema,
        template: TemplateResponse$.outboundSchema.optional(),
    });
}
