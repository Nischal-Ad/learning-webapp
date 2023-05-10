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
	position: relative;
`;

export const NavbarWrapper = styled(Box)`
	&.nav {
		ul {
			display: flex;
			align-items: center;
			margin: revert;
			padding: 0;
		}
	}

	&.smallNav {
		width: 100vw;
		top: 0;
		margin-top: 3.5rem;
		width: 100vw;
		height: 100dvh;
		position: absolute;
		background-color: white;
		z-index: 10;
		margin-left: -1rem;

		ul {
			display: flex;
			flex-direction: column;
		}
	}
`;
