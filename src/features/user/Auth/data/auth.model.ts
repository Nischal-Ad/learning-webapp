export interface authLogin {
	email: string;
	password: string;
	isAuth: boolean;
}

export interface authState {
	status: 'idle' | 'loading' | 'success' | 'error';
	data: authLogin;
	error: any;
}
