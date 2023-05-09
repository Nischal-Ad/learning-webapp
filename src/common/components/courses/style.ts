import styled from 'styled-components';
import { Box } from '@mui/material';

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
