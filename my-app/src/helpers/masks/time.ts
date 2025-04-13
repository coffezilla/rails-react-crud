// YYYY-MM-DD
export const maskToDate = (valueRaw?: string | Date | null, hasTime = false, outputDatabaseFormat = false): string => {
	if (!valueRaw) return "-";

	let valueFormatted = valueRaw.toString();

	const date = new Date(valueFormatted);
	const day = String(date.getUTCDate()).padStart(2, "0");
	const month = String(date.getUTCMonth() + 1).padStart(2, "0");
	const shortYear = String(date.getUTCFullYear()).slice(-2).padStart(2, "0");
	const fullYear = String(date.getUTCFullYear());
	const hours = String(date.getUTCHours()).padStart(2, "0");
	const minutes = String(date.getUTCMinutes()).padStart(2, "0");

	if (day === "NaN") return "-";

	if (outputDatabaseFormat) {
		valueFormatted = hasTime ? `${fullYear}-${month}-${day} ${hours}:${minutes}h` : `${fullYear}-${month}-${day}`;
	} else {
		valueFormatted = hasTime ? `${day}/${month}/${shortYear} ${hours}:${minutes}h` : `${day}/${month}/${shortYear}`;
	}

	return valueFormatted;
};
