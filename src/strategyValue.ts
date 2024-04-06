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
import { getPrecisionValidator } from './util.js';

export interface strategyValueRequiredFields {
    strategyId: number;
    valueInCents: number;
}

export interface strategyValueRequiredFieldsOptional {
    strategyId?: number;
    valueInCents?: number;
}
export interface strategyValueProps extends strategyValueRequiredFields {}

export interface strategyValuePropsOptional
    extends strategyValueRequiredFieldsOptional {}

const strategyValuePropsExpected = z
    .object({
        strategyId: z.number(),
        valueInCents: z
            .number()
            .refine(
                getPrecisionValidator(15),
                `valueInCents must have 15 or fewer digits`
            ),
        // must be object that will be serialized to JSON
    })
    .strict();

const strategyValuePropsOptionalExpected = strategyValuePropsExpected.partial();

export function strategyValuePropsFromRaw(raw: any): strategyValueProps {
    const parsed = strategyValuePropsExpected.parse(raw);
    return parsed;
}

export interface strategyValueModelProps extends strategyValueRequiredFields {
    timestamp: number;
}
export interface strategyValueModelInterface extends strategyValueModelProps {
    id: number;
}

const strategyValueModelInterfaceExpected = strategyValuePropsExpected.extend({
    id: z.number(),
    // timestamp limitations: https://stackoverflow.com/a/54802348
    timestamp: z
        .number()
        .refine(
            (timestamp) =>
                timestamp < 8640000000000000 && timestamp > -8640000000000000,
            `timestamp must be between -8640000000000000 and 8640000000000000`
        ),
});

export interface strategyValueResponseBodyDataInstance
    extends strategyValueModelInterface {}

const strategyValueResponseBodyDataInstanceExpected =
    strategyValueModelInterfaceExpected;

// BEGIN GET

export type strategyValueGetRequestBody = never;
export type strategyValueGetResponseBodyDataInstance =
    strategyValueResponseBodyDataInstance;

const strategyValueGetResponseBodyDataInstanceExpected =
    strategyValueResponseBodyDataInstanceExpected;
export type strategyValueGetManyRequestBody = strategyValueGetRequestBody;
export interface strategyValueGetManyRequestQuery
    extends RequestQueryBasePaginated {
    strategyIds?: number[];
    ids?: number[];
    startTimestamp?: number;
    endTimestamp?: number;
}
export interface strategyValueGetManyRequestQueryRaw
    extends RequestQueryBasePaginatedRaw {
    strategyIds?: string;
    ids?: string;
    startTimestamp?: string;
    endTimestamp?: string;
}

/*
    emergency = 'emergency',
    alert = 'alert',
    critical = 'critical',
    error = 'error',
    warning = 'warning',
    notice = 'notice',
    info = 'info',
    debug = 'debug',
}
*/
const strategyValueGetManyRequestQueryRawExpected =
    RequestQueryBasePaginatedRawExpected.extend({
        strategyIds: z
            .string()
            .regex(/^\d+(,\d+)*$/)
            .optional(),
        ids: z
            .string()
            .regex(/^\d+(,\d+)*$/)
            .optional(),
        startTimestamp: z.string().regex(/^\d+$/).optional(),
        endTimestamp: z.string().regex(/^\d+$/).optional(),
    }).strict();

export function strategyValueGetManyRequestQueryFromRaw(
    raw: any
): strategyValueGetManyRequestQuery {
    const parsed = strategyValueGetManyRequestQueryRawExpected.parse(raw);
    const pageNumber =
        undefined === parsed.pageNumber
            ? undefined
            : parseInt(parsed.pageNumber);
    const pageSize =
        undefined === parsed.pageSize ? undefined : parseInt(parsed.pageSize);
    const ids =
        undefined === parsed.ids
            ? undefined
            : parsed.ids.split(',').map((id) => parseInt(id));
    const strategyIds =
        undefined === parsed.strategyIds
            ? undefined
            : parsed.strategyIds.split(',').map((id) => parseInt(id));
    const toReturn: strategyValueGetManyRequestQuery = {};
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
export type strategyValueGetManyResponseBodyDataInstance =
    strategyValueGetResponseBodyDataInstance;

export type strategyValueGetManyResponseBodyData =
    strategyValueGetManyResponseBodyDataInstance[];

export type strategyValueGetManyResponseBody =
    ResponseBasePaginated<strategyValueGetManyResponseBodyData>;

const strategyValueGetManyResponseBodyDataInstanceExpected =
    strategyValueGetResponseBodyDataInstanceExpected;

const strategyValueGetManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessPaginatedExpectedBase.extend({
        data: z.array(strategyValueGetManyResponseBodyDataInstanceExpected),
    }),
]);

