import { maskToPixel } from "./measures";

describe("Mask to pixel", () => {
	it("Should number 20 to be '20px'", () => {
		expect(maskToPixel(20)).toBe("20px");
	});
	it("Should number 20.99 to be '21px'", () => {
		expect(maskToPixel(20.99)).toBe("21px");
	});
	it("Should number 0.000000 to be '21px'", () => {
		expect(maskToPixel(0.0)).toBe("0px");
	});
});
