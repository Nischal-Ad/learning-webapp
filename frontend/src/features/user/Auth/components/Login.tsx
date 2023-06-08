import { useFormik } from 'formik'
import { IAuth, LoginSchema } from '../data/auth.model'
import TextField from '@mui/material/TextField'
import { Box, Button, Typography } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({ reset }: IAuth) => {
  const navigate = useNavigate()

  const {
    handleChange,
    handleBlur,
    errors,
    values,
    handleSubmit,
    isValid,
    touched,
    handleReset,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values)
      navigate('/dashboard', { replace: true })
    },
  })

  useEffect(() => {
    if (reset) {
      handleReset('data')
    }
  }, [reset])

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
        <FormControlLabel control={<Checkbox />} label="Remember me" />
        <Link to={'/forgetpassword'}>
          <Typography variant="subtitle2">Forget Password?</Typography>
        </Link>
      </Box>
      <Button
        disabled={!isValid}
        color="primary"
        variant="contained"
        type="submit"
      >
        Submit
      </Button>
    </Box>
  )
}

export default Login
