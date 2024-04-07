import { z } from 'zod';
import * as NumberTypes from './number.js';
export const IdSchema = z
    .number()
    .positive()
    .int()
    .refine(
        NumberTypes.refineToPrecision(15),
        'Value must be 15 or fewer digits'
    );
