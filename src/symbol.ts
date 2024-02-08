import { z } from 'zod';

import {
    ResponseBase,
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase,
} from './response.js';

export interface SymbolRequiredFields {
    name: string;
}

export interface SymbolRequiredFieldsOptional {
    name?: string;
}
export interface SymbolProps extends SymbolRequiredFields {}

export interface SymbolPropsOptional extends SymbolRequiredFieldsOptional {}

const SymbolPropsExpected = z.object({
    name: z.string().transform((val) => val.trim().toUpperCase()),
});

const SymbolPropsOptionalExpected = SymbolPropsExpected.partial();

export function SymbolPropsFromRaw(raw: SymbolProps): SymbolProps {
    const parsed = SymbolPropsExpected.parse(raw);
    return parsed;
}
export interface SymbolModelInterface extends SymbolRequiredFields {
    id: number;
}

export interface SymbolResponseBodyDataInstance extends SymbolProps {
    id: number;
}

// BEGIN GET

export type SymbolGetRequestBody = never;
export type SymbolGetResponseBodyDataInstance = SymbolResponseBodyDataInstance;

const SymbolGetResponseBodyDataInstanceExpected = SymbolPropsExpected.extend({
    id: z.number(),
});

export type SymbolGetManyRequestBody = SymbolGetRequestBody;
export interface SymbolGetManyRequestQuery {
    name?: string;
    ids?: number[];
}
export interface SymbolGetManyRequestQueryRaw {
    name?: string;
    ids?: string;
}

const SymbolGetManyRequestQueryRawExpected = z.object({
    name: z
        .string()
        .optional()
        .transform((val) => val?.trim().toUpperCase()),
    ids: z
        .string()
        .regex(/^\d+(,\d+)*$/)
        .optional(),
});

export function SymbolGetManyRequestQueryFromRaw(
    raw: SymbolGetManyRequestQueryRaw
): SymbolGetManyRequestQuery {
    const parsed = SymbolGetManyRequestQueryRawExpected.parse(raw);
    const ids =
        undefined === parsed.ids
            ? undefined
            : parsed.ids.split(',').map((id) => parseInt(id));
    const name = parsed.name ?? undefined;
    const toReturn: SymbolGetManyRequestQuery = {};
    if (undefined !== ids) {
        toReturn.ids = ids;
    }
    if (undefined !== name) {
        toReturn.name = name;
    }
    return toReturn;
}
export type SymbolGetManyResponseBodyDataInstance =
    SymbolGetResponseBodyDataInstance;

export type SymbolGetManyResponseBodyData =
    SymbolGetManyResponseBodyDataInstance[];

export type SymbolGetManyResponseBody =
    ResponseBase<SymbolGetManyResponseBodyData>;

const SymbolGetManyResponseBodyDataInstanceExpected =
    SymbolGetResponseBodyDataInstanceExpected;

const SymbolGetManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(SymbolGetManyResponseBodyDataInstanceExpected),
    }),
]);

export function SymbolGetManyResponseBodyFromRaw(
    raw: SymbolGetManyResponseBody
): SymbolGetManyResponseBody {
    const parsed = SymbolGetManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface SymbolGetSingleRequestParams {
    id: number;
}

export interface SymbolGetSingleRequestParamsRaw {
    id: string;
}

const SymbolGetSingleRequestParamsExpected = z.object({
    id: z.string().regex(/^\d+$/),
});

export function SymbolGetSingleRequestParamsFromRaw(
    raw: SymbolGetSingleRequestParamsRaw
): SymbolGetSingleRequestParams {
    const parsed = SymbolGetSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type SymbolGetSingleRequestBody = SymbolGetRequestBody;

export type SymbolGetSingleResponseBodyDataInstance =
    SymbolGetResponseBodyDataInstance;

export type SymbolGetSingleResponseBodyData =
    SymbolGetSingleResponseBodyDataInstance;

export type SymbolGetSingleResponseBody =
    ResponseBase<SymbolGetSingleResponseBodyData>;

const SymbolGetSingleResponseBodyDataInstanceExpected =
    SymbolGetResponseBodyDataInstanceExpected;

const SymbolGetSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: SymbolGetSingleResponseBodyDataInstanceExpected,
    }),
]);

