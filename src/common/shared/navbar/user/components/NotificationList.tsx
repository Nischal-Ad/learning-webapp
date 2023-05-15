import { Typography, Stack, IconButton, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const NotificationList = () => {
	return (
		<Stack
			p={1.5}
			my={1}
			spacing={1}
			direction={'row'}
			bgcolor={'var(--white)'}
			justifyContent={'space-between'}
		>
			<Typography minWidth={'88%'} textAlign={'justify'} variant='body2'>
				Lorem ipsum,
			</Typography>

			<IconButton
				aria-label='delete'
				sx={{
					padding: 0,
				}}
			>
				<DeleteIcon />
			</IconButton>
		</Stack>
	);
};

export default NotificationList;
