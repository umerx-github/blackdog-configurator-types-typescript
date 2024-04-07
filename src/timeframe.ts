import { z } from 'zod';
import * as NumberTypes from './number.js';
import * as NumericStringTypes from './numericString.js';
// Single source of truth:
const TimeframeUnitConst = [
    'years',
    'months',
    'days',
    'hours',
    'minutes',
    'seconds',
    'milliseconds',
] as const;
// Use in a Zod Schema:
export const TimeframeUnitSchema = z.enum(TimeframeUnitConst);
// Type to use in the code:
// = "Salmon" | "Tuna" | "Trout"
export type TimeframeUnit = (typeof TimeframeUnitConst)[number];
export type TimeframeValue = number;
export const TimeframeValueStringSchema = NumericStringTypes.wrapAsNumeric(
    z.string()
)
    .refine(NumericStringTypes.refineToPositive(), 'Value must be positive')
    .refine(
        NumericStringTypes.refineToPrecision(15),
        'Value must be 15 or fewer digits'
    );
export const TimeframeValueSchema = z
    .number()
    .positive()
    .refine(
        NumberTypes.refineToPrecision(15),
        'Value must be 15 or fewer digits'
    );