export function strategyValueGetManyResponseBodyFromRaw(
    raw: any
): strategyValueGetManyResponseBody {
    const parsed = strategyValueGetManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface strategyValueGetSingleRequestParams {
    id: number;
}

export interface strategyValueGetSingleRequestParamsRaw {
    id: string;
}

const strategyValueGetSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function strategyValueGetSingleRequestParamsFromRaw(
    raw: any
): strategyValueGetSingleRequestParams {
    const parsed = strategyValueGetSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type strategyValueGetSingleRequestBody = strategyValueGetRequestBody;

export type strategyValueGetSingleResponseBodyDataInstance =
    strategyValueGetResponseBodyDataInstance;

export type strategyValueGetSingleResponseBodyData =
    strategyValueGetSingleResponseBodyDataInstance;

export type strategyValueGetSingleResponseBody =
    ResponseBase<strategyValueGetSingleResponseBodyData>;

const strategyValueGetSingleResponseBodyDataInstanceExpected =
    strategyValueGetResponseBodyDataInstanceExpected;

const strategyValueGetSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: strategyValueGetSingleResponseBodyDataInstanceExpected,
    }),
]);

export function strategyValueGetSingleResponseBodyFromRaw(
    raw: any
): strategyValueGetSingleResponseBody {
    const parsed = strategyValueGetSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END GET

// BEGIN POST

export interface strategyValuePostRequestBodyDataInstance
    extends strategyValueProps {}
export type strategyValuePostResponseBodyDataInstance =
    strategyValueResponseBodyDataInstance;
const strategyValuePostRequestBodyDataInstanceExpected =
    strategyValuePropsExpected;

const strategyValuePostResponseBodyDataInstanceExpected =
    strategyValueResponseBodyDataInstanceExpected;

const strategyValuePostManyRequestBodyDataInstanceExpected =
    strategyValuePostRequestBodyDataInstanceExpected;

const strategyValuePostManyRequestBodyExpected = z.array(
    strategyValuePostManyRequestBodyDataInstanceExpected
);

export type strategyValuePostManyRequestBodyDataInstance =
    strategyValuePostRequestBodyDataInstance;

export type strategyValuePostManyRequestBody =
    strategyValuePostManyRequestBodyDataInstance[];

export function strategyValuePostManyRequestBodyFromRaw(
    raw: any
): strategyValuePostManyRequestBodyDataInstance[] {
    const parsed = strategyValuePostManyRequestBodyExpected.parse(raw);
    return parsed;
}
export type strategyValuePostManyResponseBodyDataInstance =
    strategyValuePostResponseBodyDataInstance;

export type strategyValuePostManyResponseBodyData =
    strategyValuePostManyResponseBodyDataInstance[];

export type strategyValuePostManyResponseBody =
    ResponseBase<strategyValuePostManyResponseBodyData>;

const strategyValuePostManyResponseBodyDataInstanceExpected =
    strategyValuePostResponseBodyDataInstanceExpected;

const strategyValuePostManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(strategyValuePostManyResponseBodyDataInstanceExpected),
    }),
]);

export function strategyValuePostManyResponseBodyFromRaw(
    raw: any
): strategyValuePostManyResponseBody {
    const parsed = strategyValuePostManyResponseBodyExpected.parse(raw);
    return parsed;
}

export type strategyValuePostSingleRequestBodyDataInstance =
    strategyValuePostRequestBodyDataInstance;
