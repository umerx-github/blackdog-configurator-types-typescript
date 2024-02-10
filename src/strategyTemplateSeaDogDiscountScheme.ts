import { z } from 'zod';

import {
    ResponseBase,
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase,
} from './response.js';
import { SymbolModelInterface } from './symbol.js';

// Single source of truth:
const StatusConst = ['active', 'inactive'] as const;
// Use in a Zod Schema:
export const StatusSchema = z.enum(StatusConst);
// Type to use in the code:
// = "Salmon" | "Tuna" | "Trout"
export type Status = (typeof StatusConst)[number];

export interface StrategyTemplateSeaDogDiscountSchemeRequiredFields {
    strategyId: number;
    status: Status;
    sellAtPercentile: number;
    alpacaAPIKey: string;
    alpacaAPISecret: string;
    alpacaAPIPaper: boolean;
}

export interface StrategyTemplateSeaDogDiscountSchemeRequiredFieldsOptional {
    strategyId?: number;
    status?: Status;
    sellAtPercentile?: number;
    alpacaAPIKey?: string;
    alpacaAPISecret?: string;
    alpacaAPIPaper?: boolean;
}
export interface StrategyTemplateSeaDogDiscountSchemeProps
    extends StrategyTemplateSeaDogDiscountSchemeRequiredFields {
    symbolIds: number[];
}

export interface StrategyTemplateSeaDogDiscountSchemePropsOptional
    extends StrategyTemplateSeaDogDiscountSchemeRequiredFieldsOptional {
    symbolIds?: number[];
}

const StrategyTemplateSeaDogDiscountSchemePropsExpected = z.object({
    strategyId: z.number(),
    status: StatusSchema,
    sellAtPercentile: z.number(),
    symbolIds: z.array(z.number()),
    alpacaAPIKey: z.string(),
    alpacaAPISecret: z.string(),
    alpacaAPIPaper: z.boolean(),
});

const StrategyTemplateSeaDogDiscountSchemePropsOptionalExpected =
    StrategyTemplateSeaDogDiscountSchemePropsExpected.partial();

export function StrategyTemplateSeaDogDiscountSchemePropsFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemeProps
): StrategyTemplateSeaDogDiscountSchemeProps {
    const parsed = StrategyTemplateSeaDogDiscountSchemePropsExpected.parse(raw);
    return parsed;
}
export interface StrategyTemplateSeaDogDiscountSchemeModelInterface
    extends StrategyTemplateSeaDogDiscountSchemeRequiredFields {
    id: number;
    symbols?: SymbolModelInterface[];
}

export interface StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance
    extends StrategyTemplateSeaDogDiscountSchemeProps {
    id: number;
}

// BEGIN GET

export type StrategyTemplateSeaDogDiscountSchemeGetRequestBody = never;
export type StrategyTemplateSeaDogDiscountSchemeGetResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance;

const StrategyTemplateSeaDogDiscountSchemeGetResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePropsExpected.extend({
        id: z.number(),
    });

export type StrategyTemplateSeaDogDiscountSchemeGetManyRequestBody =
    StrategyTemplateSeaDogDiscountSchemeGetRequestBody;
export interface StrategyTemplateSeaDogDiscountSchemeGetManyRequestQuery {
    strategyId?: number;
    status?: Status;
    ids?: number[];
}
export interface StrategyTemplateSeaDogDiscountSchemeGetManyRequestQueryRaw {
    strategyId?: string;
    status?: Status;
    ids?: string;
}

const StrategyTemplateSeaDogDiscountSchemeGetManyRequestQueryRawExpected =
    z.object({
        strategyId: z.string().regex(/^\d+$/).optional(),
        status: StatusSchema.optional(),
        ids: z
            .string()
            .regex(/^\d+(,\d+)*$/)
            .optional(),
    });

export function StrategyTemplateSeaDogDiscountSchemeGetManyRequestQueryFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemeGetManyRequestQueryRaw
): StrategyTemplateSeaDogDiscountSchemeGetManyRequestQuery {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeGetManyRequestQueryRawExpected.parse(
            raw
        );
    const ids = parsed.ids?.split(',').map((id) => parseInt(id));
    const strategyId =
        undefined === parsed.strategyId
            ? undefined
            : parseInt(parsed.strategyId);
    return { strategyId: strategyId, status: parsed.status, ids };
}
export type StrategyTemplateSeaDogDiscountSchemeGetManyResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeGetResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeGetManyResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemeGetManyResponseBodyDataInstance[];

