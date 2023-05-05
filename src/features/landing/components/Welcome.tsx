import Box from '@mui/material/Box';
import SectionWrapper from '@Components/SectionWrapper';
import { Image, WaveWrapper } from '../styles';
import wave from '@Svg/wave.svg';
import { Button, Stack, Typography } from '@mui/material';
import heading_img from '@Img/heading-img.png';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Auth from '@Features/user/Auth';

const Welcome = () => {
	const [open, setOpen] = useState(false);

	const showAuth = (val: boolean) => {
		setOpen(val);
	};

	return (
		<Box bgcolor='#49BBBD' component={'main'} position='relative'>
			<SectionWrapper id='welcome'>
				<Box
					display='flex'
					alignItems='center'
					pb={4}
					pt={{ lg: 4, xs: 9 }}
					flexDirection={{ xs: 'column', lg: 'row' }}
				>
					<Box pr={{ lg: 4, xs: 0 }}>
						<Typography
							fontWeight={700}
							fontSize={'3rem'}
							variant='h1'
							color='white'
							sx={{
								lineHeight: '70px',
								span: {
									color: '#f48c06',
								},
							}}
						>
							<span>Studying</span> Online is now much easier
						</Typography>
						<Typography
							mt={5}
							paragraph
							letterSpacing={0.5}
							textAlign={'justify'}
							color={'white'}
						>
							E-learning is an interesting platform that will teach you in more
							an interactive way
						</Typography>
						<Stack
							mt={5}
							flexDirection={{ xs: 'column', lg: 'row' }}
							alignItems='center'
							justifyContent={'space-evenly'}
							spacing={{ xs: 4, lg: 0 }}
						>
							<Button
								variant='contained'
								onClick={() => setOpen(true)}
								size='large'
								sx={{
									bgcolor: '#80CFD1',
									borderRadius: '9999px',
									'&:hover': {
										backgroundColor: '#6fbec0',
									},
								}}
							>
								Join For Free
							</Button>
							<IconButton
								aria-label='play'
								size='large'
								sx={{
									background: 'white',
									borderRadius: '9999px',
									margin: 0,
									padding: 0,
									paddingRight: 2,
									'&:hover': {
										backgroundColor: '#eeeeee',
									},
								}}
							>
								<PlayCircleIcon
									fontSize='large'
									sx={{
										color: '#80CFD1',
										fontSize: 40,
									}}
								/>
								<Typography variant='button' ml={1} color='black'>
									Watch How It Works
								</Typography>
							</IconButton>
						</Stack>
					</Box>
					<Box>
						<Image src={heading_img} alt='' />
					</Box>
				</Box>
				<WaveWrapper>
					<img src={wave} alt='' />
				</WaveWrapper>
				<Auth open={open} showAuth={showAuth} />
			</SectionWrapper>
		</Box>
	);
};

export default Welcome;
