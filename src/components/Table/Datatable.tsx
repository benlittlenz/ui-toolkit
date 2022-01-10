import React from 'react';

import { Body } from './Body';
import { Column } from './Column';
import { TableColumn } from './Column/types';
import { Header, HeaderRow } from './Header';
import { TableRow } from './Row';
import { Table } from './Table';

type TableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
  keyField?: string;
};

type TableRow = Record<string, unknown>;

export function DataTable<T>({ columns, data, keyField }: TableProps<T>): JSX.Element {
  const sortedData = React.useMemo(() => {
    return [...data].sort();
  }, [data]);

  const tableRows = React.useMemo(() => {
    // Todo: Calculate first and last index;
    return sortedData.slice(0, 25);
  }, [sortedData]);
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
        <Body role="row-group">
          {tableRows.map((row, i) => {
            return (
              <TableRow
                key={i}
                id={i}
                rowIndex={i}
                columns={columns}
                row={row}
                keyField={keyField}
              />
            );
          })}
        </Body>
      </Table>
    </div>
  );
}
