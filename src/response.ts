import { z } from 'zod';
// Type to use in the code:
// = "Salmon" | "Tuna" | "Trout"
export type ResponseBodyOneOrManyBase<T> = T | T[];
export type ResponseBase<ResponseBodyDataType> =
    | { status: 'success'; message: string; data: ResponseBodyDataType }
    | { status: 'error'; message: string };

export const ResponseBaseErrorExpected = z.object({
    status: z.literal('error'),
    message: z.string(),
});

export const ResponseBaseSuccessExpectedBase = z.object({
    status: z.literal('success'),
    message: z.string(),
});
