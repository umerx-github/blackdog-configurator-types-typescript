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

const StrategyPropsExpected = z.object({
    status: StatusSchema,
    title: z.string(),
    strategyTemplateName: StrategyTemplateNameSchema,
});

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
    StrategyPropsExpected.extend({
        id: z.number(),
    });

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

export type StrategyGetSingleRequestBody = StrategyGetRequestBody;

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
export type StrategyGetSingleResponseBodyDataInstance =
    StrategyGetResponseBodyDataInstance;

export type StrategyGetSingleResponseBodyData =
    StrategyGetSingleResponseBodyDataInstance;

export type StrategyGetSingleResponseBody =
    ResponseBase<StrategyGetSingleResponseBodyData>;

const StrategyGetSingleResponseBodyDataInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

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

export type StrategyPostManyRequestBodyDataInstance =
    StrategyPostRequestBodyDataInstance;
export type StrategyPostManyRequestBody =
    StrategyPostManyRequestBodyDataInstance[];

const StrategyPostManyRequestBodyDataInstanceExpected = StrategyPropsExpected;

const StrategyPostManyRequestBodyExpected = z.array(
    StrategyPostManyRequestBodyDataInstanceExpected
);

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
    StrategyPropsExpected.extend({
        id: z.number(),
    });

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

const StrategyPostSingleRequestBodyDataInstanceExpected = StrategyPropsExpected;

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
    StrategyPropsExpected.extend({
        id: z.number(),
    });

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

export type StrategyPutManyRequestBodyDataInstance =
    StrategyPutRequestBodyDataInstance;
export type StrategyPutManyRequestBody =
    StrategyPutManyRequestBodyDataInstance[];

const StrategyPutManyRequestBodyDataInstanceExpected = StrategyPropsExpected;

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
    StrategyPropsExpected.extend({
        id: z.number(),
    });

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

export type StrategyPutSingleRequestBodyDataInstance =
    StrategyPutRequestBodyDataInstance;
export type StrategyPutSingleRequestBody =
    StrategyPutSingleRequestBodyDataInstance;

const StrategyPutSingleRequestBodyDataInstanceExpected = StrategyPropsExpected;

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
    StrategyPropsExpected.extend({
        id: z.number(),
    });

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

export interface StrategyPatchRequestBodyDataInstance extends StrategyProps {}
export interface StrategyPatchResponseBodyDataInstance extends StrategyProps {
    id: number;
}

export type StrategyPatchManyRequestBodyDataInstance =
    StrategyPatchRequestBodyDataInstance;
export type StrategyPatchManyRequestBody =
    StrategyPatchManyRequestBodyDataInstance[];

const StrategyPatchManyRequestBodyDataInstanceExpected = StrategyPropsExpected;

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
    StrategyPropsExpected.extend({
        id: z.number(),
    });

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

export type StrategyPatchSingleRequestBodyDataInstance =
    StrategyPatchRequestBodyDataInstance;
export type StrategyPatchSingleRequestBody =
    StrategyPatchSingleRequestBodyDataInstance;

const StrategyPatchSingleRequestBodyDataInstanceExpected =
    StrategyPropsExpected;

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
    StrategyPropsExpected.extend({
        id: z.number(),
    });

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
    status?: Status;
    ids?: number[];
}
export interface StrategyDeleteManyRequestQueryRaw {
    status?: Status;
    ids?: string;
}

const StrategyDeleteManyRequestQueryRawExpected = z.object({
    status: StatusSchema.optional(),
    ids: z
        .string()
        .regex(/^\d+(,\d+)*$/)
        .optional(),
});

export function StrategyDeleteManyRequestQueryFromRaw(
    raw: StrategyDeleteManyRequestQueryRaw
): StrategyDeleteManyRequestQuery {
    const parsed = StrategyDeleteManyRequestQueryRawExpected.parse(raw);
    const ids = parsed.ids?.split(',').map((id) => parseInt(id));
    return { status: parsed.status, ids };
}
export type StrategyDeleteManyResponseBodyDataInstance =
    StrategyDeleteResponseBodyDataInstance;

export type StrategyDeleteManyResponseBodyData =
    StrategyDeleteManyResponseBodyDataInstance[];

export type StrategyDeleteManyResponseBody =
    ResponseBase<StrategyDeleteManyResponseBodyData>;

const StrategyDeleteManyResponseBodyDataInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

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

export type StrategyDeleteSingleRequestBody = StrategyDeleteRequestBody;

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
export type StrategyDeleteSingleResponseBodyDataInstance =
    StrategyDeleteResponseBodyDataInstance;

export type StrategyDeleteSingleResponseBodyData =
    StrategyDeleteSingleResponseBodyDataInstance;

export type StrategyDeleteSingleResponseBody =
    ResponseBase<StrategyDeleteSingleResponseBodyData>;

const StrategyDeleteSingleResponseBodyDataInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

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
