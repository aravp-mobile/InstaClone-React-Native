import * as yup from 'yup';

export const loginInitialValue = {
  mobileNumber: '',
  password: '',
};

export const loginValidationSchema = yup.object().shape({
  mobileNumber: yup
    .string()
    .min(10, ({min}) => `${'Mobile number must be'} ${min} ${'character'}`)
    .required('Mobile number is required'),
    // .matches(/^[789]\d{9}$/, 'Mobile number should be start from 7,8,9'),
  password: yup.string().required('Password is required')
  .min(8, ({min}) => `${'Password must be'} ${min} ${'character'}`),
});

export const signupInitialValue = {
  mobileNumber: '',
};

export const SignUpValidationSchema = yup.object().shape({
  mobileNumber: yup
    .string()
    .min(10, ({min}) => `${'Mobile number must be'} ${min} ${'character'}`)
    .required('Mobile Number is required')
    .matches(/^[789]\d{9}$/, 'Mobile number should be start from 7,8,9'),
});
