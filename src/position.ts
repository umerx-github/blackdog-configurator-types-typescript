import { z } from 'zod';

import {
    ResponseBase,
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase,
    ResponseBodyOneOrManyBase,
} from './response.js';

import { RequestBodyOneOrManyBase } from './request.js';

export interface PositionProps {
    symbolId: number;
    strategyId: number;
    orderId: number;
}

export interface PositionPostRequestBodyInstance extends PositionProps {}
export interface PositionPostResponseBodyInstance extends PositionProps {
    id: number;
}
export type PositionPostRequestBody =
    RequestBodyOneOrManyBase<PositionPostRequestBodyInstance>;
export type PositionPostResponseBody =
    ResponseBodyOneOrManyBase<PositionPostResponseBodyInstance>;

export interface PositionPutRequestBodyInstance extends PositionProps {}
export interface PositionPutResponseBodyInstance extends PositionProps {
    id: number;
}
export type PositionPutRequestBody =
    RequestBodyOneOrManyBase<PositionPutRequestBodyInstance>;
export type PositionPutResponseBody =
    ResponseBodyOneOrManyBase<PositionPutResponseBodyInstance>;

export interface PositionPatchRequestBodyInstance extends PositionProps {}
export interface PositionPatchResponseBodyInstance extends PositionProps {
    id: number;
}
export type PositionPatchRequestBody =
    RequestBodyOneOrManyBase<PositionPatchRequestBodyInstance>;
export type PositionPatchResponseBody =
    ResponseBodyOneOrManyBase<PositionPatchResponseBodyInstance>;

export interface PositionDeleteResponseBodyInstance extends PositionProps {
    id: number;
}
export type PositionDeleteRequestBody = never;
export type PositionDeleteResponseBody =
    ResponseBodyOneOrManyBase<PositionDeleteResponseBodyInstance>;
export interface PositionDeleteRequestParams {
    ids?: number[];
}
export interface PositionDeleteRequestParamsRaw {
    ids?: string;
}

const PositionPropsExpected = z.object({
    symbolId: z.number(),
    strategyId: z.number(),
    orderId: z.number(),
});

export function PositionPropsFromRaw(raw: PositionProps): PositionProps {
    const parsed = PositionPropsExpected.parse(raw);
    return parsed;
}

const PositionPostRequestBodyInstanceExpected = PositionPropsExpected;

const PositionPostRequestBodyExpected = z.union([
    PositionPostRequestBodyInstanceExpected,
    z.array(PositionPostRequestBodyInstanceExpected),
]);

export function PositionPostRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<PositionPostRequestBodyInstance>
): RequestBodyOneOrManyBase<PositionPostRequestBodyInstance> {
    const parsed = PositionPostRequestBodyExpected.parse(raw);
    return parsed;
}

const PositionPostResponseBodyInstanceExpected = PositionPropsExpected.extend({
    id: z.number(),
});

const PositionPostResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            PositionPostResponseBodyInstanceExpected,
            z.array(PositionPostResponseBodyInstanceExpected),
        ]),
    }),
]);

export function PositionPostResponseBodyFromRaw(
    raw: ResponseBase<ResponseBodyOneOrManyBase<PositionPostResponseBodyInstance>>
): ResponseBase<ResponseBodyOneOrManyBase<PositionPostResponseBodyInstance>> {
    const parsed = PositionPostResponseBodyExpected.parse(raw);
    return parsed;
}

const PositionPutRequestBodyInstanceExpected = PositionPropsExpected;

const PositionPutRequestBodyExpected = z.union([
    PositionPutRequestBodyInstanceExpected,
    z.array(PositionPutRequestBodyInstanceExpected),
]);

export function PositionPutRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<PositionPutRequestBodyInstance>
): RequestBodyOneOrManyBase<PositionPutRequestBodyInstance> {
    const parsed = PositionPutRequestBodyExpected.parse(raw);
    return parsed;
}

const PositionPutResponseBodyInstanceExpected = PositionPropsExpected.extend({
    id: z.number(),
});

const PositionPutResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            PositionPutResponseBodyInstanceExpected,
            z.array(PositionPutResponseBodyInstanceExpected),
        ]),
    }),
]);

export function PositionPutResponseBodyFromRaw(
    raw: ResponseBase<ResponseBodyOneOrManyBase<PositionPutResponseBodyInstance>>
): ResponseBase<ResponseBodyOneOrManyBase<PositionPutResponseBodyInstance>> {
    const parsed = PositionPutResponseBodyExpected.parse(raw);
    return parsed;
}

const PositionPatchRequestBodyInstanceExpected = PositionPropsExpected;

const PositionPatchRequestBodyExpected = z.union([
    PositionPatchRequestBodyInstanceExpected,
    z.array(PositionPatchRequestBodyInstanceExpected),
]);

export function PositionPatchRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<PositionPatchRequestBodyInstance>
): RequestBodyOneOrManyBase<PositionPatchRequestBodyInstance> {
    const parsed = PositionPatchRequestBodyExpected.parse(raw);
    return parsed;
}

const PositionPatchResponseBodyInstanceExpected = PositionPropsExpected.extend({
    id: z.number(),
});

const PositionPatchResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            PositionPatchResponseBodyInstanceExpected,
            z.array(PositionPatchResponseBodyInstanceExpected),
        ]),
    }),
]);

export function PositionPatchResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<PositionPatchResponseBodyInstance>
    >
): ResponseBase<ResponseBodyOneOrManyBase<PositionPatchResponseBodyInstance>> {
    const parsed = PositionPatchResponseBodyExpected.parse(raw);
    return parsed;
}

// Typing Express Request: https://stackoverflow.com/questions/48027563/typescript-type-annotation-for-res-body

const PositionDeleteRequestParamsExpected = z.object({
    ids: z.string().regex(/^\d+(,\d+)*$/),
    // .optional(),
});

export function PositionDeleteRequestParamsFromRaw(
    raw: PositionDeleteRequestParamsRaw
): PositionDeleteRequestParams {
    const parsed = PositionDeleteRequestParamsExpected.parse(raw);
    const ids = parsed.ids?.split(',').map((id) => parseInt(id));
    return { ids };
}

const PositionDeleteResponseBodyInstanceExpected = PositionPropsExpected.extend({
    id: z.number(),
});

const PositionDeleteResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            PositionDeleteResponseBodyInstanceExpected,
            z.array(PositionDeleteResponseBodyInstanceExpected),
        ]),
    }),
]);

export function PositionDeleteResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<PositionDeleteResponseBodyInstance>
    >
): ResponseBase<ResponseBodyOneOrManyBase<PositionDeleteResponseBodyInstance>> {
    const parsed = PositionDeleteResponseBodyExpected.parse(raw);
    return parsed;
}
