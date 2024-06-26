import { z } from 'zod';

import {
    ResponseBase,
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase,
} from './response.js';
import { refineToPrecision } from './number.js';
import { Response } from '../index.js';

// Single source of truth:
const StatusConst = ['open', 'closed'] as const;
// Use in a Zod Schema:
export const StatusSchema = z.enum(StatusConst);
// Type to use in the code:
// = "Salmon" | "Tuna" | "Trout"
export type Status = (typeof StatusConst)[number];

const SideConst = ['buy', 'sell'] as const;
// Use in a Zod Schema:
export const SideSchema = z.enum(SideConst);
// Type to use in the code:
// = "Salmon" | "Tuna" | "Trout"
export type Side = (typeof SideConst)[number];

export interface OrderProps {
    symbolId: number;
    strategyId: number;
    alpacaOrderId: string;
    side: Side;
    quantity: number;
    averagePriceInCents: number;
}

export interface OrderPropsOptional {
    symbolId?: number;
    strategyId?: number;
    alpacaOrderId?: string;
    side?: Side;
    quantity?: number;
    averagePriceInCents?: number;
}

export interface OrderRequiredFields extends OrderProps {
    status: Status;
}

export interface OrderRequiredFieldsOptional extends OrderPropsOptional {
    status?: Status;
}

const OrderPropsExpected = z
    .object({
        symbolId: z.number(),
        strategyId: z.number(),
        alpacaOrderId: z.string(),
        side: SideSchema,
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

const OrderPropsOptionalExpected = OrderPropsExpected.partial();

export function OrderPropsFromRaw(raw: any): OrderProps {
    const parsed = OrderPropsExpected.parse(raw);
    return parsed;
}

const OrderRequiredFieldsExpected = OrderPropsExpected.extend({
    status: StatusSchema,
});

const OrderResponseBodyDataExpected = OrderRequiredFieldsExpected.extend({
    id: z.number(),
});
export interface OrderModelInterface extends OrderRequiredFields {
    id: number;
}

export interface OrderResponseBodyDataInstance extends OrderRequiredFields {
    id: number;
}

// BEGIN GET

export type OrderGetRequestBody = never;
export type OrderGetResponseBodyDataInstance = OrderResponseBodyDataInstance;

const OrderGetResponseBodyDataInstanceExpected = OrderResponseBodyDataExpected;

export type OrderGetManyRequestBody = OrderGetRequestBody;
export interface OrderGetManyRequestQuery {
    symbolId?: number;
    strategyId?: number;
    alpacaOrderId?: string;
    status?: Status;
    side?: Side;
    ids?: number[];
}
export interface OrderGetManyRequestQueryRaw {
    symbolId?: string;
    strategyId?: string;
    alpacaOrderId?: string;
    status?: string;
    side?: string;
    ids?: string;
}

const OrderGetManyRequestQueryRawExpected = z
    .object({
        symbolId: z.string().regex(/^\d+$/).optional(),
        strategyId: z.string().regex(/^\d+$/).optional(),
        alpacaOrderId: z.string().optional(),
        status: StatusSchema.optional(),
        side: SideSchema.optional(),
        ids: z
            .string()
            .regex(/^(\d+)?(,\d+)*$/, {
                message:
                    'IDs field should contain only comma-separated numbers',
            })
            .optional(),
    })
    .strict();

export function OrderGetManyRequestQueryFromRaw(
    raw: any
): OrderGetManyRequestQuery {
    const parsed = OrderGetManyRequestQueryRawExpected.parse(raw);
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
    const alpacaOrderId =
        undefined === parsed.alpacaOrderId ? undefined : parsed.alpacaOrderId;
    const toReturn: OrderGetManyRequestQuery = {};
    if (undefined !== ids) {
        toReturn.ids = ids;
    }
    if (undefined !== symbolId) {
        toReturn.symbolId = symbolId;
    }
    if (undefined !== strategyId) {
        toReturn.strategyId = strategyId;
    }
    if (undefined !== alpacaOrderId) {
        toReturn.alpacaOrderId = alpacaOrderId;
    }
    if (undefined !== parsed.status) {
        toReturn.status = parsed.status;
    }
    if (undefined !== parsed.side) {
        toReturn.side = parsed.side;
    }
    return toReturn;
}
export type OrderGetManyResponseBodyDataInstance =
    OrderGetResponseBodyDataInstance;

export type OrderGetManyResponseBodyData =
    OrderGetManyResponseBodyDataInstance[];

export type OrderGetManyResponseBody =
    ResponseBase<OrderGetManyResponseBodyData>;

const OrderGetManyResponseBodyDataInstanceExpected =
    OrderGetResponseBodyDataInstanceExpected;

const OrderGetManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(OrderGetManyResponseBodyDataInstanceExpected),
    }),
]);

