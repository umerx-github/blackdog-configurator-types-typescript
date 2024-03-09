import { z } from 'zod';

import {
    ResponseBase,
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase,
} from './response.js';

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

export interface StrategyTemplateSeaDogDiscountSchemeSymbolPropsOptional {
    strategyTemplateSeaDogDiscountSchemeId?: number;
    symbolId?: number;
}

const StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected = z
    .object({
        strategyTemplateSeaDogDiscountSchemeId: z.number(),
        symbolId: z.number(),
    })
    .strict();

const StrategyTemplateSeaDogDiscountSchemeSymbolPropsOptionalExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected.partial();

export function StrategyTemplateSeaDogDiscountSchemeSymbolPropsFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolProps {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected.parse(raw);
    return parsed;
}
export interface StrategyTemplateSeaDogDiscountSchemeSymbolModelInterface
    extends StrategyTemplateSeaDogDiscountSchemeSymbolProps {
    id: number;
}

// BEGIN GET

export type StrategyTemplateSeaDogDiscountSchemeSymbolGetRequestBody = never;
export interface StrategyTemplateSeaDogDiscountSchemeSymbolGetResponseBodyDataInstance
    extends StrategyTemplateSeaDogDiscountSchemeSymbolProps {
    id: number;
}

const StrategyTemplateSeaDogDiscountSchemeSymbolGetResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected.extend({
        id: z.number(),
    });

export type StrategyTemplateSeaDogDiscountSchemeSymbolGetManyRequestBody =
    StrategyTemplateSeaDogDiscountSchemeSymbolGetRequestBody;
export interface StrategyTemplateSeaDogDiscountSchemeSymbolGetManyRequestQuery {
    strategyTemplateSeaDogDiscountSchemeId?: number;
    symbolId?: number;
    ids?: number[];
}
export interface StrategyTemplateSeaDogDiscountSchemeSymbolGetManyRequestQueryRaw {
    strategyTemplateSeaDogDiscountSchemeId?: string;
    symbolId?: string;
    ids?: string;
}

const StrategyTemplateSeaDogDiscountSchemeSymbolGetManyRequestQueryRawExpected =
    z
        .object({
            strategyTemplateSeaDogDiscountSchemeId: z
                .string()
                .regex(/^\d+$/)
                .optional(),
            symbolId: z.string().regex(/^\d+$/).optional(),
            status: StatusSchema.optional(),
            ids: z
                .string()
                .regex(/^\d+(,\d+)*$/)
                .optional(),
        })
        .strict();

export function StrategyTemplateSeaDogDiscountSchemeSymbolGetManyRequestQueryFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolGetManyRequestQuery {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolGetManyRequestQueryRawExpected.parse(
            raw
        );
    const ids = parsed.ids?.split(',').map((id) => parseInt(id));
    const strategyTemplateSeaDogDiscountSchemeId =
        undefined === parsed.strategyTemplateSeaDogDiscountSchemeId
            ? undefined
            : parseInt(parsed.strategyTemplateSeaDogDiscountSchemeId);
    const symbolId =
        undefined === parsed.symbolId ? undefined : parseInt(parsed.symbolId);
    return {
        strategyTemplateSeaDogDiscountSchemeId:
            strategyTemplateSeaDogDiscountSchemeId,
        symbolId: symbolId,
        ids,
    };
}
export type StrategyTemplateSeaDogDiscountSchemeSymbolGetManyResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeSymbolGetResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeSymbolGetManyResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemeSymbolGetManyResponseBodyDataInstance[];

export type StrategyTemplateSeaDogDiscountSchemeSymbolGetManyResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemeSymbolGetManyResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemeSymbolGetManyResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolGetResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolGetManyResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: z.array(
                StrategyTemplateSeaDogDiscountSchemeSymbolGetManyResponseBodyDataInstanceExpected
            ),
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeSymbolGetManyResponseBodyFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolGetManyResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolGetManyResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

export interface StrategyTemplateSeaDogDiscountSchemeSymbolGetSingleRequestParams {
    id: number;
}

export interface StrategyTemplateSeaDogDiscountSchemeSymbolGetSingleRequestParamsRaw {
    id: string;
}

const StrategyTemplateSeaDogDiscountSchemeSymbolGetSingleRequestParamsExpected =
    z
        .object({
            id: z.string().regex(/^\d+$/),
        })
        .strict();

