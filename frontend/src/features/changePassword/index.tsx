import Helmet from '@Components/Helmet';
import Section from '@Components/SectionWrapper';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import {
	Box,
	Button,
	Paper,
	Typography,
	Divider,
	CardMedia,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import { PasswordChangeSchema } from './data/password.model';
import logo from '@Svg/logo_big.svg';

const Index = () => {
	const navigate = useNavigate();

	const {
		handleChange,
		handleBlur,
		errors,
		values,
		handleSubmit,
		isValid,
		touched,
	} = useFormik({
		initialValues: {
			oldPassword: '',
			newPassword: '',
			cPassword: '',
		},
		validationSchema: PasswordChangeSchema,
		onSubmit: (values) => {
			console.log(values);
			navigate('/dashboard', { replace: true });
		},
	});

	return (
		<>
			<Helmet title='Change Password' />
			<Section id='password change'>
				<Box display={'flex'} justifyContent={'center'}>
					<Paper
						elevation={3}
						sx={{
							my: 2,
							padding: ' 1rem 2rem',
							background: 'var(--white)',
							width: { lg: '40%', md: '50%' },
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Typography
							fontWeight={'bold'}
							component={'h1'}
							mb={1}
							sx={{
								fontSize: { xs: 25, sm: 35 },
							}}
						>
							Change Password
						</Typography>
						<Divider
							sx={{
								width: '100%',
							}}
						/>
						<CardMedia
							component={'img'}
							image={logo}
							sx={{
								objectFit: 'fill',
								width: '8rem',
								marginY: 2,
							}}
						/>
						<Box component={'form'} onSubmit={handleSubmit}>
							<TextField
								fullWidth
								required
								name='oldPassword'
								label='Enter old password'
								type='password'
								variant='standard'
								value={values.oldPassword}
								onChange={handleChange}
								error={Boolean(touched.oldPassword && errors.oldPassword)}
								helperText={touched.oldPassword && errors.oldPassword}
								onBlur={handleBlur}
								sx={{
									marginY: 1,
								}}
							/>
							<TextField
								fullWidth
								required
								name='newPassword'
								label='Enter new password'
								type='password'
								variant='standard'
								value={values.newPassword}
								onChange={handleChange}
								error={Boolean(touched.newPassword && errors.newPassword)}
								helperText={touched.newPassword && errors.newPassword}
								onBlur={handleBlur}
								sx={{
									marginY: 1,
								}}
							/>
							<TextField
								fullWidth
								required
								name='cPassword'
								label='Enter confirm password'
								type='password'
								variant='standard'
								value={values.cPassword}
								onChange={handleChange}
								error={Boolean(touched.cPassword && errors.cPassword)}
								helperText={touched.cPassword && errors.cPassword}
								onBlur={handleBlur}
								sx={{
									marginY: 1,
								}}
							/>
							<Button
								disabled={!isValid}
								variant='contained'
								type='submit'
								startIcon={<LockIcon />}
								sx={{
									background: 'var(--primary)',
									mt: 2,

									'&:hover': {
										background: 'var(--primary-hover)',
									},
								}}
							>
								Change Password
							</Button>
						</Box>
					</Paper>
				</Box>
			</Section>
		</>
	);
};

export default Index;
