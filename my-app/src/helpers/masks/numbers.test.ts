import { maskToOnlyNumbers, maskToPercentage } from "./numbers";

describe("Test mask only numbers", () => {
	it("Should string '' to be '-'", () => {
		expect(maskToOnlyNumbers("")).toBe("-");
	});
	it("Should number 123 to be '123'", () => {
		expect(maskToOnlyNumbers(123)).toBe("123");
	});
	it("Should null to be '-'", () => {
		expect(maskToOnlyNumbers(null)).toBe("-");
	});
	it("Should undefined to be '-'", () => {
		expect(maskToOnlyNumbers(undefined)).toBe("-");
	});
	it("Should string 'number007' to be '007'", () => {
		expect(maskToOnlyNumbers("number007")).toBe("007");
	});
	it("Should empty param to be '-'", () => {
		expect(maskToOnlyNumbers()).toBe("-");
	});
});

describe("Test mask to percentage", () => {
	it("Should string '' to be '-'", () => {
		expect(maskToPercentage("")).toBe("-");
	});
	it("Should number 123 to be '123'", () => {
		expect(maskToPercentage(123)).toBe("123.00");
	});
	it("Should null to be '-'", () => {
		expect(maskToPercentage(null)).toBe("-");
	});
	it("Should undefined to be '-'", () => {
		expect(maskToPercentage(undefined)).toBe("-");
	});
	it("Should string '123' 5 decimals to be '123.00000'", () => {
		expect(maskToPercentage("123", 5)).toBe("123.00000");
	});
	it("Should string '123.123' 5 decimals to be '123.12300'", () => {
		expect(maskToPercentage("123.123", 5)).toBe("123.12300");
	});
	it("Should string '123.123',  2 decimals, notMathematical and '%' to be '123.12 %'", () => {
		expect(maskToPercentage("123.123", 2, false, "%")).toBe("123.12%");
	});
	it("Should string '0.123', 2 decimals, isMathematical and '%' to be '12.30%'", () => {
		expect(maskToPercentage("0.123", 2, true, "%")).toBe("12.30%");
	});
	it("Should number 0.01, 2 decimals, isMathematical and '%' to be '1.00%'", () => {
		expect(maskToPercentage(0.01, 2, true, "%")).toBe("1.00%");
	});
	it("Should string '1,123123' to be '1.00'", () => {
		expect(maskToPercentage("1,123123")).toBe("1.00");
	});

	it("Should empty param to be '-'", () => {
		expect(maskToPercentage()).toBe("-");
	});
});
