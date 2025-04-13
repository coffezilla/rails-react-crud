// 0000
export const maskToOnlyNumbers = (valueRaw?: number | string | null): string => {
	if (!valueRaw) return "-";

	let valueFormatted = valueRaw.toString();
	valueFormatted = valueFormatted.replace(/\D/g, "");
	valueFormatted = valueFormatted.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

	return valueFormatted;
};

// 0.00
export const maskToPercentage = (
	valueRaw?: string | number | null,
	decimals: number = 2,
	isMathematical = false,
	prefix = "",
) => {
	if (!valueRaw) return "-";

	let valueFormatted: number | string = valueRaw;
	valueFormatted = typeof valueFormatted === "string" ? parseFloat(valueFormatted) : valueFormatted;

	if (isNaN(valueFormatted)) return "-";

	const valueFormattedWithDecimals = isMathematical ? valueFormatted * 100 : valueFormatted;
	const valueNormalized = `${(valueFormattedWithDecimals * 1).toFixed(decimals)}${prefix}`;

	return valueNormalized;
};

//
export const maskToSelic = (selicNumber: number) => {
	const taxa_diaria = selicNumber / 100;
	const taxa_anual = (1 + taxa_diaria) ** 254 - 1;
	const taxa_anual_percentual = taxa_anual * 100;

	return maskToPercentage(taxa_anual_percentual, 3, false, "%");
};