export type strategyValuePostSingleRequestBody =
    strategyValuePostSingleRequestBodyDataInstance;

const strategyValuePostSingleRequestBodyDataInstanceExpected =
    strategyValuePostRequestBodyDataInstanceExpected;

const strategyValuePostSingleRequestBodyExpected =
    strategyValuePostSingleRequestBodyDataInstanceExpected;

export function strategyValuePostSingleRequestBodyFromRaw(
    raw: any
): strategyValuePostSingleRequestBodyDataInstance {
    const parsed = strategyValuePostSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type strategyValuePostSingleResponseBodyDataInstance =
    strategyValuePostResponseBodyDataInstance;

export type strategyValuePostSingleResponseBodyData =
    strategyValuePostSingleResponseBodyDataInstance;

export type strategyValuePostSingleResponseBody =
    ResponseBase<strategyValuePostSingleResponseBodyData>;

const strategyValuePostSingleResponseBodyDataInstanceExpected =
    strategyValuePostResponseBodyDataInstanceExpected;

const strategyValuePostSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: strategyValuePostSingleResponseBodyDataInstanceExpected,
    }),
]);

export function strategyValuePostSingleResponseBodyFromRaw(
    raw: any
): strategyValuePostSingleResponseBody {
    const parsed = strategyValuePostSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END POST

// BEGIN PUT

export interface strategyValuePutRequestBodyDataInstance
    extends strategyValueProps {}
export type strategyValuePutResponseBodyDataInstance =
    strategyValueResponseBodyDataInstance;

const strategyValuePutRequestBodyDataInstanceExpected =
    strategyValuePropsExpected;

const strategyValuePutResponseBodyDataInstanceExpected =
    strategyValueResponseBodyDataInstanceExpected;

export interface strategyValuePutManyRequestBodyDataInstance
    extends strategyValuePutRequestBodyDataInstance {
    id: number;
}
export type strategyValuePutManyRequestBody =
    strategyValuePutManyRequestBodyDataInstance[];

const strategyValuePutManyRequestBodyDataInstanceExpected =
    strategyValuePutRequestBodyDataInstanceExpected.extend({
        id: z.number(),
    });

const strategyValuePutManyRequestBodyExpected = z.array(
    strategyValuePutManyRequestBodyDataInstanceExpected
);

export function strategyValuePutManyRequestBodyFromRaw(
    raw: any
): strategyValuePutManyRequestBodyDataInstance[] {
    const parsed = strategyValuePutManyRequestBodyExpected.parse(raw);
    return parsed;
}

export type strategyValuePutManyResponseBodyDataInstance =
    strategyValuePutResponseBodyDataInstance;

export type strategyValuePutManyResponseBodyData =
    strategyValuePutManyResponseBodyDataInstance[];

export type strategyValuePutManyResponseBody =
    ResponseBase<strategyValuePutManyResponseBodyData>;

const strategyValuePutManyResponseBodyDataInstanceExpected =
    strategyValuePutResponseBodyDataInstanceExpected;

const strategyValuePutManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(strategyValuePutManyResponseBodyDataInstanceExpected),
    }),
]);

export function strategyValuePutManyResponseBodyFromRaw(
    raw: any
): strategyValuePutManyResponseBody {
    const parsed = strategyValuePutManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface strategyValuePutSingleRequestParams {
    id: number;
}

export interface strategyValuePutSingleRequestParamsRaw {
    id: string;
}

const strategyValuePutSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function strategyValuePutSingleRequestParamsFromRaw(
    raw: any
): strategyValuePutSingleRequestParams {
    const parsed = strategyValuePutSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type strategyValuePutSingleRequestBodyDataInstance =
    strategyValuePutRequestBodyDataInstance;
export type strategyValuePutSingleRequestBody =
    strategyValuePutSingleRequestBodyDataInstance;

const strategyValuePutSingleRequestBodyDataInstanceExpected =
    strategyValuePutRequestBodyDataInstanceExpected;

const strategyValuePutSingleRequestBodyExpected =
    strategyValuePutSingleRequestBodyDataInstanceExpected;

export function strategyValuePutSingleRequestBodyFromRaw(
    raw: any
): strategyValuePutSingleRequestBodyDataInstance {
    const parsed = strategyValuePutSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type strategyValuePutSingleResponseBodyDataInstance =
    strategyValuePutResponseBodyDataInstance;

export type strategyValuePutSingleResponseBodyData =
    strategyValuePutSingleResponseBodyDataInstance;

export type strategyValuePutSingleResponseBody =
    ResponseBase<strategyValuePutSingleResponseBodyData>;

const strategyValuePutSingleResponseBodyDataInstanceExpected =
    strategyValuePutResponseBodyDataInstanceExpected;

const strategyValuePutSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: strategyValuePutSingleResponseBodyDataInstanceExpected,
    }),
]);

