import { z } from 'zod';

import {
    ResponseBase,
    ResponseBasePaginated,
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase,
    ResponseBaseSuccessPaginatedExpectedBase,
} from './response.js';

import {
    RequestQueryBasePaginated,
    RequestQueryBasePaginatedRaw,
    RequestQueryBasePaginatedRawExpected,
} from './request.js';
import { refineToPrecision } from './number.js';
import { TimestampSchema } from './timestamp.js';

export interface StrategyValueRequiredFields {
    strategyId: number;
    valueInCents: number;
}

export interface StrategyValueRequiredFieldsOptional {
    strategyId?: number;
    valueInCents?: number;
}
export interface StrategyValueProps extends StrategyValueRequiredFields {}

export interface StrategyValuePropsOptional
    extends StrategyValueRequiredFieldsOptional {}

const StrategyValuePropsExpected = z
    .object({
        strategyId: z.number(),
        valueInCents: z
            .number()
            .refine(
                refineToPrecision(15),
                `valueInCents must have 15 or fewer digits`
            ),
        // must be object that will be serialized to JSON
    })
    .strict();

const StrategyValuePropsOptionalExpected = StrategyValuePropsExpected.partial();

export function StrategyValuePropsFromRaw(raw: any): StrategyValueProps {
    const parsed = StrategyValuePropsExpected.parse(raw);
    return parsed;
}

export interface StrategyValueModelProps extends StrategyValueRequiredFields {
    timestamp: number;
}
export interface StrategyValueModelInterface extends StrategyValueModelProps {
    id: number;
}

const StrategyValueModelInterfaceExpected = StrategyValuePropsExpected.extend({
    id: z.number(),
    // timestamp limitations: https://stackoverflow.com/a/54802348
    timestamp: TimestampSchema,
});

export interface StrategyValueResponseBodyDataInstance
    extends StrategyValueModelInterface {}

const StrategyValueResponseBodyDataInstanceExpected =
    StrategyValueModelInterfaceExpected;

// BEGIN GET

export type StrategyValueGetRequestBody = never;
export type StrategyValueGetResponseBodyDataInstance =
    StrategyValueResponseBodyDataInstance;

const StrategyValueGetResponseBodyDataInstanceExpected =
    StrategyValueResponseBodyDataInstanceExpected;
export type StrategyValueGetManyRequestBody = StrategyValueGetRequestBody;
export interface StrategyValueGetManyRequestQuery
    extends RequestQueryBasePaginated {
    strategyIds?: number[];
    ids?: number[];
    startTimestamp?: number;
    endTimestamp?: number;
}
export interface StrategyValueGetManyRequestQueryRaw
    extends RequestQueryBasePaginatedRaw {
    strategyIds?: string;
    ids?: string;
    startTimestamp?: string;
    endTimestamp?: string;
}

const StrategyValueGetManyRequestQueryRawExpected =
    RequestQueryBasePaginatedRawExpected.extend({
        strategyIds: z
            .string()
            .regex(/^(\d+)?(,\d+)*$/, {
                message:
                    'IDs field should contain only comma-separated numbers',
            })
            .optional(),
        ids: z
            .string()
            .regex(/^(\d+)?(,\d+)*$/, {
                message:
                    'IDs field should contain only comma-separated numbers',
            })
            .optional(),
        startTimestamp: z.string().regex(/^\d+$/).optional(),
        endTimestamp: z.string().regex(/^\d+$/).optional(),
    }).strict();

export function StrategyValueGetManyRequestQueryFromRaw(
    raw: any
): StrategyValueGetManyRequestQuery {
    const parsed = StrategyValueGetManyRequestQueryRawExpected.parse(raw);
    const pageNumber =
        undefined === parsed.pageNumber
            ? undefined
            : parseInt(parsed.pageNumber);
    const pageSize =
        undefined === parsed.pageSize ? undefined : parseInt(parsed.pageSize);
    const ids =
        undefined === parsed.ids
            ? undefined
            : parsed.ids === ''
            ? []
            : parsed.ids.split(',').map((id) => parseInt(id));
    const strategyIds =
        undefined === parsed.strategyIds
            ? undefined
            : parsed.strategyIds.split(',').map((id) => parseInt(id));
    const toReturn: StrategyValueGetManyRequestQuery = {};
    if (undefined !== pageNumber) {
        toReturn.pageNumber = pageNumber;
    }
    if (undefined !== pageSize) {
        toReturn.pageSize = pageSize;
    }
    if (undefined !== ids) {
        toReturn.ids = ids;
    }
    if (undefined !== strategyIds) {
        toReturn.strategyIds = strategyIds;
    }
    if (undefined !== parsed.startTimestamp) {
        toReturn.startTimestamp = parseInt(parsed.startTimestamp);
    }
    if (undefined !== parsed.endTimestamp) {
        toReturn.endTimestamp = parseInt(parsed.endTimestamp);
    }
    return toReturn;
}
export type StrategyValueGetManyResponseBodyDataInstance =
    StrategyValueGetResponseBodyDataInstance;

