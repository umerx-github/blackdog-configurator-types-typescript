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

export interface StrategyTemplateSeaDogDiscountSchemeSymbolProps {
    strategyTemplateSeaDogDiscountSchemeId: number;
    symbolId: number;
}

export interface StrategyTemplateSeaDogDiscountSchemeSymbolPostRequestBodyInstance
    extends StrategyTemplateSeaDogDiscountSchemeSymbolProps {}
export interface StrategyTemplateSeaDogDiscountSchemeSymbolPostResponseBodyInstance
    extends StrategyTemplateSeaDogDiscountSchemeSymbolProps {
    id: number;
}
export type StrategyTemplateSeaDogDiscountSchemeSymbolPostRequestBody =
    RequestBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolPostRequestBodyInstance>;
export type StrategyTemplateSeaDogDiscountSchemeSymbolPostResponseBody =
    ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolPostResponseBodyInstance>;

export interface StrategyTemplateSeaDogDiscountSchemeSymbolPutRequestBodyInstance
    extends StrategyTemplateSeaDogDiscountSchemeSymbolProps {}
export interface StrategyTemplateSeaDogDiscountSchemeSymbolPutResponseBodyInstance
    extends StrategyTemplateSeaDogDiscountSchemeSymbolProps {
    id: number;
}
export type StrategyTemplateSeaDogDiscountSchemeSymbolPutRequestBody =
    RequestBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolPutRequestBodyInstance>;
export type StrategyTemplateSeaDogDiscountSchemeSymbolPutResponseBody =
    ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolPutResponseBodyInstance>;

export interface StrategyTemplateSeaDogDiscountSchemeSymbolPatchRequestBodyInstance
    extends StrategyTemplateSeaDogDiscountSchemeSymbolProps {}
export interface StrategyTemplateSeaDogDiscountSchemeSymbolPatchResponseBodyInstance
    extends StrategyTemplateSeaDogDiscountSchemeSymbolProps {
    id: number;
}
export type StrategyTemplateSeaDogDiscountSchemeSymbolPatchRequestBody =
    RequestBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolPatchRequestBodyInstance>;
export type StrategyTemplateSeaDogDiscountSchemeSymbolPatchResponseBody =
    ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolPatchResponseBodyInstance>;

export interface StrategyTemplateSeaDogDiscountSchemeSymbolDeleteResponseBodyInstance
    extends StrategyTemplateSeaDogDiscountSchemeSymbolProps {
    id: number;
}
export type StrategyTemplateSeaDogDiscountSchemeSymbolDeleteRequestBody = never;
export type StrategyTemplateSeaDogDiscountSchemeSymbolDeleteResponseBody =
    ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolDeleteResponseBodyInstance>;
export interface StrategyTemplateSeaDogDiscountSchemeSymbolDeleteRequestParams {
    ids?: number[];
}
export interface StrategyTemplateSeaDogDiscountSchemeSymbolDeleteRequestParamsRaw {
    ids?: string;
}

const StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected = z.object({
    strategyTemplateSeaDogDiscountSchemeId: z.number(),
    symbolId: z.number(),
});

export function StrategyTemplateSeaDogDiscountSchemeSymbolPropsFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemeSymbolProps
): StrategyTemplateSeaDogDiscountSchemeSymbolProps {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected.parse(raw);
    return parsed;
}

const StrategyTemplateSeaDogDiscountSchemeSymbolPostRequestBodyInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolPostRequestBodyExpected =
    z.union([
        StrategyTemplateSeaDogDiscountSchemeSymbolPostRequestBodyInstanceExpected,
        z.array(
            StrategyTemplateSeaDogDiscountSchemeSymbolPostRequestBodyInstanceExpected
        ),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeSymbolPostRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolPostRequestBodyInstance>
): RequestBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolPostRequestBodyInstance> {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPostRequestBodyExpected.parse(
            raw
        );
    return parsed;
}

const StrategyTemplateSeaDogDiscountSchemeSymbolPostResponseBodyInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected.extend({
        id: z.number(),
    });

const StrategyTemplateSeaDogDiscountSchemeSymbolPostResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: z.union([
                StrategyTemplateSeaDogDiscountSchemeSymbolPostResponseBodyInstanceExpected,
                z.array(
                    StrategyTemplateSeaDogDiscountSchemeSymbolPostResponseBodyInstanceExpected
                ),
            ]),
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeSymbolPostResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolPostResponseBodyInstance>
    >
): ResponseBase<
    ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolPostResponseBodyInstance>
