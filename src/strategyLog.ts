import { z } from 'zod';

import {
    ResponseBase,
    ResponseBasePaginated,
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase,
    ResponseBaseSuccessPaginatedExpectedBase,
} from './response.js';

import { LogData, LogDataSchema, LogLevel, LogLevelSchema } from './log.js';
import { JSONDataSchema } from './json.js';
import {
    RequestQueryBasePaginated,
    RequestQueryBasePaginatedRaw,
    RequestQueryBasePaginatedRawExpected,
} from './request.js';

export interface StrategyLogRequiredFields {
    strategyId: number;
    level: LogLevel;
    message: string;
    data?: LogData;
}

export interface StrategyLogRequiredFieldsOptional {
    strategyId?: number;
    level?: LogLevel;
    message?: string;
    data?: LogData;
}
export interface StrategyLogProps extends StrategyLogRequiredFields {}

export interface StrategyLogPropsOptional
    extends StrategyLogRequiredFieldsOptional {}

const StrategyLogPropsExpected = z
    .object({
        strategyId: z.number(),
        level: LogLevelSchema,
        message: z.string(),
        // must be object that will be serialized to JSON
        data: LogDataSchema.optional(),
    })
    .strict();

const StrategyLogPropsOptionalExpected = StrategyLogPropsExpected.partial();

export function StrategyLogPropsFromRaw(raw: any): StrategyLogProps {
    const parsed = StrategyLogPropsExpected.parse(raw);
    return parsed;
}

export interface StrategyLogModelProps extends StrategyLogRequiredFields {
    timestamp: number;
}
export interface StrategyLogModelInterface extends StrategyLogModelProps {
    id: number
}

const StrategyLogModelInterfaceExpected = StrategyLogPropsExpected.extend({
    id: z.number(),
    // timestamp limitations: https://stackoverflow.com/a/54802348
    timestamp: z
        .number()
        .refine(
            (timestamp) =>
                timestamp < 8640000000000000 && timestamp > -8640000000000000
        ),
});

export interface StrategyLogResponseBodyDataInstance
    extends StrategyLogModelInterface {}

const StrategyLogResponseBodyDataInstanceExpected =
    StrategyLogModelInterfaceExpected;

// BEGIN GET

export type StrategyLogGetRequestBody = never;
export type StrategyLogGetResponseBodyDataInstance =
    StrategyLogResponseBodyDataInstance;

const StrategyLogGetResponseBodyDataInstanceExpected =
    StrategyLogResponseBodyDataInstanceExpected;
export type StrategyLogGetManyRequestBody = StrategyLogGetRequestBody;
export interface StrategyLogGetManyRequestQuery
    extends RequestQueryBasePaginated {
    strategyIds?: number[];
    ids?: number[];
    levels?: LogLevel[];
}
export interface StrategyLogGetManyRequestQueryRaw
    extends RequestQueryBasePaginatedRaw {
    strategyIds?: string;
    ids?: string;
    levels?: string;
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
const StrategyLogGetManyRequestQueryRawExpected =
    RequestQueryBasePaginatedRawExpected.extend({
        strategyIds: z
            .string()
            .regex(/^\d+(,\d+)*$/)
            .optional(),
        ids: z
            .string()
            .regex(/^\d+(,\d+)*$/)
            .optional(),
        levels: z
            .string()
            .regex(
                /^(emergency|alert|critical|error|warning|notice|info|debug)(,(emergency|alert|critical|error|warning|notice|info|debug))*$/
            )
            .optional(),
    }).strict();

export function StrategyLogGetManyRequestQueryFromRaw(
    raw: any
): StrategyLogGetManyRequestQuery {
    const parsed = StrategyLogGetManyRequestQueryRawExpected.parse(raw);
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
    const levels = parsed.levels ? parsed.levels.split(',') : undefined;
    const toReturn: StrategyLogGetManyRequestQuery = {};
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
    if (undefined !== levels) {
        toReturn.levels = levels as LogLevel[];
    }
    return toReturn;
}
export type StrategyLogGetManyResponseBodyDataInstance =
    StrategyLogGetResponseBodyDataInstance;

export type StrategyLogGetManyResponseBodyData =
    StrategyLogGetManyResponseBodyDataInstance[];

export type StrategyLogGetManyResponseBody =
    ResponseBasePaginated<StrategyLogGetManyResponseBodyData>;

const StrategyLogGetManyResponseBodyDataInstanceExpected =
    StrategyLogGetResponseBodyDataInstanceExpected;

const StrategyLogGetManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessPaginatedExpectedBase.extend({
        data: z.array(StrategyLogGetManyResponseBodyDataInstanceExpected),
    }),
]);

