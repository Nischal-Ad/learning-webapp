import { useFormik } from 'formik'
import { IAuth, RegisterSchema } from '../data/auth.model'
import TextField from '@mui/material/TextField'
import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = ({ reset }: IAuth) => {
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
      username: '',
      email: '',
      password: '',
      cPassword: '',
      role: 'student',
    },
    validationSchema: RegisterSchema,
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
        name="username"
        label="Username"
        variant="standard"
        value={values.username}
        onChange={handleChange}
        error={Boolean(touched.username && errors.username)}
        helperText={touched.username && errors.username}
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
        name="cPassword"
        type="password"
        label="Confirm Password"
        variant="standard"
        value={values.cPassword}
        onChange={handleChange}
        error={Boolean(touched.cPassword && errors.cPassword)}
        helperText={touched.cPassword && errors.cPassword}
        onBlur={handleBlur}
        sx={{
          marginY: 1,
        }}
      />
      <Typography>Who are you?</Typography>
      <RadioGroup row value={values.role} name="role" onChange={handleChange}>
        <FormControlLabel value="student" control={<Radio />} label="Student" />
        <FormControlLabel value="teacher" control={<Radio />} label="Teacher" />
      </RadioGroup>
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

export default Register
