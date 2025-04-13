// ***********************************************************
//
// Test individual: [npx cypress run --spec "..."]
// ***********************************************************

import LoadingPage from "./LoadingPage";

describe("<LoadingPage />", () => {
	it("Should loading", () => {
		cy.mount(<LoadingPage />);
		cy.get("div").should("contain.text", "Loading...");
	});
});
