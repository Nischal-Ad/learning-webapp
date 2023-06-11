import { useFormik } from 'formik'
import { LoginSchema, TLogin } from '../data/auth.model'
import TextField from '@mui/material/TextField'
import { Box, Button, Typography } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useAppSelector } from '@Store'

const Login = () => {
  const navigate = useNavigate()
  const { onLoginUser } = useAuth()
  const { status } = useAppSelector((store) => store.user)

  const {
    handleChange,
    handleBlur,
    errors,
    values,
    handleSubmit,
    isValid,
    touched,
  } = useFormik<TLogin>({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    validationSchema: LoginSchema,
    onSubmit: (values, action) => {
      onLoginUser(values)
      action.resetForm()
      navigate('/', { replace: true })
    },
  })

  return (
    <Box component={'form'} onSubmit={handleSubmit}>
      <TextField
        fullWidth
        required
        name="email"
        label="Email"
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
      <TextField
        fullWidth
        required
        name="password"
        label="Password"
        type="password"
        variant="standard"
        value={values.password}
        onChange={handleChange}
        error={Boolean(touched.password && errors.password)}
        helperText={touched.password && errors.password}
        onBlur={handleBlur}
        sx={{
          marginY: 1,
        }}
      />
      <Box
        marginBottom={{ sm: 1, xs: 2 }}
        display={'flex'}
        justifyContent={'space-between'}
        flexDirection={{ sm: 'row', xs: 'column' }}
        alignItems={{ sm: 'center', xs: 'start' }}
      >
        <FormControlLabel
          control={
            <Checkbox
              name="remember"
              checked={values.remember}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          }
          label="Remember me"
        />
        <Link to={status === 'loading' ? '' : '/forgetpassword'}>
          <Typography
            variant="subtitle2"
            color={status !== 'loading' ? 'blue' : 'gray'}
          >
            Forget Password?
          </Typography>
        </Link>
      </Box>
      <Button
        disabled={!isValid || status === 'loading'}
        color="primary"
        variant="contained"
        type="submit"
      >
        {status === 'loading' ? 'Loading...' : 'Submit'}
      </Button>
    </Box>
  )
}

export default Login
