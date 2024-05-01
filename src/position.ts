import { z } from 'zod';

import {
    ResponseBase,
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase,
} from './response.js';
import { refineToPrecision } from './number.js';

export interface PositionRequiredFields {
    symbolId: number;
    strategyId: number;
    quantity: number;
    averagePriceInCents: number;
}

export interface PositionRequiredFieldsOptional {
    symbolId?: number;
    strategyId?: number;
    quantity?: number;
    averagePriceInCents?: number;
}
export interface PositionProps extends PositionRequiredFields {}

export interface PositionPropsOptional extends PositionRequiredFieldsOptional {}

const PositionPropsExpected = z
    .object({
        symbolId: z.number(),
        strategyId: z.number(),
        quantity: z
            .number()
            .step(1, 'Quantity must be an integer')
            .positive('Quantity must be positive')
            .refine(
                refineToPrecision(
                    15
                ) /* JavaScript Number only supports 15 digits of precision, MySQL BigInt supports 19. JS BigInt would support more */,
                'Quantity must have 19 or fewer digits'
            ),
        averagePriceInCents: z
            .number()
            .step(1, 'Average price in cents must be an integer')
            .positive('Average price in cents must be positive')
            .refine(
                refineToPrecision(
                    15
                ) /* JavaScript Number only supports 15 digits of precision, MySQL BigInt supports 19. JS BigInt would support more */,
                'Average price in cents must have 19 or fewer digits'
            ),
    })
    .strict();

const PositionPropsOptionalExpected = PositionPropsExpected.partial();

export function PositionPropsFromRaw(raw: any): PositionProps {
    const parsed = PositionPropsExpected.parse(raw);
    return parsed;
}
export interface PositionModelInterface extends PositionRequiredFields {
    id: number;
}

export interface PositionResponseBodyDataInstance extends PositionProps {
    id: number;
}

export const PositionResponseBodyDataInstanceExpected =
    PositionPropsExpected.extend({
        id: z.number(),
    });

// BEGIN GET

export type PositionGetRequestBody = never;
export type PositionGetResponseBodyDataInstance =
    PositionResponseBodyDataInstance;

export const PositionGetResponseBodyDataInstanceExpected =
    PositionResponseBodyDataInstanceExpected;

export type PositionGetManyRequestBody = PositionGetRequestBody;
export interface PositionGetManyRequestQuery {
    symbolId?: number;
    strategyId?: number;
    ids?: number[];
}
export interface PositionGetManyRequestQueryRaw {
    symbolId?: string;
    strategyId?: string;
    ids?: string;
}

const PositionGetManyRequestQueryRawExpected = z
    .object({
        symbolId: z.string().regex(/^\d+$/).optional(),
        strategyId: z.string().regex(/^\d+$/).optional(),
        ids: z
            .string()
            .regex(/^(\d+)?(,\d+)*$/, {
                message:
                    'IDs field should contain only comma-separated numbers',
            })
            .optional(),
    })
    .strict();

export function PositionGetManyRequestQueryFromRaw(
    raw: any
): PositionGetManyRequestQuery {
    const parsed = PositionGetManyRequestQueryRawExpected.parse(raw);
    const ids =
        undefined === parsed.ids
            ? undefined
            : parsed.ids === ''
            ? []
            : parsed.ids.split(',').map((id) => parseInt(id));
    const symbolId =
        undefined === parsed.symbolId ? undefined : parseInt(parsed.symbolId);
    const strategyId =
        undefined === parsed.strategyId
            ? undefined
            : parseInt(parsed.strategyId);
    const toReturn: PositionGetManyRequestQuery = {};
    if (undefined !== ids) {
        toReturn.ids = ids;
    }
    if (undefined !== symbolId) {
        toReturn.symbolId = symbolId;
    }
    if (undefined !== strategyId) {
        toReturn.strategyId = strategyId;
    }
    return toReturn;
}
export type PositionGetManyResponseBodyDataInstance =
    PositionGetResponseBodyDataInstance;

export type PositionGetManyResponseBodyData =
    PositionGetManyResponseBodyDataInstance[];

export type PositionGetManyResponseBody =
    ResponseBase<PositionGetManyResponseBodyData>;

const PositionGetManyResponseBodyDataInstanceExpected =
    PositionGetResponseBodyDataInstanceExpected;

const PositionGetManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(PositionGetManyResponseBodyDataInstanceExpected),
    }),
]);