export type StrategyValueGetManyResponseBodyData =
    StrategyValueGetManyResponseBodyDataInstance[];

export type StrategyValueGetManyResponseBody =
    ResponseBasePaginated<StrategyValueGetManyResponseBodyData>;

const StrategyValueGetManyResponseBodyDataInstanceExpected =
    StrategyValueGetResponseBodyDataInstanceExpected;

const StrategyValueGetManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessPaginatedExpectedBase.extend({
        data: z.array(StrategyValueGetManyResponseBodyDataInstanceExpected),
    }),
]);

export function StrategyValueGetManyResponseBodyFromRaw(
    raw: any
): StrategyValueGetManyResponseBody {
    const parsed = StrategyValueGetManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface StrategyValueGetSingleRequestParams {
    id: number;
}

export interface StrategyValueGetSingleRequestParamsRaw {
    id: string;
}

const StrategyValueGetSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function StrategyValueGetSingleRequestParamsFromRaw(
    raw: any
): StrategyValueGetSingleRequestParams {
    const parsed = StrategyValueGetSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type StrategyValueGetSingleRequestBody = StrategyValueGetRequestBody;

export type StrategyValueGetSingleResponseBodyDataInstance =
    StrategyValueGetResponseBodyDataInstance;

export type StrategyValueGetSingleResponseBodyData =
    StrategyValueGetSingleResponseBodyDataInstance;

export type StrategyValueGetSingleResponseBody =
    ResponseBase<StrategyValueGetSingleResponseBodyData>;

const StrategyValueGetSingleResponseBodyDataInstanceExpected =
    StrategyValueGetResponseBodyDataInstanceExpected;

const StrategyValueGetSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: StrategyValueGetSingleResponseBodyDataInstanceExpected,
    }),
]);

export function StrategyValueGetSingleResponseBodyFromRaw(
    raw: any
): StrategyValueGetSingleResponseBody {
    const parsed = StrategyValueGetSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END GET

// BEGIN POST

export interface StrategyValuePostRequestBodyDataInstance
    extends StrategyValueProps {}
export type StrategyValuePostResponseBodyDataInstance =
    StrategyValueResponseBodyDataInstance;
const StrategyValuePostRequestBodyDataInstanceExpected =
    StrategyValuePropsExpected;

const StrategyValuePostResponseBodyDataInstanceExpected =
    StrategyValueResponseBodyDataInstanceExpected;

const StrategyValuePostManyRequestBodyDataInstanceExpected =
    StrategyValuePostRequestBodyDataInstanceExpected;

const StrategyValuePostManyRequestBodyExpected = z.array(
    StrategyValuePostManyRequestBodyDataInstanceExpected
);

export type StrategyValuePostManyRequestBodyDataInstance =
    StrategyValuePostRequestBodyDataInstance;

export type StrategyValuePostManyRequestBody =
    StrategyValuePostManyRequestBodyDataInstance[];

export function StrategyValuePostManyRequestBodyFromRaw(
    raw: any
): StrategyValuePostManyRequestBodyDataInstance[] {
    const parsed = StrategyValuePostManyRequestBodyExpected.parse(raw);
    return parsed;
}
export type StrategyValuePostManyResponseBodyDataInstance =
    StrategyValuePostResponseBodyDataInstance;

export type StrategyValuePostManyResponseBodyData =
    StrategyValuePostManyResponseBodyDataInstance[];

export type StrategyValuePostManyResponseBody =
    ResponseBase<StrategyValuePostManyResponseBodyData>;

const StrategyValuePostManyResponseBodyDataInstanceExpected =
    StrategyValuePostResponseBodyDataInstanceExpected;

const StrategyValuePostManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(StrategyValuePostManyResponseBodyDataInstanceExpected),
    }),
]);

