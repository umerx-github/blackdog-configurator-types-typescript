import { z } from 'zod';
// Single source of truth:
const LogLevelConst = [
    'emergency',
    'alert',
    'critical',
    'error',
    'warning',
    'notice',
    'info',
    'debug',
] as const;
// Use in a Zod Schema:
export const LogLevelSchema = z.enum(LogLevelConst);
// Type to use in the code:
// = "Salmon" | "Tuna" | "Trout"
export type LogLevel = (typeof LogLevelConst)[number];

export interface LogData {
    rawData?: any;
}

export const LogDataSchema = z
    .object({
        rawData: z.any(),
    })
    .strict()
    .refine((data) => {
        try {
            if (!data.hasOwnProperty('rawData')) {
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }, 'Input is missing rawData key')
    .refine((data) => {
        // if data is defined
        try {
            JSON.stringify(data);
            return true;
        } catch (e) {
            return false;
        }
    }, "Input can't be serialized to JSON");
