import { createColumnHelper } from '@tanstack/react-table';
import { useDispatch } from 'react-redux';
import { deleteCompany } from '../../redux/companySlice';
import DeleteButton from './DeleteButton';

export interface ICompany {
  inn?: string;
  id: string;
  name?: string;
  okved?: number;
  status?: boolean;
}

const columnHelper = createColumnHelper<ICompany>();

export const columns = [
  columnHelper.accessor('name', {
    id: 'Наименование',
    cell: (info) => info.getValue(),
    header: () => 'Наименование',
    enableHiding: false,
  }),
  columnHelper.accessor('inn', {
    id: 'ИНН',
    cell: (info) => info.getValue(),
    header: () => 'ИНН',
  }),
  columnHelper.accessor('okved', {
    id: 'ОКВЭД',
    header: () => 'ОКВЭД',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('status', {
    id: 'Статус',
    header: () => 'Статус',
    cell: (info) => <p>{info.getValue() ? 'действует' : 'не действует'} </p>,
  }),
  columnHelper.display({
    id: 'Удалить',
    header: () => 'Удалить',
    cell: info => <DeleteButton row={info.row.original} />,
    // cell: (info) => (
    //   <button
    //     onClick={() => {
    //       const dispatch = useDispatch();
    //       console.log(info.row.original.id)
    //       dispatch(deleteCompany(info.row.original.id));
    //     }}
    //   ></button>
    // ),
    enableHiding: false,
  }),
];

console.log(typeof columns);
