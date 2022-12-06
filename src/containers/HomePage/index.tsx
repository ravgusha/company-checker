import { useSelector } from 'react-redux';

import ComponentWrapper from '../../components/ComponentWrapper';
import ButtonLink from '../../components/Link';
import Table from '../../components/Table';
import TableStub from '../../components/Table/TableStub';
import { IState } from '../../redux/store';

const HomePage = () => {
  const companies = useSelector((state: IState) => state.companySlice);

  return companies.length > 0 ? (
    <ComponentWrapper>
      <Table />
      <ButtonLink label="Добавить организацию" to="/add" />
    </ComponentWrapper>
  ) : (
    <ComponentWrapper>
      <TableStub />
      <ButtonLink label="Добавить организацию" to="/add" />
    </ComponentWrapper>
  );
};

export default HomePage;