export function StrategyLogGetManyResponseBodyFromRaw(
    raw: any
): StrategyLogGetManyResponseBody {
    const parsed = StrategyLogGetManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface StrategyLogGetSingleRequestParams {
    id: number;
}

export interface StrategyLogGetSingleRequestParamsRaw {
    id: string;
}

const StrategyLogGetSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function StrategyLogGetSingleRequestParamsFromRaw(
    raw: any
): StrategyLogGetSingleRequestParams {
    const parsed = StrategyLogGetSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type StrategyLogGetSingleRequestBody = StrategyLogGetRequestBody;

export type StrategyLogGetSingleResponseBodyDataInstance =
    StrategyLogGetResponseBodyDataInstance;

export type StrategyLogGetSingleResponseBodyData =
    StrategyLogGetSingleResponseBodyDataInstance;

export type StrategyLogGetSingleResponseBody =
    ResponseBase<StrategyLogGetSingleResponseBodyData>;

const StrategyLogGetSingleResponseBodyDataInstanceExpected =
    StrategyLogGetResponseBodyDataInstanceExpected;

const StrategyLogGetSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: StrategyLogGetSingleResponseBodyDataInstanceExpected,
    }),
]);

export function StrategyLogGetSingleResponseBodyFromRaw(
    raw: any
): StrategyLogGetSingleResponseBody {
    const parsed = StrategyLogGetSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END GET

// BEGIN POST

export interface StrategyLogPostRequestBodyDataInstance
    extends StrategyLogProps {}
export type StrategyLogPostResponseBodyDataInstance =
    StrategyLogResponseBodyDataInstance;
const StrategyLogPostRequestBodyDataInstanceExpected = StrategyLogPropsExpected;

const StrategyLogPostResponseBodyDataInstanceExpected =
    StrategyLogResponseBodyDataInstanceExpected;

const StrategyLogPostManyRequestBodyDataInstanceExpected =
    StrategyLogPostRequestBodyDataInstanceExpected;

const StrategyLogPostManyRequestBodyExpected = z.array(
    StrategyLogPostManyRequestBodyDataInstanceExpected
);

export type StrategyLogPostManyRequestBodyDataInstance =
    StrategyLogPostRequestBodyDataInstance;

export type StrategyLogPostManyRequestBody =
    StrategyLogPostManyRequestBodyDataInstance[];

export function StrategyLogPostManyRequestBodyFromRaw(
    raw: any
): StrategyLogPostManyRequestBodyDataInstance[] {
    const parsed = StrategyLogPostManyRequestBodyExpected.parse(raw);
    return parsed;
}
export type StrategyLogPostManyResponseBodyDataInstance =
    StrategyLogPostResponseBodyDataInstance;

export type StrategyLogPostManyResponseBodyData =
    StrategyLogPostManyResponseBodyDataInstance[];

export type StrategyLogPostManyResponseBody =
    ResponseBase<StrategyLogPostManyResponseBodyData>;

const StrategyLogPostManyResponseBodyDataInstanceExpected =
    StrategyLogPostResponseBodyDataInstanceExpected;

const StrategyLogPostManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(StrategyLogPostManyResponseBodyDataInstanceExpected),
    }),
]);

export function StrategyLogPostManyResponseBodyFromRaw(
    raw: any
): StrategyLogPostManyResponseBody {
    const parsed = StrategyLogPostManyResponseBodyExpected.parse(raw);
    return parsed;
}

export type StrategyLogPostSingleRequestBodyDataInstance =
    StrategyLogPostRequestBodyDataInstance;
export type StrategyLogPostSingleRequestBody =
    StrategyLogPostSingleRequestBodyDataInstance;

