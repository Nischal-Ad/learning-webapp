import { enqueueSnackbar } from 'notistack';

export const notifySuccess = (message: string) => {
	enqueueSnackbar({ message, variant: 'success' });
};

export const notifyError = (message: string) => {
	enqueueSnackbar({ message, variant: 'error' });
};