export function OrderGetManyResponseBodyFromRaw(
    raw: any
): OrderGetManyResponseBody {
    const parsed = OrderGetManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface OrderGetSingleRequestParams {
    id: number;
}

export interface OrderGetSingleRequestParamsRaw {
    id: string;
}

const OrderGetSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function OrderGetSingleRequestParamsFromRaw(
    raw: any
): OrderGetSingleRequestParams {
    const parsed = OrderGetSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type OrderGetSingleRequestBody = OrderGetRequestBody;

export type OrderGetSingleResponseBodyDataInstance =
    OrderGetResponseBodyDataInstance;

export type OrderGetSingleResponseBodyData =
    OrderGetSingleResponseBodyDataInstance;

export type OrderGetSingleResponseBody =
    ResponseBase<OrderGetSingleResponseBodyData>;

const OrderGetSingleResponseBodyDataInstanceExpected =
    OrderGetResponseBodyDataInstanceExpected;

const OrderGetSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: OrderGetSingleResponseBodyDataInstanceExpected,
    }),
]);

export function OrderGetSingleResponseBodyFromRaw(
    raw: any
): OrderGetSingleResponseBody {
    const parsed = OrderGetSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END GET

// BEGIN POST

export interface OrderPostRequestBodyDataInstance extends OrderProps {}
export type OrderPostResponseBodyDataInstance = OrderResponseBodyDataInstance;
const OrderPostRequestBodyDataInstanceExpected = OrderPropsExpected;

const OrderPostResponseBodyDataInstanceExpected = OrderResponseBodyDataExpected;

const OrderPostManyRequestBodyDataInstanceExpected =
    OrderPostRequestBodyDataInstanceExpected;

const OrderPostManyRequestBodyExpected = z.array(
    OrderPostManyRequestBodyDataInstanceExpected
);

export type OrderPostManyRequestBodyDataInstance =
    OrderPostRequestBodyDataInstance;

export type OrderPostManyRequestBody = OrderPostManyRequestBodyDataInstance[];

export function OrderPostManyRequestBodyFromRaw(
    raw: any
): OrderPostManyRequestBodyDataInstance[] {
    const parsed = OrderPostManyRequestBodyExpected.parse(raw);
    return parsed;
}
export type OrderPostManyResponseBodyDataInstance =
    OrderPostResponseBodyDataInstance;

export type OrderPostManyResponseBodyData =
    OrderPostManyResponseBodyDataInstance[];

export type OrderPostManyResponseBody =
    ResponseBase<OrderPostManyResponseBodyData>;

const OrderPostManyResponseBodyDataInstanceExpected =
    OrderPostResponseBodyDataInstanceExpected;

const OrderPostManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(OrderPostManyResponseBodyDataInstanceExpected),
    }),
]);

export function OrderPostManyResponseBodyFromRaw(
    raw: any
): OrderPostManyResponseBody {
    const parsed = OrderPostManyResponseBodyExpected.parse(raw);
    return parsed;
}

export type OrderPostSingleRequestBodyDataInstance =
    OrderPostRequestBodyDataInstance;
export type OrderPostSingleRequestBody = OrderPostSingleRequestBodyDataInstance;

const OrderPostSingleRequestBodyDataInstanceExpected =
    OrderPostRequestBodyDataInstanceExpected;

const OrderPostSingleRequestBodyExpected =
    OrderPostSingleRequestBodyDataInstanceExpected;

export function OrderPostSingleRequestBodyFromRaw(
    raw: any
): OrderPostSingleRequestBodyDataInstance {
    const parsed = OrderPostSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type OrderPostSingleResponseBodyDataInstance =
    OrderPostResponseBodyDataInstance;

export type OrderPostSingleResponseBodyData =
    OrderPostSingleResponseBodyDataInstance;

export type OrderPostSingleResponseBody =
    ResponseBase<OrderPostSingleResponseBodyData>;

const OrderPostSingleResponseBodyDataInstanceExpected =
    OrderPostResponseBodyDataInstanceExpected;

const OrderPostSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: OrderPostSingleResponseBodyDataInstanceExpected,
    }),
]);

