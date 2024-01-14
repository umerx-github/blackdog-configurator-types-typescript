import { z } from 'zod';
// Single source of truth:
const StrategyTemplateNameConst = ['NoOp', 'SeaDogDiscountScheme'] as const;
// Use in a Zod Schema:
export const StrategyTemplateNameSchema = z.enum(StrategyTemplateNameConst);
// Type to use in the code:
// = "Salmon" | "Tuna" | "Trout"
export type StrategyTemplateName = (typeof StrategyTemplateNameConst)[number];
