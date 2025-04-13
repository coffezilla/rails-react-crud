import { maskToCpf } from "./personal";

describe("Test mask cpf", () => {
	it("Should string '12312312300' to be '123.123.123-00'", () => {
		expect(maskToCpf(12312312300)).toBe("123.123.123-00");
	});
	it("Should number 12312312300 to be '123.123.123-00'", () => {
		expect(maskToCpf(12312312300)).toBe("123.123.123-00");
	});
	it("Should null  to be '-'", () => {
		expect(maskToCpf(null)).toBe("-");
	});
	it("Should undefined  to be '-'", () => {
		expect(maskToCpf(undefined)).toBe("-");
	});
	it("Should string '123123' to be '123.123'", () => {
		expect(maskToCpf("123123")).toBe("123.123");
	});
	it("Should empty param to be '-'", () => {
		expect(maskToCpf()).toBe("-");
	});
});
