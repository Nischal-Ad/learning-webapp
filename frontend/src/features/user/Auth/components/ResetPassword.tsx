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
import LockIcon from '@mui/icons-material/Lock'
import { useNavigate, useParams } from 'react-router-dom'
import { ResetPasswordSchema, TResetPassword } from '../data/auth.model'
import logo from '@Svg/logo_big.svg'
import { useAuth } from '../hooks/useAuth'
import Loading from '@Components/Loader'
import { useEffect, useState } from 'react'
import { useAppSelector } from '@Store'

const Index = () => {
  const navigate = useNavigate()
  const { onUserResetPassword } = useAuth()
  const { token } = useParams()
  const { data, status } = useAppSelector((store) => store.user)
  const [isDone, setIsDone] = useState(false)

  if (typeof token === 'undefined') {
    return <Loading />
  }

  const {
    handleChange,
    handleBlur,
    errors,
    values,
    handleSubmit,
    isSubmitting,
    resetForm,
    isValid,
    touched,
  } = useFormik<TResetPassword>({
    initialValues: {
      cNewPassword: '',
      newPassword: '',
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: (values) => {
      onUserResetPassword(values, token)
    },
  })

  useEffect(() => {
    if (isDone && data?.success && status === 'success') {
      setIsDone(false)
      resetForm()
      navigate('/', { replace: true })
    }
  }, [isDone, status])

  return (
    <>
      1
      <Helmet title="Reset Password" />
      <Section id="password reset">
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
              Reset Password
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
                name="newPassword"
                label="Enter new password"
                type="password"
                variant="standard"
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
                name="cNewPassword"
                label="Enter confirm password"
                type="password"
                variant="standard"
                value={values.cNewPassword}
                onChange={handleChange}
                error={Boolean(touched.cNewPassword && errors.cNewPassword)}
                helperText={touched.cNewPassword && errors.cNewPassword}
                onBlur={handleBlur}
                sx={{
                  marginY: 1,
                }}
              />
              <Button
                disabled={!isValid || isSubmitting}
                variant="contained"
                type="submit"
                startIcon={<LockIcon />}
                sx={{
                  background: 'var(--primary)',
                  mt: 2,

                  '&:hover': {
                    background: 'var(--primary-hover)',
                  },
                }}
              >
                {isSubmitting ? 'Loading...' : 'Reset Password'}
              </Button>
            </Box>
          </Paper>
        </Box>
      </Section>
    </>
  )
}

export default Index
