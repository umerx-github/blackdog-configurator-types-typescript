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

// export type ResponseBaseError = {
//     status: 'error';
//     message: string;
//     data: z.typeToFlattenedError<any, string>;
// };

export type ResponseBaseError = {
    status: 'error';
    message: string;
    issues: (z.ZodIssueBase & { code: z.ZodIssueCode })[];
};

export type ResponseBase<ResponseBodyDataType> =
    | ResponseBaseSuccess<ResponseBodyDataType>
    | ResponseBaseError;

export type ResponseBasePaginated<ResponseBodyDataType> =
    | ResponseBaseSuccessPaginated<ResponseBodyDataType>
    | ResponseBaseError;

// export const ResponseBaseErrorExpected = z.object({
//     status: z.literal('error'),
//     message: z.string(),
//     data: z.object({
//         formErrors: z.array(z.string()),
//         fieldErrors: z.record(z.array(z.string())),
//     }),
// });

export const ResponseBaseErrorExpected = z.object({
    status: z.literal('error'),
    message: z.string(),
    issues: z.array(
        z.object({
            path: z.array(z.union([z.string(), z.number()])),
            message: z.string().optional(),
            code: z.nativeEnum(z.ZodIssueCode),
            // code: z.union([
            //     z.literal('invalid_type'),
            //     z.literal('invalid_literal'),
            //     z.literal('custom'),
            //     z.literal('invalid_union'),
            //     z.literal('invalid_union_discriminator'),
            //     z.literal('invalid_enum_value'),
            //     z.literal('unrecognized_keys'),
            //     z.literal('invalid_arguments'),
            //     z.literal('invalid_return_type'),
            //     z.literal('invalid_date'),
            //     z.literal('invalid_string'),
            //     z.literal('too_small'),
            //     z.literal('too_big'),
            //     z.literal('invalid_intersection_types'),
            //     z.literal('not_multiple_of'),
            //     z.literal('not_finite'),
            // ]),
        })
    ),
});

export function ResponseBaseErrorFromRaw(raw: any): ResponseBaseError {
    return ResponseBaseErrorExpected.parse(raw);
}

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
