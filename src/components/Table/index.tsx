import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';
import { useSelector } from 'react-redux';
import { IState } from '../../redux/store';

import './style.scss';

interface ICompany {
  inn?: string;
  id: string;
  name?: string;
  okved?: number;
  status?: boolean;
}

const columnHelper = createColumnHelper<ICompany>();

const columns = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: () => 'Наименование',
  }),
  columnHelper.accessor((row) => row.inn, {
    id: 'inn',
    cell: (info) => info.getValue(),
    header: () => 'ИНН',
  }),
  columnHelper.accessor('okved', {
    header: () => 'ОКВЭД',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('status', {
    header: () => 'Статус',
    cell: (info) => <p>{info.getValue() ? 'действует' : 'не действует'}</p>,
  }),
  columnHelper.display({
    id: 'delete',
    header: () => 'Удалить',
    cell: () => <button onClick={() => console.log('Удалить')}></button>,
  }),
];

const Table = () => {
  const data = useSelector((state: IState) => state.companySlice);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