export function strategyValuePutSingleResponseBodyFromRaw(
    raw: any
): strategyValuePutSingleResponseBody {
    const parsed = strategyValuePutSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END PUT

// BEGIN PATCH

export interface strategyValuePatchRequestBodyDataInstance
    extends strategyValuePropsOptional {}
export type strategyValuePatchResponseBodyDataInstance =
    strategyValueResponseBodyDataInstance;

const strategyValuePatchRequestBodyDataInstanceExpected =
    strategyValuePropsOptionalExpected;

const strategyValuePatchResponseBodyDataInstanceExpected =
    strategyValueResponseBodyDataInstanceExpected;
export interface strategyValuePatchManyRequestBodyDataInstance
    extends strategyValuePatchRequestBodyDataInstance {
    id: number;
}
export type strategyValuePatchManyRequestBody =
    strategyValuePatchManyRequestBodyDataInstance[];

const strategyValuePatchManyRequestBodyDataInstanceExpected =
    strategyValuePatchRequestBodyDataInstanceExpected.extend({
        id: z.number(),
    });

const strategyValuePatchManyRequestBodyExpected = z.array(
    strategyValuePatchManyRequestBodyDataInstanceExpected
);

export function strategyValuePatchManyRequestBodyFromRaw(
    raw: any
): strategyValuePatchManyRequestBodyDataInstance[] {
    const parsed = strategyValuePatchManyRequestBodyExpected.parse(raw);
    return parsed;
}

export type strategyValuePatchManyResponseBodyDataInstance =
    strategyValuePatchResponseBodyDataInstance;

export type strategyValuePatchManyResponseBodyData =
    strategyValuePatchManyResponseBodyDataInstance[];

export type strategyValuePatchManyResponseBody =
    ResponseBase<strategyValuePatchManyResponseBodyData>;

const strategyValuePatchManyResponseBodyDataInstanceExpected =
    strategyValuePatchResponseBodyDataInstanceExpected;

const strategyValuePatchManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(strategyValuePatchManyResponseBodyDataInstanceExpected),
    }),
]);

export function strategyValuePatchManyResponseBodyFromRaw(
    raw: any
): strategyValuePatchManyResponseBody {
    const parsed = strategyValuePatchManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface strategyValuePatchSingleRequestParams {
    id: number;
}

export interface strategyValuePatchSingleRequestParamsRaw {
    id: string;
}

const strategyValuePatchSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function strategyValuePatchSingleRequestParamsFromRaw(
    raw: any
): strategyValuePatchSingleRequestParams {
    const parsed = strategyValuePatchSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type strategyValuePatchSingleRequestBodyDataInstance =
    strategyValuePatchRequestBodyDataInstance;
export type strategyValuePatchSingleRequestBody =
    strategyValuePatchSingleRequestBodyDataInstance;

const strategyValuePatchSingleRequestBodyDataInstanceExpected =
    strategyValuePatchRequestBodyDataInstanceExpected;

const strategyValuePatchSingleRequestBodyExpected =
    strategyValuePatchSingleRequestBodyDataInstanceExpected;

export function strategyValuePatchSingleRequestBodyFromRaw(
    raw: any
): strategyValuePatchSingleRequestBodyDataInstance {
    const parsed = strategyValuePatchSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type strategyValuePatchSingleResponseBodyDataInstance =
    strategyValuePatchResponseBodyDataInstance;

export type strategyValuePatchSingleResponseBodyData =
    strategyValuePatchSingleResponseBodyDataInstance;

export type strategyValuePatchSingleResponseBody =
    ResponseBase<strategyValuePatchSingleResponseBodyData>;

const strategyValuePatchSingleResponseBodyDataInstanceExpected =
    strategyValuePatchResponseBodyDataInstanceExpected;

const strategyValuePatchSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: strategyValuePatchSingleResponseBodyDataInstanceExpected,
    }),
]);

