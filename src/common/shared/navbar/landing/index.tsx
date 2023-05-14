import { useState, useEffect } from 'react';
import Section from '@Components/SectionWrapper';
import { Box, CardMedia, Stack } from '@mui/material';
import logo from '@Svg/logo_text.svg';
import logo_black from '@Svg/logo_text_black.svg';
import { Navbar, NavbarWrapper } from '../style';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Navlinks from './navlinks';
import { Link } from 'react-router-dom';

const NabarLanding = () => {
	const [scrollY, setScrollY] = useState(false);
	const [open, setOpen] = useState(false);

	const hideNavItems = (val: boolean) => {
		setOpen(val);
	};

	useEffect(() => {
		const changebg = () => {
			if (window.scrollY >= 50) {
				setScrollY(true);
			} else {
				setScrollY(false);
			}
		};
		window.addEventListener('scroll', changebg);
		return () => {
			window.removeEventListener('scroll', changebg);
		};
	}, []);

	return (
		<Navbar className={scrollY || open ? 'white' : ''}>
			<Section id='navbar'>
				<Stack
					spacing={5}
					direction={'row'}
					justifyContent={'space-between'}
					alignItems={'center'}
					py={1}
				>
					<Link to='/'>
						<CardMedia
							image={scrollY || open ? logo_black : logo}
							component={'img'}
							sx={{
								width: { lg: '12rem', xs: '10rem' },
							}}
						/>
					</Link>

					<NavbarWrapper
						className={`${open ? 'smallNav' : 'slide-out'}`}
						sx={{
							a: {
								color: scrollY || open ? '#5b5b5b' : 'white',
								width: '100%',
								textAlign: 'center',
								fontSize: { lg: '1rem', md: '12px' },
							},

							li: {
								paddingX: { lg: '1rem', md: '12px', xs: '0px' },
								placeContent: 'center',
							},
						}}
					>
						<Navlinks NavDrop={hideNavItems} />
					</NavbarWrapper>

					<Box component={'span'} display={{ md: 'none', xs: 'block' }}>
						{open ? (
							<CloseIcon
								onClick={() => setOpen(false)}
								sx={{
									color: '#5b5b5b',
								}}
							/>
						) : (
							<MenuIcon
								onClick={() => setOpen(true)}
								sx={{
									color: scrollY ? '#5b5b5b' : '',
								}}
							/>
						)}
					</Box>
				</Stack>
			</Section>
		</Navbar>
	);
};

export default NabarLanding;
