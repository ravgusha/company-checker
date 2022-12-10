import { flexRender, Table } from '@tanstack/react-table';

import { ICompany } from '../columns';
import ColumnSearch from '../ColumnSearch';

type ITableHead = {
  table: Table<ICompany>;
};

const TableHead = ({ table }: ITableHead) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <>
              <th key={header.id}>
                {header.isPlaceholder ? null : (
                  <div>{flexRender(header.column.columnDef.header, header.getContext())}</div>
                )}
                {header.column.getCanFilter() ? (
                  <div className="search-input">
                    <ColumnSearch column={header.column} table={table} />
                  </div>
                ) : null}
              </th>
            </>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHead;
