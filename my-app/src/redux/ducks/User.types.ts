export interface IRdxUser {
	preferences: {
		theme: "dark" | "light";
	};
	user: {
		name?: string;
		email?: string;
	};
}
