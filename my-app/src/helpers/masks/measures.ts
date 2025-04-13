// 0px
export const maskToPixel = (valueRaw: number | null) => {
	if (!valueRaw && valueRaw !== 0) return "-";
	if (isNaN(valueRaw)) return "-";
	if (typeof valueRaw !== "number") return "-";

	let valueFormatted = `${valueRaw.toFixed(0)}px`;

	return valueFormatted;
};
