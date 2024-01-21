import { z } from 'zod';
import {
    StrategyTemplateName,
    StrategyTemplateNameSchema,
} from './strategyTemplate.js';

import {
    ResponseBase,
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase,
} from './response.js';
import { Strategy } from '../index.js';

// Single source of truth:
const StatusConst = ['active', 'inactive'] as const;
// Use in a Zod Schema:
export const StatusSchema = z.enum(StatusConst);
// Type to use in the code:
// = "Salmon" | "Tuna" | "Trout"
export type Status = (typeof StatusConst)[number];

export interface StrategyProps {
    status: Status;
    title: string;
    strategyTemplateName: StrategyTemplateName;
}

export interface StrategyPropsOptional {
    status?: Status;
    title?: string;
    strategyTemplateName?: StrategyTemplateName;
}

const StrategyPropsExpected = z.object({
    status: StatusSchema,
    title: z.string(),
    strategyTemplateName: StrategyTemplateNameSchema,
});

const StrategyPropsOptionalExpected = StrategyPropsExpected.partial();

export function StrategyPropsFromRaw(raw: StrategyProps): StrategyProps {
    const parsed = StrategyPropsExpected.parse(raw);
    return parsed;
}
export interface StrategyModelInterface extends StrategyProps {
    id: number;
}

// BEGIN GET

export type StrategyGetRequestBody = never;
export interface StrategyGetResponseBodyDataInstance extends StrategyProps {
    id: number;
}

const StrategyGetResponseBodyDataInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

export type StrategyGetManyRequestBody = StrategyGetRequestBody;
export interface StrategyGetManyRequestQuery {
    status?: Status;
    ids?: number[];
}
export interface StrategyGetManyRequestQueryRaw {
    status?: Status;
    ids?: string;
}

const StrategyGetManyRequestQueryRawExpected = z.object({
    status: StatusSchema.optional(),
    ids: z
        .string()
        .regex(/^\d+(,\d+)*$/)
        .optional(),
});

export function StrategyGetManyRequestQueryFromRaw(
    raw: StrategyGetManyRequestQueryRaw
): StrategyGetManyRequestQuery {
    const parsed = StrategyGetManyRequestQueryRawExpected.parse(raw);
    const ids = parsed.ids?.split(',').map((id) => parseInt(id));
    return { status: parsed.status, ids };
}
export type StrategyGetManyResponseBodyDataInstance =
    StrategyGetResponseBodyDataInstance;

export type StrategyGetManyResponseBodyData =
    StrategyGetManyResponseBodyDataInstance[];

export type StrategyGetManyResponseBody =
    ResponseBase<StrategyGetManyResponseBodyData>;

const StrategyGetManyResponseBodyDataInstanceExpected =
    StrategyGetResponseBodyDataInstanceExpected;

const StrategyGetManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(StrategyGetManyResponseBodyDataInstanceExpected),
    }),
]);

export function StrategyGetManyResponseBodyFromRaw(
    raw: StrategyGetManyResponseBody
): StrategyGetManyResponseBody {
    const parsed = StrategyGetManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface StrategyGetSingleRequestParams {
    id: number;
}

export interface StrategyGetSingleRequestParamsRaw {
    id: string;
}

const StrategyGetSingleRequestParamsExpected = z.object({
    id: z.string().regex(/^\d+$/),
});

export function StrategyGetSingleRequestParamsFromRaw(
    raw: StrategyGetSingleRequestParamsRaw
): StrategyGetSingleRequestParams {
    const parsed = StrategyGetSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type StrategyGetSingleRequestBody = StrategyGetRequestBody;

export type StrategyGetSingleResponseBodyDataInstance =
    StrategyGetResponseBodyDataInstance;

export type StrategyGetSingleResponseBodyData =
    StrategyGetSingleResponseBodyDataInstance;

export type StrategyGetSingleResponseBody =
    ResponseBase<StrategyGetSingleResponseBodyData>;

const StrategyGetSingleResponseBodyDataInstanceExpected =
    StrategyGetResponseBodyDataInstanceExpected;

const StrategyGetSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: StrategyGetSingleResponseBodyDataInstanceExpected,
    }),
]);

