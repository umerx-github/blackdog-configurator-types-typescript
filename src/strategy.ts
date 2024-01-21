import { z } from 'zod';
import {
    StrategyTemplateName,
    StrategyTemplateNameSchema,
} from './strategyTemplate.js';

import {
    ResponseBase,
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase,
    ResponseBodyOneOrManyBase,
} from './response.js';

import { RequestBodyOneOrManyBase } from './request.js';

// Single source of truth:
const StatusConst = ['active', 'inactive'] as const;
// Use in a Zod Schema:
export const StatusSchema = z.enum(StatusConst);
// Type to use in the code:
// = "Salmon" | "Tuna" | "Trout"
export type Status = (typeof StatusConst)[number];

export interface StrategyProps {
    status: Status;
    title: string;
    strategyTemplateName: StrategyTemplateName;
}

const StrategyPropsExpected = z.object({
    status: StatusSchema,
    title: z.string(),
    strategyTemplateName: StrategyTemplateNameSchema,
});

export function StrategyPropsFromRaw(raw: StrategyProps): StrategyProps {
    const parsed = StrategyPropsExpected.parse(raw);
    return parsed;
}
export interface StrategyModelInterface extends StrategyProps {
    id: number;
}

export interface StrategyGetResponseBodyInstance extends StrategyProps {
    id: number;
}
export type StrategyGetRequestBody = never;
export type StrategyGetResponseBody =
    ResponseBodyOneOrManyBase<StrategyGetResponseBodyInstance>;

export type StrategyGetManyResponseBody = StrategyGetResponseBodyInstance[];
export interface StrategyGetManyRequestParams {
    ids?: number[];
    status?: Status;
}
export interface StrategyGetManyRequestParamsRaw {
    ids?: string;
    status?: Status;
}

const StrategyGetManyRequestParamsExpected = z.object({
    ids: z.string().regex(/^\d+(,\d+)*$/),
    status: StatusSchema.optional(),
    // .optional(),
});

export function StrategyGetManyRequestParamsFromRaw(
    raw: StrategyGetManyRequestParamsRaw
): StrategyGetManyRequestParams {
    const parsed = StrategyGetManyRequestParamsExpected.parse(raw);
    const ids = parsed.ids?.split(',').map((id) => parseInt(id));
    return { ids, status: parsed.status };
}

const StrategyGetManyResponseBodyInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

const StrategyGetManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(StrategyGetManyResponseBodyInstanceExpected),
    }),
]);

export function StrategyGetManyResponseBodyFromRaw(
    raw: ResponseBase<StrategyGetManyResponseBody>
): ResponseBase<StrategyGetManyResponseBody> {
    const parsed = StrategyGetManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface StrategyGetRequestParams {
    ids?: number[];
    status?: Status;
}
export interface StrategyGetRequestParamsRaw {
    ids?: string;
    status?: Status;
}

const StrategyGetRequestParamsExpected = z.object({
    ids: z.string().regex(/^\d+(,\d+)*$/),
    status: StatusSchema.optional(),
    // .optional(),
});

export function StrategyGetRequestParamsFromRaw(
    raw: StrategyGetRequestParamsRaw
): StrategyGetRequestParams {
    const parsed = StrategyGetRequestParamsExpected.parse(raw);
    const ids = parsed.ids?.split(',').map((id) => parseInt(id));
    return { ids, status: parsed.status };
}

const StrategyGetResponseBodyInstanceExpected = StrategyPropsExpected.extend({
    id: z.number(),
});

const StrategyGetResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            StrategyGetResponseBodyInstanceExpected,
            z.array(StrategyGetResponseBodyInstanceExpected),
        ]),
    }),
]);

export function StrategyGetResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<StrategyGetResponseBodyInstance>
    >
): ResponseBase<ResponseBodyOneOrManyBase<StrategyGetResponseBodyInstance>> {
    const parsed = StrategyGetResponseBodyExpected.parse(raw);
    return parsed;
}

export interface StrategyPostRequestBodyInstance extends StrategyProps {}
export interface StrategyPostResponseBodyInstance extends StrategyProps {
    id: number;
}
export type StrategyPostRequestBody =
    RequestBodyOneOrManyBase<StrategyPostRequestBodyInstance>;
export type StrategyPostResponseBody =
    ResponseBodyOneOrManyBase<StrategyPostResponseBodyInstance>;

export interface StrategyPutRequestBodyInstance extends StrategyProps {}
export interface StrategyPutResponseBodyInstance extends StrategyProps {
    id: number;
}
export type StrategyPutRequestBody =
    RequestBodyOneOrManyBase<StrategyPutRequestBodyInstance>;
export type StrategyPutResponseBody =
    ResponseBodyOneOrManyBase<StrategyPutResponseBodyInstance>;

export interface StrategyPatchRequestBodyInstance extends StrategyProps {}
export interface StrategyPatchResponseBodyInstance extends StrategyProps {
    id: number;
}
export type StrategyPatchRequestBody =
    RequestBodyOneOrManyBase<StrategyPatchRequestBodyInstance>;
