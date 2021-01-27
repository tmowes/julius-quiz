import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
  name: Yup.string().required('Preencha seu nome'),
});