const StrategyLogPostSingleRequestBodyDataInstanceExpected =
    StrategyLogPostRequestBodyDataInstanceExpected;

const StrategyLogPostSingleRequestBodyExpected =
    StrategyLogPostSingleRequestBodyDataInstanceExpected;

export function StrategyLogPostSingleRequestBodyFromRaw(
    raw: any
): StrategyLogPostSingleRequestBodyDataInstance {
    const parsed = StrategyLogPostSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type StrategyLogPostSingleResponseBodyDataInstance =
    StrategyLogPostResponseBodyDataInstance;

export type StrategyLogPostSingleResponseBodyData =
    StrategyLogPostSingleResponseBodyDataInstance;

export type StrategyLogPostSingleResponseBody =
    ResponseBase<StrategyLogPostSingleResponseBodyData>;

const StrategyLogPostSingleResponseBodyDataInstanceExpected =
    StrategyLogPostResponseBodyDataInstanceExpected;

const StrategyLogPostSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: StrategyLogPostSingleResponseBodyDataInstanceExpected,
    }),
]);

export function StrategyLogPostSingleResponseBodyFromRaw(
    raw: any
): StrategyLogPostSingleResponseBody {
    const parsed = StrategyLogPostSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END POST

// BEGIN PUT

export interface StrategyLogPutRequestBodyDataInstance
    extends StrategyLogProps {}
export type StrategyLogPutResponseBodyDataInstance =
    StrategyLogResponseBodyDataInstance;

const StrategyLogPutRequestBodyDataInstanceExpected = StrategyLogPropsExpected;

const StrategyLogPutResponseBodyDataInstanceExpected =
    StrategyLogResponseBodyDataInstanceExpected;

export interface StrategyLogPutManyRequestBodyDataInstance
    extends StrategyLogPutRequestBodyDataInstance {
    id: number;
}
export type StrategyLogPutManyRequestBody =
    StrategyLogPutManyRequestBodyDataInstance[];

const StrategyLogPutManyRequestBodyDataInstanceExpected =
    StrategyLogPutRequestBodyDataInstanceExpected.extend({
        id: z.number(),
    });

const StrategyLogPutManyRequestBodyExpected = z.array(
    StrategyLogPutManyRequestBodyDataInstanceExpected
);

export function StrategyLogPutManyRequestBodyFromRaw(
    raw: any
): StrategyLogPutManyRequestBodyDataInstance[] {
    const parsed = StrategyLogPutManyRequestBodyExpected.parse(raw);
    return parsed;
}

export type StrategyLogPutManyResponseBodyDataInstance =
    StrategyLogPutResponseBodyDataInstance;

export type StrategyLogPutManyResponseBodyData =
    StrategyLogPutManyResponseBodyDataInstance[];

export type StrategyLogPutManyResponseBody =
    ResponseBase<StrategyLogPutManyResponseBodyData>;

const StrategyLogPutManyResponseBodyDataInstanceExpected =
    StrategyLogPutResponseBodyDataInstanceExpected;

const StrategyLogPutManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(StrategyLogPutManyResponseBodyDataInstanceExpected),
    }),
]);

export function StrategyLogPutManyResponseBodyFromRaw(
    raw: any
): StrategyLogPutManyResponseBody {
    const parsed = StrategyLogPutManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface StrategyLogPutSingleRequestParams {
    id: number;
}

export interface StrategyLogPutSingleRequestParamsRaw {
    id: string;
}

const StrategyLogPutSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function StrategyLogPutSingleRequestParamsFromRaw(
    raw: any
): StrategyLogPutSingleRequestParams {
    const parsed = StrategyLogPutSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type StrategyLogPutSingleRequestBodyDataInstance =
    StrategyLogPutRequestBodyDataInstance;
export type StrategyLogPutSingleRequestBody =
    StrategyLogPutSingleRequestBodyDataInstance;

const StrategyLogPutSingleRequestBodyDataInstanceExpected =
    StrategyLogPutRequestBodyDataInstanceExpected;

const StrategyLogPutSingleRequestBodyExpected =
    StrategyLogPutSingleRequestBodyDataInstanceExpected;

export function StrategyLogPutSingleRequestBodyFromRaw(
    raw: any
): StrategyLogPutSingleRequestBodyDataInstance {
    const parsed = StrategyLogPutSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type StrategyLogPutSingleResponseBodyDataInstance =
    StrategyLogPutResponseBodyDataInstance;

export type StrategyLogPutSingleResponseBodyData =
    StrategyLogPutSingleResponseBodyDataInstance;

export type StrategyLogPutSingleResponseBody =
    ResponseBase<StrategyLogPutSingleResponseBodyData>;

const StrategyLogPutSingleResponseBodyDataInstanceExpected =
    StrategyLogPutResponseBodyDataInstanceExpected;

const StrategyLogPutSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: StrategyLogPutSingleResponseBodyDataInstanceExpected,
    }),
]);

