import { Typography, IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import CourseCard from './CourseCard';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { CourseWrapper } from './style';
import { useRef } from 'react';
import { ICoruseSlide } from './course.model';

const Index: React.FC<ICoruseSlide> = ({ courses, title }) => {
	const scroll = useRef<HTMLDivElement>(null);
	const scrollDistance = 700;

	const scrollCourse = (direction: number): void => {
		setTimeout(() => {
			if (scroll.current) {
				scroll.current.scrollLeft += direction * scrollDistance;
			}
		}, 5);
	};

	const handleClickRight = () => {
		scrollCourse(1);
	};

	const handleClickLeft = () => {
		scrollCourse(-1);
	};

	const showCourses = () => {
		return courses
			.slice(0, 8)
			.map((course) => (
				<CourseCard
					key={course.title}
					img={course.img}
					title={course.title}
					author={course.author}
					rating={course.rating}
					price={course.price}
					Dprice={course.Dprice}
				/>
			));
	};

	return (
		<CourseWrapper position={'relative'}>
			{title && (
				<Typography
					variant='h3'
					component={'h1'}
					sx={{
						fontFamily: 'var(--ff-Cinzel) !important',
						fontWeight: 'bold',
						fontSize: '2.6rem',
						margin: '1rem 0',
					}}
				>
					{title}
				</Typography>
			)}
			<Stack direction={'row'} spacing={2} overflow={'auto'} ref={scroll}>
				{showCourses()}
			</Stack>

			<IconButton
				aria-label='arrow backward'
				className={`left`}
				onClick={handleClickLeft}
				sx={{ display: { lg: 'block', xs: 'none' } }}
			>
				<ArrowCircleLeftIcon />
			</IconButton>

			<IconButton
				aria-label='arrow forward'
				className={`right`}
				sx={{ display: { lg: 'block', xs: 'none' } }}
				onClick={handleClickRight}
			>
				<ArrowCircleRightIcon />
			</IconButton>
		</CourseWrapper>
	);
};

export default Index;
