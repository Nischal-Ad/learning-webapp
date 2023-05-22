import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
	display: grid;
	place-items: center;
`;

const index = () => {
	return (
		<LoadingWrapper>
			<CircularProgress size={100} thickness={0.5} />
		</LoadingWrapper>
	);
};

export default index;
