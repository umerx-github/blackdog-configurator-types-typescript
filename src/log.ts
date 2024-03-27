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