export type StrategyTemplateSeaDogDiscountSchemeGetManyResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemeGetManyResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemeGetManyResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeGetResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemeGetManyResponseBodyExpected = z.union(
    [
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: z.array(
                StrategyTemplateSeaDogDiscountSchemeGetManyResponseBodyDataInstanceExpected
            ),
        }),
    ]
);

export function StrategyTemplateSeaDogDiscountSchemeGetManyResponseBodyFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemeGetManyResponseBody
): StrategyTemplateSeaDogDiscountSchemeGetManyResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeGetManyResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

export interface StrategyTemplateSeaDogDiscountSchemeGetSingleRequestParams {
    id: number;
}

export interface StrategyTemplateSeaDogDiscountSchemeGetSingleRequestParamsRaw {
    id: string;
}

const StrategyTemplateSeaDogDiscountSchemeGetSingleRequestParamsExpected =
    z.object({
        id: z.string().regex(/^\d+$/),
    });

export function StrategyTemplateSeaDogDiscountSchemeGetSingleRequestParamsFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemeGetSingleRequestParamsRaw
): StrategyTemplateSeaDogDiscountSchemeGetSingleRequestParams {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeGetSingleRequestParamsExpected.parse(
            raw
        );
    return { id: parseInt(parsed.id) };
}

export type StrategyTemplateSeaDogDiscountSchemeGetSingleRequestBody =
    StrategyTemplateSeaDogDiscountSchemeGetRequestBody;

export type StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeGetResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeGetResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBodyDataInstanceExpected,
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBodyFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBody
): StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeGetSingleResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

// END GET

// BEGIN POST

export interface StrategyTemplateSeaDogDiscountSchemePostRequestBodyDataInstance
    extends StrategyTemplateSeaDogDiscountSchemeProps {}
export type StrategyTemplateSeaDogDiscountSchemePostResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance;
const StrategyTemplateSeaDogDiscountSchemePostRequestBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePropsExpected;

const StrategyTemplateSeaDogDiscountSchemePostResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePropsExpected.extend({
        id: z.number(),
    });

const StrategyTemplateSeaDogDiscountSchemePostManyRequestBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePostRequestBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemePostManyRequestBodyExpected = z.array(
    StrategyTemplateSeaDogDiscountSchemePostManyRequestBodyDataInstanceExpected
);

export type StrategyTemplateSeaDogDiscountSchemePostManyRequestBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemePostRequestBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemePostManyRequestBody =
    StrategyTemplateSeaDogDiscountSchemePostManyRequestBodyDataInstance[];

export function StrategyTemplateSeaDogDiscountSchemePostManyRequestBodyFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemePostManyRequestBodyDataInstance[]
): StrategyTemplateSeaDogDiscountSchemePostManyRequestBodyDataInstance[] {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePostManyRequestBodyExpected.parse(
            raw
        );
    return parsed;
}
export type StrategyTemplateSeaDogDiscountSchemePostManyResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemePostResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemePostManyResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemePostManyResponseBodyDataInstance[];

export type StrategyTemplateSeaDogDiscountSchemePostManyResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemePostManyResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemePostManyResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePostResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemePostManyResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: z.array(
                StrategyTemplateSeaDogDiscountSchemePostManyResponseBodyDataInstanceExpected
            ),
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemePostManyResponseBodyFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemePostManyResponseBody
): StrategyTemplateSeaDogDiscountSchemePostManyResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePostManyResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

export type StrategyTemplateSeaDogDiscountSchemePostSingleRequestBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemePostRequestBodyDataInstance;
export type StrategyTemplateSeaDogDiscountSchemePostSingleRequestBody =
    StrategyTemplateSeaDogDiscountSchemePostSingleRequestBodyDataInstance;

const StrategyTemplateSeaDogDiscountSchemePostSingleRequestBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePostRequestBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemePostSingleRequestBodyExpected =
    StrategyTemplateSeaDogDiscountSchemePostSingleRequestBodyDataInstanceExpected;