export function OrderPostSingleResponseBodyFromRaw(
    raw: any
): OrderPostSingleResponseBody {
    const parsed = OrderPostSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END POST

// BEGIN PUT

export interface OrderPutRequestBodyDataInstance extends OrderProps {}
export type OrderPutResponseBodyDataInstance = OrderResponseBodyDataInstance;

const OrderPutRequestBodyDataInstanceExpected = OrderPropsExpected;

const OrderPutResponseBodyDataInstanceExpected = OrderResponseBodyDataExpected;

export interface OrderPutManyRequestBodyDataInstance
    extends OrderPutRequestBodyDataInstance {
    id: number;
}
export type OrderPutManyRequestBody = OrderPutManyRequestBodyDataInstance[];

const OrderPutManyRequestBodyDataInstanceExpected =
    OrderResponseBodyDataExpected;

const OrderPutManyRequestBodyExpected = z.array(
    OrderPutManyRequestBodyDataInstanceExpected
);

export function OrderPutManyRequestBodyFromRaw(
    raw: any
): OrderPutManyRequestBodyDataInstance[] {
    const parsed = OrderPutManyRequestBodyExpected.parse(raw);
    return parsed;
}

export type OrderPutManyResponseBodyDataInstance =
    OrderPutResponseBodyDataInstance;

export type OrderPutManyResponseBodyData =
    OrderPutManyResponseBodyDataInstance[];

export type OrderPutManyResponseBody =
    ResponseBase<OrderPutManyResponseBodyData>;

const OrderPutManyResponseBodyDataInstanceExpected =
    OrderPutResponseBodyDataInstanceExpected;

const OrderPutManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(OrderPutManyResponseBodyDataInstanceExpected),
    }),
]);

export function OrderPutManyResponseBodyFromRaw(
    raw: any
): OrderPutManyResponseBody {
    const parsed = OrderPutManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface OrderPutSingleRequestParams {
    id: number;
}

export interface OrderPutSingleRequestParamsRaw {
    id: string;
}

const OrderPutSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function OrderPutSingleRequestParamsFromRaw(
    raw: any
): OrderPutSingleRequestParams {
    const parsed = OrderPutSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type OrderPutSingleRequestBodyDataInstance =
    OrderPutRequestBodyDataInstance;
export type OrderPutSingleRequestBody = OrderPutSingleRequestBodyDataInstance;

const OrderPutSingleRequestBodyDataInstanceExpected =
    OrderPutRequestBodyDataInstanceExpected;

const OrderPutSingleRequestBodyExpected =
    OrderPutSingleRequestBodyDataInstanceExpected;

export function OrderPutSingleRequestBodyFromRaw(
    raw: any
): OrderPutSingleRequestBodyDataInstance {
    const parsed = OrderPutSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type OrderPutSingleResponseBodyDataInstance =
    OrderPutResponseBodyDataInstance;

export type OrderPutSingleResponseBodyData =
    OrderPutSingleResponseBodyDataInstance;

export type OrderPutSingleResponseBody =
    ResponseBase<OrderPutSingleResponseBodyData>;

const OrderPutSingleResponseBodyDataInstanceExpected =
    OrderPutResponseBodyDataInstanceExpected;

const OrderPutSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: OrderPutSingleResponseBodyDataInstanceExpected,
    }),
]);

