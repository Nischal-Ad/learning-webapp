import SectionWrapper from '@Components/SectionWrapper';
import Heading from '@Components/Heading/LandingHeading';
import { Box, Typography, Stack, CardMedia } from '@mui/material';
import Img from '@Img/goalImg.jpg';
import BoxIcon from '@Svg/userbox.svg';
import UserIcon from '@Svg/goaluser.svg';
import CopyIcon from '@Svg/usercopy.svg';

const Goals = () => {
	return (
		<SectionWrapper id='Goals'>
			<Heading
				heading='Our'
				title='Goals'
				desc='This very extraordinary feature, can make learning activities more efficient'
			/>
			<Stack
				spacing={2}
				justifyContent={'space-around'}
				alignItems='center'
				direction={{ lg: 'row', xs: 'column' }}
			>
				<Box>
					<CardMedia component='img' image={Img} alt='' />
				</Box>

				<Stack
					direction={'column'}
					color={'#696984'}
					spacing={3}
					sx={{
						div: {
							display: 'flex',
							alignItems: 'center',

							img: {
								height: 80,
								width: 80,
							},
						},
					}}
				>
					<Typography
						fontWeight={700}
						variant={'h1'}
						color={'#2F327D'}
						fontSize={36}
						textAlign={{ xs: 'center', lg: 'start' }}
						mb={1}
						sx={{
							span: {
								color: '#00CBB8',
							},
						}}
					>
						A <span>user interface </span>designed for the classroom
					</Typography>
					<Box component={'div'}>
						<CardMedia component={'img'} image={BoxIcon} sx={{}} />
						<Typography paragraph>
							Teachers don’t get lost in the grid view and have a dedicated
							Podium space.
						</Typography>
					</Box>
					<Box>
						<CardMedia component={'img'} image={CopyIcon} />
						<Typography paragraph>
							TA’s and presenters can be moved to the front of the class.
						</Typography>
					</Box>
					<Box>
						<CardMedia component={'img'} image={UserIcon} />
						<Typography paragraph>
							Teachers can easily see all students and class data at one time.
						</Typography>
					</Box>
				</Stack>
			</Stack>
		</SectionWrapper>
	);
};

export default Goals;
