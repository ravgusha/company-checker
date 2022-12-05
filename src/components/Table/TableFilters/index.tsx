import { Table } from '@tanstack/react-table';
import { ICompany } from '../columns';

type ITableFilters = {
  table: Table<ICompany>;
};

const TableFilters = ({ table }: ITableFilters) => {
  return (
    <fieldset id="inputPreview">
      <p>Показать:</p>
      {table.getAllLeafColumns().map((column) => {
        return (
          column.getCanHide() && (
            <div key={column.id} className="table-checkbox">
              <label>
                <input
                  className="css-checkbox"
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
  );
};

export default TableFilters;
