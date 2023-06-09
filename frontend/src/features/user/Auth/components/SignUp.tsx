import { useFormik } from 'formik'
import { TRegister, RegisterSchema } from '../data/auth.model'
import TextField from '@mui/material/TextField'
import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Register = () => {
  const navigate = useNavigate()
  const { onRegisterUser } = useAuth()

  const {
    handleChange,
    handleBlur,
    errors,
    values,
    handleSubmit,
    isValid,
    touched,
  } = useFormik<TRegister>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      cpassword: '',
      role: 'student',
    },
    validationSchema: RegisterSchema,
    onSubmit: (values, action) => {
      onRegisterUser(values)
      action.resetForm()
      navigate('/dashboard', { replace: true })
    },
  })

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