export function strategyValuePatchSingleResponseBodyFromRaw(
    raw: any
): strategyValuePatchSingleResponseBody {
    const parsed = strategyValuePatchSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END PATCH

// BEGIN DELETE

export type strategyValueDeleteRequestBody = never;
export type strategyValueDeleteResponseBodyDataInstance =
    strategyValueResponseBodyDataInstance;

export type strategyValueDeleteManyRequestBody = strategyValueDeleteRequestBody;
export interface strategyValueDeleteManyRequestQuery {
    ids: number[];
}

const strategyValueDeleteResponseBodyDataInstanceExpected =
    strategyValueResponseBodyDataInstanceExpected;

export interface strategyValueDeleteManyRequestQueryRaw {
    ids: string;
}

const strategyValueDeleteManyRequestQueryRawExpected = z
    .object({
        ids: z.string().regex(/^\d+(,\d+)*$/),
    })
    .strict();

export function strategyValueDeleteManyRequestQueryFromRaw(
    raw: any
): strategyValueDeleteManyRequestQuery {
    const parsed = strategyValueDeleteManyRequestQueryRawExpected.parse(raw);
    const ids = parsed.ids.split(',').map((id) => parseInt(id));
    return { ids };
}
export type strategyValueDeleteManyResponseBodyDataInstance =
    strategyValueDeleteResponseBodyDataInstance;

export type strategyValueDeleteManyResponseBodyData =
    strategyValueDeleteManyResponseBodyDataInstance[];

export type strategyValueDeleteManyResponseBody =
    ResponseBase<strategyValueDeleteManyResponseBodyData>;

const strategyValueDeleteManyResponseBodyDataInstanceExpected =
    strategyValueDeleteResponseBodyDataInstanceExpected;

const strategyValueDeleteManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(strategyValueDeleteManyResponseBodyDataInstanceExpected),
    }),
]);

export function strategyValueDeleteManyResponseBodyFromRaw(
    raw: any
): strategyValueDeleteManyResponseBody {
    const parsed = strategyValueDeleteManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface strategyValueDeleteSingleRequestParams {
    id: number;
}

export interface strategyValueDeleteSingleRequestParamsRaw {
    id: string;
}

const strategyValueDeleteSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function strategyValueDeleteSingleRequestParamsFromRaw(
    raw: any
): strategyValueDeleteSingleRequestParams {
    const parsed = strategyValueDeleteSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type strategyValueDeleteSingleRequestBody =
    strategyValueDeleteRequestBody;

export type strategyValueDeleteSingleResponseBodyDataInstance =
    strategyValueDeleteResponseBodyDataInstance;

export type strategyValueDeleteSingleResponseBodyData =
    strategyValueDeleteSingleResponseBodyDataInstance;

export type strategyValueDeleteSingleResponseBody =
    ResponseBase<strategyValueDeleteSingleResponseBodyData>;

const strategyValueDeleteSingleResponseBodyDataInstanceExpected =
    strategyValueDeleteResponseBodyDataInstanceExpected;

const strategyValueDeleteSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: strategyValueDeleteSingleResponseBodyDataInstanceExpected,
    }),
]);

export function strategyValueDeleteSingleResponseBodyFromRaw(
    raw: any
): strategyValueDeleteSingleResponseBody {
    const parsed = strategyValueDeleteSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END DELETE
