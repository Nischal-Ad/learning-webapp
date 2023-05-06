import { createGlobalStyle, css } from 'styled-components';
import '@Styles/Root.css';

const globalCss = css`
	body {
		margin: 0;
		padding: 0;
		min-height: var(--height);
	}

	body::-webkit-scrollbar {
		display: none;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none !important;
		margin: 0 !important;
	}

	html {
		scroll-behavior: smooth;
	}

	* {
		font-family: var(--ff-poppins) !important;
	}
`;

export const GlobalStyles = createGlobalStyle`
    ${globalCss}
`;