export function PositionGetManyResponseBodyFromRaw(
    raw: any
): PositionGetManyResponseBody {
    const parsed = PositionGetManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface PositionGetSingleRequestParams {
    id: number;
}

export interface PositionGetSingleRequestParamsRaw {
    id: string;
}

const PositionGetSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function PositionGetSingleRequestParamsFromRaw(
    raw: any
): PositionGetSingleRequestParams {
    const parsed = PositionGetSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type PositionGetSingleRequestBody = PositionGetRequestBody;

export type PositionGetSingleResponseBodyDataInstance =
    PositionGetResponseBodyDataInstance;

export type PositionGetSingleResponseBodyData =
    PositionGetSingleResponseBodyDataInstance;

export type PositionGetSingleResponseBody =
    ResponseBase<PositionGetSingleResponseBodyData>;

const PositionGetSingleResponseBodyDataInstanceExpected =
    PositionGetResponseBodyDataInstanceExpected;

const PositionGetSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: PositionGetSingleResponseBodyDataInstanceExpected,
    }),
]);

export function PositionGetSingleResponseBodyFromRaw(
    raw: any
): PositionGetSingleResponseBody {
    const parsed = PositionGetSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END GET

// BEGIN POST

export interface PositionPostRequestBodyDataInstance extends PositionProps {}
export type PositionPostResponseBodyDataInstance =
    PositionResponseBodyDataInstance;
const PositionPostRequestBodyDataInstanceExpected = PositionPropsExpected;

const PositionPostResponseBodyDataInstanceExpected =
    PositionResponseBodyDataInstanceExpected;

const PositionPostManyRequestBodyDataInstanceExpected =
    PositionPostRequestBodyDataInstanceExpected;

const PositionPostManyRequestBodyExpected = z.array(
    PositionPostManyRequestBodyDataInstanceExpected
);

export type PositionPostManyRequestBodyDataInstance =
    PositionPostRequestBodyDataInstance;

export type PositionPostManyRequestBody =
    PositionPostManyRequestBodyDataInstance[];

export function PositionPostManyRequestBodyFromRaw(
    raw: any
): PositionPostManyRequestBodyDataInstance[] {
    const parsed = PositionPostManyRequestBodyExpected.parse(raw);
    return parsed;
}
export type PositionPostManyResponseBodyDataInstance =
    PositionPostResponseBodyDataInstance;

export type PositionPostManyResponseBodyData =
    PositionPostManyResponseBodyDataInstance[];

export type PositionPostManyResponseBody =
    ResponseBase<PositionPostManyResponseBodyData>;

const PositionPostManyResponseBodyDataInstanceExpected =
    PositionPostResponseBodyDataInstanceExpected;

const PositionPostManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(PositionPostManyResponseBodyDataInstanceExpected),
    }),
]);

export function PositionPostManyResponseBodyFromRaw(
    raw: any
): PositionPostManyResponseBody {
    const parsed = PositionPostManyResponseBodyExpected.parse(raw);
    return parsed;
}

export type PositionPostSingleRequestBodyDataInstance =
    PositionPostRequestBodyDataInstance;
export type PositionPostSingleRequestBody =
    PositionPostSingleRequestBodyDataInstance;

const PositionPostSingleRequestBodyDataInstanceExpected =
    PositionPostRequestBodyDataInstanceExpected;

const PositionPostSingleRequestBodyExpected =
    PositionPostSingleRequestBodyDataInstanceExpected;

export function PositionPostSingleRequestBodyFromRaw(
    raw: any
): PositionPostSingleRequestBodyDataInstance {
    const parsed = PositionPostSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type PositionPostSingleResponseBodyDataInstance =
    PositionPostResponseBodyDataInstance;

export type PositionPostSingleResponseBodyData =
    PositionPostSingleResponseBodyDataInstance;

export type PositionPostSingleResponseBody =
    ResponseBase<PositionPostSingleResponseBodyData>;

const PositionPostSingleResponseBodyDataInstanceExpected =
    PositionPostResponseBodyDataInstanceExpected;

const PositionPostSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: PositionPostSingleResponseBodyDataInstanceExpected,
    }),
]);

