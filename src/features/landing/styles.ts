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
