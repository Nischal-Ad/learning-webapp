import { Box, Typography, CardMedia } from '@mui/material';
import { CourseCardWrapper } from './style';
import ReactStars from 'react-stars';
import { ICourses } from './course.model';

const CourseCard: React.FC<ICourses> = ({
	author,
	img,
	price,
	rating,
	title,
	Dprice,
}) => {
	return (
		<CourseCardWrapper
			sx={{
				minWidth: ['100%', '14.3rem'],
				maxWidth: ['100%', '14.3rem'],
			}}
		>
			<CardMedia
				component={'img'}
				image={img}
				sx={{
					height: '10rem',
					objectFit: 'fill',
				}}
			/>
			<Box>
				<Typography variant='h6' component={'h1'} fontWeight={'bold'}>
					{title}
				</Typography>
				<Typography variant='caption'>{author}</Typography>
				<Box display='flex' alignItems='center'>
					<ReactStars
						count={rating}
						size={20}
						edit={false}
						value={4}
						color2={'#e59819'}
					/>
					<Typography variant='caption'>(10)</Typography>
				</Box>
				<Typography variant='body1' component={'span'} fontWeight={'bold'}>
					${price}
					<Typography variant='body2' component={'span'} className='disable'>
						{Dprice && `$${Dprice}`}
					</Typography>
				</Typography>
			</Box>
			<Typography variant='body2' component={'span'} className='best'>
				Best Seller
			</Typography>
		</CourseCardWrapper>
	);
};

export default CourseCard;
