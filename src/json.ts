import { z } from 'zod';
export const JSONDataSchema = z.any().refine((data) => {
    try {
        if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
            JSON.stringify(data);
            return true;
        }
    } catch (e) {
        return false;
    }
    return false;
}, "Input can't be serialized to JSON");