> {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPostResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

const StrategyTemplateSeaDogDiscountSchemeSymbolPutRequestBodyInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolPutRequestBodyExpected =
    z.union([
        StrategyTemplateSeaDogDiscountSchemeSymbolPutRequestBodyInstanceExpected,
        z.array(
            StrategyTemplateSeaDogDiscountSchemeSymbolPutRequestBodyInstanceExpected
        ),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeSymbolPutRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolPutRequestBodyInstance>
): RequestBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolPutRequestBodyInstance> {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPutRequestBodyExpected.parse(
            raw
        );
    return parsed;
}

const StrategyTemplateSeaDogDiscountSchemeSymbolPutResponseBodyInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected.extend({
        id: z.number(),
    });

const StrategyTemplateSeaDogDiscountSchemeSymbolPutResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: z.union([
                StrategyTemplateSeaDogDiscountSchemeSymbolPutResponseBodyInstanceExpected,
                z.array(
                    StrategyTemplateSeaDogDiscountSchemeSymbolPutResponseBodyInstanceExpected
                ),
            ]),
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeSymbolPutResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolPutResponseBodyInstance>
    >
): ResponseBase<
    ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolPutResponseBodyInstance>
> {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPutResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

const StrategyTemplateSeaDogDiscountSchemeSymbolPatchRequestBodyInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolPatchRequestBodyExpected =
    z.union([
        StrategyTemplateSeaDogDiscountSchemeSymbolPatchRequestBodyInstanceExpected,
        z.array(
            StrategyTemplateSeaDogDiscountSchemeSymbolPatchRequestBodyInstanceExpected
        ),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeSymbolPatchRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolPatchRequestBodyInstance>
): RequestBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolPatchRequestBodyInstance> {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPatchRequestBodyExpected.parse(
            raw
        );
    return parsed;
}

const StrategyTemplateSeaDogDiscountSchemeSymbolPatchResponseBodyInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected.extend({
        id: z.number(),
    });

const StrategyTemplateSeaDogDiscountSchemeSymbolPatchResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: z.union([
                StrategyTemplateSeaDogDiscountSchemeSymbolPatchResponseBodyInstanceExpected,
                z.array(
                    StrategyTemplateSeaDogDiscountSchemeSymbolPatchResponseBodyInstanceExpected
                ),
            ]),
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeSymbolPatchResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolPatchResponseBodyInstance>
    >
): ResponseBase<
    ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolPatchResponseBodyInstance>
> {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPatchResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

// Typing Express Request: https://stackoverflow.com/questions/48027563/typescript-type-annotation-for-res-body

const StrategyTemplateSeaDogDiscountSchemeSymbolDeleteRequestParamsExpected =
    z.object({
        ids: z.string().regex(/^\d+(,\d+)*$/),
        // .optional(),
    });

export function StrategyTemplateSeaDogDiscountSchemeSymbolDeleteRequestParamsFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemeSymbolDeleteRequestParamsRaw
): StrategyTemplateSeaDogDiscountSchemeSymbolDeleteRequestParams {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolDeleteRequestParamsExpected.parse(
            raw
        );
    const ids = parsed.ids?.split(',').map((id) => parseInt(id));
    return { ids };
}

const StrategyTemplateSeaDogDiscountSchemeSymbolDeleteResponseBodyInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected.extend({
        id: z.number(),
    });

const StrategyTemplateSeaDogDiscountSchemeSymbolDeleteResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: z.union([
                StrategyTemplateSeaDogDiscountSchemeSymbolDeleteResponseBodyInstanceExpected,
                z.array(
                    StrategyTemplateSeaDogDiscountSchemeSymbolDeleteResponseBodyInstanceExpected
                ),
            ]),
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeSymbolDeleteResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolDeleteResponseBodyInstance>
    >
): ResponseBase<
    ResponseBodyOneOrManyBase<StrategyTemplateSeaDogDiscountSchemeSymbolDeleteResponseBodyInstance>
> {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolDeleteResponseBodyExpected.parse(
            raw
        );
    return parsed;
}