export function StrategyTemplateSeaDogDiscountSchemeSymbolGetSingleRequestParamsFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolGetSingleRequestParams {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolGetSingleRequestParamsExpected.parse(
            raw
        );
    return { id: parseInt(parsed.id) };
}

export type StrategyTemplateSeaDogDiscountSchemeSymbolGetSingleRequestBody =
    StrategyTemplateSeaDogDiscountSchemeSymbolGetRequestBody;

export type StrategyTemplateSeaDogDiscountSchemeSymbolGetSingleResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeSymbolGetResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeSymbolGetSingleResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemeSymbolGetSingleResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeSymbolGetSingleResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemeSymbolGetSingleResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemeSymbolGetSingleResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolGetResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolGetSingleResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: StrategyTemplateSeaDogDiscountSchemeSymbolGetSingleResponseBodyDataInstanceExpected,
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeSymbolGetSingleResponseBodyFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolGetSingleResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolGetSingleResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

// END GET

// BEGIN POST

export interface StrategyTemplateSeaDogDiscountSchemeSymbolPostRequestBodyDataInstance
    extends StrategyTemplateSeaDogDiscountSchemeSymbolProps {}
export interface StrategyTemplateSeaDogDiscountSchemeSymbolPostResponseBodyDataInstance
    extends StrategyTemplateSeaDogDiscountSchemeSymbolProps {
    id: number;
}

const StrategyTemplateSeaDogDiscountSchemeSymbolPostRequestBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolPostResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected.extend({
        id: z.number(),
    });

const StrategyTemplateSeaDogDiscountSchemeSymbolPostManyRequestBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPostRequestBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolPostManyRequestBodyExpected =
    z.array(
        StrategyTemplateSeaDogDiscountSchemeSymbolPostManyRequestBodyDataInstanceExpected
    );

export type StrategyTemplateSeaDogDiscountSchemeSymbolPostManyRequestBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeSymbolPostRequestBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeSymbolPostManyRequestBody =
    StrategyTemplateSeaDogDiscountSchemeSymbolPostManyRequestBodyDataInstance[];

export function StrategyTemplateSeaDogDiscountSchemeSymbolPostManyRequestBodyFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolPostManyRequestBodyDataInstance[] {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPostManyRequestBodyExpected.parse(
            raw
        );
    return parsed;
}
export type StrategyTemplateSeaDogDiscountSchemeSymbolPostManyResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeSymbolPostResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeSymbolPostManyResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemeSymbolPostManyResponseBodyDataInstance[];

export type StrategyTemplateSeaDogDiscountSchemeSymbolPostManyResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemeSymbolPostManyResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemeSymbolPostManyResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPostResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolPostManyResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: z.array(
                StrategyTemplateSeaDogDiscountSchemeSymbolPostManyResponseBodyDataInstanceExpected
            ),
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeSymbolPostManyResponseBodyFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolPostManyResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPostManyResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

export type StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleRequestBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeSymbolPostRequestBodyDataInstance;
export type StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleRequestBody =
    StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleRequestBodyDataInstance;

const StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleRequestBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPostRequestBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleRequestBodyExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleRequestBodyDataInstanceExpected;

export function StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleRequestBodyFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleRequestBodyDataInstance {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleRequestBodyExpected.parse(
            raw
        );
    return parsed;
}

export type StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeSymbolPostResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPostResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleResponseBodyDataInstanceExpected,
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleResponseBodyFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPostSingleResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

// END POST

// BEGIN PUT

export interface StrategyTemplateSeaDogDiscountSchemeSymbolPutRequestBodyDataInstance
    extends StrategyTemplateSeaDogDiscountSchemeSymbolProps {}
export interface StrategyTemplateSeaDogDiscountSchemeSymbolPutResponseBodyDataInstance
    extends StrategyTemplateSeaDogDiscountSchemeSymbolProps {
    id: number;
}

const StrategyTemplateSeaDogDiscountSchemeSymbolPutRequestBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolPutResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected.extend({
        id: z.number(),
    });

export interface StrategyTemplateSeaDogDiscountSchemeSymbolPutManyRequestBodyDataInstance
    extends StrategyTemplateSeaDogDiscountSchemeSymbolPutRequestBodyDataInstance {
    id: number;
}
export type StrategyTemplateSeaDogDiscountSchemeSymbolPutManyRequestBody =
    StrategyTemplateSeaDogDiscountSchemeSymbolPutManyRequestBodyDataInstance[];