export function OrderPutSingleResponseBodyFromRaw(
    raw: any
): OrderPutSingleResponseBody {
    const parsed = OrderPutSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END PUT

// BEGIN PATCH

export interface OrderPatchRequestBodyDataInstance extends OrderPropsOptional {}
export type OrderPatchResponseBodyDataInstance = OrderResponseBodyDataInstance;

const OrderPatchRequestBodyDataInstanceExpected = OrderPropsOptionalExpected;

const OrderPatchResponseBodyDataInstanceExpected =
    OrderResponseBodyDataExpected;

export interface OrderPatchManyRequestBodyDataInstance
    extends OrderPatchRequestBodyDataInstance {
    id: number;
}
export type OrderPatchManyRequestBody = OrderPatchManyRequestBodyDataInstance[];

const OrderPatchManyRequestBodyDataInstanceExpected =
    OrderResponseBodyDataExpected;

const OrderPatchManyRequestBodyExpected = z.array(
    OrderPatchManyRequestBodyDataInstanceExpected
);

export function OrderPatchManyRequestBodyFromRaw(
    raw: any
): OrderPatchManyRequestBodyDataInstance[] {
    const parsed = OrderPatchManyRequestBodyExpected.parse(raw);
    return parsed;
}

export type OrderPatchManyResponseBodyDataInstance =
    OrderPatchResponseBodyDataInstance;

export type OrderPatchManyResponseBodyData =
    OrderPatchManyResponseBodyDataInstance[];

export type OrderPatchManyResponseBody =
    ResponseBase<OrderPatchManyResponseBodyData>;

const OrderPatchManyResponseBodyDataInstanceExpected =
    OrderPatchResponseBodyDataInstanceExpected;

const OrderPatchManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(OrderPatchManyResponseBodyDataInstanceExpected),
    }),
]);

export function OrderPatchManyResponseBodyFromRaw(
    raw: any
): OrderPatchManyResponseBody {
    const parsed = OrderPatchManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface OrderPatchSingleRequestParams {
    id: number;
}

export interface OrderPatchSingleRequestParamsRaw {
    id: string;
}

const OrderPatchSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function OrderPatchSingleRequestParamsFromRaw(
    raw: any
): OrderPatchSingleRequestParams {
    const parsed = OrderPatchSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type OrderPatchSingleRequestBodyDataInstance =
    OrderPatchRequestBodyDataInstance;
export type OrderPatchSingleRequestBody =
    OrderPatchSingleRequestBodyDataInstance;

const OrderPatchSingleRequestBodyDataInstanceExpected =
    OrderPatchRequestBodyDataInstanceExpected;

const OrderPatchSingleRequestBodyExpected =
    OrderPatchSingleRequestBodyDataInstanceExpected;

export function OrderPatchSingleRequestBodyFromRaw(
    raw: any
): OrderPatchSingleRequestBodyDataInstance {
    const parsed = OrderPatchSingleRequestBodyExpected.parse(raw);
    return parsed;
}

export type OrderPatchSingleResponseBodyDataInstance =
    OrderPatchResponseBodyDataInstance;

export type OrderPatchSingleResponseBodyData =
    OrderPatchSingleResponseBodyDataInstance;

export type OrderPatchSingleResponseBody =
    ResponseBase<OrderPatchSingleResponseBodyData>;

const OrderPatchSingleResponseBodyDataInstanceExpected =
    OrderPatchResponseBodyDataInstanceExpected;

const OrderPatchSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: OrderPatchSingleResponseBodyDataInstanceExpected,
    }),
]);

export function OrderPatchSingleResponseBodyFromRaw(
    raw: any
): OrderPatchSingleResponseBody {
    const parsed = OrderPatchSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END PATCH

// BEGIN DELETE

export type OrderDeleteRequestBody = never;
export type OrderDeleteResponseBodyDataInstance = OrderResponseBodyDataInstance;

export type OrderDeleteManyRequestBody = OrderDeleteRequestBody;
export interface OrderDeleteManyRequestQuery {
    ids: number[];
}

const OrderDeleteResponseBodyDataInstanceExpected =
    OrderResponseBodyDataExpected;

export interface OrderDeleteManyRequestQueryRaw {
    ids: string;
}

const OrderDeleteManyRequestQueryRawExpected = z
    .object({
        ids: z.string().regex(/^(\d+)?(,\d+)*$/, {
            message: 'IDs field should contain only comma-separated numbers',
        }),
    })
    .strict();

export function OrderDeleteManyRequestQueryFromRaw(
    raw: any
): OrderDeleteManyRequestQuery {
    const parsed = OrderDeleteManyRequestQueryRawExpected.parse(raw);
    const ids =
        parsed.ids === ''
            ? []
            : parsed.ids === ''
            ? []
            : parsed.ids.split(',').map((id) => parseInt(id));
    return { ids };
}
export type OrderDeleteManyResponseBodyDataInstance =
    OrderDeleteResponseBodyDataInstance;

export type OrderDeleteManyResponseBodyData =
    OrderDeleteManyResponseBodyDataInstance[];

export type OrderDeleteManyResponseBody =
    ResponseBase<OrderDeleteManyResponseBodyData>;

const OrderDeleteManyResponseBodyDataInstanceExpected =
    OrderDeleteResponseBodyDataInstanceExpected;

const OrderDeleteManyResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.array(OrderDeleteManyResponseBodyDataInstanceExpected),
    }),
]);