export function PositionPostSingleResponseBodyFromRaw(
    raw: any
): PositionPostSingleResponseBody {
    const parsed = PositionPostSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END POST

// BEGIN PUT

export interface PositionPutRequestBodyDataInstance extends PositionProps {}
export type PositionPutResponseBodyDataInstance =
    PositionResponseBodyDataInstance;

const PositionPutRequestBodyDataInstanceExpected = PositionPropsExpected;

const PositionPutResponseBodyDataInstanceExpected =
    PositionResponseBodyDataInstanceExpected;

export interface PositionPutManyRequestBodyDataInstance
    extends PositionPutRequestBodyDataInstance {
    id: number;
}
export type PositionPutManyRequestBody =
    PositionPutManyRequestBodyDataInstance[];

const PositionPutManyRequestBodyDataInstanceExpected =
    PositionPutRequestBodyDataInstanceExpected.extend({
        id: z.number(),
    });

const PositionPutManyRequestBodyExpected = z.array(
    PositionPutManyRequestBodyDataInstanceExpected
);

export function PositionPutManyRequestBodyFromRaw(
    raw: any
): PositionPutManyRequestBodyDataInstance[] {
    const parsed = PositionPutManyRequestBodyExpected.parse(raw);
    return parsed;
}

export type PositionPutManyResponseBodyDataInstance =
    PositionPutResponseBodyDataInstance;

export type PositionPutManyResponseBodyData =
    PositionPutManyResponseBodyDataInstance[];

export type PositionPutManyResponseBody =
    ResponseBase<PositionPutManyResponseBodyData>;

const PositionPutManyResponseBodyDataInstanceExpected =
    PositionPutResponseBodyDataInstanceExpected;

const PositionPutManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(PositionPutManyResponseBodyDataInstanceExpected),
    }),
]);

export function PositionPutManyResponseBodyFromRaw(
    raw: any
): PositionPutManyResponseBody {
    const parsed = PositionPutManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface PositionPutSingleRequestParams {
    id: number;
}

export interface PositionPutSingleRequestParamsRaw {
    id: string;
}

const PositionPutSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function PositionPutSingleRequestParamsFromRaw(
    raw: any
): PositionPutSingleRequestParams {
    const parsed = PositionPutSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type PositionPutSingleRequestBodyDataInstance =
    PositionPutRequestBodyDataInstance;
export type PositionPutSingleRequestBody =
    PositionPutSingleRequestBodyDataInstance;

const PositionPutSingleRequestBodyDataInstanceExpected =
    PositionPutRequestBodyDataInstanceExpected;

const PositionPutSingleRequestBodyExpected =
    PositionPutSingleRequestBodyDataInstanceExpected;

export function PositionPutSingleRequestBodyFromRaw(
    raw: any
): PositionPutSingleRequestBodyDataInstance {
    const parsed = PositionPutSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type PositionPutSingleResponseBodyDataInstance =
    PositionPutResponseBodyDataInstance;

export type PositionPutSingleResponseBodyData =
    PositionPutSingleResponseBodyDataInstance;

export type PositionPutSingleResponseBody =
    ResponseBase<PositionPutSingleResponseBodyData>;

const PositionPutSingleResponseBodyDataInstanceExpected =
    PositionPutResponseBodyDataInstanceExpected;

const PositionPutSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: PositionPutSingleResponseBodyDataInstanceExpected,
    }),
]);

export function PositionPutSingleResponseBodyFromRaw(
    raw: any
): PositionPutSingleResponseBody {
    const parsed = PositionPutSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END PUT

// BEGIN PATCH

export interface PositionPatchRequestBodyDataInstance
    extends PositionPropsOptional {}
export type PositionPatchResponseBodyDataInstance =
    PositionResponseBodyDataInstance;

const PositionPatchRequestBodyDataInstanceExpected =
    PositionPropsOptionalExpected;

const PositionPatchResponseBodyDataInstanceExpected =
    PositionResponseBodyDataInstanceExpected;

export interface PositionPatchManyRequestBodyDataInstance
    extends PositionPatchRequestBodyDataInstance {
    id: number;
}
export type PositionPatchManyRequestBody =
    PositionPatchManyRequestBodyDataInstance[];

const PositionPatchManyRequestBodyDataInstanceExpected =
    PositionPatchRequestBodyDataInstanceExpected.extend({
        id: z.number(),
    });

const PositionPatchManyRequestBodyExpected = z.array(
    PositionPatchManyRequestBodyDataInstanceExpected
);

export function PositionPatchManyRequestBodyFromRaw(
    raw: any
): PositionPatchManyRequestBodyDataInstance[] {
    const parsed = PositionPatchManyRequestBodyExpected.parse(raw);
    return parsed;
}

export type PositionPatchManyResponseBodyDataInstance =
    PositionPatchResponseBodyDataInstance;

export type PositionPatchManyResponseBodyData =
    PositionPatchManyResponseBodyDataInstance[];

export type PositionPatchManyResponseBody =
    ResponseBase<PositionPatchManyResponseBodyData>;

const PositionPatchManyResponseBodyDataInstanceExpected =
    PositionPatchResponseBodyDataInstanceExpected;

const PositionPatchManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(PositionPatchManyResponseBodyDataInstanceExpected),
    }),
]);

