module.exports = {
	preset: "ts-jest", // Use ts-jest preset
	testEnvironment: "node", // Set the test environment
	moduleFileExtensions: ["ts", "js", "json", "node"], // Supported file extensions
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]s?$", // Patterns to match test files
	transform: {
		"^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }], // Transform .ts and .tsx files
	},
};
