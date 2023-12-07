import { z } from "zod";
export type Status = "active" | "inactive";

export interface StrategyProps {
	status: Status;
}

export interface StrategyManyPostRequestBodyInstance extends StrategyProps {}

export interface StrategyManyPostResponseBodyInstance extends StrategyProps {
	id: number;
}

export type StrategyManyPostRequestBody = StrategyManyPostRequestBodyInstance[];
export type StrategyManyPostResponseBody =
	StrategyManyPostResponseBodyInstance[];

export interface StrategySinglePutRequestBodyInstance extends StrategyProps {}

export interface StrategySinglePutResponseBodyInstance extends StrategyProps {
	id: number;
}

export type StrategySinglePutRequestBody = StrategySinglePutRequestBodyInstance;
export type StrategySinglePutResponseBody =
	StrategySinglePutResponseBodyInstance;

export interface StrategyManyPutRequestBodyInstance extends StrategyProps {
	id: number;
}

export interface StrategyManyPutResponseBodyInstance extends StrategyProps {
	id: number;
}

export type StrategyManyPutRequestBody = StrategyManyPutRequestBodyInstance[];
export type StrategyManyPutResponseBody = StrategyManyPutResponseBodyInstance[];

export interface StrategyManyPatchRequestBodyInstance extends StrategyProps {
	id: number;
}

export interface StrategyManyPatchResponseBodyInstance extends StrategyProps {
	id: number;
}

export type StrategyManyPatchRequestBody =
	StrategyManyPatchRequestBodyInstance[];
export type StrategyManyPatchResponseBody =
	StrategyManyPatchResponseBodyInstance[];

export interface StrategySingleDeleteResponseBodyInstance
	extends StrategyProps {
	id: number;
}

export type StrategySingleDeleteRequestBody = never;
export type StrategySingleDeleteResponseBody =
	StrategySingleDeleteResponseBodyInstance;

export interface StrategyManyDeleteRequestParams {
	ids?: number[];
}

export interface StrategyManyDeleteRequestParamsRaw {
	ids?: string;
}

export interface StrategyManyDeleteResponseBodyInstance extends StrategyProps {
	id: number;
}

export type StrategyManyDeleteRequestBody = never;
export type StrategyManyDeleteResponseBody =
	StrategyManyDeleteResponseBodyInstance[];

// Typing Express Request: https://stackoverflow.com/questions/48027563/typescript-type-annotation-for-res-body

const StrategyManyDeleteRequestParamsExpected = z.object({
	name: z.string().optional(),
	ids: z
		.string()
		.regex(/^\d+(,\d+)*$/)
		.optional(),
});

export function StrategyManyDeleteRequestParamsFromRaw(
	raw: StrategyManyDeleteRequestParamsRaw
): StrategyManyDeleteRequestParams {
	const parsed = StrategyManyDeleteRequestParamsExpected.parse(raw);
	const ids = parsed.ids?.split(",").map((id) => parseInt(id));
	return { ids };
}
