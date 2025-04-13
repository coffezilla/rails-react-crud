// ***********************************************************
// This example support/e2e.ts is processed and loaded
// automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// log
let allTestsPassed = true;
let suiteTitle = "";
let testCounter = 0;

// Global afterEach hook
afterEach(function () {
	if (Cypress.env("enableLogging")) {
		if (this?.currentTest?.state === "failed") {
			allTestsPassed = false;
		}
		testCounter++;
	}
});

// Global after hook
after(() => {
	if (Cypress.env("enableLogging")) {
		const currentDateTime = new Date();
		const localDateTime = new Date(currentDateTime.getTime() - 3 * 60 * 60 * 1000);

		// Format date and time
		const formattedDate = `${localDateTime.getDate().toString().padStart(2, "0")}-${(localDateTime.getMonth() + 1).toString().padStart(2, "0")}-${localDateTime.getFullYear()}`;
		const formattedTime = `${localDateTime.getHours().toString().padStart(2, "0")}-${localDateTime.getMinutes().toString().padStart(2, "0")}-${localDateTime.getSeconds().toString().padStart(2, "0")}h`;

		// Determine the status
		const status = allTestsPassed ? "PASSED" : "ERROR";

		// Create the filename in the desired format with counter
		const fileName = `${formattedDate}_${formattedTime} - ${suiteTitle} (${testCounter} tests) - ${status}.txt`;
		const content = allTestsPassed
			? `All tests in the suite "${suiteTitle}" passed successfully.\nCreated on: ${formattedDate} at ${formattedTime}`
			: `Some tests in the suite "${suiteTitle}" failed.\nCreated on: ${formattedDate} at ${formattedTime}`;

		// Create a file with the appropriate filename and content
		cy.task("createFile", {
			fileName: fileName,
			content: content,
		});
	}
});

//
beforeEach(() => {
	if (Cypress.env("enableLogging")) {
		suiteTitle = Cypress.currentTest.titlePath[0] || "Unnamed Suite";
	}
});
