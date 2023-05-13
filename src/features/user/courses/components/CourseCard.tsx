import { Box, Typography, CardMedia } from '@mui/material';
import { CourseCardWrapper } from '../style';
import ReactStars from 'react-stars';
import { ICourses } from '../data/course.model';
import { Link } from 'react-router-dom';

const CourseCard = ({
	courses,
	list = true,
}: {
	courses: ICourses;
	list?: boolean;
}) => {
	return (
		<Box
			sx={{
				minWidth: list ? '100%' : ['100%', '14.3rem'],
				maxWidth: list ? '100%' : ['100%', '14.3rem'],
			}}
		>
			<Link to={`/courses/${courses.id}`}>
				<CourseCardWrapper
					sx={{
						display: list ? { md: 'flex', xs: 'block' } : 'block',
						flexDirection: 'row',
					}}
				>
					<CardMedia
						component={'img'}
						image={courses.img}
						sx={{
							height: !list ? '10rem' : '100%',
							width: list ? { md: '16rem', xs: '100%' } : '100%',
							objectFit: 'fill',
							marginRight: list ? { md: '1rem', xs: 0 } : 0,
						}}
					/>
					<Box>
						<Typography variant='h6' component={'h1'} fontWeight={'bold'}>
							{courses.title}
						</Typography>
						{list && (
							<Typography variant='subtitle2'>{courses.desc}</Typography>
						)}
						<Typography variant='caption'>{courses.author}</Typography>
						<Box display='flex' alignItems='center'>
							<ReactStars
								count={5}
								size={20}
								edit={false}
								value={courses.rating}
								color2={'#e59819'}
							/>
							<Typography variant='caption'>(10)</Typography>
						</Box>
						<Typography variant='body1' component={'span'} fontWeight={'bold'}>
							${courses.price}
							<Typography
								variant='body2'
								component={'span'}
								className='disable'
							>
								{courses.Dprice && `$${courses.Dprice}`}
							</Typography>
						</Typography>
						<br />
						<Typography variant='body2' component={'span'} className='best'>
							Best Seller
						</Typography>
					</Box>
				</CourseCardWrapper>
			</Link>
		</Box>
	);
};

export default CourseCard;
