import { maskToDate } from "./time";

describe("Test maskToDate", () => {
	it("Should format valid date string '2022-02-13' to '13/02/22'", () => {
		expect(maskToDate("2022-02-13")).toBe("13/02/22");
	});

	it("Should format valid date string '2022-02-13' with time to '13/02/22 00:00h'", () => {
		expect(maskToDate("2022-02-13", true)).toBe("13/02/22 00:00h");
	});

	it("Should format Date object for '2022-02-13' to '13/02/22'", () => {
		expect(maskToDate(new Date("2022-02-13"))).toBe("13/02/22");
	});

	it("Should format Date object for '2022-02-13' with time to '13/02/22 00:00h'", () => {
		expect(maskToDate(new Date("2022-02-13"), true)).toBe("13/02/22 00:00h");
	});

	it("Should return '-' for invalid date string 'invalid-date'", () => {
		expect(maskToDate("invalid-date")).toBe("-");
	});

	it("Should return '-' for null input", () => {
		expect(maskToDate(null)).toBe("-");
	});

	it("Should return '-' for undefined input", () => {
		expect(maskToDate(undefined)).toBe("-");
	});

	it("Should return '-' for empty input", () => {
		expect(maskToDate()).toBe("-");
	});

	it("Should format valid date string '2022-02-13T12:30:00Z' to '13/02/22 12:30h'", () => {
		expect(maskToDate("2022-02-13T12:30:00Z", true)).toBe("13/02/22 12:30h");
	});

	it("Should format valid date string '2022-12-31' to '31/12/22'", () => {
		expect(maskToDate("2022-12-31")).toBe("31/12/22");
	});

	it("Should handle edge case of date '0001-01-01' to '01/01/01'", () => {
		expect(maskToDate("0001-01-01")).toBe("01/01/01");
	});
});
