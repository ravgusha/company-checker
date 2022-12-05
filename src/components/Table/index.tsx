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

  return (
    <div className="table-cont">
      <TableFilters table={table} />
      {/* <div id="inputPreview">
        <input name="cssCheckbox" id="demo_opt_1" type="checkbox" className="css-checkbox" />
        <label htmlFor="demo_opt_1">Option 1</label>
        <input name="cssCheckbox" id="demo_opt_2" type="checkbox" className="css-checkbox" />
        <label htmlFor="demo_opt_2">Option 2</label>
        <input name="cssCheckbox" id="demo_opt_3" type="checkbox" className="css-checkbox" />
        <label htmlFor="demo_opt_3">Option 3</label>
      </div> */}
      <table>
        <TableHead table={table} />
        <TableBody table={table} />
      </table>
    </div>
  );
};

export default Table;