export function PositionPatchManyResponseBodyFromRaw(
    raw: any
): PositionPatchManyResponseBody {
    const parsed = PositionPatchManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface PositionPatchSingleRequestParams {
    id: number;
}

export interface PositionPatchSingleRequestParamsRaw {
    id: string;
}

const PositionPatchSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function PositionPatchSingleRequestParamsFromRaw(
    raw: any
): PositionPatchSingleRequestParams {
    const parsed = PositionPatchSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type PositionPatchSingleRequestBodyDataInstance =
    PositionPatchRequestBodyDataInstance;
export type PositionPatchSingleRequestBody =
    PositionPatchSingleRequestBodyDataInstance;

const PositionPatchSingleRequestBodyDataInstanceExpected =
    PositionPatchRequestBodyDataInstanceExpected;

const PositionPatchSingleRequestBodyExpected =
    PositionPatchSingleRequestBodyDataInstanceExpected;

export function PositionPatchSingleRequestBodyFromRaw(
    raw: any
): PositionPatchSingleRequestBodyDataInstance {
    const parsed = PositionPatchSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type PositionPatchSingleResponseBodyDataInstance =
    PositionPatchResponseBodyDataInstance;

export type PositionPatchSingleResponseBodyData =
    PositionPatchSingleResponseBodyDataInstance;

export type PositionPatchSingleResponseBody =
    ResponseBase<PositionPatchSingleResponseBodyData>;

const PositionPatchSingleResponseBodyDataInstanceExpected =
    PositionPatchResponseBodyDataInstanceExpected;

const PositionPatchSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: PositionPatchSingleResponseBodyDataInstanceExpected,
    }),
]);

export function PositionPatchSingleResponseBodyFromRaw(
    raw: any
): PositionPatchSingleResponseBody {
    const parsed = PositionPatchSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END PATCH

// BEGIN DELETE

export type PositionDeleteRequestBody = never;
export type PositionDeleteResponseBodyDataInstance =
    PositionResponseBodyDataInstance;

export type PositionDeleteManyRequestBody = PositionDeleteRequestBody;
export interface PositionDeleteManyRequestQuery {
    ids: number[];
}

const PositionDeleteResponseBodyDataInstanceExpected =
    PositionResponseBodyDataInstanceExpected;

export interface PositionDeleteManyRequestQueryRaw {
    ids: string;
}

const PositionDeleteManyRequestQueryRawExpected = z
    .object({
        ids: z.string().regex(/^(\d+)?(,\d+)*$/, {
            message: 'IDs field should contain only comma-separated numbers',
        }),
    })
    .strict();

export function PositionDeleteManyRequestQueryFromRaw(
    raw: any
): PositionDeleteManyRequestQuery {
    const parsed = PositionDeleteManyRequestQueryRawExpected.parse(raw);
    const ids =
        parsed.ids === ''
            ? []
            : parsed.ids.split(',').map((id) => parseInt(id));
    return { ids };
}
export type PositionDeleteManyResponseBodyDataInstance =
    PositionDeleteResponseBodyDataInstance;

export type PositionDeleteManyResponseBodyData =
    PositionDeleteManyResponseBodyDataInstance[];

export type PositionDeleteManyResponseBody =
    ResponseBase<PositionDeleteManyResponseBodyData>;

const PositionDeleteManyResponseBodyDataInstanceExpected =
    PositionDeleteResponseBodyDataInstanceExpected;

const PositionDeleteManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(PositionDeleteManyResponseBodyDataInstanceExpected),
    }),
]);

export function PositionDeleteManyResponseBodyFromRaw(
    raw: any
): PositionDeleteManyResponseBody {
    const parsed = PositionDeleteManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface PositionDeleteSingleRequestParams {
    id: number;
}

export interface PositionDeleteSingleRequestParamsRaw {
    id: string;
}

const PositionDeleteSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function PositionDeleteSingleRequestParamsFromRaw(
    raw: any
): PositionDeleteSingleRequestParams {
    const parsed = PositionDeleteSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type PositionDeleteSingleRequestBody = PositionDeleteRequestBody;

export type PositionDeleteSingleResponseBodyDataInstance =
    PositionDeleteResponseBodyDataInstance;

export type PositionDeleteSingleResponseBodyData =
    PositionDeleteSingleResponseBodyDataInstance;

export type PositionDeleteSingleResponseBody =
    ResponseBase<PositionDeleteSingleResponseBodyData>;

const PositionDeleteSingleResponseBodyDataInstanceExpected =
    PositionDeleteResponseBodyDataInstanceExpected;

const PositionDeleteSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: PositionDeleteSingleResponseBodyDataInstanceExpected,
    }),
]);

export function PositionDeleteSingleResponseBodyFromRaw(
    raw: any
): PositionDeleteSingleResponseBody {
    const parsed = PositionDeleteSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END DELETE
