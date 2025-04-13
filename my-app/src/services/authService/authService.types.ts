export interface IPostLoginResponse {
	access_token: string;
	refresh_token: string;
	user: {
		id: string;
		name: string;
		email: string;
		password_digest: string;
		created_at: string;
		updated_at: string;
	};
}

export interface IPostRefreshTokenResponse {
	access_token: string;
	user_id: string;
	email: string;
}

export interface IPostStoreUserResponse {
	id: string;
	name: string;
	email: string;
	password_digest: string;
	created_at: string;
	updated_at: string;
}

export interface IPostStoreUserRequest {
	name: string;
	email: string;
	password: string;
}
