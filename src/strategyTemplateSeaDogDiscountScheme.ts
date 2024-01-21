import { z } from 'zod';

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

export interface StrategyTemplateSeaDogDiscountSchemeProps {
    strategyId: number;
    status: Status;
    cash: number;
    sellAtPercentile: number;
}

export interface StrategyTemplateSeaDogDiscountSchemeGetResponseBodyInstance
    extends StrategyTemplateSeaDogDiscountSchemeProps {
    id: number;
}
export type StrategyTemplateSeaDogDiscountSchemeGetRequestBody = never;
export type StrategyTemplateSeaDogDiscountSchemeGetResponseBody =
    ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeGetResponseBodyInstance>;
export interface StrategyTemplateSeaDogDiscountSchemeGetRequestParams {
    ids?: number[];
    status?: Status;
}
export interface StrategyTemplateSeaDogDiscountSchemeGetRequestParamsRaw {
    ids?: string;
    status?: Status;
}
export interface StrategyTemplateSeaDogDiscountSchemePostRequestBodyInstance
    extends StrategyTemplateSeaDogDiscountSchemeProps {}
export interface StrategyTemplateSeaDogDiscountSchemePostResponseBodyInstance
    extends StrategyTemplateSeaDogDiscountSchemeProps {
    id: number;
}
export type StrategyTemplateSeaDogDiscountSchemePostRequestBody =
    RequestBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemePostRequestBodyInstance>;
export type StrategyTemplateSeaDogDiscountSchemePostResponseBody =
    ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemePostResponseBodyInstance>;

export interface StrategyTemplateSeaDogDiscountSchemePutRequestBodyInstance
    extends StrategyTemplateSeaDogDiscountSchemeProps {}
export interface StrategyTemplateSeaDogDiscountSchemePutResponseBodyInstance
    extends StrategyTemplateSeaDogDiscountSchemeProps {
    id: number;
}
export type StrategyTemplateSeaDogDiscountSchemePutRequestBody =
    RequestBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemePutRequestBodyInstance>;
export type StrategyTemplateSeaDogDiscountSchemePutResponseBody =
    ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemePutResponseBodyInstance>;

export interface StrategyTemplateSeaDogDiscountSchemePatchRequestBodyInstance
    extends StrategyTemplateSeaDogDiscountSchemeProps {}
export interface StrategyTemplateSeaDogDiscountSchemePatchResponseBodyInstance
    extends StrategyTemplateSeaDogDiscountSchemeProps {
    id: number;
}
export type StrategyTemplateSeaDogDiscountSchemePatchRequestBody =
    RequestBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemePatchRequestBodyInstance>;
export type StrategyTemplateSeaDogDiscountSchemePatchResponseBody =
    ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemePatchResponseBodyInstance>;

export interface StrategyTemplateSeaDogDiscountSchemeDeleteResponseBodyInstance
    extends StrategyTemplateSeaDogDiscountSchemeProps {
    id: number;
}
export type StrategyTemplateSeaDogDiscountSchemeDeleteRequestBody = never;
export type StrategyTemplateSeaDogDiscountSchemeDeleteResponseBody =
    ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeDeleteResponseBodyInstance>;
export interface StrategyTemplateSeaDogDiscountSchemeDeleteRequestParams {
    ids?: number[];
}
export interface StrategyTemplateSeaDogDiscountSchemeDeleteRequestParamsRaw {
    ids?: string;
}

const StrategyTemplateSeaDogDiscountSchemePropsExpected = z.object({
    strategyId: z.number(),
    status: StatusSchema,
    cash: z.number(),
    sellAtPercentile: z.number(),
});

export function StrategyTemplateSeaDogDiscountSchemePropsFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemeProps
): StrategyTemplateSeaDogDiscountSchemeProps {
    const parsed = StrategyTemplateSeaDogDiscountSchemePropsExpected.parse(raw);
    return parsed;
}

const StrategyTemplateSeaDogDiscountSchemeGetRequestParamsExpected =
    z.object({
        ids: z.string().regex(/^\d+(,\d+)*$/),
        status: StatusSchema.optional(),
        // .optional(),
    });

export function StrategyTemplateSeaDogDiscountSchemeGetRequestParamsFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemeGetRequestParamsRaw
): StrategyTemplateSeaDogDiscountSchemeGetRequestParams {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeGetRequestParamsExpected.parse(
            raw
        );
    const ids = parsed.ids?.split(',').map((id) => parseInt(id));
    return { ids, status: parsed.status };
}

const StrategyTemplateSeaDogDiscountSchemeGetResponseBodyInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePropsExpected.extend({
        id: z.number(),
    });

const StrategyTemplateSeaDogDiscountSchemeGetResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            StrategyTemplateSeaDogDiscountSchemeGetResponseBodyInstanceExpected,
            z.array(
                StrategyTemplateSeaDogDiscountSchemeGetResponseBodyInstanceExpected
            ),
        ]),
    }),
]);

export function StrategyTemplateSeaDogDiscountSchemeGetResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeGetResponseBodyInstance>
    >
): ResponseBase<
    ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeGetResponseBodyInstance>
