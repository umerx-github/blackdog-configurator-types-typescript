import { z } from 'zod';
import { Response } from '../index.js';
// Type to use in the code:
// = "Salmon" | "Tuna" | "Trout"
export type ResponseBaseSuccess<ResponseBodyDataType> = {
    status: 'success';
    message: string;
    data: ResponseBodyDataType;
};

export type ResponseBaseSuccessPaginated<ResponseBodyDataType> =
    ResponseBaseSuccess<ResponseBodyDataType> & {
        pageNumber: number;
        pageSize: number;
        totalResults: number;
        totalPages: number;
    };

export type ResponseBaseError = {
    status: 'error';
    message: string;
};

export type ResponseBase<ResponseBodyDataType> =
    | ResponseBaseSuccess<ResponseBodyDataType>
    | ResponseBaseError;

export type ResponseBasePaginated<ResponseBodyDataType> =
    | ResponseBaseSuccessPaginated<ResponseBodyDataType>
    | ResponseBaseError;

export const ResponseBaseErrorExpected = z.object({
    status: z.literal('error'),
    message: z.string(),
});

export const ResponseBaseSuccessExpectedBase = z.object({
    status: z.literal('success'),
    message: z.string(),
});

export const ResponseBaseSuccessPaginatedExpectedBase =
    ResponseBaseSuccessExpectedBase.extend({
        pageNumber: z.number(),
        pageSize: z.number(),
        totalResults: z.number(),
        totalPages: z.number(),
    });
