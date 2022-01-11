import React, { useState } from 'react';

import { Body } from './Body';
import { Column } from './Column';
import { defaultProps } from './defaultProps';
import { Header, HeaderRow } from './Header';
import { Pagination } from './Pagination';
import { TableRow } from './Row';
import { Table } from './Table';
import { TableProps } from './types';
import { getNumberOfPages } from './utils';

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

  const [currentPage, setCurrentPage] = useState(paginationDefaultPage);
  const [rowsPerPage, setRowsPerPage] = useState(paginationPerPage);

  const sortedData = React.useMemo(() => {
    return [...data].sort();
  }, [data]);

  const tableRows = React.useMemo(() => {
    if (pagination) {
      const lastIndex = currentPage * rowsPerPage;
      const firstIndex = lastIndex - rowsPerPage;

      return sortedData.slice(firstIndex, lastIndex);
    }
    return sortedData;
  }, [sortedData, pagination, currentPage, rowsPerPage]);

  const handleChangeRowsPerPage = React.useCallback(
    (newRowsPerPage: number) => {
      console.log('newRowsPerPage', newRowsPerPage);
      const rowCount = tableRows.length;
      const updatedPage = getNumberOfPages(rowCount, newRowsPerPage);
      const recalculatedPage = Math.min(currentPage, updatedPage);

      setCurrentPage(recalculatedPage);
      setRowsPerPage(newRowsPerPage);
    },
    [currentPage, tableRows.length]
  );
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
      {data.length > 0 && pagination && (
        <Pagination
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          rowCount={sortedData.length}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </div>
  );
}
