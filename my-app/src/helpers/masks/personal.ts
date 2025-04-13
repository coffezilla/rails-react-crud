// 000.000.000-00
export const maskToCpf = (valueRaw?: string | number | null): string => {
	if (!valueRaw) return "-";

	let valueFormatted = valueRaw.toString();
	valueFormatted = valueFormatted.replace(/\D/g, "");
	valueFormatted = valueFormatted.replace(/(\d{3})(\d)/, "$1.$2");
	valueFormatted = valueFormatted.replace(/(\d{3})(\d)/, "$1.$2");
	valueFormatted = valueFormatted.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

	return valueFormatted;
};

// 00.000.0000-0/0000
export const maskToCnpj = (valueRaw?: string | number | null): string => {
	if (!valueRaw) return "-";

	let valueFormatted = valueRaw.toString();
	valueFormatted = valueFormatted.replace(/\D/g, "");
	valueFormatted = valueFormatted.replace(/^(\d{2})(\d)/, "$1.$2");
	valueFormatted = valueFormatted.replace(/(\d{3})(\d)/, "$1.$2");
	valueFormatted = valueFormatted.replace(/(\d{3})(\d{1,4})$/, "$1/$2");
	valueFormatted = valueFormatted.replace(/(\d{4})(\d)/, "$1-$2");

	return valueFormatted;
};
