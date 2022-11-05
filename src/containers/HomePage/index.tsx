import Header from '../../components/Header';
import ButtonLink from '../../components/Link';
import Table from '../../components/Table';

import './style.scss';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Table />
        <ButtonLink label="Добавить организацию" to="/add" />
      </main>
    </>
  );
};

export default HomePage;
