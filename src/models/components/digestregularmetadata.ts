/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

export const BackoffUnit = {
    Seconds: "seconds",
    Minutes: "minutes",
    Hours: "hours",
    Days: "days",
    Weeks: "weeks",
    Months: "months",
} as const;
export type BackoffUnit = ClosedEnum<typeof BackoffUnit>;

export const DigestRegularMetadataType = {
    Regular: "regular",
    Backoff: "backoff",
} as const;
export type DigestRegularMetadataType = ClosedEnum<typeof DigestRegularMetadataType>;

export const DigestRegularMetadataUnit = {
    Seconds: "seconds",
    Minutes: "minutes",
    Hours: "hours",
    Days: "days",
    Weeks: "weeks",
    Months: "months",
} as const;
export type DigestRegularMetadataUnit = ClosedEnum<typeof DigestRegularMetadataUnit>;

export type DigestRegularMetadata = {
    amount?: number | undefined;
    backoff?: boolean | undefined;
    backoffAmount?: number | undefined;
    backoffUnit?: BackoffUnit | undefined;
    digestKey?: string | undefined;
    type: DigestRegularMetadataType;
    unit?: DigestRegularMetadataUnit | undefined;
    updateMode?: boolean | undefined;
};

/** @internal */
export namespace BackoffUnit$ {
    export const inboundSchema = z.nativeEnum(BackoffUnit);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace DigestRegularMetadataType$ {
    export const inboundSchema = z.nativeEnum(DigestRegularMetadataType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace DigestRegularMetadataUnit$ {
    export const inboundSchema = z.nativeEnum(DigestRegularMetadataUnit);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace DigestRegularMetadata$ {
    export const inboundSchema: z.ZodType<DigestRegularMetadata, z.ZodTypeDef, unknown> = z.object({
        amount: z.number().optional(),
        backoff: z.boolean().optional(),
        backoffAmount: z.number().optional(),
        backoffUnit: BackoffUnit$.inboundSchema.optional(),
        digestKey: z.string().optional(),
        type: DigestRegularMetadataType$.inboundSchema,
        unit: DigestRegularMetadataUnit$.inboundSchema.optional(),
        updateMode: z.boolean().optional(),
    });

    export type Outbound = {
        amount?: number | undefined;
        backoff?: boolean | undefined;
        backoffAmount?: number | undefined;
        backoffUnit?: string | undefined;
        digestKey?: string | undefined;
        type: string;
        unit?: string | undefined;
        updateMode?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DigestRegularMetadata> =
        z.object({
            amount: z.number().optional(),
            backoff: z.boolean().optional(),
            backoffAmount: z.number().optional(),
            backoffUnit: BackoffUnit$.outboundSchema.optional(),
            digestKey: z.string().optional(),
            type: DigestRegularMetadataType$.outboundSchema,
            unit: DigestRegularMetadataUnit$.outboundSchema.optional(),
            updateMode: z.boolean().optional(),
        });
}
