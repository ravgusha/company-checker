import { flexRender, Table } from '@tanstack/react-table';

import { ICompany } from '../columns';

type ITableBody = {
  table: Table<ICompany>;
};

const TableBody = ({ table }: ITableBody) => {
  console.log(table.getRowModel().rows)
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