export function StrategyLogPutSingleResponseBodyFromRaw(
    raw: any
): StrategyLogPutSingleResponseBody {
    const parsed = StrategyLogPutSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END PUT

// BEGIN PATCH

export interface StrategyLogPatchRequestBodyDataInstance
    extends StrategyLogPropsOptional {}
export type StrategyLogPatchResponseBodyDataInstance =
    StrategyLogResponseBodyDataInstance;

const StrategyLogPatchRequestBodyDataInstanceExpected =
    StrategyLogPropsOptionalExpected;

const StrategyLogPatchResponseBodyDataInstanceExpected =
    StrategyLogResponseBodyDataInstanceExpected;
export interface StrategyLogPatchManyRequestBodyDataInstance
    extends StrategyLogPatchRequestBodyDataInstance {
    id: number;
}
export type StrategyLogPatchManyRequestBody =
    StrategyLogPatchManyRequestBodyDataInstance[];

const StrategyLogPatchManyRequestBodyDataInstanceExpected =
    StrategyLogPatchRequestBodyDataInstanceExpected.extend({
        id: z.number(),
    });

const StrategyLogPatchManyRequestBodyExpected = z.array(
    StrategyLogPatchManyRequestBodyDataInstanceExpected
);

export function StrategyLogPatchManyRequestBodyFromRaw(
    raw: any
): StrategyLogPatchManyRequestBodyDataInstance[] {
    const parsed = StrategyLogPatchManyRequestBodyExpected.parse(raw);
    return parsed;
}

export type StrategyLogPatchManyResponseBodyDataInstance =
    StrategyLogPatchResponseBodyDataInstance;

export type StrategyLogPatchManyResponseBodyData =
    StrategyLogPatchManyResponseBodyDataInstance[];

export type StrategyLogPatchManyResponseBody =
    ResponseBase<StrategyLogPatchManyResponseBodyData>;

const StrategyLogPatchManyResponseBodyDataInstanceExpected =
    StrategyLogPatchResponseBodyDataInstanceExpected;

const StrategyLogPatchManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(StrategyLogPatchManyResponseBodyDataInstanceExpected),
    }),
]);

export function StrategyLogPatchManyResponseBodyFromRaw(
    raw: any
): StrategyLogPatchManyResponseBody {
    const parsed = StrategyLogPatchManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface StrategyLogPatchSingleRequestParams {
    id: number;
}

export interface StrategyLogPatchSingleRequestParamsRaw {
    id: string;
}

const StrategyLogPatchSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function StrategyLogPatchSingleRequestParamsFromRaw(
    raw: any
): StrategyLogPatchSingleRequestParams {
    const parsed = StrategyLogPatchSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type StrategyLogPatchSingleRequestBodyDataInstance =
    StrategyLogPatchRequestBodyDataInstance;
export type StrategyLogPatchSingleRequestBody =
    StrategyLogPatchSingleRequestBodyDataInstance;

const StrategyLogPatchSingleRequestBodyDataInstanceExpected =
    StrategyLogPatchRequestBodyDataInstanceExpected;

const StrategyLogPatchSingleRequestBodyExpected =
    StrategyLogPatchSingleRequestBodyDataInstanceExpected;

export function StrategyLogPatchSingleRequestBodyFromRaw(
    raw: any
): StrategyLogPatchSingleRequestBodyDataInstance {
    const parsed = StrategyLogPatchSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type StrategyLogPatchSingleResponseBodyDataInstance =
    StrategyLogPatchResponseBodyDataInstance;

export type StrategyLogPatchSingleResponseBodyData =
    StrategyLogPatchSingleResponseBodyDataInstance;

export type StrategyLogPatchSingleResponseBody =
    ResponseBase<StrategyLogPatchSingleResponseBodyData>;

const StrategyLogPatchSingleResponseBodyDataInstanceExpected =
    StrategyLogPatchResponseBodyDataInstanceExpected;

const StrategyLogPatchSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: StrategyLogPatchSingleResponseBodyDataInstanceExpected,
    }),
]);

