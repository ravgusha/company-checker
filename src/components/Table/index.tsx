import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';
import { useState } from 'react';
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
    cell: (info) => <p>{info.getValue() ? 'действует' : 'не действует'}</p>,
  }),
  columnHelper.display({
    id: 'Удалить',
    header: () => 'Удалить',
    cell: () => <button onClick={() => console.log('Удалить')}></button>,
    enableHiding: false,
  }),
];

const Table = () => {
  const data = useSelector((state: IState) => state.companySlice);

  const [columnVisibility, setColumnVisibility] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
  });

  return (
    <div className="table-cont">
      <fieldset>
        <p>Показать:</p>
        {table.getAllLeafColumns().map((column) => {
          return (
            column.getCanHide() && (
              <div key={column.id} className="table-checkbox">
                <label>
                  <input
                    {...{
                      type: 'checkbox',
                      checked: column.getIsVisible(),
                      onChange: column.getToggleVisibilityHandler(),
                    }}
                  />
                  {column.id}
                </label>
              </div>
            )
          );
        })}
      </fieldset>
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
    </div>
  );
};

export default Table;
