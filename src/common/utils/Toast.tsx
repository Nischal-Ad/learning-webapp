import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert, Slide, SlideProps } from '@mui/material';

type alertProps = {
	type: 'success' | 'error';
	message: string;
};
type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionLeft(props: TransitionProps) {
	return <Slide {...props} direction='left' />;
}

const Toast: React.FC<alertProps> = ({ type, message }) => {
	const [open, setOpen] = useState(true);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Snackbar
			open={open}
			autoHideDuration={1000}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			TransitionComponent={TransitionLeft}
			onClose={handleClose}
		>
			<Alert severity={type} sx={{ width: '100%' }}>
				{message}!
			</Alert>
		</Snackbar>
	);
};

export default Toast;