export type StrategyPatchResponseBody =
    ResponseBodyOneOrManyBase<StrategyPatchResponseBodyInstance>;

export interface StrategyDeleteResponseBodyInstance extends StrategyProps {
    id: number;
}
export type StrategyDeleteRequestBody = never;
export type StrategyDeleteResponseBody =
    ResponseBodyOneOrManyBase<StrategyDeleteResponseBodyInstance>;
export interface StrategyDeleteRequestParams {
    ids?: number[];
}
export interface StrategyDeleteRequestParamsRaw {
    ids?: string;
}

const StrategyPostRequestBodyInstanceExpected = StrategyPropsExpected;

const StrategyPostRequestBodyExpected = z.union([
    StrategyPostRequestBodyInstanceExpected,
    z.array(StrategyPostRequestBodyInstanceExpected),
]);

export function StrategyPostRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<StrategyPostRequestBodyInstance>
): RequestBodyOneOrManyBase<StrategyPostRequestBodyInstance> {
    const parsed = StrategyPostRequestBodyExpected.parse(raw);
    return parsed;
}

const StrategyPostResponseBodyInstanceExpected = StrategyPropsExpected.extend({
    id: z.number(),
});

const StrategyPostResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            StrategyPostResponseBodyInstanceExpected,
            z.array(StrategyPostResponseBodyInstanceExpected),
        ]),
    }),
]);

export function StrategyPostResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<StrategyPostResponseBodyInstance>
    >
): ResponseBase<ResponseBodyOneOrManyBase<StrategyPostResponseBodyInstance>> {
    const parsed = StrategyPostResponseBodyExpected.parse(raw);
    return parsed;
}

const StrategyPutRequestBodyInstanceExpected = StrategyPropsExpected;

const StrategyPutRequestBodyExpected = z.union([
    StrategyPutRequestBodyInstanceExpected,
    z.array(StrategyPutRequestBodyInstanceExpected),
]);

export function StrategyPutRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<StrategyPutRequestBodyInstance>
): RequestBodyOneOrManyBase<StrategyPutRequestBodyInstance> {
    const parsed = StrategyPutRequestBodyExpected.parse(raw);
    return parsed;
}

const StrategyPutResponseBodyInstanceExpected = StrategyPropsExpected.extend({
    id: z.number(),
});

const StrategyPutResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            StrategyPutResponseBodyInstanceExpected,
            z.array(StrategyPutResponseBodyInstanceExpected),
        ]),
    }),
]);

export function StrategyPutResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<StrategyPutResponseBodyInstance>
    >
): ResponseBase<ResponseBodyOneOrManyBase<StrategyPutResponseBodyInstance>> {
    const parsed = StrategyPutResponseBodyExpected.parse(raw);
    return parsed;
}

const StrategyPatchRequestBodyInstanceExpected = StrategyPropsExpected;

const StrategyPatchRequestBodyExpected = z.union([
    StrategyPatchRequestBodyInstanceExpected,
    z.array(StrategyPatchRequestBodyInstanceExpected),
]);

export function StrategyPatchRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<StrategyPatchRequestBodyInstance>
): RequestBodyOneOrManyBase<StrategyPatchRequestBodyInstance> {
    const parsed = StrategyPatchRequestBodyExpected.parse(raw);
    return parsed;
}

const StrategyPatchResponseBodyInstanceExpected = StrategyPropsExpected.extend({
    id: z.number(),
});

const StrategyPatchResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            StrategyPatchResponseBodyInstanceExpected,
            z.array(StrategyPatchResponseBodyInstanceExpected),
        ]),
    }),
]);

export function StrategyPatchResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<StrategyPatchResponseBodyInstance>
    >
): ResponseBase<ResponseBodyOneOrManyBase<StrategyPatchResponseBodyInstance>> {
    const parsed = StrategyPatchResponseBodyExpected.parse(raw);
    return parsed;
}

// Typing Express Request: https://stackoverflow.com/questions/48027563/typescript-type-annotation-for-res-body

const StrategyDeleteRequestParamsExpected = z.object({
    ids: z.string().regex(/^\d+(,\d+)*$/),
    // .optional(),
});

export function StrategyDeleteRequestParamsFromRaw(
    raw: StrategyDeleteRequestParamsRaw
): StrategyDeleteRequestParams {
    const parsed = StrategyDeleteRequestParamsExpected.parse(raw);
    const ids = parsed.ids?.split(',').map((id) => parseInt(id));
    return { ids };
}

const StrategyDeleteResponseBodyInstanceExpected = StrategyPropsExpected.extend(
    {
        id: z.number(),
    }
);

const StrategyDeleteResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            StrategyDeleteResponseBodyInstanceExpected,
            z.array(StrategyDeleteResponseBodyInstanceExpected),
        ]),
    }),
]);

export function StrategyDeleteResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<StrategyDeleteResponseBodyInstance>
    >
): ResponseBase<ResponseBodyOneOrManyBase<StrategyDeleteResponseBodyInstance>> {
    const parsed = StrategyDeleteResponseBodyExpected.parse(raw);
    return parsed;
}