export function StrategyTemplateSeaDogDiscountSchemePostSingleRequestBodyFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemePostSingleRequestBodyDataInstance
): StrategyTemplateSeaDogDiscountSchemePostSingleRequestBodyDataInstance {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePostSingleRequestBodyExpected.parse(
            raw
        );
    return parsed;
}

export type StrategyTemplateSeaDogDiscountSchemePostSingleResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemePostResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemePostSingleResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemePostSingleResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemePostSingleResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemePostSingleResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemePostSingleResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePostResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemePostSingleResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: StrategyTemplateSeaDogDiscountSchemePostSingleResponseBodyDataInstanceExpected,
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemePostSingleResponseBodyFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemePostSingleResponseBody
): StrategyTemplateSeaDogDiscountSchemePostSingleResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePostSingleResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

// END POST

// BEGIN PUT

export interface StrategyTemplateSeaDogDiscountSchemePutRequestBodyDataInstance
    extends StrategyTemplateSeaDogDiscountSchemeProps {}
export type StrategyTemplateSeaDogDiscountSchemePutResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance;

const StrategyTemplateSeaDogDiscountSchemePutRequestBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePropsExpected;

const StrategyTemplateSeaDogDiscountSchemePutResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePropsExpected.extend({
        id: z.number(),
    });

export interface StrategyTemplateSeaDogDiscountSchemePutManyRequestBodyDataInstance
    extends StrategyTemplateSeaDogDiscountSchemePutRequestBodyDataInstance {
    id: number;
}
export type StrategyTemplateSeaDogDiscountSchemePutManyRequestBody =
    StrategyTemplateSeaDogDiscountSchemePutManyRequestBodyDataInstance[];

const StrategyTemplateSeaDogDiscountSchemePutManyRequestBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePutRequestBodyDataInstanceExpected.extend(
        {
            id: z.number(),
        }
    );

const StrategyTemplateSeaDogDiscountSchemePutManyRequestBodyExpected = z.array(
    StrategyTemplateSeaDogDiscountSchemePutManyRequestBodyDataInstanceExpected
);

export function StrategyTemplateSeaDogDiscountSchemePutManyRequestBodyFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemePutManyRequestBodyDataInstance[]
): StrategyTemplateSeaDogDiscountSchemePutManyRequestBodyDataInstance[] {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePutManyRequestBodyExpected.parse(
            raw
        );
    return parsed;
}

export type StrategyTemplateSeaDogDiscountSchemePutManyResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemePutResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemePutManyResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemePutManyResponseBodyDataInstance[];

export type StrategyTemplateSeaDogDiscountSchemePutManyResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemePutManyResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemePutManyResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePutResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemePutManyResponseBodyExpected = z.union(
    [
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: z.array(
                StrategyTemplateSeaDogDiscountSchemePutManyResponseBodyDataInstanceExpected
            ),
        }),
    ]
);

export function StrategyTemplateSeaDogDiscountSchemePutManyResponseBodyFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemePutManyResponseBody
): StrategyTemplateSeaDogDiscountSchemePutManyResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePutManyResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

export interface StrategyTemplateSeaDogDiscountSchemePutSingleRequestParams {
    id: number;
}

export interface StrategyTemplateSeaDogDiscountSchemePutSingleRequestParamsRaw {
    id: string;
}

const StrategyTemplateSeaDogDiscountSchemePutSingleRequestParamsExpected =
    z.object({
        id: z.string().regex(/^\d+$/),
    });

export function StrategyTemplateSeaDogDiscountSchemePutSingleRequestParamsFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemePutSingleRequestParamsRaw
): StrategyTemplateSeaDogDiscountSchemePutSingleRequestParams {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePutSingleRequestParamsExpected.parse(
            raw
        );
    return { id: parseInt(parsed.id) };
}

export type StrategyTemplateSeaDogDiscountSchemePutSingleRequestBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemePutRequestBodyDataInstance;
export type StrategyTemplateSeaDogDiscountSchemePutSingleRequestBody =
    StrategyTemplateSeaDogDiscountSchemePutSingleRequestBodyDataInstance;

