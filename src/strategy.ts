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

export interface StrategyManyPostRequestBodyInstance extends StrategyProps {}

export interface StrategyManyPostResponseBodyInstance extends StrategyProps {
    id: number;
}

export type StrategyManyPostRequestBody = StrategyManyPostRequestBodyInstance[];
export type StrategyManyPostResponseBody =
    StrategyManyPostResponseBodyInstance[];

export interface StrategySinglePutRequestBodyInstance extends StrategyProps {}

export interface StrategySinglePutResponseBodyInstance extends StrategyProps {
    id: number;
}

export type StrategySinglePutRequestBody = StrategySinglePutRequestBodyInstance;
export type StrategySinglePutResponseBody =
    StrategySinglePutResponseBodyInstance;

export interface StrategyManyPutRequestBodyInstance extends StrategyProps {
    id: number;
}

export interface StrategyManyPutResponseBodyInstance extends StrategyProps {
    id: number;
}

export type StrategyManyPutRequestBody = StrategyManyPutRequestBodyInstance[];
export type StrategyManyPutResponseBody = StrategyManyPutResponseBodyInstance[];

export interface StrategyManyPatchRequestBodyInstance extends StrategyProps {
    id: number;
}

export interface StrategyManyPatchResponseBodyInstance extends StrategyProps {
    id: number;
}

export type StrategyManyPatchRequestBody =
    StrategyManyPatchRequestBodyInstance[];
export type StrategyManyPatchResponseBody =
    StrategyManyPatchResponseBodyInstance[];

export interface StrategySingleDeleteResponseBodyInstance
    extends StrategyProps {
    id: number;
}

export type StrategySingleDeleteRequestBody = never;
export type StrategySingleDeleteResponseBody =
    StrategySingleDeleteResponseBodyInstance;

export interface StrategyManyDeleteRequestParams {
    ids?: number[];
}

export interface StrategyManyDeleteRequestParamsRaw {
    ids?: string;
}

export interface StrategyManyDeleteResponseBodyInstance extends StrategyProps {
    id: number;
}

export type StrategyManyDeleteRequestBody = never;
export type StrategyManyDeleteResponseBody =
    StrategyManyDeleteResponseBodyInstance[];

const StrategyPropsExpected = z.object({
    status: StatusSchema,
    title: z.string(),
    strategyTemplateName: StrategyTemplateNameSchema,
});

export function StrategyPropsFromRaw(raw: StrategyProps): StrategyProps {
    const parsed = StrategyPropsExpected.parse(raw);
    return parsed;
}

const StrategyManyPostRequestBodyInstanceExpected = StrategyPropsExpected;
const StrategyManyPostRequestBodyExpected = z.array(
    StrategyManyPostRequestBodyInstanceExpected
);

export function StrategyManyPostRequestBodyFromRaw(
    raw: StrategyManyPostRequestBody
): StrategyManyPostRequestBody {
    const parsed = StrategyManyPostRequestBodyExpected.parse(raw);
    return parsed;
}

const StrategyManyPostResponseBodyInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

const StrategyManyPostResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(StrategyManyPostResponseBodyInstanceExpected),
    }),
]);

export function StrategyManyPostResponseBodyFromRaw(
    raw: ResponseBase<StrategyManyPostResponseBody>
): ResponseBase<StrategyManyPostResponseBody> {
    const parsed = StrategyManyPostResponseBodyExpected.parse(raw);
    return parsed;
}

const StrategySinglePutRequestBodyInstanceExpected = StrategyPropsExpected;
const StrategySinglePutRequestBodyExpected =
    StrategySinglePutRequestBodyInstanceExpected;

export function StrategySinglePutRequestBodyFromRaw(
    raw: StrategySinglePutRequestBody
): StrategySinglePutRequestBody {
    const parsed = StrategySinglePutRequestBodyExpected.parse(raw);
    return parsed;
}

const StrategySinglePutResponseBodyInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

const StrategySinglePutResponseBodyExpected =
    StrategySinglePutResponseBodyInstanceExpected;

export function StrategySinglePutResponseBodyFromRaw(
    raw: StrategySinglePutResponseBody
): StrategySinglePutResponseBody {
    const parsed = StrategySinglePutResponseBodyExpected.parse(raw);
    return parsed;
}

const StrategyManyPutRequestBodyInstanceExpected = StrategyPropsExpected.extend(
    {
        id: z.number(),
    }
);

const StrategyManyPutRequestBodyExpected = z.array(
    StrategyManyPutRequestBodyInstanceExpected
);

export function StrategyManyPutRequestBodyFromRaw(
    raw: StrategyManyPutRequestBody
): StrategyManyPutRequestBody {
    const parsed = StrategyManyPutRequestBodyExpected.parse(raw);
    return parsed;
}

const StrategyManyPutResponseBodyInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

const StrategyManyPutResponseBodyExpected = z.array(
    StrategyManyPutResponseBodyInstanceExpected
);

export function StrategyManyPutResponseBodyFromRaw(
    raw: StrategyManyPutResponseBody
): StrategyManyPutResponseBody {
    const parsed = StrategyManyPutResponseBodyExpected.parse(raw);
    return parsed;
}

const StrategyManyPatchRequestBodyInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

const StrategyManyPatchRequestBodyExpected = z.array(
    StrategyManyPatchRequestBodyInstanceExpected
);

export function StrategyManyPatchRequestBodyFromRaw(
    raw: StrategyManyPatchRequestBody
): StrategyManyPatchRequestBody {
    const parsed = StrategyManyPatchRequestBodyExpected.parse(raw);
    return parsed;
}

const StrategyManyPatchResponseBodyInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

const StrategyManyPatchResponseBodyExpected = z.array(
    StrategyManyPatchResponseBodyInstanceExpected
);

export function StrategyManyPatchResponseBodyFromRaw(
    raw: StrategyManyPatchResponseBody
): StrategyManyPatchResponseBody {
    const parsed = StrategyManyPatchResponseBodyExpected.parse(raw);
    return parsed;
}

// Typing Express Request: https://stackoverflow.com/questions/48027563/typescript-type-annotation-for-res-body

const StrategyManyDeleteRequestParamsExpected = z.object({
    ids: z
        .string()
        .regex(/^\d+(,\d+)*$/)
        .optional(),
});

export function StrategyManyDeleteRequestParamsFromRaw(
    raw: StrategyManyDeleteRequestParamsRaw
): StrategyManyDeleteRequestParams {
    const parsed = StrategyManyDeleteRequestParamsExpected.parse(raw);
    const ids = parsed.ids?.split(',').map((id) => parseInt(id));
    return { ids };
}

const StrategySingleDeleteResponseBodyInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

const StrategySingleDeleteResponseBodyExpected =
    StrategySingleDeleteResponseBodyInstanceExpected;

export function StrategySingleDeleteResponseBodyFromRaw(
    raw: StrategySingleDeleteResponseBody
): StrategySingleDeleteResponseBody {
    const parsed = StrategySingleDeleteResponseBodyExpected.parse(raw);
    return parsed;
}

const StrategyManyDeleteResponseBodyInstanceExpected =
    StrategyPropsExpected.extend({
        id: z.number(),
    });

const StrategyManyDeleteResponseBodyExpected = z.array(
    StrategyManyDeleteResponseBodyInstanceExpected
);

export function StrategyManyDeleteResponseBodyFromRaw(
    raw: StrategyManyDeleteResponseBody
): StrategyManyDeleteResponseBody {
    const parsed = StrategyManyDeleteResponseBodyExpected.parse(raw);
    return parsed;
}
