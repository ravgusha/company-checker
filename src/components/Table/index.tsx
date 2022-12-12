import { useReactTable, getCoreRowModel, ColumnFiltersState, getFilteredRowModel, getFacetedUniqueValues } from '@tanstack/react-table';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import TableHead from './TableHead';
import TableBody from './TableBody';
import { columns } from './columns';
import { IState } from '@redux/store';

import './style.scss';

const Table = () => {
  const data = useSelector((state: IState) => state.companySlice);

  const [columnVisibility, setColumnVisibility] = useState({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    state: {
      columnFilters,
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="table-cont">
      <table>
        <TableHead table={table} />
        <TableBody table={table} />
      </table>
    </div>
  );
};

export default Table;
