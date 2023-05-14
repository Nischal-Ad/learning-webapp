import { Typography } from '@mui/material';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import User404 from '@Svg/404.svg';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Helmet from '@Components/Helmet';

const index = () => {
	const ErrorWrapper = styled.section`
		display: grid;
		place-items: center;
		height: var(--height);
	`;

	const ImgWrapper = styled.img`
		height: 100%;
		width: 100%;
	`;

	return (
		<>
			<Helmet title='something went wrong' />
			<ErrorWrapper>
				<Paper
					elevation={3}
					sx={{
						p: 2,
					}}
				>
					<Grid
						container
						spacing={4}
						display={'flex'}
						justifyContent={'center'}
					>
						<Grid item md={5} xs={6}>
							<ImgWrapper src={User404} alt='' />
						</Grid>
						<Grid
							item
							xs={12}
							md={7}
							sx={{
								display: 'grid',
								placeItems: { xs: 'center', md: 'start' },
							}}
						>
							<Typography variant='h1' fontSize='8rem' color='primary'>
								404
							</Typography>
							<Typography variant='h6' gutterBottom>
								We looked everywhere for this page.
							</Typography>
							<Typography variant='subtitle2' color='gray' gutterBottom>
								Are you sure the website URL is correct?
							</Typography>
							<Button
								variant='outlined'
								endIcon={<SendIcon />}
								href='/'
								sx={{
									marginTop: 3,
								}}
							>
								Go Back to Home
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</ErrorWrapper>
		</>
	);
};

export default index;
