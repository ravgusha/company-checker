import ComponentWrapper from '../../components/ComponentWrapper';
import ButtonLink from '../../components/Link';
import Table from '../../components/Table';

const HomePage = () => {
  return (
    <ComponentWrapper>
      <Table />
      <ButtonLink label="Добавить организацию" to="/add" />
    </ComponentWrapper>
  );
};

export default HomePage;
