import React from 'react';

import { Column } from './Column';
import { TableColumn } from './Column/types';
import { Header, HeaderRow } from './Header';
import { Table } from './Table';

type TableProps = {
  columns: TableColumn[];
};

export const DataTable = ({ columns }: TableProps): JSX.Element => {
  return (
    <div>
      <Table role="table">
        <Header role="row-group">
          <HeaderRow role="row">
            {columns.map((column: TableColumn, index) => (
              <Column key={index} column={column} />
            ))}
          </HeaderRow>
        </Header>
      </Table>
    </div>
  );
};
