/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { ClosedEnum } from "../../types";
import { MemberInviteDTO, MemberInviteDTO$ } from "./memberinvitedto";
import { MemberUserDto, MemberUserDto$ } from "./memberuserdto";
import * as z from "zod";

export const MemberStatus = {
    New: "new",
    Active: "active",
    Invited: "invited",
} as const;
export type MemberStatus = ClosedEnum<typeof MemberStatus>;

export const Roles = {
    Admin: "admin",
    Member: "member",
} as const;
export type Roles = ClosedEnum<typeof Roles>;

export type MemberResponseDto = {
    id: string;
    organizationId: string;
    userId: string;
    invite?: MemberInviteDTO | undefined;
    memberStatus?: MemberStatus | undefined;
    roles?: Roles | undefined;
    user?: MemberUserDto | undefined;
};

/** @internal */
export namespace MemberStatus$ {
    export const inboundSchema = z.nativeEnum(MemberStatus);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Roles$ {
    export const inboundSchema = z.nativeEnum(Roles);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace MemberResponseDto$ {
    export const inboundSchema: z.ZodType<MemberResponseDto, z.ZodTypeDef, unknown> = z
        .object({
            _id: z.string(),
            _organizationId: z.string(),
            _userId: z.string(),
            invite: MemberInviteDTO$.inboundSchema.optional(),
            memberStatus: MemberStatus$.inboundSchema.optional(),
            roles: Roles$.inboundSchema.optional(),
            user: MemberUserDto$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                _id: "id",
                _organizationId: "organizationId",
                _userId: "userId",
            });
        });

    export type Outbound = {
        _id: string;
        _organizationId: string;
        _userId: string;
        invite?: MemberInviteDTO$.Outbound | undefined;
        memberStatus?: string | undefined;
        roles?: string | undefined;
        user?: MemberUserDto$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MemberResponseDto> = z
        .object({
            id: z.string(),
            organizationId: z.string(),
            userId: z.string(),
            invite: MemberInviteDTO$.outboundSchema.optional(),
            memberStatus: MemberStatus$.outboundSchema.optional(),
            roles: Roles$.outboundSchema.optional(),
            user: MemberUserDto$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                id: "_id",
                organizationId: "_organizationId",
                userId: "_userId",
            });
        });
}