> {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeGetResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

const StrategyTemplateSeaDogDiscountSchemePostRequestBodyInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePropsExpected;

const StrategyTemplateSeaDogDiscountSchemePostRequestBodyExpected = z.union([
    StrategyTemplateSeaDogDiscountSchemePostRequestBodyInstanceExpected,
    z.array(
        StrategyTemplateSeaDogDiscountSchemePostRequestBodyInstanceExpected
    ),
]);

export function StrategyTemplateSeaDogDiscountSchemePostRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemePostRequestBodyInstance>
): RequestBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemePostRequestBodyInstance> {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePostRequestBodyExpected.parse(raw);
    return parsed;
}

const StrategyTemplateSeaDogDiscountSchemePostResponseBodyInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePropsExpected.extend({
        id: z.number(),
    });

const StrategyTemplateSeaDogDiscountSchemePostResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            StrategyTemplateSeaDogDiscountSchemePostResponseBodyInstanceExpected,
            z.array(
                StrategyTemplateSeaDogDiscountSchemePostResponseBodyInstanceExpected
            ),
        ]),
    }),
]);

export function StrategyTemplateSeaDogDiscountSchemePostResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemePostResponseBodyInstance>
    >
): ResponseBase<
    ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemePostResponseBodyInstance>
> {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePostResponseBodyExpected.parse(raw);
    return parsed;
}

const StrategyTemplateSeaDogDiscountSchemePutRequestBodyInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePropsExpected;

const StrategyTemplateSeaDogDiscountSchemePutRequestBodyExpected = z.union([
    StrategyTemplateSeaDogDiscountSchemePutRequestBodyInstanceExpected,
    z.array(StrategyTemplateSeaDogDiscountSchemePutRequestBodyInstanceExpected),
]);

export function StrategyTemplateSeaDogDiscountSchemePutRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemePutRequestBodyInstance>
): RequestBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemePutRequestBodyInstance> {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePutRequestBodyExpected.parse(raw);
    return parsed;
}

const StrategyTemplateSeaDogDiscountSchemePutResponseBodyInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePropsExpected.extend({
        id: z.number(),
    });

const StrategyTemplateSeaDogDiscountSchemePutResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            StrategyTemplateSeaDogDiscountSchemePutResponseBodyInstanceExpected,
            z.array(
                StrategyTemplateSeaDogDiscountSchemePutResponseBodyInstanceExpected
            ),
        ]),
    }),
]);

export function StrategyTemplateSeaDogDiscountSchemePutResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemePutResponseBodyInstance>
    >
): ResponseBase<
    ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemePutResponseBodyInstance>
> {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePutResponseBodyExpected.parse(raw);
    return parsed;
}

const StrategyTemplateSeaDogDiscountSchemePatchRequestBodyInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePropsExpected;

const StrategyTemplateSeaDogDiscountSchemePatchRequestBodyExpected = z.union([
    StrategyTemplateSeaDogDiscountSchemePatchRequestBodyInstanceExpected,
    z.array(
        StrategyTemplateSeaDogDiscountSchemePatchRequestBodyInstanceExpected
    ),
]);

export function StrategyTemplateSeaDogDiscountSchemePatchRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemePatchRequestBodyInstance>
): RequestBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemePatchRequestBodyInstance> {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePatchRequestBodyExpected.parse(raw);
    return parsed;
}

const StrategyTemplateSeaDogDiscountSchemePatchResponseBodyInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePropsExpected.extend({
        id: z.number(),
    });

const StrategyTemplateSeaDogDiscountSchemePatchResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            StrategyTemplateSeaDogDiscountSchemePatchResponseBodyInstanceExpected,
            z.array(
                StrategyTemplateSeaDogDiscountSchemePatchResponseBodyInstanceExpected
            ),
        ]),
    }),
]);

export function StrategyTemplateSeaDogDiscountSchemePatchResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemePatchResponseBodyInstance>
    >
): ResponseBase<
    ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemePatchResponseBodyInstance>
> {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePatchResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

// Typing Express Request: https://stackoverflow.com/questions/48027563/typescript-type-annotation-for-res-body

const StrategyTemplateSeaDogDiscountSchemeDeleteRequestParamsExpected =
    z.object({
        ids: z.string().regex(/^\d+(,\d+)*$/),
        // .optional(),
    });

export function StrategyTemplateSeaDogDiscountSchemeDeleteRequestParamsFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemeDeleteRequestParamsRaw
): StrategyTemplateSeaDogDiscountSchemeDeleteRequestParams {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeDeleteRequestParamsExpected.parse(
            raw
        );
    const ids = parsed.ids?.split(',').map((id) => parseInt(id));
    return { ids };
}

const StrategyTemplateSeaDogDiscountSchemeDeleteResponseBodyInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePropsExpected.extend({
        id: z.number(),
    });

const StrategyTemplateSeaDogDiscountSchemeDeleteResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            StrategyTemplateSeaDogDiscountSchemeDeleteResponseBodyInstanceExpected,
            z.array(
                StrategyTemplateSeaDogDiscountSchemeDeleteResponseBodyInstanceExpected
            ),
        ]),
    }),
]);

export function StrategyTemplateSeaDogDiscountSchemeDeleteResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeDeleteResponseBodyInstance>
    >
): ResponseBase<
    ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeDeleteResponseBodyInstance>
> {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeDeleteResponseBodyExpected.parse(
            raw
        );
    return parsed;
}