const StrategyTemplateSeaDogDiscountSchemeSymbolPutManyRequestBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPutRequestBodyDataInstanceExpected.extend(
        {
            id: z.number(),
        }
    );

const StrategyTemplateSeaDogDiscountSchemeSymbolPutManyRequestBodyExpected =
    z.array(
        StrategyTemplateSeaDogDiscountSchemeSymbolPutManyRequestBodyDataInstanceExpected
    );

export function StrategyTemplateSeaDogDiscountSchemeSymbolPutManyRequestBodyFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolPutManyRequestBodyDataInstance[] {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPutManyRequestBodyExpected.parse(
            raw
        );
    return parsed;
}

export type StrategyTemplateSeaDogDiscountSchemeSymbolPutManyResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeSymbolPutResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeSymbolPutManyResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemeSymbolPutManyResponseBodyDataInstance[];

export type StrategyTemplateSeaDogDiscountSchemeSymbolPutManyResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemeSymbolPutManyResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemeSymbolPutManyResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPutResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolPutManyResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: z.array(
                StrategyTemplateSeaDogDiscountSchemeSymbolPutManyResponseBodyDataInstanceExpected
            ),
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeSymbolPutManyResponseBodyFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolPutManyResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPutManyResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

export interface StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleRequestParams {
    id: number;
}

export interface StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleRequestParamsRaw {
    id: string;
}

const StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleRequestParamsExpected =
    z
        .object({
            id: z.string().regex(/^\d+$/),
        })
        .strict();

export function StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleRequestParamsFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleRequestParams {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleRequestParamsExpected.parse(
            raw
        );
    return { id: parseInt(parsed.id) };
}

export type StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleRequestBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeSymbolPutRequestBodyDataInstance;
export type StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleRequestBody =
    StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleRequestBodyDataInstance;

const StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleRequestBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPutRequestBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleRequestBodyExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleRequestBodyDataInstanceExpected;

export function StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleRequestBodyFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleRequestBodyDataInstance {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleRequestBodyExpected.parse(
            raw
        );
    return parsed;
}

export type StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeSymbolPutResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPutResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleResponseBodyDataInstanceExpected,
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleResponseBodyFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPutSingleResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

// END PUT

// BEGIN PATCH

export interface StrategyTemplateSeaDogDiscountSchemeSymbolPatchRequestBodyDataInstance
    extends StrategyTemplateSeaDogDiscountSchemeSymbolPropsOptional {}
export interface StrategyTemplateSeaDogDiscountSchemeSymbolPatchResponseBodyDataInstance
    extends StrategyTemplateSeaDogDiscountSchemeSymbolProps {
    id: number;
}

const StrategyTemplateSeaDogDiscountSchemeSymbolPatchRequestBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPropsOptionalExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolPatchResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected.extend({
        id: z.number(),
    });

export interface StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyRequestBodyDataInstance
    extends StrategyTemplateSeaDogDiscountSchemeSymbolPatchRequestBodyDataInstance {
    id: number;
}
export type StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyRequestBody =
    StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyRequestBodyDataInstance[];

const StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyRequestBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPatchRequestBodyDataInstanceExpected.extend(
        {
            id: z.number(),
        }
    );

const StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyRequestBodyExpected =
    z.array(
        StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyRequestBodyDataInstanceExpected
    );

export function StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyRequestBodyFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyRequestBodyDataInstance[] {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyRequestBodyExpected.parse(
            raw
        );
    return parsed;
}

export type StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeSymbolPatchResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyResponseBodyDataInstance[];

export type StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPatchResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: z.array(
                StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyResponseBodyDataInstanceExpected
            ),
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyResponseBodyFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPatchManyResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

export interface StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleRequestParams {
    id: number;
}

export interface StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleRequestParamsRaw {
    id: string;
}

const StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleRequestParamsExpected =
    z
        .object({
            id: z.string().regex(/^\d+$/),
        })
        .strict();

export function StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleRequestParamsFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleRequestParams {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleRequestParamsExpected.parse(
            raw
        );
    return { id: parseInt(parsed.id) };
}

