import styled from 'styled-components';
import Box from '@mui/material/Box';
import '@Styles/Root.css';
import Card from '@mui/material/Card';

export const WaveWrapper = styled(Box)`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	line-height: 0;

	img {
		position: relative;
		display: block;
		width: calc(300% + 1.3px);
		height: 145px;
	}
`;

export const Image = styled.img`
	width: 100%;
`;

export const SuccessNumber = styled.span`
	background: linear-gradient(90deg, #136cb5 0%, #49bbbd 100%);
	background-clip: text;
	color: rgba(0, 0, 0, 0);
	font-family: var(--ff-bruno) !important;
	-webkit-background-clip: text;
	display: block;
	font-size: 90px;
`;

export const CardImageWrapper = styled(Box)`
	background: #00cbb8;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	height: 7rem;
	width: 7rem;
	margin-inline: auto;
	top: -3rem;
	z-index: 1;
	position: relative;
`;

export const CardWrapper = styled(Card)`
	overflow: visible !important;
	margin-top: 2rem;
	color: var(--dark) !important;
	text-align: center;

	h1 {
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		display: -webkit-box;
	}

	p {
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		display: -webkit-box;
	}
`;

export const AboutImageWrapper = styled(Card)`
	position: relative;
	img {
		height: 23rem;
		object-fit: fill;
	}

	button {
		background-color: #00cbb8;
		border-radius: 80px;

		&:hover {
			background-color: #05ae9d;
		}
	}

	div {
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		display: grid;
		place-content: center;
		opacity: 0;
		transition: 0.5s;

		@media (width < 1200px) {
			opacity: 100;
			background: #171b413e;
		}

		&:hover {
			opacity: 100%;
			background: #171b413e;
		}
	}
`;

export const TestomonialComment = styled(Box)`
	position: absolute;
	z-index: 1;
	padding: 15px 20px 0 30px;
	border-left: 5px solid #f67766;
	text-align: justify;
	border-radius: 10px;
	bottom: -5rem;
	background: white;
	box-shadow: 2px 4px 60px rgba(41, 44, 124, 0.1);

	p {
		color: #5f5f7e;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
		display: -webkit-box;
	}
`;