export function OrderDeleteManyResponseBodyFromRaw(
    raw: any
): OrderDeleteManyResponseBody {
    const parsed = OrderDeleteManyResponseBodyExpected.parse(raw);
    return parsed;
}

export interface OrderDeleteSingleRequestParams {
    id: number;
}

export interface OrderDeleteSingleRequestParamsRaw {
    id: string;
}

const OrderDeleteSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function OrderDeleteSingleRequestParamsFromRaw(
    raw: any
): OrderDeleteSingleRequestParams {
    const parsed = OrderDeleteSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type OrderDeleteSingleRequestBody = OrderDeleteRequestBody;

export type OrderDeleteSingleResponseBodyDataInstance =
    OrderDeleteResponseBodyDataInstance;

export type OrderDeleteSingleResponseBodyData =
    OrderDeleteSingleResponseBodyDataInstance;

export type OrderDeleteSingleResponseBody =
    ResponseBase<OrderDeleteSingleResponseBodyData>;

const OrderDeleteSingleResponseBodyDataInstanceExpected =
    OrderDeleteResponseBodyDataInstanceExpected;

const OrderDeleteSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: OrderDeleteSingleResponseBodyDataInstanceExpected,
    }),
]);

export function OrderDeleteSingleResponseBodyFromRaw(
    raw: any
): OrderDeleteSingleResponseBody {
    const parsed = OrderDeleteSingleResponseBodyExpected.parse(raw);
    return parsed;
}

// END DELETE

// BEGIN FILL

export interface OrderFillPostSingleRequestParamsRaw {
    id: string;
}

export interface OrderFillPostSingleRequestParams {
    id: number;
}

export const OrderFillPostSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function OrderFillPostSingleRequestParamsFromRaw(
    raw: any
): OrderFillPostSingleRequestParams {
    const parsed = OrderFillPostSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type OrderFillPostSingleRequestBody = {
    averagePriceInCents: number;
};

const OrderFillPostSingleRequestBodyExpected = z
    .object({
        averagePriceInCents: z
            .number()
            .min(0, 'Average price must be positive')
            .step(1),
    })
    .strict();

export function OrderFillPostSingleRequestBodyFromRaw(
    raw: any
): OrderFillPostSingleRequestBody {
    return OrderFillPostSingleRequestBodyExpected.parse(raw);
}

export interface OrderFillPostSingleResponseBodyData
    extends OrderResponseBodyDataInstance {}
export type OrderFillPostSingleResponseBody =
    ResponseBase<OrderFillPostSingleResponseBodyData>;

export const OrderFillPostSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: OrderResponseBodyDataExpected,
    }),
]);

export function OrderFillPostSingleResponseBodyFromRaw(
    raw: any
): OrderFillPostSingleResponseBody {
    return OrderFillPostSingleResponseBodyExpected.parse(raw);
}

// END FILL

// BEGIN CANCEL

export interface OrderCancelPostSingleRequestParamsRaw {
    id: string;
}

export interface OrderCancelPostSingleRequestParams {
    id: number;
}

export const OrderCancelPostSingleRequestParamsExpected = z
    .object({
        id: z.string().regex(/^\d+$/),
    })
    .strict();

export function OrderCancelPostSingleRequestParamsFromRaw(
    raw: any
): OrderCancelPostSingleRequestParams {
    const parsed = OrderCancelPostSingleRequestParamsExpected.parse(raw);
    return { id: parseInt(parsed.id) };
}

export type OrderCancelPostSingleRequestBody = never;
export interface OrderCancelPostSingleResponseBodyData
    extends OrderResponseBodyDataInstance {}
export type OrderCancelPostSingleResponseBody =
    ResponseBase<OrderCancelPostSingleResponseBodyData>;

export const OrderCancelPostSingleResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: OrderResponseBodyDataExpected,
    }),
]);

export function OrderCancelPostSingleResponseBodyFromRaw(
    raw: any
): OrderFillPostSingleResponseBody {
    return OrderFillPostSingleResponseBodyExpected.parse(raw);
}

// END CANCEL
