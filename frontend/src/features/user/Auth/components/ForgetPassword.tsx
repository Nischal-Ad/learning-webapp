import Helmet from '@Components/Helmet'
import Section from '@Components/SectionWrapper'
import { useFormik } from 'formik'
import TextField from '@mui/material/TextField'
import {
  Box,
  Button,
  Paper,
  Typography,
  Divider,
  CardMedia,
} from '@mui/material'
import { forgetPassowrdSchema } from '../data/auth.model'
import logo from '@Svg/logo_big.svg'
import { useAppSelector } from '@Store'
import { useAuth } from '../hooks/useAuth'

const Index = () => {
  const { onUserForgetPassword } = useAuth()
  const { status } = useAppSelector((store) => store.user)

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
      email: '',
    },
    validationSchema: forgetPassowrdSchema,
    onSubmit: (values, { resetForm }) => {
      onUserForgetPassword(values)
      resetForm()
    },
  })

  return (
    <>
      <Helmet title="Forget Password" />
      <Section id="forgetPassword">
        <Box display={'flex'} justifyContent={'center'} mt={'10%'}>
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
              Forget Password
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
                name="email"
                label="Enter your registered email"
                type="email"
                variant="standard"
                value={values.email}
                onChange={handleChange}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                onBlur={handleBlur}
                sx={{
                  marginY: 1,
                }}
              />
              <Button
                disabled={!isValid || status === 'loading'}
                variant="contained"
                type="submit"
                sx={{
                  background: 'var(--primary)',
                  mt: 2,
                  width: '100%',

                  '&:hover': {
                    background: 'var(--primary-hover)',
                  },
                }}
              >
                {status === 'loading' ? 'Loading...' : 'Submit'}
              </Button>
            </Box>
          </Paper>
        </Box>
      </Section>
    </>
  )
}

export default Index