export function SymbolGetSingleResponseBodyFromRaw(
    raw: SymbolGetSingleResponseBody
): SymbolGetSingleResponseBody {
    const parsed = SymbolGetSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END GET

// BEGIN POST

export interface SymbolPostRequestBodyDataInstance extends SymbolProps {}
export type SymbolPostResponseBodyDataInstance = SymbolResponseBodyDataInstance;
const SymbolPostRequestBodyDataInstanceExpected = SymbolPropsExpected;

const SymbolPostResponseBodyDataInstanceExpected = SymbolPropsExpected.extend({
    id: z.number(),
});

const SymbolPostManyRequestBodyDataInstanceExpected =
    SymbolPostRequestBodyDataInstanceExpected;

const SymbolPostManyRequestBodyExpected = z.array(
    SymbolPostManyRequestBodyDataInstanceExpected
);

export type SymbolPostManyRequestBodyDataInstance =
    SymbolPostRequestBodyDataInstance;

export type SymbolPostManyRequestBody = SymbolPostManyRequestBodyDataInstance[];

export function SymbolPostManyRequestBodyFromRaw(
    raw: SymbolPostManyRequestBodyDataInstance[]
): SymbolPostManyRequestBodyDataInstance[] {
    const parsed = SymbolPostManyRequestBodyExpected.parse(raw);
    return parsed;
}
export type SymbolPostManyResponseBodyDataInstance =
    SymbolPostResponseBodyDataInstance;

export type SymbolPostManyResponseBodyData =
    SymbolPostManyResponseBodyDataInstance[];

export type SymbolPostManyResponseBody =
    ResponseBase<SymbolPostManyResponseBodyData>;

const SymbolPostManyResponseBodyDataInstanceExpected =
    SymbolPostResponseBodyDataInstanceExpected;

const SymbolPostManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(SymbolPostManyResponseBodyDataInstanceExpected),
    }),
]);

export function SymbolPostManyResponseBodyFromRaw(
    raw: SymbolPostManyResponseBody
): SymbolPostManyResponseBody {
    const parsed = SymbolPostManyResponseBodyExpected.parse(raw);
    return parsed;
}

export type SymbolPostSingleRequestBodyDataInstance =
    SymbolPostRequestBodyDataInstance;
export type SymbolPostSingleRequestBody =
    SymbolPostSingleRequestBodyDataInstance;

const SymbolPostSingleRequestBodyDataInstanceExpected =
    SymbolPostRequestBodyDataInstanceExpected;

const SymbolPostSingleRequestBodyExpected =
    SymbolPostSingleRequestBodyDataInstanceExpected;

export function SymbolPostSingleRequestBodyFromRaw(
    raw: SymbolPostSingleRequestBodyDataInstance
): SymbolPostSingleRequestBodyDataInstance {
    const parsed = SymbolPostSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type SymbolPostSingleResponseBodyDataInstance =
    SymbolPostResponseBodyDataInstance;

export type SymbolPostSingleResponseBodyData =
    SymbolPostSingleResponseBodyDataInstance;

export type SymbolPostSingleResponseBody =
    ResponseBase<SymbolPostSingleResponseBodyData>;

const SymbolPostSingleResponseBodyDataInstanceExpected =
    SymbolPostResponseBodyDataInstanceExpected;

const SymbolPostSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: SymbolPostSingleResponseBodyDataInstanceExpected,
    }),
]);

export function SymbolPostSingleResponseBodyFromRaw(
    raw: SymbolPostSingleResponseBody
): SymbolPostSingleResponseBody {
    const parsed = SymbolPostSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END POST

// BEGIN PUT

export interface SymbolPutRequestBodyDataInstance extends SymbolProps {}
export type SymbolPutResponseBodyDataInstance = SymbolResponseBodyDataInstance;

const SymbolPutRequestBodyDataInstanceExpected = SymbolPropsExpected;

const SymbolPutResponseBodyDataInstanceExpected = SymbolPropsExpected.extend({
    id: z.number(),
});

export interface SymbolPutManyRequestBodyDataInstance
    extends SymbolPutRequestBodyDataInstance {
    id: number;
}
export type SymbolPutManyRequestBody = SymbolPutManyRequestBodyDataInstance[];

const SymbolPutManyRequestBodyDataInstanceExpected =
    SymbolPutRequestBodyDataInstanceExpected.extend({
        id: z.number(),
    });

const SymbolPutManyRequestBodyExpected = z.array(
    SymbolPutManyRequestBodyDataInstanceExpected
);

export function SymbolPutManyRequestBodyFromRaw(
    raw: SymbolPutManyRequestBodyDataInstance[]
): SymbolPutManyRequestBodyDataInstance[] {
    const parsed = SymbolPutManyRequestBodyExpected.parse(raw);
    return parsed;
}

export type SymbolPutManyResponseBodyDataInstance =
    SymbolPutResponseBodyDataInstance;

export type SymbolPutManyResponseBodyData =
    SymbolPutManyResponseBodyDataInstance[];

export type SymbolPutManyResponseBody =
    ResponseBase<SymbolPutManyResponseBodyData>;

const SymbolPutManyResponseBodyDataInstanceExpected =
    SymbolPutResponseBodyDataInstanceExpected;

const SymbolPutManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(SymbolPutManyResponseBodyDataInstanceExpected),
    }),
]);

