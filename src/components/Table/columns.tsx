import { createColumnHelper } from '@tanstack/react-table';

import DeleteButton from './DeleteButton';

export interface ICompany {
  inn?: string;
  id: string;
  name?: string;
  okved?: number;
  status?: string;
  liquidationDate?: string;
}

const columnHelper = createColumnHelper<ICompany>();

export const columns = [
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
    cell: (info) => <p>{info.getValue()} </p>,
  }),
  columnHelper.accessor('liquidationDate', {
    id: 'liquidationDate',
    header: () => 'Дата ликвидации',
    cell: (info) => <p>{info.getValue()} </p>,
  }),
  columnHelper.display({
    id: 'Удалить',
    header: () => 'Удалить',
    cell: (info) => <DeleteButton id={info.row.original.id} />,
    enableHiding: false,
  }),
];