export function StrategyGetSingleResponseBodyFromRaw(
    raw: StrategyGetSingleResponseBody
): StrategyGetSingleResponseBody {
    const parsed = StrategyGetSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END GET

// BEGIN POST

export interface StrategyPostRequestBodyDataInstance extends StrategyProps {}
export interface StrategyPostResponseBodyDataInstance extends StrategyProps {
    id: number;
}

const StrategyPostRequestBodyDataInstanceExpected = StrategyPropsExpected;

const StrategyPostResponseBodyDataInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

const StrategyPostManyRequestBodyDataInstanceExpected =
    StrategyPostRequestBodyDataInstanceExpected;

const StrategyPostManyRequestBodyExpected = z.array(
    StrategyPostManyRequestBodyDataInstanceExpected
);

export type StrategyPostManyRequestBodyDataInstance =
    StrategyPostRequestBodyDataInstance;

export type StrategyPostManyRequestBody =
    StrategyPostManyRequestBodyDataInstance[];

export function StrategyPostManyRequestBodyFromRaw(
    raw: StrategyPostManyRequestBodyDataInstance[]
): StrategyPostManyRequestBodyDataInstance[] {
    const parsed = StrategyPostManyRequestBodyExpected.parse(raw);
    return parsed;
}
export type StrategyPostManyResponseBodyDataInstance =
    StrategyPostResponseBodyDataInstance;

export type StrategyPostManyResponseBodyData =
    StrategyPostManyResponseBodyDataInstance[];

export type StrategyPostManyResponseBody =
    ResponseBase<StrategyPostManyResponseBodyData>;

const StrategyPostManyResponseBodyDataInstanceExpected =
    StrategyPostResponseBodyDataInstanceExpected;

const StrategyPostManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(StrategyPostManyResponseBodyDataInstanceExpected),
    }),
]);

export function StrategyPostManyResponseBodyFromRaw(
    raw: StrategyPostManyResponseBody
): StrategyPostManyResponseBody {
    const parsed = StrategyPostManyResponseBodyExpected.parse(raw);
    return parsed;
}

export type StrategyPostSingleRequestBodyDataInstance =
    StrategyPostRequestBodyDataInstance;
export type StrategyPostSingleRequestBody =
    StrategyPostSingleRequestBodyDataInstance;

const StrategyPostSingleRequestBodyDataInstanceExpected =
    StrategyPostRequestBodyDataInstanceExpected;

const StrategyPostSingleRequestBodyExpected =
    StrategyPostSingleRequestBodyDataInstanceExpected;

export function StrategyPostSingleRequestBodyFromRaw(
    raw: StrategyPostSingleRequestBodyDataInstance
): StrategyPostSingleRequestBodyDataInstance {
    const parsed = StrategyPostSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type StrategyPostSingleResponseBodyDataInstance =
    StrategyPostResponseBodyDataInstance;

export type StrategyPostSingleResponseBodyData =
    StrategyPostSingleResponseBodyDataInstance;

export type StrategyPostSingleResponseBody =
    ResponseBase<StrategyPostSingleResponseBodyData>;

const StrategyPostSingleResponseBodyDataInstanceExpected =
    StrategyPostResponseBodyDataInstanceExpected;

const StrategyPostSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: StrategyPostSingleResponseBodyDataInstanceExpected,
    }),
]);

export function StrategyPostSingleResponseBodyFromRaw(
    raw: StrategyPostSingleResponseBody
): StrategyPostSingleResponseBody {
    const parsed = StrategyPostSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END POST

// BEGIN PUT

export interface StrategyPutRequestBodyDataInstance extends StrategyProps {}
export interface StrategyPutResponseBodyDataInstance extends StrategyProps {
    id: number;
}

const StrategyPutRequestBodyDataInstanceExpected = StrategyPropsExpected;

const StrategyPutResponseBodyDataInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

export interface StrategyPutManyRequestBodyDataInstance
    extends StrategyPutRequestBodyDataInstance {
    id: number;
}
export type StrategyPutManyRequestBody =
    StrategyPutManyRequestBodyDataInstance[];

const StrategyPutManyRequestBodyDataInstanceExpected =
    StrategyPutRequestBodyDataInstanceExpected.extend({
        id: z.number(),
    });

const StrategyPutManyRequestBodyExpected = z.array(
    StrategyPutManyRequestBodyDataInstanceExpected
);

export function StrategyPutManyRequestBodyFromRaw(
    raw: StrategyPutManyRequestBodyDataInstance[]
): StrategyPutManyRequestBodyDataInstance[] {
    const parsed = StrategyPutManyRequestBodyExpected.parse(raw);
    return parsed;
}

export type StrategyPutManyResponseBodyDataInstance =
    StrategyPutResponseBodyDataInstance;

export type StrategyPutManyResponseBodyData =
    StrategyPutManyResponseBodyDataInstance[];

export type StrategyPutManyResponseBody =
    ResponseBase<StrategyPutManyResponseBodyData>;

const StrategyPutManyResponseBodyDataInstanceExpected =
    StrategyPutResponseBodyDataInstanceExpected;

const StrategyPutManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(StrategyPutManyResponseBodyDataInstanceExpected),
    }),
]);

