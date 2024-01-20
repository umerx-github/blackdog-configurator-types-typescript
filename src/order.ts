import { z } from 'zod';

import {
    ResponseBase,
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase,
    ResponseBodyOneOrManyBase,
} from './response.js';

import { RequestBodyOneOrManyBase } from './request.js';

export interface OrderProps {
    symbolId: number;
    strategyId: number;
    alpacaOrderId: string;
}

export interface OrderPostRequestBodyInstance extends OrderProps {}
export interface OrderPostResponseBodyInstance extends OrderProps {
    id: number;
}
export type OrderPostRequestBody =
    RequestBodyOneOrManyBase<OrderPostRequestBodyInstance>;
export type OrderPostResponseBody =
    ResponseBodyOneOrManyBase<OrderPostResponseBodyInstance>;

export interface OrderPutRequestBodyInstance extends OrderProps {}
export interface OrderPutResponseBodyInstance extends OrderProps {
    id: number;
}
export type OrderPutRequestBody =
    RequestBodyOneOrManyBase<OrderPutRequestBodyInstance>;
export type OrderPutResponseBody =
    ResponseBodyOneOrManyBase<OrderPutResponseBodyInstance>;

export interface OrderPatchRequestBodyInstance extends OrderProps {}
export interface OrderPatchResponseBodyInstance extends OrderProps {
    id: number;
}
export type OrderPatchRequestBody =
    RequestBodyOneOrManyBase<OrderPatchRequestBodyInstance>;
export type OrderPatchResponseBody =
    ResponseBodyOneOrManyBase<OrderPatchResponseBodyInstance>;

export interface OrderDeleteResponseBodyInstance extends OrderProps {
    id: number;
}
export type OrderDeleteRequestBody = never;
export type OrderDeleteResponseBody =
    ResponseBodyOneOrManyBase<OrderDeleteResponseBodyInstance>;
export interface OrderDeleteRequestParams {
    ids?: number[];
}
export interface OrderDeleteRequestParamsRaw {
    ids?: string;
}

const OrderPropsExpected = z.object({
    symbolId: z.number(),
    strategyId: z.number(),
    alpacaOrderId: z.string(),
});

export function OrderPropsFromRaw(raw: OrderProps): OrderProps {
    const parsed = OrderPropsExpected.parse(raw);
    return parsed;
}

const OrderPostRequestBodyInstanceExpected = OrderPropsExpected;

const OrderPostRequestBodyExpected = z.union([
    OrderPostRequestBodyInstanceExpected,
    z.array(OrderPostRequestBodyInstanceExpected),
]);

export function OrderPostRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<OrderPostRequestBodyInstance>
): RequestBodyOneOrManyBase<OrderPostRequestBodyInstance> {
    const parsed = OrderPostRequestBodyExpected.parse(raw);
    return parsed;
}

const OrderPostResponseBodyInstanceExpected = OrderPropsExpected.extend({
    id: z.number(),
});

const OrderPostResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            OrderPostResponseBodyInstanceExpected,
            z.array(OrderPostResponseBodyInstanceExpected),
        ]),
    }),
]);

export function OrderPostResponseBodyFromRaw(
    raw: ResponseBase<ResponseBodyOneOrManyBase<OrderPostResponseBodyInstance>>
): ResponseBase<ResponseBodyOneOrManyBase<OrderPostResponseBodyInstance>> {
    const parsed = OrderPostResponseBodyExpected.parse(raw);
    return parsed;
}

const OrderPutRequestBodyInstanceExpected = OrderPropsExpected;

const OrderPutRequestBodyExpected = z.union([
    OrderPutRequestBodyInstanceExpected,
    z.array(OrderPutRequestBodyInstanceExpected),
]);

export function OrderPutRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<OrderPutRequestBodyInstance>
): RequestBodyOneOrManyBase<OrderPutRequestBodyInstance> {
    const parsed = OrderPutRequestBodyExpected.parse(raw);
    return parsed;
}

const OrderPutResponseBodyInstanceExpected = OrderPropsExpected.extend({
    id: z.number(),
});

const OrderPutResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            OrderPutResponseBodyInstanceExpected,
            z.array(OrderPutResponseBodyInstanceExpected),
        ]),
    }),
]);

export function OrderPutResponseBodyFromRaw(
    raw: ResponseBase<ResponseBodyOneOrManyBase<OrderPutResponseBodyInstance>>
): ResponseBase<ResponseBodyOneOrManyBase<OrderPutResponseBodyInstance>> {
    const parsed = OrderPutResponseBodyExpected.parse(raw);
    return parsed;
}

const OrderPatchRequestBodyInstanceExpected = OrderPropsExpected;

const OrderPatchRequestBodyExpected = z.union([
    OrderPatchRequestBodyInstanceExpected,
    z.array(OrderPatchRequestBodyInstanceExpected),
]);

export function OrderPatchRequestBodyFromRaw(
    raw: RequestBodyOneOrManyBase<OrderPatchRequestBodyInstance>
): RequestBodyOneOrManyBase<OrderPatchRequestBodyInstance> {
    const parsed = OrderPatchRequestBodyExpected.parse(raw);
    return parsed;
}

const OrderPatchResponseBodyInstanceExpected = OrderPropsExpected.extend({
    id: z.number(),
});

const OrderPatchResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            OrderPatchResponseBodyInstanceExpected,
            z.array(OrderPatchResponseBodyInstanceExpected),
        ]),
    }),
]);

export function OrderPatchResponseBodyFromRaw(
    raw: ResponseBase<ResponseBodyOneOrManyBase<OrderPatchResponseBodyInstance>>
): ResponseBase<ResponseBodyOneOrManyBase<OrderPatchResponseBodyInstance>> {
    const parsed = OrderPatchResponseBodyExpected.parse(raw);
    return parsed;
}

// Typing Express Request: https://stackoverflow.com/questions/48027563/typescript-type-annotation-for-res-body

const OrderDeleteRequestParamsExpected = z.object({
    ids: z.string().regex(/^\d+(,\d+)*$/),
    // .optional(),
});

export function OrderDeleteRequestParamsFromRaw(
    raw: OrderDeleteRequestParamsRaw
): OrderDeleteRequestParams {
    const parsed = OrderDeleteRequestParamsExpected.parse(raw);
    const ids = parsed.ids?.split(',').map((id) => parseInt(id));
    return { ids };
}

const OrderDeleteResponseBodyInstanceExpected = OrderPropsExpected.extend({
    id: z.number(),
});

const OrderDeleteResponseBodyExpected = z.union([
    ResponseBaseErrorExpected,
    ResponseBaseSuccessExpectedBase.extend({
        data: z.union([
            OrderDeleteResponseBodyInstanceExpected,
            z.array(OrderDeleteResponseBodyInstanceExpected),
        ]),
    }),
]);

export function OrderDeleteResponseBodyFromRaw(
    raw: ResponseBase<
        ResponseBodyOneOrManyBase<OrderDeleteResponseBodyInstance>
    >
): ResponseBase<ResponseBodyOneOrManyBase<OrderDeleteResponseBodyInstance>> {
    const parsed = OrderDeleteResponseBodyExpected.parse(raw);
    return parsed;
}
