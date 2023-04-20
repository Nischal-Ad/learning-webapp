import styled, { createGlobalStyle, css } from 'styled-components';

const globalCss = css`
	:root {
		--black: #191919;
		--white: #f3f3f3;
		--height: 100dvh;

		//font family
		--ff-poppins: 'Poppins', sans-serif;

		//gradients
		--gradientBlue: linear-gradient(
			90deg,
			#091e3a 0%,
			#2f80ed 50%,
			#2d9ee0 100%
		);
	}

	body {
		margin: 0;
		padding: 0;
		min-height: var(--height);

		font-family: var(--ff-poppins);
	}
`;

export const GlobalStyles = createGlobalStyle`
    ${globalCss}
`;
