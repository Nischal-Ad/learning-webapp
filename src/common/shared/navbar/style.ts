import { AppBar, Toolbar, Box } from '@mui/material';
import styled from 'styled-components';

export const Navbar = styled(AppBar)`
	background-color: transparent !important;
	box-shadow: none !important;

	&.white {
		background-color: white !important;
	}
`;

export const NavMenu = styled(Toolbar)`
	display: flex;
	justify-content: space-between;
	align-items: center;

	ul {
		display: flex;
		align-items: center;
		margin: revert;
		padding: 0;
	}
`;

export const NavbarSmallWrapper = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100dvh;

	a {
		color: #5b5b5b;
		text-decoration: none;
	}

	li {
		margin: 10px 0;
	}
`;
