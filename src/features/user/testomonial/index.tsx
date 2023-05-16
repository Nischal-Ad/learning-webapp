import { Box, Typography, Stack } from '@mui/material';
import { ImageWrapper } from './style';
import ReactStars from 'react-stars';
import { ITestomonial } from './data/testomonial.model';

const index = ({ testomonial }: { testomonial: ITestomonial }) => {
	return (
		<Box mb={3} mt={2} color={'var(--black)'}>
			<Stack spacing={1} direction={'row'} alignItems={'center'}>
				<ImageWrapper src={testomonial.img} />
				<Box>
					<ReactStars
						count={5}
						size={20}
						edit={false}
						value={testomonial.rating}
						color2={'#e59819'}
					/>
					<Typography variant='caption' component={'h6'} fontWeight={'bold'}>
						{testomonial.name}
					</Typography>
				</Box>
			</Stack>
			<Typography component='p' variant='subtitle2' px={2} mt={1}>
				{testomonial.desc}
			</Typography>
		</Box>
	);
};

export default index;