export function SymbolPutManyResponseBodyFromRaw(
    raw: SymbolPutManyResponseBody
): SymbolPutManyResponseBody {
    const parsed = SymbolPutManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface SymbolPutSingleRequestParams {
    id: number;
}

export interface SymbolPutSingleRequestParamsRaw {
    id: string;
}

const SymbolPutSingleRequestParamsExpected = z.object({
    id: z.string().regex(/^\d+$/),
});

export function SymbolPutSingleRequestParamsFromRaw(
    raw: SymbolPutSingleRequestParamsRaw
): SymbolPutSingleRequestParams {
    const parsed = SymbolPutSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type SymbolPutSingleRequestBodyDataInstance =
    SymbolPutRequestBodyDataInstance;
export type SymbolPutSingleRequestBody = SymbolPutSingleRequestBodyDataInstance;

const SymbolPutSingleRequestBodyDataInstanceExpected =
    SymbolPutRequestBodyDataInstanceExpected;

const SymbolPutSingleRequestBodyExpected =
    SymbolPutSingleRequestBodyDataInstanceExpected;

export function SymbolPutSingleRequestBodyFromRaw(
    raw: SymbolPutSingleRequestBodyDataInstance
): SymbolPutSingleRequestBodyDataInstance {
    const parsed = SymbolPutSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type SymbolPutSingleResponseBodyDataInstance =
    SymbolPutResponseBodyDataInstance;

export type SymbolPutSingleResponseBodyData =
    SymbolPutSingleResponseBodyDataInstance;

export type SymbolPutSingleResponseBody =
    ResponseBase<SymbolPutSingleResponseBodyData>;

const SymbolPutSingleResponseBodyDataInstanceExpected =
    SymbolPutResponseBodyDataInstanceExpected;

const SymbolPutSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: SymbolPutSingleResponseBodyDataInstanceExpected,
    }),
]);

export function SymbolPutSingleResponseBodyFromRaw(
    raw: SymbolPutSingleResponseBody
): SymbolPutSingleResponseBody {
    const parsed = SymbolPutSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END PUT

// BEGIN PATCH

export interface SymbolPatchRequestBodyDataInstance
    extends SymbolPropsOptional {}
export type SymbolPatchResponseBodyDataInstance =
    SymbolResponseBodyDataInstance;

const SymbolPatchRequestBodyDataInstanceExpected = SymbolPropsOptionalExpected;

const SymbolPatchResponseBodyDataInstanceExpected = SymbolPropsExpected.extend({
    id: z.number(),
});

export interface SymbolPatchManyRequestBodyDataInstance
    extends SymbolPatchRequestBodyDataInstance {
    id: number;
}
export type SymbolPatchManyRequestBody =
    SymbolPatchManyRequestBodyDataInstance[];

const SymbolPatchManyRequestBodyDataInstanceExpected =
    SymbolPatchRequestBodyDataInstanceExpected.extend({
        id: z.number(),
    });

const SymbolPatchManyRequestBodyExpected = z.array(
    SymbolPatchManyRequestBodyDataInstanceExpected
);

export function SymbolPatchManyRequestBodyFromRaw(
    raw: SymbolPatchManyRequestBodyDataInstance[]
): SymbolPatchManyRequestBodyDataInstance[] {
    const parsed = SymbolPatchManyRequestBodyExpected.parse(raw);
    return parsed;
}

export type SymbolPatchManyResponseBodyDataInstance =
    SymbolPatchResponseBodyDataInstance;

export type SymbolPatchManyResponseBodyData =
    SymbolPatchManyResponseBodyDataInstance[];

export type SymbolPatchManyResponseBody =
    ResponseBase<SymbolPatchManyResponseBodyData>;

const SymbolPatchManyResponseBodyDataInstanceExpected =
    SymbolPatchResponseBodyDataInstanceExpected;

const SymbolPatchManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(SymbolPatchManyResponseBodyDataInstanceExpected),
    }),
]);