export function StrategyValuePostManyResponseBodyFromRaw(
    raw: any
): StrategyValuePostManyResponseBody {
    const parsed = StrategyValuePostManyResponseBodyExpected.parse(raw);
    return parsed;
}

export type StrategyValuePostSingleRequestBodyDataInstance =
    StrategyValuePostRequestBodyDataInstance;
export type StrategyValuePostSingleRequestBody =
    StrategyValuePostSingleRequestBodyDataInstance;

const StrategyValuePostSingleRequestBodyDataInstanceExpected =
    StrategyValuePostRequestBodyDataInstanceExpected;

const StrategyValuePostSingleRequestBodyExpected =
    StrategyValuePostSingleRequestBodyDataInstanceExpected;

export function StrategyValuePostSingleRequestBodyFromRaw(
    raw: any
): StrategyValuePostSingleRequestBodyDataInstance {
    const parsed = StrategyValuePostSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type StrategyValuePostSingleResponseBodyDataInstance =
    StrategyValuePostResponseBodyDataInstance;

export type StrategyValuePostSingleResponseBodyData =
    StrategyValuePostSingleResponseBodyDataInstance;

export type StrategyValuePostSingleResponseBody =
    ResponseBase<StrategyValuePostSingleResponseBodyData>;

const StrategyValuePostSingleResponseBodyDataInstanceExpected =
    StrategyValuePostResponseBodyDataInstanceExpected;

const StrategyValuePostSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: StrategyValuePostSingleResponseBodyDataInstanceExpected,
    }),
]);

export function StrategyValuePostSingleResponseBodyFromRaw(
    raw: any
): StrategyValuePostSingleResponseBody {
    const parsed = StrategyValuePostSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END POST

// BEGIN PUT

export interface StrategyValuePutRequestBodyDataInstance
    extends StrategyValueProps {}
export type StrategyValuePutResponseBodyDataInstance =
    StrategyValueResponseBodyDataInstance;

const StrategyValuePutRequestBodyDataInstanceExpected =
    StrategyValuePropsExpected;

const StrategyValuePutResponseBodyDataInstanceExpected =
    StrategyValueResponseBodyDataInstanceExpected;

export interface StrategyValuePutManyRequestBodyDataInstance
    extends StrategyValuePutRequestBodyDataInstance {
    id: number;
}
export type StrategyValuePutManyRequestBody =
    StrategyValuePutManyRequestBodyDataInstance[];

const StrategyValuePutManyRequestBodyDataInstanceExpected =
    StrategyValuePutRequestBodyDataInstanceExpected.extend({
        id: z.number(),
    });

const StrategyValuePutManyRequestBodyExpected = z.array(
    StrategyValuePutManyRequestBodyDataInstanceExpected
);

export function StrategyValuePutManyRequestBodyFromRaw(
    raw: any
): StrategyValuePutManyRequestBodyDataInstance[] {
    const parsed = StrategyValuePutManyRequestBodyExpected.parse(raw);
    return parsed;
}

export type StrategyValuePutManyResponseBodyDataInstance =
    StrategyValuePutResponseBodyDataInstance;

export type StrategyValuePutManyResponseBodyData =
    StrategyValuePutManyResponseBodyDataInstance[];

export type StrategyValuePutManyResponseBody =
    ResponseBase<StrategyValuePutManyResponseBodyData>;

const StrategyValuePutManyResponseBodyDataInstanceExpected =
    StrategyValuePutResponseBodyDataInstanceExpected;

const StrategyValuePutManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(StrategyValuePutManyResponseBodyDataInstanceExpected),
    }),
]);

