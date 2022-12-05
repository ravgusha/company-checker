import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../redux/store';

import { columns } from './columns';
import TableFilters from './TableFilters';
import TableHead from './TableHead';

import './style.scss';
import TableBody from './TableBody';

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

  console.log(typeof table);

  return (
    <div className="table-cont">
      <TableFilters table={table} />
      <table>
        <TableHead table={table} />
        <TableBody table={table} />
      </table>
    </div>
  );
};

export default Table;
