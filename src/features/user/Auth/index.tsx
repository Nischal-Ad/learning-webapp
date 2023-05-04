import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { memo } from 'react';

interface IAuth {
	open: boolean;
	test: (val: boolean) => void;
}

const index = ({ open, test }: IAuth) => {
	const handleClose = () => {
		test(false);
	};

	return (
		<Dialog
			open={open}
			keepMounted
			aria-describedby='alert-dialog-slide-description'
		>
			<DialogTitle>{"Use Google's location service?"}</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-slide-description'>
					Let Google help apps determine location. This means sending anonymous
					location data to Google, even when no apps are running.
				</DialogContentText>
				<Button onClick={handleClose}>click me</Button>
			</DialogContent>
		</Dialog>
	);
};

export default memo(index);