export function StrategyPutManyResponseBodyFromRaw(
    raw: StrategyPutManyResponseBody
): StrategyPutManyResponseBody {
    const parsed = StrategyPutManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface StrategyPutSingleRequestParams {
    id: number;
}

export interface StrategyPutSingleRequestParamsRaw {
    id: string;
}

const StrategyPutSingleRequestParamsExpected = z.object({
    id: z.string().regex(/^\d+$/),
});

export function StrategyPutSingleRequestParamsFromRaw(
    raw: StrategyPutSingleRequestParamsRaw
): StrategyPutSingleRequestParams {
    const parsed = StrategyPutSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type StrategyPutSingleRequestBodyDataInstance =
    StrategyPutRequestBodyDataInstance;
export type StrategyPutSingleRequestBody =
    StrategyPutSingleRequestBodyDataInstance;

const StrategyPutSingleRequestBodyDataInstanceExpected =
    StrategyPutRequestBodyDataInstanceExpected;

const StrategyPutSingleRequestBodyExpected =
    StrategyPutSingleRequestBodyDataInstanceExpected;

export function StrategyPutSingleRequestBodyFromRaw(
    raw: StrategyPutSingleRequestBodyDataInstance
): StrategyPutSingleRequestBodyDataInstance {
    const parsed = StrategyPutSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type StrategyPutSingleResponseBodyDataInstance =
    StrategyPutResponseBodyDataInstance;

export type StrategyPutSingleResponseBodyData =
    StrategyPutSingleResponseBodyDataInstance;

export type StrategyPutSingleResponseBody =
    ResponseBase<StrategyPutSingleResponseBodyData>;

const StrategyPutSingleResponseBodyDataInstanceExpected =
    StrategyPutResponseBodyDataInstanceExpected;

const StrategyPutSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: StrategyPutSingleResponseBodyDataInstanceExpected,
    }),
]);

export function StrategyPutSingleResponseBodyFromRaw(
    raw: StrategyPutSingleResponseBody
): StrategyPutSingleResponseBody {
    const parsed = StrategyPutSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END PUT

// BEGIN PATCH

export interface StrategyPatchRequestBodyDataInstance
    extends StrategyPropsOptional {}
export interface StrategyPatchResponseBodyDataInstance extends StrategyProps {
    id: number;
}

const StrategyPatchRequestBodyDataInstanceExpected =
    StrategyPropsOptionalExpected;

const StrategyPatchResponseBodyDataInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

export interface StrategyPatchManyRequestBodyDataInstance
    extends StrategyPatchRequestBodyDataInstance {
    id: number;
}
export type StrategyPatchManyRequestBody =
    StrategyPatchManyRequestBodyDataInstance[];

const StrategyPatchManyRequestBodyDataInstanceExpected =
    StrategyPatchRequestBodyDataInstanceExpected.extend({
        id: z.number(),
    });

const StrategyPatchManyRequestBodyExpected = z.array(
    StrategyPatchManyRequestBodyDataInstanceExpected
);

export function StrategyPatchManyRequestBodyFromRaw(
    raw: StrategyPatchManyRequestBodyDataInstance[]
): StrategyPatchManyRequestBodyDataInstance[] {
    const parsed = StrategyPatchManyRequestBodyExpected.parse(raw);
    return parsed;
}

export type StrategyPatchManyResponseBodyDataInstance =
    StrategyPatchResponseBodyDataInstance;

export type StrategyPatchManyResponseBodyData =
    StrategyPatchManyResponseBodyDataInstance[];

export type StrategyPatchManyResponseBody =
    ResponseBase<StrategyPatchManyResponseBodyData>;

const StrategyPatchManyResponseBodyDataInstanceExpected =
    StrategyPatchResponseBodyDataInstanceExpected;

const StrategyPatchManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(StrategyPatchManyResponseBodyDataInstanceExpected),
    }),
]);

