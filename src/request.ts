import { z } from 'zod';
export type RequestBodyOneOrManyBase<T> = T | T[];
export type RequestQueryBasePaginatedRaw = {
    pageNumber?: string;
    pageSize?: string;
};
export type RequestQueryBasePaginated = {
    pageNumber?: number;
    pageSize?: number;
};
export const RequestQueryBasePaginatedRawExpected = z.object({
    pageNumber: z.string().regex(/^\d+$/).optional(),
    pageSize: z.string().regex(/^\d+$/).optional(),
});