export function StrategyValuePutManyResponseBodyFromRaw(
    raw: any
): StrategyValuePutManyResponseBody {
    const parsed = StrategyValuePutManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface StrategyValuePutSingleRequestParams {
    id: number;
}

export interface StrategyValuePutSingleRequestParamsRaw {
    id: string;
}

const StrategyValuePutSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function StrategyValuePutSingleRequestParamsFromRaw(
    raw: any
): StrategyValuePutSingleRequestParams {
    const parsed = StrategyValuePutSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type StrategyValuePutSingleRequestBodyDataInstance =
    StrategyValuePutRequestBodyDataInstance;
export type StrategyValuePutSingleRequestBody =
    StrategyValuePutSingleRequestBodyDataInstance;

const StrategyValuePutSingleRequestBodyDataInstanceExpected =
    StrategyValuePutRequestBodyDataInstanceExpected;

const StrategyValuePutSingleRequestBodyExpected =
    StrategyValuePutSingleRequestBodyDataInstanceExpected;

export function StrategyValuePutSingleRequestBodyFromRaw(
    raw: any
): StrategyValuePutSingleRequestBodyDataInstance {
    const parsed = StrategyValuePutSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type StrategyValuePutSingleResponseBodyDataInstance =
    StrategyValuePutResponseBodyDataInstance;

export type StrategyValuePutSingleResponseBodyData =
    StrategyValuePutSingleResponseBodyDataInstance;

export type StrategyValuePutSingleResponseBody =
    ResponseBase<StrategyValuePutSingleResponseBodyData>;

const StrategyValuePutSingleResponseBodyDataInstanceExpected =
    StrategyValuePutResponseBodyDataInstanceExpected;

const StrategyValuePutSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: StrategyValuePutSingleResponseBodyDataInstanceExpected,
    }),
]);

export function StrategyValuePutSingleResponseBodyFromRaw(
    raw: any
): StrategyValuePutSingleResponseBody {
    const parsed = StrategyValuePutSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END PUT

// BEGIN PATCH

export interface StrategyValuePatchRequestBodyDataInstance
    extends StrategyValuePropsOptional {}
export type StrategyValuePatchResponseBodyDataInstance =
    StrategyValueResponseBodyDataInstance;

const StrategyValuePatchRequestBodyDataInstanceExpected =
    StrategyValuePropsOptionalExpected;

const StrategyValuePatchResponseBodyDataInstanceExpected =
    StrategyValueResponseBodyDataInstanceExpected;
export interface StrategyValuePatchManyRequestBodyDataInstance
    extends StrategyValuePatchRequestBodyDataInstance {
    id: number;
}
export type StrategyValuePatchManyRequestBody =
    StrategyValuePatchManyRequestBodyDataInstance[];

const StrategyValuePatchManyRequestBodyDataInstanceExpected =
    StrategyValuePatchRequestBodyDataInstanceExpected.extend({
        id: z.number(),
    });

const StrategyValuePatchManyRequestBodyExpected = z.array(
    StrategyValuePatchManyRequestBodyDataInstanceExpected
);

export function StrategyValuePatchManyRequestBodyFromRaw(
    raw: any
): StrategyValuePatchManyRequestBodyDataInstance[] {
    const parsed = StrategyValuePatchManyRequestBodyExpected.parse(raw);
    return parsed;
}

export type StrategyValuePatchManyResponseBodyDataInstance =
    StrategyValuePatchResponseBodyDataInstance;

export type StrategyValuePatchManyResponseBodyData =
    StrategyValuePatchManyResponseBodyDataInstance[];

export type StrategyValuePatchManyResponseBody =
    ResponseBase<StrategyValuePatchManyResponseBodyData>;

const StrategyValuePatchManyResponseBodyDataInstanceExpected =
    StrategyValuePatchResponseBodyDataInstanceExpected;

const StrategyValuePatchManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(StrategyValuePatchManyResponseBodyDataInstanceExpected),
    }),
]);

export function StrategyValuePatchManyResponseBodyFromRaw(
    raw: any
): StrategyValuePatchManyResponseBody {
    const parsed = StrategyValuePatchManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface StrategyValuePatchSingleRequestParams {
    id: number;
}

export interface StrategyValuePatchSingleRequestParamsRaw {
    id: string;
}

const StrategyValuePatchSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function StrategyValuePatchSingleRequestParamsFromRaw(
    raw: any
): StrategyValuePatchSingleRequestParams {
    const parsed = StrategyValuePatchSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type StrategyValuePatchSingleRequestBodyDataInstance =
    StrategyValuePatchRequestBodyDataInstance;
export type StrategyValuePatchSingleRequestBody =
    StrategyValuePatchSingleRequestBodyDataInstance;

const StrategyValuePatchSingleRequestBodyDataInstanceExpected =
    StrategyValuePatchRequestBodyDataInstanceExpected;

const StrategyValuePatchSingleRequestBodyExpected =
    StrategyValuePatchSingleRequestBodyDataInstanceExpected;

export function StrategyValuePatchSingleRequestBodyFromRaw(
    raw: any
): StrategyValuePatchSingleRequestBodyDataInstance {
    const parsed = StrategyValuePatchSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type StrategyValuePatchSingleResponseBodyDataInstance =
    StrategyValuePatchResponseBodyDataInstance;

export type StrategyValuePatchSingleResponseBodyData =
    StrategyValuePatchSingleResponseBodyDataInstance;

export type StrategyValuePatchSingleResponseBody =
    ResponseBase<StrategyValuePatchSingleResponseBodyData>;

const StrategyValuePatchSingleResponseBodyDataInstanceExpected =
    StrategyValuePatchResponseBodyDataInstanceExpected;

const StrategyValuePatchSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: StrategyValuePatchSingleResponseBodyDataInstanceExpected,
    }),
]);

