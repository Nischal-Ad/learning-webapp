import {
	CardMedia,
	Typography,
	Box,
	Divider,
	Stack,
	CardActions,
	Button,
} from '@mui/material';
import { ICourses } from '../data/course.model';
import Grid from '@mui/material/Grid';
import {
	CourseDetailsBoxWrapper,
	CourseDetailsOverViewWrapper,
} from '../style';
import facebook from '@Svg/facebook.svg';
import twitter from '@Svg/twitter.svg';
import instagram from '@Svg/instagram.svg';
import telegram from '@Svg/telegram.svg';
import whatapps from '@Svg/whatsapp.svg';
import youtube from '@Svg/youtube.svg';
import ReactStars from 'react-stars';
import ContentWrapper from './ContentWrapper';
import TestomonialCard from '@Features/user/testomonial';
import CourseRequirement from './CourseRequirement';
import CourseContent from './CourseContent';

const CourseDetailsCard = ({ details }: { details: ICourses }) => {
	return (
		<>
			<CardMedia
				component={'img'}
				alt=''
				image={details.img}
				sx={{
					height: '18rem',
					margin: '1rem 0',
					borderRadius: '5px',
					objectFit: 'fill',
					display: { xs: 'none', md: 'block' },
				}}
			/>
			<Grid container spacing={2}>
				<Grid item xs={12} md={4}>
					<CourseDetailsBoxWrapper>
						<CardMedia component={'img'} alt='' image={details.img} />
						<Box className='data'>
							<Typography variant='h4' component={'h1'}>
								{details.title}
							</Typography>
							<Typography
								variant='body1'
								component={'h2'}
								my={1}
								color={'var(--primary)'}
							>
								Created by: {details.author}
							</Typography>
							<Typography variant='h5' component={'span'} fontWeight={'bold'}>
								${details.price}
								<Typography variant='h6' component={'span'} className='disable'>
									{details.Dprice && `$${details.Dprice}`}
								</Typography>
							</Typography>
							<Button variant='contained' color='secondary'>
								Add to Cart
							</Button>
							<Button variant='contained' className='buy' disableElevation>
								Buy Now
							</Button>
							<Divider
								sx={{
									marginY: '1rem',
								}}
							/>
							<Typography variant='h5' component={'span'} fontWeight={'bold'}>
								Share this course
							</Typography>
							<Stack component={'span'} direction={'row'} spacing={2} mt={2}>
								<CardMedia
									component={'img'}
									alt=''
									image={facebook}
									height={30}
								/>
								<CardMedia
									component={'img'}
									alt=''
									image={twitter}
									height={30}
								/>
								<CardMedia
									component={'img'}
									alt=''
									image={whatapps}
									height={30}
								/>
								<CardMedia
									component={'img'}
									alt=''
									image={telegram}
									height={30}
								/>
								<CardMedia
									component={'img'}
									alt=''
									image={instagram}
									height={30}
								/>
								<CardMedia
									component={'img'}
									alt=''
									image={youtube}
									height={30}
								/>
							</Stack>
						</Box>
					</CourseDetailsBoxWrapper>
				</Grid>
				<Grid item xs={12} md={8}>
					<CourseDetailsOverViewWrapper>
						<ContentWrapper title='Overview'>
							<Typography variant='subtitle2' component={'pre'}>
								{details.desc}
							</Typography>
						</ContentWrapper>
						<ContentWrapper title='Course Content'>
							<CourseContent />
						</ContentWrapper>
						<ContentWrapper title='Requirements'>
							{details.requirements.map((data, i) => {
								return <CourseRequirement key={i} requirement={data} />;
							})}
						</ContentWrapper>
						<ContentWrapper title='Rating'>
							<Typography variant='h5' component={'span'} fontWeight={'bold'}>
								Top Rating {`${details.rating} of 5`}
							</Typography>
							<Stack spacing={1} direction={'row'} my={1} alignItems={'center'}>
								<ReactStars
									count={5}
									size={20}
									edit={false}
									value={details.rating}
									color2={'#e59819'}
								/>
								<Typography
									variant='subtitle2'
									component={'span'}
									fontWeight={'bold'}
								>
									(10)
								</Typography>
							</Stack>
							{details.testomonial.map((data, i) => {
								return <TestomonialCard key={i} testomonial={data} />;
							})}
						</ContentWrapper>
						<CardActions
							sx={{
								display: 'flex',
								justifyContent: 'end',
							}}
						>
							<Button size='medium' color='success'>
								Next →
							</Button>
						</CardActions>
					</CourseDetailsOverViewWrapper>
				</Grid>
			</Grid>
		</>
	);
};

export default CourseDetailsCard;
