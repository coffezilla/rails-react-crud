import { maskToCep } from "./address";

describe("Test maskToCep", () => {
	it("Should format valid string '12345678' to '12345-678'", () => {
		expect(maskToCep("12345678")).toBe("12345-678");
	});

	it("Should format valid number 12345678 to '12345-678'", () => {
		expect(maskToCep(12345678)).toBe("12345-678");
	});

	it("Should format valid string with special characters '12345-678' to '12345-678'", () => {
		expect(maskToCep("12345-678")).toBe("12345-678");
	});

	it("Should format valid string with spaces ' 12345 678 ' to '12345-678'", () => {
		expect(maskToCep(" 12345 678 ")).toBe("12345-678");
	});

	it("Should return '-' for null input", () => {
		expect(maskToCep(null)).toBe("-");
	});

	it("Should return '-' for undefined input", () => {
		expect(maskToCep(undefined)).toBe("-");
	});

	it("Should return '-' for empty input", () => {
		expect(maskToCep()).toBe("-");
	});

	it("Should return '-' for invalid string 'abc'", () => {
		expect(maskToCep("abc")).toBe("-");
	});

	it("Should return '-' for string with only non-numeric characters '!!!'", () => {
		expect(maskToCep("!!!")).toBe("-");
	});

	it("Should handle string with mixed characters '1234abc567' to '12345-67'", () => {
		expect(maskToCep("1234abc567")).toBe("12345-67");
	});

	it("Should handle string with leading zeros '00123-456' to '00123-456'", () => {
		expect(maskToCep("00123-456")).toBe("00123-456");
	});
});