export function StrategyValuePatchSingleResponseBodyFromRaw(
    raw: any
): StrategyValuePatchSingleResponseBody {
    const parsed = StrategyValuePatchSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END PATCH

// BEGIN DELETE

export type StrategyValueDeleteRequestBody = never;
export type StrategyValueDeleteResponseBodyDataInstance =
    StrategyValueResponseBodyDataInstance;

export type StrategyValueDeleteManyRequestBody = StrategyValueDeleteRequestBody;
export interface StrategyValueDeleteManyRequestQuery {
    ids: number[];
}

const StrategyValueDeleteResponseBodyDataInstanceExpected =
    StrategyValueResponseBodyDataInstanceExpected;

export interface StrategyValueDeleteManyRequestQueryRaw {
    ids: string;
}

const StrategyValueDeleteManyRequestQueryRawExpected = z
    .object({
        ids: z.string().regex(/^(\d+)?(,\d+)*$/, {
            message: 'IDs field should contain only comma-separated numbers',
        }),
    })
    .strict();

export function StrategyValueDeleteManyRequestQueryFromRaw(
    raw: any
): StrategyValueDeleteManyRequestQuery {
    const parsed = StrategyValueDeleteManyRequestQueryRawExpected.parse(raw);
    const ids =
        parsed.ids === ''
            ? []
            : parsed.ids.split(',').map((id) => parseInt(id));
    return { ids };
}
export type StrategyValueDeleteManyResponseBodyDataInstance =
    StrategyValueDeleteResponseBodyDataInstance;

export type StrategyValueDeleteManyResponseBodyData =
    StrategyValueDeleteManyResponseBodyDataInstance[];

export type StrategyValueDeleteManyResponseBody =
    ResponseBase<StrategyValueDeleteManyResponseBodyData>;

const StrategyValueDeleteManyResponseBodyDataInstanceExpected =
    StrategyValueDeleteResponseBodyDataInstanceExpected;

const StrategyValueDeleteManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(StrategyValueDeleteManyResponseBodyDataInstanceExpected),
    }),
]);

export function StrategyValueDeleteManyResponseBodyFromRaw(
    raw: any
): StrategyValueDeleteManyResponseBody {
    const parsed = StrategyValueDeleteManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface StrategyValueDeleteSingleRequestParams {
    id: number;
}

export interface StrategyValueDeleteSingleRequestParamsRaw {
    id: string;
}

const StrategyValueDeleteSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function StrategyValueDeleteSingleRequestParamsFromRaw(
    raw: any
): StrategyValueDeleteSingleRequestParams {
    const parsed = StrategyValueDeleteSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type StrategyValueDeleteSingleRequestBody =
    StrategyValueDeleteRequestBody;

export type StrategyValueDeleteSingleResponseBodyDataInstance =
    StrategyValueDeleteResponseBodyDataInstance;

export type StrategyValueDeleteSingleResponseBodyData =
    StrategyValueDeleteSingleResponseBodyDataInstance;

export type StrategyValueDeleteSingleResponseBody =
    ResponseBase<StrategyValueDeleteSingleResponseBodyData>;

const StrategyValueDeleteSingleResponseBodyDataInstanceExpected =
    StrategyValueDeleteResponseBodyDataInstanceExpected;

const StrategyValueDeleteSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: StrategyValueDeleteSingleResponseBodyDataInstanceExpected,
    }),
]);

export function StrategyValueDeleteSingleResponseBodyFromRaw(
    raw: any
): StrategyValueDeleteSingleResponseBody {
    const parsed = StrategyValueDeleteSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END DELETE
