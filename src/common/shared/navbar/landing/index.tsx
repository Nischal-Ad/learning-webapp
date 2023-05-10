import { useState, useEffect } from 'react';
import Section from '@Components/SectionWrapper';
import { Box, CardMedia } from '@mui/material';
import logo from '@Svg/logo_text.svg';
import logo_black from '@Svg/logo_text_black.svg';
import { NavMenu, Navbar, NavbarWrapper } from '../style';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Navlinks from './navlinks';
import { Link } from 'react-router-dom';

const NabarLanding = () => {
	const [scrollY, setScrollY] = useState(false);
	const [drop, setDrop] = useState(false);

	const hideDrop = (val: boolean) => {
		setDrop(val);
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
		<Navbar className={scrollY || drop ? 'white' : ''}>
			<Section id='navbar'>
				<NavMenu disableGutters>
					<Link to='/'>
						<CardMedia
							image={scrollY || drop ? logo_black : logo}
							component={'img'}
							sx={{
								width: { lg: '12rem', xs: '10rem' },
							}}
						/>
					</Link>

					<NavbarWrapper
						className={drop ? 'smallNav' : 'nav'}
						sx={{
							display: !drop ? { lg: 'block', xs: 'none' } : 'block',

							a: {
								color: scrollY || drop ? '#5b5b5b' : 'white',
								textDecoration: 'none',
								display: 'grid',
								placeContent: 'center',
							},
						}}
					>
						<Navlinks NavDrop={hideDrop} />
					</NavbarWrapper>
					<Box component={'span'} display={{ lg: 'none', xs: 'block' }}>
						{drop ? (
							<CloseIcon
								onClick={() => setDrop(false)}
								sx={{
									color: '#5b5b5b',
								}}
							/>
						) : (
							<MenuIcon
								onClick={() => setDrop(true)}
								sx={{
									color: scrollY ? '#5b5b5b' : '',
								}}
							/>
						)}
					</Box>
				</NavMenu>
			</Section>
		</Navbar>
	);
};

export default NabarLanding;
