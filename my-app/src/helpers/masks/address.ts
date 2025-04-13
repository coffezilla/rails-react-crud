// 00000-000
export const maskToCep = (valueRaw?: string | number | null): string => {
	if (!valueRaw) return "-";

	let valueFormatted = valueRaw.toString();

	valueFormatted = valueFormatted.replace(/\D/g, "");
	valueFormatted = valueFormatted.replace(/^(\d{5})(\d)/, "$1-$2");

	if (valueFormatted.length === 0) return "-";

	return valueFormatted;
};
