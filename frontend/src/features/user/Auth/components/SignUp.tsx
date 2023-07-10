import { useFormik } from 'formik'
import { TRegister, RegisterSchema } from '../data/auth.model'
import TextField from '@mui/material/TextField'
import { Box, Button } from '@mui/material'
import { useAuth } from '../hooks/useAuth'
import { useAppSelector } from '@Store'
import { useEffect } from 'react'

const Register = () => {
  const { onRegisterUser } = useAuth()
  const { status } = useAppSelector((store) => store.user)

  const {
    handleChange,
    handleBlur,
    errors,
    values,
    handleSubmit,
    resetForm,
    isValid,
    isSubmitting,
    touched,
  } = useFormik<TRegister>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      cpassword: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      onRegisterUser(values)
    },
  })

  useEffect(() => {
    if (isSubmitting && status === 'success') {
      resetForm()
    }
  }, [status])

  return (
    <Box component={'form'} onSubmit={handleSubmit}>
      <TextField
        fullWidth
        required
        name="name"
        label="Username"
        variant="standard"
        value={values.name}
        onChange={handleChange}
        error={Boolean(touched.name && errors.name)}
        helperText={touched.name && errors.name}
        onBlur={handleBlur}
        sx={{
          marginY: 1,
        }}
      />
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
      <TextField
        fullWidth
        required
        name="cpassword"
        type="password"
        label="Confirm Password"
        variant="standard"
        value={values.cpassword}
        onChange={handleChange}
        error={Boolean(touched.cpassword && errors.cpassword)}
        helperText={touched.cpassword && errors.cpassword}
        onBlur={handleBlur}
        sx={{
          marginY: 1,
        }}
      />
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

export default Register
