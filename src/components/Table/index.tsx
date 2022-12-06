import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import TableFilters from './TableFilters';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { columns } from './columns';
import { IState } from '../../redux/store';

import './style.scss';

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
      <TableFilters table={table} />
      <table>
        <TableHead table={table} />
        <TableBody table={table} />
      </table>
    </div>
  );
};

export default Table;
