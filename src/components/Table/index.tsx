import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';
import React, { useState } from 'react';
import './style.scss';

interface ICompany {
  name: string;
  inn: number;
  okved: number;
  status: boolean;
}

const defaultData = [
  {
    name: 'ООО "Ромашка"',
    inn: 1234567890,
    okved: 72.2,
    status: true,
  },
];

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
    cell: () => <button onClick={() => console.log("Удалить")}></button>,
  }),
];

const Table = () => {
  const [data, setData] = useState(() => [...defaultData]);
  // const rerender = React.useReducer(() => ({}), {})[1];

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
