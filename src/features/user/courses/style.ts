import styled from 'styled-components';
import { Box, List } from '@mui/material';

export const CourseCardWrapper = styled(Box)`
	overflow: auto;
	color: var(--black);

	h1 {
		max-height: 4rem;
		min-height: 2rem;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	p {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	h6 {
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.disable {
		color: gray;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		text-decoration-line: line-through;
		margin-left: 5px;
	}

	.best {
		text-align: center;
		background-color: var(--primary);
		padding: 3px 20px;
		color: var(--white);
	}
`;

export const CourseWrapper = styled(Box)`
	position: relative;
	margin: 1rem 0;

	button {
		position: absolute;
		top: 8rem;

		&.left {
			left: 0;
		}

		&.right {
			right: 0;
		}

		svg {
			font-size: 3rem;
			color: var(--primary);
		}
	}
`;

export const CourseDetailsBoxWrapper = styled(Box)`
	box-shadow: 0px 10px 60px rgba(38, 45, 118, 0.08);
	position: sticky;
	top: 5rem;
	padding: 10px;
	border-radius: 5px;
	color: var(--black);

	h1,
	h2,
	button {
		font-weight: bold;
	}

	img {
		object-fit: fill;
	}

	.disable {
		color: gray;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		text-decoration-line: line-through;
		margin-left: 1rem;
	}

	.data {
		padding: 1rem;
	}

	button {
		margin: 10px 0;
		width: 100%;

		&.buy {
			background-color: var(--primary);
			margin-top: 1rem;

			&:hover {
				background-color: var(--primary-hover);
			}
		}
	}
`;

export const CourseDetailsOverViewWrapper = styled(Box)`
	box-shadow: 0px 10px 60px rgba(38, 45, 118, 0.08);
	padding: 1rem;
	border-radius: 5px;
`;

export const RequirementWrapper = styled(List)`
	padding: 0 !important;

	li {
		margin: 1rem 0;
		padding: 0;
		position: relative;

		svg {
			font-size: 0.8rem;
			position: absolute;
			top: 0.5rem;
		}

		span {
			margin-left: 1.5rem;
		}
	}
`;
