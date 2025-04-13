// ***********************************************************
//
// Test individual: [npx cypress run --spec "..."]
// ***********************************************************

import InputSimple from "./InputSimple";

describe("<InputSimple />", () => {
	const INPUT = {
		name: "name",
		value: "my input",
	};

	const HANDLE_CHANGE = () => {};

	it("Should have a logo image", () => {
		cy.mount(<InputSimple name={INPUT.name} value={INPUT.value} handleChange={HANDLE_CHANGE} />);
		cy.get('[data-cy="input_name"]').invoke("val").should("equal", "my input");
	});
});
