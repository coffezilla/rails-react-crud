export const operationStatusToText = (status: string) => {
	let statusText = status;
	if (status === "raising") statusText = "Capitalização";
	if (status === "pending") statusText = "Pendente";
	if (status === "liquidity") statusText = "Liquidando";
	if (status === "approval") statusText = "Homologação";
	if (status === "defaulting") statusText = "Inadimplente";
	if (status === "completed") statusText = "Finalizado";
	if (status === "canceled") statusText = "Cancelado";
	if (status === "draft") statusText = "Rascunho";
	if (status === "in_analysis") statusText = "Em análise";
	if (status === "declined") statusText = "Declinado";

	return statusText;
};

export const onlendingStatusToText = (status: string) => {
	let statusText = status;
	if (status === "cancelled") statusText = "Cancelado";
	if (status === "processing") statusText = "Processando";
	if (status === "done") statusText = "Pago";
	return statusText;
};

export const installmentStatusToText = (status: string) => {
	let statusText = status;
	if (status === "paid") statusText = "Pago";
	if (status === "processing") statusText = "Processando";
	return statusText;
};

export const investorQualificationToText = (status: boolean) => {
	return status ? "Qualificado" : "Não qualificado";
};

export const partnerResponsablePartnerToText = (status: boolean) => {
	return status ? "Sim" : "Não";
};

export const investorAudienceToText = (status: string) => {
	let statusText = status;
	if (status === "common") statusText = "Comum";
	if (status === "qualified") statusText = "Qualificado";
	return statusText;
};

export const investmentStatusToText = (status: string) => {
	let statusText = status;
	if (status === "processing") statusText = "Processando";
	if (status === "paid") statusText = "Pago";
	return statusText;
};
