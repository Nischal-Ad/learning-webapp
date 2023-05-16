import Section from '@Components/SectionWrapper';
import { Divider, IconButton, Button, Stack } from '@mui/material';
import { courses } from '@Data/Courses';
import Helmet from '@Components/Helmet';
import CourseCard from '@Components/Courses/Index';
import DeleteIcon from '@mui/icons-material/Delete';

const Index = () => {
	return (
		<>
			<Helmet title='My-Cart' content='my fovourate courses' />
			<Section id='my-cart'>
				{courses.map((course, i) => {
					return (
						<>
							<Stack
								spacing={{ md: 4, xs: 1 }}
								marginY={4}
								direction={{ md: 'row', xs: 'column' }}
								justifyContent={'space-between'}
								sx={{
									'&.MuiStack-root': {
										width: { md: '85%', xs: '100%' },
									},
								}}
							>
								<CourseCard courses={course} key={i} />
								<IconButton
									aria-label='delete'
									size='large'
									sx={{
										display: { md: 'block', xs: 'none' },
									}}
								>
									<DeleteIcon fontSize='inherit' />
								</IconButton>
								<Button
									variant='contained'
									color='secondary'
									className='del-btn'
									startIcon={<DeleteIcon />}
									sx={{
										display: { md: 'none', xs: 'flex' },
										width: '12rem',
									}}
								>
									Delete From Cart
								</Button>
							</Stack>
							<Divider />
						</>
					);
				})}
			</Section>
		</>
	);
};

export default Index;
