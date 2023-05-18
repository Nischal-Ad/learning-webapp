import { SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { SwipperWrapper } from '../styles';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ISlider } from '../data/dashboard.model';

const Slider = ({ slides }: { slides: ISlider[] }) => {
	return (
		<>
			<SwipperWrapper
				spaceBetween={1}
				centeredSlides={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
			>
				{slides.map((data, i) => {
					return (
						<SwiperSlide key={i}>
							<CardMedia component='img' image={data.img} />
							<Typography paragraph>{data.desc}</Typography>
						</SwiperSlide>
					);
				})}
			</SwipperWrapper>
		</>
	);
};

export default Slider;
