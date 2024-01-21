import { z } from 'zod';
import {
    StrategyTemplateName,
    StrategyTemplateNameSchema,
} from './strategyTemplate.js';

import {
    ResponseBase,
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase,
    ResponseBodyOneOrManyBase,
} from './response.js';

import { RequestBodyOneOrManyBase } from './request.js';
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

/////////

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

export interface StrategyPutRequestBodyDataInstance extends StrategyProps {}
export interface StrategyPutResponseBodyDataInstance extends StrategyProps {
    id: number;
}
export type StrategyPutRequestBody =
    RequestBodyOneOrManyBase<StrategyPutRequestBodyDataInstance>;
export type StrategyPutResponseBody =
    ResponseBodyOneOrManyBase<StrategyPutResponseBodyDataInstance>;

export interface StrategyPatchRequestBodyDataInstance extends StrategyProps {}
export interface StrategyPatchResponseBodyDataInstance extends StrategyProps {
    id: number;
}
export type StrategyPatchRequestBody =
    RequestBodyOneOrManyBase<StrategyPatchRequestBodyDataInstance>;
export type StrategyPatchResponseBody =
    ResponseBodyOneOrManyBase<StrategyPatchResponseBodyDataInstance>;

export interface StrategyDeleteResponseBodyDataInstance extends StrategyProps {
    id: number;
}
export type StrategyDeleteRequestBody = never;
export type StrategyDeleteResponseBody =
    ResponseBodyOneOrManyBase<StrategyDeleteResponseBodyDataInstance>;
export interface StrategyDeleteRequestParams {
    ids?: number[];
}
export interface StrategyDeleteRequestParamsRaw {
    ids?: string;
}

const StrategyPutRequestBodyDataInstanceExpected = StrategyPropsExpected;

const StrategyPutRequestBodyExpected = z.union([
    StrategyPutRequestBodyDataInstanceExpected,
    z.array(StrategyPutRequestBodyDataInstanceExpected),
]);

export function StrategyPutRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<StrategyPutRequestBodyDataInstance>
): RequestBodyOneOrManyBase<StrategyPutRequestBodyDataInstance> {
    const parsed = StrategyPutRequestBodyExpected.parse(raw);
    return parsed;
}

const StrategyPutResponseBodyDataInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

const StrategyPutResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            StrategyPutResponseBodyDataInstanceExpected,
            z.array(StrategyPutResponseBodyDataInstanceExpected),
        ]),
    }),
]);

export function StrategyPutResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<StrategyPutResponseBodyDataInstance>
    >
): ResponseBase<
    ResponseBodyOneOrManyBase<StrategyPutResponseBodyDataInstance>
> {
    const parsed = StrategyPutResponseBodyExpected.parse(raw);
    return parsed;
}

const StrategyPatchRequestBodyDataInstanceExpected = StrategyPropsExpected;

const StrategyPatchRequestBodyExpected = z.union([
    StrategyPatchRequestBodyDataInstanceExpected,
    z.array(StrategyPatchRequestBodyDataInstanceExpected),
]);

export function StrategyPatchRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<StrategyPatchRequestBodyDataInstance>
): RequestBodyOneOrManyBase<StrategyPatchRequestBodyDataInstance> {
    const parsed = StrategyPatchRequestBodyExpected.parse(raw);
    return parsed;
}

const StrategyPatchResponseBodyDataInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

const StrategyPatchResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            StrategyPatchResponseBodyDataInstanceExpected,
            z.array(StrategyPatchResponseBodyDataInstanceExpected),
        ]),
    }),
]);

export function StrategyPatchResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<StrategyPatchResponseBodyDataInstance>
    >
): ResponseBase<
    ResponseBodyOneOrManyBase<StrategyPatchResponseBodyDataInstance>
> {
    const parsed = StrategyPatchResponseBodyExpected.parse(raw);
    return parsed;
}

// Typing Express Request: https://stackoverflow.com/questions/48027563/typescript-type-annotation-for-res-body

const StrategyDeleteRequestParamsExpected = z.object({
    ids: z.string().regex(/^\d+(,\d+)*$/),
    // .optional(),
});

export function StrategyDeleteRequestParamsFromRaw(
    raw: StrategyDeleteRequestParamsRaw
): StrategyDeleteRequestParams {
    const parsed = StrategyDeleteRequestParamsExpected.parse(raw);
    const ids = parsed.ids?.split(',').map((id) => parseInt(id));
    return { ids };
}

const StrategyDeleteResponseBodyDataInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

const StrategyDeleteResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            StrategyDeleteResponseBodyDataInstanceExpected,
            z.array(StrategyDeleteResponseBodyDataInstanceExpected),
        ]),
    }),
]);

export function StrategyDeleteResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<StrategyDeleteResponseBodyDataInstance>
    >
): ResponseBase<
    ResponseBodyOneOrManyBase<StrategyDeleteResponseBodyDataInstance>
> {
    const parsed = StrategyDeleteResponseBodyExpected.parse(raw);
    return parsed;
}
