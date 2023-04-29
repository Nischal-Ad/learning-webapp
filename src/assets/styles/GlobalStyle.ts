import { createGlobalStyle, css } from 'styled-components';
import '@Styles/Root.css';

const globalCss = css`
	body {
		margin: 0;
		padding: 0;
		min-height: var(--height);
	}

	* {
		font-family: var(--ff-poppins) !important;
	}
`;

export const GlobalStyles = createGlobalStyle`
    ${globalCss}
`;
