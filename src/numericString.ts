import { z } from 'zod';

export function wrapAsNumeric(schema: z.ZodString): z.ZodString {
    return schema.regex(/^-?(\d+)?(\.)?\d+$/, `Value must be numeric`);
}

export function wrapAsInteger(schema: z.ZodString): z.ZodString {
    return schema.regex(/^-?\d+$/, `Value must be an integer`);
}

export function refineToPositive() {
    return function (data: string) {
        return Number(data) >= 0;
    };
}

export function refineToPrecision(precision: number) {
    return function (data: string) {
        // strip all non-numeric characters
        const cleaned = data.replace(/\D/g, '');
        return cleaned.length <= precision;
    };
}

export function refineToMinimum(minimum: number) {
    return function (data: string) {
        return Number(data) >= minimum;
    };
}

export function refineToMaximum(maximum: number) {
    return function (data: string) {
        return Number(data) <= maximum;
    };
}
