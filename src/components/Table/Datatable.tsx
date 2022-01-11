import React from 'react';

import { Body } from './Body';
import { Column } from './Column';
import { defaultProps } from './defaultProps';
import { Header, HeaderRow } from './Header';
import { Pagination } from './Pagination';
import { TableRow } from './Row';
import { Table } from './Table';
import { TableProps } from './types';

export function DataTable<T>(props: TableProps<T>): JSX.Element {
  const {
    data = defaultProps.data,
    columns = defaultProps.columns,
    keyField = defaultProps.keyField,
    pagination = defaultProps.pagination,
    // paginationTotalRows = defaultProps.paginationTotalRows,
    paginationDefaultPage = defaultProps.paginationDefaultPage,
    // paginationResetDefaultPage = defaultProps.paginationResetDefaultPage,
    paginationPerPage = defaultProps.paginationPerPage,
    // paginationRowsPerPageOptions = defaultProps.paginationRowsPerPageOptions,
    // paginationIconLastPage = defaultProps.paginationIconLastPage,
    // paginationIconFirstPage = defaultProps.paginationIconFirstPage,
    // paginationIconNext = defaultProps.paginationIconNext,
    // paginationIconPrevious = defaultProps.paginationIconPrevious,
    // paginationComponent = defaultProps.paginationComponent,
    // paginationComponentOptions = defaultProps.paginationComponentOptions,
  } = props;
  const sortedData = React.useMemo(() => {
    return [...data].sort();
  }, [data]);

  const tableRows = React.useMemo(() => {
    if (pagination) {
      const lastIndex = paginationDefaultPage * paginationPerPage;
      const firstIndex = lastIndex - paginationPerPage;

      return sortedData.slice(firstIndex, lastIndex);
    }
    return sortedData;
  }, [sortedData, pagination, paginationDefaultPage, paginationPerPage]);
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
      {data.length > 0 && pagination && <Pagination />}
    </div>
  );
}
