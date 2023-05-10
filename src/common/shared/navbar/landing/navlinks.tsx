import { Box, Button, MenuList, MenuItem } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Auth from '@Features/user/Auth';
import { useState } from 'react';

interface INavLinks {
	NavDrop: (val: boolean) => void;
}

const Navlinks = ({ NavDrop }: INavLinks) => {
	const [open, setOpen] = useState(false);

	const showAuth = (val: boolean) => {
		setOpen(val);
	};

	return (
		<MenuList onClick={() => NavDrop(false)}>
			<Box component={'a'} href='#welcome' display={'block'}>
				<MenuItem>Home</MenuItem>
			</Box>
			<Box component={'a'} href='#our success'>
				<MenuItem>Our Success</MenuItem>
			</Box>
			<Box component={'a'} href='#services'>
				<MenuItem>Services</MenuItem>
			</Box>
			<Box component={'a'} href='#courses'>
				<MenuItem>Courses</MenuItem>
			</Box>
			<Box component={'a'} href='#about us'>
				<MenuItem>About Us</MenuItem>
			</Box>
			<Box component={'a'} href='#goals'>
				<MenuItem>Goals</MenuItem>
			</Box>
			<Box component={'a'} href='#testimonial'>
				<MenuItem>Testomonials</MenuItem>
			</Box>
			<MenuItem
				sx={{ padding: 0, marginX: 1, display: { lg: 'block', xs: 'none' } }}
			>
				<Button
					variant='contained'
					endIcon={<ArrowForwardIcon />}
					onClick={() => setOpen(true)}
					sx={{
						color: 'white !important',
						background: '#49BBBD',
						paddingX: 2,
						borderRadius: '9999px',

						'&:hover': {
							background: '#26b6b9',
						},
					}}
				>
					Join Us
				</Button>
				<Auth open={open} showAuth={showAuth} />
			</MenuItem>
		</MenuList>
	);
};

export default Navlinks;
