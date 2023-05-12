import { Box, Button, CardMedia, Divider, Typography } from '@mui/material';
import SectionWrapper from '@Components/SectionWrapper';
import logo from '@Svg/logo_text.svg';
import { FooterInput } from './style';

const FooterLanding = () => {
	return (
		<Box component={'footer'} bgcolor={'#252641'} mt={'1rem'}>
			<SectionWrapper id='footer'>
				<Box
					sx={{
						color: 'white',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						paddingTop: 2,
					}}
				>
					<CardMedia
						component={'img'}
						image={logo}
						alt=''
						sx={{
							width: '10rem',
						}}
					/>

					<Divider
						orientation='vertical'
						variant='middle'
						sx={{
							color: '#626381',
							height: '3rem',
							marginX: 2,
							border: 1,
						}}
					/>
					<Box>
						<Typography variant='h6' component={'span'}>
							Virtual Class for Zoom
						</Typography>
					</Box>
				</Box>
				<Box
					display={'flex'}
					alignItems={'center'}
					flexDirection={'column'}
					color='#B2B3CF'
					mt={2}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-evenly',
							width: { sm: '24rem', xs: '100%' },
							paddingBottom: 1,
						}}
					>
						<Typography variant='subtitle1' component={'span'}>
							Careers
						</Typography>
						<Divider
							orientation='vertical'
							variant='middle'
							sx={{
								color: '#626381',
								height: '1rem',
								border: 1,
							}}
						/>
						<Typography variant='subtitle1' component={'span'}>
							Privacy Policy
						</Typography>
						<Divider
							orientation='vertical'
							variant='middle'
							sx={{
								color: '#626381',
								height: '1rem',
								border: 1,
							}}
						/>
						<Typography variant='subtitle1' component={'span'}>
							Terms & Conditions
						</Typography>
					</Box>
					<Typography variant='subtitle1' component={'span'}>
						© 2023 Nischal Adhikari inc.
					</Typography>
				</Box>
			</SectionWrapper>
		</Box>
	);
};

export default FooterLanding;
