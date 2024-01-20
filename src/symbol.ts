import { z } from 'zod';

import {
    ResponseBase,
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase,
    ResponseBodyOneOrManyBase,
} from './response.js';

import { RequestBodyOneOrManyBase } from './request.js';

export interface SymbolProps {
    name: string;
}

export interface SymbolPostRequestBodyInstance extends SymbolProps {}
export interface SymbolPostResponseBodyInstance extends SymbolProps {
    id: number;
}
export type SymbolPostRequestBody =
    RequestBodyOneOrManyBase<SymbolPostRequestBodyInstance>;
export type SymbolPostResponseBody =
    ResponseBodyOneOrManyBase<SymbolPostResponseBodyInstance>;

export interface SymbolPutRequestBodyInstance extends SymbolProps {}
export interface SymbolPutResponseBodyInstance extends SymbolProps {
    id: number;
}
export type SymbolPutRequestBody =
    RequestBodyOneOrManyBase<SymbolPutRequestBodyInstance>;
export type SymbolPutResponseBody =
    ResponseBodyOneOrManyBase<SymbolPutResponseBodyInstance>;

export interface SymbolPatchRequestBodyInstance extends SymbolProps {}
export interface SymbolPatchResponseBodyInstance extends SymbolProps {
    id: number;
}
export type SymbolPatchRequestBody =
    RequestBodyOneOrManyBase<SymbolPatchRequestBodyInstance>;
export type SymbolPatchResponseBody =
    ResponseBodyOneOrManyBase<SymbolPatchResponseBodyInstance>;

export interface SymbolDeleteResponseBodyInstance extends SymbolProps {
    id: number;
}
export type SymbolDeleteRequestBody = never;
export type SymbolDeleteResponseBody =
    ResponseBodyOneOrManyBase<SymbolDeleteResponseBodyInstance>;
export interface SymbolDeleteRequestParams {
    ids?: number[];
}
export interface SymbolDeleteRequestParamsRaw {
    ids?: string;
}

const SymbolPropsExpected = z.object({
    name: z.string(),
});

export function SymbolPropsFromRaw(raw: SymbolProps): SymbolProps {
    const parsed = SymbolPropsExpected.parse(raw);
    return parsed;
}

const SymbolPostRequestBodyInstanceExpected = SymbolPropsExpected;

const SymbolPostRequestBodyExpected = z.union([
    SymbolPostRequestBodyInstanceExpected,
    z.array(SymbolPostRequestBodyInstanceExpected),
]);

export function SymbolPostRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<SymbolPostRequestBodyInstance>
): RequestBodyOneOrManyBase<SymbolPostRequestBodyInstance> {
    const parsed = SymbolPostRequestBodyExpected.parse(raw);
    return parsed;
}

const SymbolPostResponseBodyInstanceExpected = SymbolPropsExpected.extend({
    id: z.number(),
});

const SymbolPostResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            SymbolPostResponseBodyInstanceExpected,
            z.array(SymbolPostResponseBodyInstanceExpected),
        ]),
    }),
]);

export function SymbolPostResponseBodyFromRaw(
    raw: ResponseBase<ResponseBodyOneOrManyBase<SymbolPostResponseBodyInstance>>
): ResponseBase<ResponseBodyOneOrManyBase<SymbolPostResponseBodyInstance>> {
    const parsed = SymbolPostResponseBodyExpected.parse(raw);
    return parsed;
}

const SymbolPutRequestBodyInstanceExpected = SymbolPropsExpected;

const SymbolPutRequestBodyExpected = z.union([
    SymbolPutRequestBodyInstanceExpected,
    z.array(SymbolPutRequestBodyInstanceExpected),
]);

export function SymbolPutRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<SymbolPutRequestBodyInstance>
): RequestBodyOneOrManyBase<SymbolPutRequestBodyInstance> {
    const parsed = SymbolPutRequestBodyExpected.parse(raw);
    return parsed;
}

const SymbolPutResponseBodyInstanceExpected = SymbolPropsExpected.extend({
    id: z.number(),
});

const SymbolPutResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            SymbolPutResponseBodyInstanceExpected,
            z.array(SymbolPutResponseBodyInstanceExpected),
        ]),
    }),
]);

export function SymbolPutResponseBodyFromRaw(
    raw: ResponseBase<ResponseBodyOneOrManyBase<SymbolPutResponseBodyInstance>>
): ResponseBase<ResponseBodyOneOrManyBase<SymbolPutResponseBodyInstance>> {
    const parsed = SymbolPutResponseBodyExpected.parse(raw);
    return parsed;
}

const SymbolPatchRequestBodyInstanceExpected = SymbolPropsExpected;

const SymbolPatchRequestBodyExpected = z.union([
    SymbolPatchRequestBodyInstanceExpected,
    z.array(SymbolPatchRequestBodyInstanceExpected),
]);

export function SymbolPatchRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<SymbolPatchRequestBodyInstance>
): RequestBodyOneOrManyBase<SymbolPatchRequestBodyInstance> {
    const parsed = SymbolPatchRequestBodyExpected.parse(raw);
    return parsed;
}

const SymbolPatchResponseBodyInstanceExpected = SymbolPropsExpected.extend({
    id: z.number(),
});

const SymbolPatchResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            SymbolPatchResponseBodyInstanceExpected,
            z.array(SymbolPatchResponseBodyInstanceExpected),
        ]),
    }),
]);

export function SymbolPatchResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<SymbolPatchResponseBodyInstance>
    >
): ResponseBase<ResponseBodyOneOrManyBase<SymbolPatchResponseBodyInstance>> {
    const parsed = SymbolPatchResponseBodyExpected.parse(raw);
    return parsed;
}

// Typing Express Request: https://stackoverflow.com/questions/48027563/typescript-type-annotation-for-res-body

const SymbolDeleteRequestParamsExpected = z.object({
    ids: z.string().regex(/^\d+(,\d+)*$/),
    // .optional(),
});

export function SymbolDeleteRequestParamsFromRaw(
    raw: SymbolDeleteRequestParamsRaw
): SymbolDeleteRequestParams {
    const parsed = SymbolDeleteRequestParamsExpected.parse(raw);
    const ids = parsed.ids?.split(',').map((id) => parseInt(id));
    return { ids };
}

const SymbolDeleteResponseBodyInstanceExpected = SymbolPropsExpected.extend({
    id: z.number(),
});

const SymbolDeleteResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            SymbolDeleteResponseBodyInstanceExpected,
            z.array(SymbolDeleteResponseBodyInstanceExpected),
        ]),
    }),
]);

export function SymbolDeleteResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<SymbolDeleteResponseBodyInstance>
    >
): ResponseBase<ResponseBodyOneOrManyBase<SymbolDeleteResponseBodyInstance>> {
    const parsed = SymbolDeleteResponseBodyExpected.parse(raw);
    return parsed;
}