export function StrategyLogPatchSingleResponseBodyFromRaw(
    raw: any
): StrategyLogPatchSingleResponseBody {
    const parsed = StrategyLogPatchSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END PATCH

// BEGIN DELETE

export type StrategyLogDeleteRequestBody = never;
export type StrategyLogDeleteResponseBodyDataInstance =
    StrategyLogResponseBodyDataInstance;

export type StrategyLogDeleteManyRequestBody = StrategyLogDeleteRequestBody;
export interface StrategyLogDeleteManyRequestQuery {
    ids: number[];
}

const StrategyLogDeleteResponseBodyDataInstanceExpected =
    StrategyLogResponseBodyDataInstanceExpected;

export interface StrategyLogDeleteManyRequestQueryRaw {
    ids: string;
}

const StrategyLogDeleteManyRequestQueryRawExpected = z
    .object({
        ids: z.string().regex(/^\d+(,\d+)*$/),
    })
    .strict();

export function StrategyLogDeleteManyRequestQueryFromRaw(
    raw: any
): StrategyLogDeleteManyRequestQuery {
    const parsed = StrategyLogDeleteManyRequestQueryRawExpected.parse(raw);
    const ids = parsed.ids.split(',').map((id) => parseInt(id));
    return { ids };
}
export type StrategyLogDeleteManyResponseBodyDataInstance =
    StrategyLogDeleteResponseBodyDataInstance;

export type StrategyLogDeleteManyResponseBodyData =
    StrategyLogDeleteManyResponseBodyDataInstance[];

export type StrategyLogDeleteManyResponseBody =
    ResponseBase<StrategyLogDeleteManyResponseBodyData>;

const StrategyLogDeleteManyResponseBodyDataInstanceExpected =
    StrategyLogDeleteResponseBodyDataInstanceExpected;

const StrategyLogDeleteManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(StrategyLogDeleteManyResponseBodyDataInstanceExpected),
    }),
]);

export function StrategyLogDeleteManyResponseBodyFromRaw(
    raw: any
): StrategyLogDeleteManyResponseBody {
    const parsed = StrategyLogDeleteManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface StrategyLogDeleteSingleRequestParams {
    id: number;
}

export interface StrategyLogDeleteSingleRequestParamsRaw {
    id: string;
}

const StrategyLogDeleteSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function StrategyLogDeleteSingleRequestParamsFromRaw(
    raw: any
): StrategyLogDeleteSingleRequestParams {
    const parsed = StrategyLogDeleteSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type StrategyLogDeleteSingleRequestBody = StrategyLogDeleteRequestBody;

export type StrategyLogDeleteSingleResponseBodyDataInstance =
    StrategyLogDeleteResponseBodyDataInstance;

export type StrategyLogDeleteSingleResponseBodyData =
    StrategyLogDeleteSingleResponseBodyDataInstance;

export type StrategyLogDeleteSingleResponseBody =
    ResponseBase<StrategyLogDeleteSingleResponseBodyData>;

const StrategyLogDeleteSingleResponseBodyDataInstanceExpected =
    StrategyLogDeleteResponseBodyDataInstanceExpected;

const StrategyLogDeleteSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: StrategyLogDeleteSingleResponseBodyDataInstanceExpected,
    }),
]);

export function StrategyLogDeleteSingleResponseBodyFromRaw(
    raw: any
): StrategyLogDeleteSingleResponseBody {
    const parsed = StrategyLogDeleteSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END DELETE
