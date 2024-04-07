import { z } from 'zod';
import * as NumericStringTypes from './numericString.js';
export const TimestampStringSchema = NumericStringTypes.wrapAsInteger(
    z.string()
)
    .refine(NumericStringTypes.refineToPositive(), 'Value must be positive')
    .refine(
        NumericStringTypes.refineToPrecision(15),
        'Value must be 15 or fewer digits'
    )
    .refine(
        NumericStringTypes.refineToMinimum(-8640000000000000),
        'Value must be greater than -8640000000000000'
    )
    .refine(
        NumericStringTypes.refineToMaximum(8640000000000000),
        'Value must be less than 8640000000000000'
    );
export const TimestampSchema = z
    .number()
    .int()
    .positive()
    .refine(
        (timestamp) =>
            timestamp < 8640000000000000 && timestamp > -8640000000000000,
        `timestamp must be a valid timestamp between -8640000000000000 and 8640000000000000`
    );
