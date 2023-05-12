import { Box, Typography, Stack } from '@mui/material';
import test from '@Img/test.jpg';
import { ImageWrapper } from './style';
import ReactStars from 'react-stars';

const index = () => {
	return (
		<Box my={2} color={'var(--black)'}>
			<Stack spacing={1} direction={'row'} alignItems={'center'}>
				<ImageWrapper src={test} />
				<Box>
					<ReactStars
						count={5}
						size={20}
						edit={false}
						value={5}
						color2={'#e59819'}
					/>
					<Typography variant='caption' component={'h6'} fontWeight={'bold'}>
						Nischal
					</Typography>
				</Box>
			</Stack>
			<Typography component='p' variant='subtitle2' px={2} mt={2}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
				libero. Minus tenetur, praesentium vero neque recusandae quo doloribus
				exercitationem eveniet, delectus deserunt sunt obcaecati, quas sint
				itaque nihil voluptates atque.
			</Typography>
		</Box>
	);
};

export default index;
