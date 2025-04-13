import { maskToMoney } from "./currency"; // Adjust the import path as necessary

describe("Test maskToMoney", () => {
	it("Should format number 1000 to be 'R$ 1.000,00'", () => {
		expect(maskToMoney(1000)).toBe("1.000,00");
	});

	it("Should format string '1000' to be 'R$ 1.000,00'", () => {
		expect(maskToMoney("1000")).toBe("1.000,00");
	});

	it("Should format string '1000,50' with comma to be 'R$ 1.000,50'", () => {
		expect(maskToMoney("1000,50", "R$", "commam")).toBe("R$ 1.000,50");
	});

	it("Should format string '1000.50' with dot to be 'R$ 1.000,50'", () => {
		expect(maskToMoney("1000.50", "R$", "dot")).toBe("R$ 1.000,50");
	});

	it("Should format number 1000.50 to be '$ 1.000,50'", () => {
		expect(maskToMoney(1000.5, "$")).toBe("$ 1.000,50");
	});

	it("Should format invalid string 'abc' to be '-'", () => {
		expect(maskToMoney("abc")).toBe("-");
	});

	it("Should format null to be '-'", () => {
		expect(maskToMoney(null)).toBe("-");
	});

	it("Should format undefined to be '-'", () => {
		expect(maskToMoney(undefined)).toBe("-");
	});

	it("Should format empty param to be '-'", () => {
		expect(maskToMoney()).toBe("-");
	});

	it("Should format string '0,99' to be 'R$ 0,99'", () => {
		expect(maskToMoney("0,99", "R$", "commam")).toBe("R$ 0,99");
	});

	it("Should format string '0,99' to be 'R$ 0.99' when converting to dot", () => {
		expect(maskToMoney("0,99", "R$", "commam", "dot")).toBe("R$ 0.99");
	});

	it("Should format number 0 to be 'R$ 0,00'", () => {
		expect(maskToMoney(0)).toBe("0,00");
	});

	it("Should format string '0.99' to be 'R$ 0,99'", () => {
		expect(maskToMoney("0.99", "$", "dot")).toBe("$ 0,99");
	});

	it("Should format string '1000.50' with different output format to be '$ 1.000,50'", () => {
		expect(maskToMoney("1000.50", "$", "dot", "commam")).toBe("$ 1.000,50");
	});

	it("Should format string '199,500.90' with different output format to be '$ 199.500,90'", () => {
		expect(maskToMoney("199,500.90", "$", "dot", "commam")).toBe("$ 199.500,90");
	});

	// Additional tests for prefix handling
	it("Should format number 1000 with custom prefix to be 'Custom R$ 1.000,00'", () => {
		expect(maskToMoney(1000, "Custom")).toBe("Custom 1.000,00");
	});
});