export function StrategyPatchManyResponseBodyFromRaw(
    raw: StrategyPatchManyResponseBody
): StrategyPatchManyResponseBody {
    const parsed = StrategyPatchManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface StrategyPatchSingleRequestParams {
    id: number;
}

export interface StrategyPatchSingleRequestParamsRaw {
    id: string;
}

const StrategyPatchSingleRequestParamsExpected = z.object({
    id: z.string().regex(/^\d+$/),
});

export function StrategyPatchSingleRequestParamsFromRaw(
    raw: StrategyPatchSingleRequestParamsRaw
): StrategyPatchSingleRequestParams {
    const parsed = StrategyPatchSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type StrategyPatchSingleRequestBodyDataInstance =
    StrategyPatchRequestBodyDataInstance;
export type StrategyPatchSingleRequestBody =
    StrategyPatchSingleRequestBodyDataInstance;

const StrategyPatchSingleRequestBodyDataInstanceExpected =
    StrategyPatchRequestBodyDataInstanceExpected;

const StrategyPatchSingleRequestBodyExpected =
    StrategyPatchSingleRequestBodyDataInstanceExpected;

export function StrategyPatchSingleRequestBodyFromRaw(
    raw: StrategyPatchSingleRequestBodyDataInstance
): StrategyPatchSingleRequestBodyDataInstance {
    const parsed = StrategyPatchSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type StrategyPatchSingleResponseBodyDataInstance =
    StrategyPatchResponseBodyDataInstance;

export type StrategyPatchSingleResponseBodyData =
    StrategyPatchSingleResponseBodyDataInstance;

export type StrategyPatchSingleResponseBody =
    ResponseBase<StrategyPatchSingleResponseBodyData>;

const StrategyPatchSingleResponseBodyDataInstanceExpected =
    StrategyPatchResponseBodyDataInstanceExpected;

const StrategyPatchSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: StrategyPatchSingleResponseBodyDataInstanceExpected,
    }),
]);

export function StrategyPatchSingleResponseBodyFromRaw(
    raw: StrategyPatchSingleResponseBody
): StrategyPatchSingleResponseBody {
    const parsed = StrategyPatchSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END PATCH

// BEGIN DELETE

export type StrategyDeleteRequestBody = never;
export interface StrategyDeleteResponseBodyDataInstance extends StrategyProps {
    id: number;
}

export type StrategyDeleteManyRequestBody = StrategyDeleteRequestBody;
export interface StrategyDeleteManyRequestQuery {
    ids: number[];
}

const StrategyDeleteResponseBodyDataInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

export interface StrategyDeleteManyRequestQueryRaw {
    status?: Status;
    ids?: string;
}

const StrategyDeleteManyRequestQueryRawExpected = z.object({
    ids: z.string().regex(/^\d+(,\d+)*$/),
});

export function StrategyDeleteManyRequestQueryFromRaw(
    raw: StrategyDeleteManyRequestQueryRaw
): StrategyDeleteManyRequestQuery {
    const parsed = StrategyDeleteManyRequestQueryRawExpected.parse(raw);
    const ids = parsed.ids?.split(',').map((id) => parseInt(id));
    return { ids };
}
export type StrategyDeleteManyResponseBodyDataInstance =
    StrategyDeleteResponseBodyDataInstance;

export type StrategyDeleteManyResponseBodyData =
    StrategyDeleteManyResponseBodyDataInstance[];

export type StrategyDeleteManyResponseBody =
    ResponseBase<StrategyDeleteManyResponseBodyData>;

const StrategyDeleteManyResponseBodyDataInstanceExpected =
    StrategyDeleteResponseBodyDataInstanceExpected;

const StrategyDeleteManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(StrategyDeleteManyResponseBodyDataInstanceExpected),
    }),
]);

export function StrategyDeleteManyResponseBodyFromRaw(
    raw: StrategyDeleteManyResponseBody
): StrategyDeleteManyResponseBody {
    const parsed = StrategyDeleteManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface StrategyDeleteSingleRequestParams {
    id: number;
}

export interface StrategyDeleteSingleRequestParamsRaw {
    id: string;
}

const StrategyDeleteSingleRequestParamsExpected = z.object({
    id: z.string().regex(/^\d+$/),
});

export function StrategyDeleteSingleRequestParamsFromRaw(
    raw: StrategyDeleteSingleRequestParamsRaw
): StrategyDeleteSingleRequestParams {
    const parsed = StrategyDeleteSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type StrategyDeleteSingleRequestBody = StrategyDeleteRequestBody;

export type StrategyDeleteSingleResponseBodyDataInstance =
    StrategyDeleteResponseBodyDataInstance;

export type StrategyDeleteSingleResponseBodyData =
    StrategyDeleteSingleResponseBodyDataInstance;

export type StrategyDeleteSingleResponseBody =
    ResponseBase<StrategyDeleteSingleResponseBodyData>;

const StrategyDeleteSingleResponseBodyDataInstanceExpected =
    StrategyDeleteResponseBodyDataInstanceExpected;

const StrategyDeleteSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: StrategyDeleteSingleResponseBodyDataInstanceExpected,
    }),
]);

export function StrategyDeleteSingleResponseBodyFromRaw(
    raw: StrategyDeleteSingleResponseBody
): StrategyDeleteSingleResponseBody {
    const parsed = StrategyDeleteSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END DELETE
