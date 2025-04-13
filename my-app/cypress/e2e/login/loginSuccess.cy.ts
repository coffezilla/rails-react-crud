// ***********************************************************
// Test Suite: xxx
// Author: Renato Santos
// Date: 2025-01-01
//
// Test Case: xxx
//
// Related Documentation: [Link to documentation]
// Related Issue: [Link to issue tracker]
//
// Test individual: [npx cypress run --spec "cypress/e2e/login/loginSuccess.cy.ts"]
// ***********************************************************

import { CREDENTIALS, REQUEST_MOCKED } from "../../support/constants";

describe("User login", () => {
	context("Should Login Successfully Using Auth0", () => {
		before(() => {
			// requests
			cy.intercept("POST", "/auth/login").as("getRequestAuth0");
		});

		it("should login successfully from Auth0 Api", () => {
			cy.submitLogin({ email: CREDENTIALS.email, password: CREDENTIALS.password });

			// expect
			cy.wait("@getRequestAuth0").its("response.statusCode").should("be.oneOf", [200, 304]);
			cy.url().should("include", "/");
		});
	});

	context("Should Login Successfully Using Mocked Data", () => {
		before(() => {
			cy.intercept("POST", "/auth/login", {
				statusCode: 200,
				body: {
					data: {
						data: {
							message: "MOCKED-DATA",
							result: {
								id: CREDENTIALS.id,
								name: CREDENTIALS.name,
								email: CREDENTIALS.email,
								token: REQUEST_MOCKED.token,
							},
						},
					},
				},
			}).as("getRequestMocked");
		});

		it("should login successfully from mock data", () => {
			cy.submitLogin({ email: CREDENTIALS.email, password: CREDENTIALS.password });

			// expect
			cy.wait("@getRequestMocked").its("response.statusCode").should("be.oneOf", [200, 304]);
			cy.url().should("include", "/");
		});
	});
});