const StrategyTemplateSeaDogDiscountSchemePutSingleRequestBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePutRequestBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemePutSingleRequestBodyExpected =
    StrategyTemplateSeaDogDiscountSchemePutSingleRequestBodyDataInstanceExpected;

export function StrategyTemplateSeaDogDiscountSchemePutSingleRequestBodyFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemePutSingleRequestBodyDataInstance
): StrategyTemplateSeaDogDiscountSchemePutSingleRequestBodyDataInstance {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePutSingleRequestBodyExpected.parse(
            raw
        );
    return parsed;
}

export type StrategyTemplateSeaDogDiscountSchemePutSingleResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemePutResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemePutSingleResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemePutSingleResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemePutSingleResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemePutSingleResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemePutSingleResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePutResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemePutSingleResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: StrategyTemplateSeaDogDiscountSchemePutSingleResponseBodyDataInstanceExpected,
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemePutSingleResponseBodyFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemePutSingleResponseBody
): StrategyTemplateSeaDogDiscountSchemePutSingleResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePutSingleResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

// END PUT

// BEGIN PATCH

export interface StrategyTemplateSeaDogDiscountSchemePatchRequestBodyDataInstance
    extends StrategyTemplateSeaDogDiscountSchemePropsOptional {}
export type StrategyTemplateSeaDogDiscountSchemePatchResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance;

const StrategyTemplateSeaDogDiscountSchemePatchRequestBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePropsOptionalExpected;

const StrategyTemplateSeaDogDiscountSchemePatchResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePropsExpected.extend({
        id: z.number(),
    });

export interface StrategyTemplateSeaDogDiscountSchemePatchManyRequestBodyDataInstance
    extends StrategyTemplateSeaDogDiscountSchemePatchRequestBodyDataInstance {
    id: number;
}
export type StrategyTemplateSeaDogDiscountSchemePatchManyRequestBody =
    StrategyTemplateSeaDogDiscountSchemePatchManyRequestBodyDataInstance[];

const StrategyTemplateSeaDogDiscountSchemePatchManyRequestBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePatchRequestBodyDataInstanceExpected.extend(
        {
            id: z.number(),
        }
    );

const StrategyTemplateSeaDogDiscountSchemePatchManyRequestBodyExpected =
    z.array(
        StrategyTemplateSeaDogDiscountSchemePatchManyRequestBodyDataInstanceExpected
    );

export function StrategyTemplateSeaDogDiscountSchemePatchManyRequestBodyFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemePatchManyRequestBodyDataInstance[]
): StrategyTemplateSeaDogDiscountSchemePatchManyRequestBodyDataInstance[] {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePatchManyRequestBodyExpected.parse(
            raw
        );
    return parsed;
}

export type StrategyTemplateSeaDogDiscountSchemePatchManyResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemePatchResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemePatchManyResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemePatchManyResponseBodyDataInstance[];

export type StrategyTemplateSeaDogDiscountSchemePatchManyResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemePatchManyResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemePatchManyResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePatchResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemePatchManyResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: z.array(
                StrategyTemplateSeaDogDiscountSchemePatchManyResponseBodyDataInstanceExpected
            ),
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemePatchManyResponseBodyFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemePatchManyResponseBody
): StrategyTemplateSeaDogDiscountSchemePatchManyResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePatchManyResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

export interface StrategyTemplateSeaDogDiscountSchemePatchSingleRequestParams {
    id: number;
}

export interface StrategyTemplateSeaDogDiscountSchemePatchSingleRequestParamsRaw {
    id: string;
}

const StrategyTemplateSeaDogDiscountSchemePatchSingleRequestParamsExpected =
    z.object({
        id: z.string().regex(/^\d+$/),
    });

export function StrategyTemplateSeaDogDiscountSchemePatchSingleRequestParamsFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemePatchSingleRequestParamsRaw
): StrategyTemplateSeaDogDiscountSchemePatchSingleRequestParams {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePatchSingleRequestParamsExpected.parse(
            raw
        );
    return { id: parseInt(parsed.id) };
}

