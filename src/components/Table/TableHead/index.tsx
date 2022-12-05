import { flexRender, Table } from '@tanstack/react-table';

import { ICompany } from '../columns';

type ITableHead = {
  table: Table<ICompany>;
};

const TableHead = ({ table }: ITableHead) => {
  return (
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
  );
};

export default TableHead;