export function SymbolPatchManyResponseBodyFromRaw(
    raw: SymbolPatchManyResponseBody
): SymbolPatchManyResponseBody {
    const parsed = SymbolPatchManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface SymbolPatchSingleRequestParams {
    id: number;
}

export interface SymbolPatchSingleRequestParamsRaw {
    id: string;
}

const SymbolPatchSingleRequestParamsExpected = z.object({
    id: z.string().regex(/^\d+$/),
});

export function SymbolPatchSingleRequestParamsFromRaw(
    raw: SymbolPatchSingleRequestParamsRaw
): SymbolPatchSingleRequestParams {
    const parsed = SymbolPatchSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type SymbolPatchSingleRequestBodyDataInstance =
    SymbolPatchRequestBodyDataInstance;
export type SymbolPatchSingleRequestBody =
    SymbolPatchSingleRequestBodyDataInstance;

const SymbolPatchSingleRequestBodyDataInstanceExpected =
    SymbolPatchRequestBodyDataInstanceExpected;

const SymbolPatchSingleRequestBodyExpected =
    SymbolPatchSingleRequestBodyDataInstanceExpected;

export function SymbolPatchSingleRequestBodyFromRaw(
    raw: SymbolPatchSingleRequestBodyDataInstance
): SymbolPatchSingleRequestBodyDataInstance {
    const parsed = SymbolPatchSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type SymbolPatchSingleResponseBodyDataInstance =
    SymbolPatchResponseBodyDataInstance;

export type SymbolPatchSingleResponseBodyData =
    SymbolPatchSingleResponseBodyDataInstance;

export type SymbolPatchSingleResponseBody =
    ResponseBase<SymbolPatchSingleResponseBodyData>;

const SymbolPatchSingleResponseBodyDataInstanceExpected =
    SymbolPatchResponseBodyDataInstanceExpected;

const SymbolPatchSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: SymbolPatchSingleResponseBodyDataInstanceExpected,
    }),
]);

export function SymbolPatchSingleResponseBodyFromRaw(
    raw: SymbolPatchSingleResponseBody
): SymbolPatchSingleResponseBody {
    const parsed = SymbolPatchSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END PATCH

// BEGIN DELETE

export type SymbolDeleteRequestBody = never;
export type SymbolDeleteResponseBodyDataInstance =
    SymbolResponseBodyDataInstance;

export type SymbolDeleteManyRequestBody = SymbolDeleteRequestBody;
export interface SymbolDeleteManyRequestQuery {
    ids: number[];
}

const SymbolDeleteResponseBodyDataInstanceExpected = SymbolPropsExpected.extend(
    {
        id: z.number(),
    }
);

export interface SymbolDeleteManyRequestQueryRaw {
    ids: string;
}

const SymbolDeleteManyRequestQueryRawExpected = z.object({
    ids: z.string().regex(/^\d+(,\d+)*$/),
});

export function SymbolDeleteManyRequestQueryFromRaw(
    raw: SymbolDeleteManyRequestQueryRaw
): SymbolDeleteManyRequestQuery {
    const parsed = SymbolDeleteManyRequestQueryRawExpected.parse(raw);
    const ids = parsed.ids.split(',').map((id) => parseInt(id));
    return { ids };
}
export type SymbolDeleteManyResponseBodyDataInstance =
    SymbolDeleteResponseBodyDataInstance;

export type SymbolDeleteManyResponseBodyData =
    SymbolDeleteManyResponseBodyDataInstance[];

export type SymbolDeleteManyResponseBody =
    ResponseBase<SymbolDeleteManyResponseBodyData>;

const SymbolDeleteManyResponseBodyDataInstanceExpected =
    SymbolDeleteResponseBodyDataInstanceExpected;

const SymbolDeleteManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(SymbolDeleteManyResponseBodyDataInstanceExpected),
    }),
]);

export function SymbolDeleteManyResponseBodyFromRaw(
    raw: SymbolDeleteManyResponseBody
): SymbolDeleteManyResponseBody {
    const parsed = SymbolDeleteManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface SymbolDeleteSingleRequestParams {
    id: number;
}

export interface SymbolDeleteSingleRequestParamsRaw {
    id: string;
}

const SymbolDeleteSingleRequestParamsExpected = z.object({
    id: z.string().regex(/^\d+$/),
});

export function SymbolDeleteSingleRequestParamsFromRaw(
    raw: SymbolDeleteSingleRequestParamsRaw
): SymbolDeleteSingleRequestParams {
    const parsed = SymbolDeleteSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type SymbolDeleteSingleRequestBody = SymbolDeleteRequestBody;

export type SymbolDeleteSingleResponseBodyDataInstance =
    SymbolDeleteResponseBodyDataInstance;

export type SymbolDeleteSingleResponseBodyData =
    SymbolDeleteSingleResponseBodyDataInstance;

export type SymbolDeleteSingleResponseBody =
    ResponseBase<SymbolDeleteSingleResponseBodyData>;

const SymbolDeleteSingleResponseBodyDataInstanceExpected =
    SymbolDeleteResponseBodyDataInstanceExpected;

const SymbolDeleteSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: SymbolDeleteSingleResponseBodyDataInstanceExpected,
    }),
]);

export function SymbolDeleteSingleResponseBodyFromRaw(
    raw: SymbolDeleteSingleResponseBody
): SymbolDeleteSingleResponseBody {
    const parsed = SymbolDeleteSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END DELETE
