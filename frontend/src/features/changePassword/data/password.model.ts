import { object, string, ref } from 'yup'

export const PasswordChangeSchema = object().shape({
  oldPassword: string()
    .max(12, 'password be less than or equal to 12')
    .min(4, 'password be more than or equal to 4')
    .required('please enter password'),
  newPassword: string()
    .max(12, 'password be less than or equal to 12')
    .min(4, 'password be more than or equal to 4')
    .required('please enter password'),
  cPassword: string()
    .oneOf([ref('newPassword')], 'password doesnot match')
    .required('please enter confirm password'),
})
