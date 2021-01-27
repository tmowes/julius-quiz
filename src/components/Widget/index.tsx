import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { FiUser } from 'react-icons/fi';
import * as C from '~/components';
import { db } from '~/data';
import { signupSchema } from './schema';
import * as S from './styles';
import { SignUpFormData, WidgetProps } from './types';

const Widget = ({ header }: WidgetProps) => {
  const { title, description } = db;
  const { push } = useRouter();
  const formMethods = useForm<SignUpFormData>({
    resolver: yupResolver(signupSchema),
  });
  const { handleSubmit } = formMethods;

  const handleFormData = async (data: SignUpFormData) => {
    // await api.post('/users', data)
    push('/quiz');
  };

  return (
    <S.Container>
      {header && (
        <S.Header>
          <S.Title>{title}</S.Title>
        </S.Header>
      )}
      <FormProvider {...formMethods}>
        <S.Form onSubmit={handleSubmit(handleFormData)}>
          <C.Input name='name' icon={FiUser} placeholder='Nome' />
          <C.Button type='submit'>Jogar</C.Button>
        </S.Form>
      </FormProvider>
      <S.Content>
        <S.Text>{description}</S.Text>
      </S.Content>
    </S.Container>
  );
};

export default Widget;
