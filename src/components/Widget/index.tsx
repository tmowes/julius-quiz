import { db } from '~/data';
import * as S from './styles';
import { WidgetProps } from './types';

const Widget = ({ header }: WidgetProps) => {
  const { title, description } = db;

  return (
    <S.Container>
      {header && (
        <S.Header>
          <S.Title>{title}</S.Title>
        </S.Header>
      )}
      <S.Content>
        <S.Text>{description}</S.Text>
      </S.Content>
    </S.Container>
  );
};

export default Widget;
