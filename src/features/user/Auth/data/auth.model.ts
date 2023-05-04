export interface IProps {
	open: boolean;
	showAuth: (val: boolean) => void;
}

export interface ILogin {
	email: string;
	password: string;
	isAuth: boolean;
}

export interface ILoginState {
	status: 'idle' | 'loading' | 'success' | 'error';
	data: ILogin;
	error: any;
}
