/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import { FieldFilterPart, FieldFilterPart$ } from "./fieldfilterpart";
import * as z from "zod";

export const StepFilterType = {
    Boolean: "BOOLEAN",
    Text: "TEXT",
    Date: "DATE",
    Number: "NUMBER",
    Statement: "STATEMENT",
    List: "LIST",
    MultiList: "MULTI_LIST",
    Group: "GROUP",
} as const;
export type StepFilterType = ClosedEnum<typeof StepFilterType>;

export const Value = {
    And: "AND",
    Or: "OR",
} as const;
export type Value = ClosedEnum<typeof Value>;

export type StepFilter = {
    children: Array<FieldFilterPart>;
    isNegated: boolean;
    type: StepFilterType;
    value: Value;
};

/** @internal */
export namespace StepFilterType$ {
    export const inboundSchema = z.nativeEnum(StepFilterType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Value$ {
    export const inboundSchema = z.nativeEnum(Value);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace StepFilter$ {
    export const inboundSchema: z.ZodType<StepFilter, z.ZodTypeDef, unknown> = z.object({
        children: z.array(FieldFilterPart$.inboundSchema),
        isNegated: z.boolean(),
        type: StepFilterType$.inboundSchema,
        value: Value$.inboundSchema,
    });

    export type Outbound = {
        children: Array<FieldFilterPart$.Outbound>;
        isNegated: boolean;
        type: string;
        value: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StepFilter> = z.object({
        children: z.array(FieldFilterPart$.outboundSchema),
        isNegated: z.boolean(),
        type: StepFilterType$.outboundSchema,
        value: Value$.outboundSchema,
    });
}
