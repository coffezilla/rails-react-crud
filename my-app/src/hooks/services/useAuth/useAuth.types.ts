// get
export interface IApiResponseAuthData {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
}

export interface IApiResponseAuths {
	data: IApiResponseAuthData[];
}

export interface IParamsAuthFilter {}

// post
export interface IRequestAuthStore {
	username: string;
	password: string;
}

export interface IResponseAuthStore {
	result: {
		token: string;
	};
	error: {
		message: string;
		status: number;
	};
}

// update
export interface IRequestAuthUpdate {}

export interface IResponseAuthUpdate {}
