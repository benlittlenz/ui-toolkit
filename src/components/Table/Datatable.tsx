import React from 'react';

import { Column } from './Column';
import { TableColumn } from './Column/types';
import { Header, HeaderRow } from './Header';
import { Table } from './Table';

type TableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
};

export function DataTable<T>({ columns }: TableProps<T>): JSX.Element {
  return (
    <div>
      <Table role="table">
        <Header role="row-group">
          <HeaderRow role="row">
            {columns.map((column) => (
              <Column key={column.id} column={column} />
            ))}
          </HeaderRow>
        </Header>
      </Table>
    </div>
  );
}