export type StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleRequestBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeSymbolPatchRequestBodyDataInstance;
export type StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleRequestBody =
    StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleRequestBodyDataInstance;

const StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleRequestBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPatchRequestBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleRequestBodyExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleRequestBodyDataInstanceExpected;

export function StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleRequestBodyFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleRequestBodyDataInstance {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleRequestBodyExpected.parse(
            raw
        );
    return parsed;
}

export type StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeSymbolPatchResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPatchResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleResponseBodyDataInstanceExpected,
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleResponseBodyFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolPatchSingleResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

// END PATCH

// BEGIN DELETE

export type StrategyTemplateSeaDogDiscountSchemeSymbolDeleteRequestBody = never;
export interface StrategyTemplateSeaDogDiscountSchemeSymbolDeleteResponseBodyDataInstance
    extends StrategyTemplateSeaDogDiscountSchemeSymbolProps {
    id: number;
}

export type StrategyTemplateSeaDogDiscountSchemeSymbolDeleteManyRequestBody =
    StrategyTemplateSeaDogDiscountSchemeSymbolDeleteRequestBody;
export interface StrategyTemplateSeaDogDiscountSchemeSymbolDeleteManyRequestQuery {
    ids: number[];
}

const StrategyTemplateSeaDogDiscountSchemeSymbolDeleteResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolPropsExpected.extend({
        id: z.number(),
    });

export interface StrategyTemplateSeaDogDiscountSchemeSymbolDeleteManyRequestQueryRaw {
    status?: Status;
    ids?: string;
}

const StrategyTemplateSeaDogDiscountSchemeSymbolDeleteManyRequestQueryRawExpected =
    z
        .object({
            ids: z.string().regex(/^\d+(,\d+)*$/),
        })
        .strict();

export function StrategyTemplateSeaDogDiscountSchemeSymbolDeleteManyRequestQueryFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolDeleteManyRequestQuery {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolDeleteManyRequestQueryRawExpected.parse(
            raw
        );
    const ids = parsed.ids?.split(',').map((id) => parseInt(id));
    return { ids };
}
export type StrategyTemplateSeaDogDiscountSchemeSymbolDeleteManyResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeSymbolDeleteResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeSymbolDeleteManyResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemeSymbolDeleteManyResponseBodyDataInstance[];

export type StrategyTemplateSeaDogDiscountSchemeSymbolDeleteManyResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemeSymbolDeleteManyResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemeSymbolDeleteManyResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolDeleteResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolDeleteManyResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: z.array(
                StrategyTemplateSeaDogDiscountSchemeSymbolDeleteManyResponseBodyDataInstanceExpected
            ),
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeSymbolDeleteManyResponseBodyFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolDeleteManyResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolDeleteManyResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

export interface StrategyTemplateSeaDogDiscountSchemeSymbolDeleteSingleRequestParams {
    id: number;
}

export interface StrategyTemplateSeaDogDiscountSchemeSymbolDeleteSingleRequestParamsRaw {
    id: string;
}

const StrategyTemplateSeaDogDiscountSchemeSymbolDeleteSingleRequestParamsExpected =
    z
        .object({
            id: z.string().regex(/^\d+$/),
        })
        .strict();

export function StrategyTemplateSeaDogDiscountSchemeSymbolDeleteSingleRequestParamsFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolDeleteSingleRequestParams {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolDeleteSingleRequestParamsExpected.parse(
            raw
        );
    return { id: parseInt(parsed.id) };
}

export type StrategyTemplateSeaDogDiscountSchemeSymbolDeleteSingleRequestBody =
    StrategyTemplateSeaDogDiscountSchemeSymbolDeleteRequestBody;

export type StrategyTemplateSeaDogDiscountSchemeSymbolDeleteSingleResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeSymbolDeleteResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeSymbolDeleteSingleResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemeSymbolDeleteSingleResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeSymbolDeleteSingleResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemeSymbolDeleteSingleResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemeSymbolDeleteSingleResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeSymbolDeleteResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemeSymbolDeleteSingleResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: StrategyTemplateSeaDogDiscountSchemeSymbolDeleteSingleResponseBodyDataInstanceExpected,
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeSymbolDeleteSingleResponseBodyFromRaw(
    raw: any
): StrategyTemplateSeaDogDiscountSchemeSymbolDeleteSingleResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeSymbolDeleteSingleResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

// END DELETE