export type StrategyTemplateSeaDogDiscountSchemePatchSingleRequestBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemePatchRequestBodyDataInstance;
export type StrategyTemplateSeaDogDiscountSchemePatchSingleRequestBody =
    StrategyTemplateSeaDogDiscountSchemePatchSingleRequestBodyDataInstance;

const StrategyTemplateSeaDogDiscountSchemePatchSingleRequestBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePatchRequestBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemePatchSingleRequestBodyExpected =
    StrategyTemplateSeaDogDiscountSchemePatchSingleRequestBodyDataInstanceExpected;

export function StrategyTemplateSeaDogDiscountSchemePatchSingleRequestBodyFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemePatchSingleRequestBodyDataInstance
): StrategyTemplateSeaDogDiscountSchemePatchSingleRequestBodyDataInstance {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePatchSingleRequestBodyExpected.parse(
            raw
        );
    return parsed;
}

export type StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemePatchResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePatchResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBodyDataInstanceExpected,
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBodyFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBody
): StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemePatchSingleResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

// END PATCH

// BEGIN DELETE

export type StrategyTemplateSeaDogDiscountSchemeDeleteRequestBody = never;
export type StrategyTemplateSeaDogDiscountSchemeDeleteResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeDeleteManyRequestBody =
    StrategyTemplateSeaDogDiscountSchemeDeleteRequestBody;
export interface StrategyTemplateSeaDogDiscountSchemeDeleteManyRequestQuery {
    ids: number[];
}

const StrategyTemplateSeaDogDiscountSchemeDeleteResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemePropsExpected.extend({
        id: z.number(),
    });

export interface StrategyTemplateSeaDogDiscountSchemeDeleteManyRequestQueryRaw {
    status?: Status;
    ids?: string;
}

const StrategyTemplateSeaDogDiscountSchemeDeleteManyRequestQueryRawExpected =
    z.object({
        ids: z.string().regex(/^\d+(,\d+)*$/),
    });

export function StrategyTemplateSeaDogDiscountSchemeDeleteManyRequestQueryFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemeDeleteManyRequestQueryRaw
): StrategyTemplateSeaDogDiscountSchemeDeleteManyRequestQuery {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeDeleteManyRequestQueryRawExpected.parse(
            raw
        );
    const ids = parsed.ids?.split(',').map((id) => parseInt(id));
    return { ids };
}
export type StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeDeleteResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBodyDataInstance[];

export type StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeDeleteResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: z.array(
                StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBodyDataInstanceExpected
            ),
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBodyFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBody
): StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeDeleteManyResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

export interface StrategyTemplateSeaDogDiscountSchemeDeleteSingleRequestParams {
    id: number;
}

export interface StrategyTemplateSeaDogDiscountSchemeDeleteSingleRequestParamsRaw {
    id: string;
}

const StrategyTemplateSeaDogDiscountSchemeDeleteSingleRequestParamsExpected =
    z.object({
        id: z.string().regex(/^\d+$/),
    });

export function StrategyTemplateSeaDogDiscountSchemeDeleteSingleRequestParamsFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemeDeleteSingleRequestParamsRaw
): StrategyTemplateSeaDogDiscountSchemeDeleteSingleRequestParams {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeDeleteSingleRequestParamsExpected.parse(
            raw
        );
    return { id: parseInt(parsed.id) };
}

export type StrategyTemplateSeaDogDiscountSchemeDeleteSingleRequestBody =
    StrategyTemplateSeaDogDiscountSchemeDeleteRequestBody;

export type StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBodyDataInstance =
    StrategyTemplateSeaDogDiscountSchemeDeleteResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBodyData =
    StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBodyDataInstance;

export type StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBody =
    ResponseBase<StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBodyData>;

const StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBodyDataInstanceExpected =
    StrategyTemplateSeaDogDiscountSchemeDeleteResponseBodyDataInstanceExpected;

const StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBodyExpected =
    z.union([
        ResponseBaseErrorExpected,
        ResponseBaseSuccessExpectedBase.extend({
            data: StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBodyDataInstanceExpected,
        }),
    ]);

export function StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBodyFromRaw(
    raw: StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBody
): StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBody {
    const parsed =
        StrategyTemplateSeaDogDiscountSchemeDeleteSingleResponseBodyExpected.parse(
            raw
        );
    return parsed;
}

// END DELETE
