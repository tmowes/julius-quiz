import { NextPage } from 'next';
import * as S from '~/styles/pages/Home';
import * as C from '~/components';
import { db } from '~/data';

const Home: NextPage = () => {
  const { bg, title , description } = db;
  return (
    <S.BackgroundImage backgroundImage={bg}>
      <S.Container>
        <C.Widget header title={title} description={description}/>
        <C.Widget />
      </S.Container>
    </S.BackgroundImage>
  );
};

export default Home;
