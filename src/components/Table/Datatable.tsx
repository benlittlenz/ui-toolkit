import React from 'react';

import { Body } from './Body';
import { ColumnCheckbox } from './Checkbox/ColumnCheckbox';
import { Column } from './Column';
import { defaultProps } from './defaultProps';
import { Header, HeaderRow } from './Header';
import { Pagination } from './Pagination';
import { tableReducer } from './reducers/reducer';
import { Action, AllRowsAction, SingleRowAction, SortAction } from './reducers/types';
import { TableRow } from './Row';
import { Table } from './Table';
import { SortOrder, TableProps, TableState } from './types';
import { getNumberOfPages, sort } from './utils';

export function DataTable<T>(props: TableProps<T>): JSX.Element {
  const {
    data = defaultProps.data,
    columns = defaultProps.columns,
    keyField = defaultProps.keyField,
    selectableRows = defaultProps.selectableRows,
    selectableRowsSingle = defaultProps.selectableRowsSingle,
    onSelectedRowsChange = defaultProps.onSelectedRowsChange,
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

  const [
    {
      selectedRows,
      selectedCount,
      allSelected,
      toggleOnSelectedRowsChange,
      currentPage,
      rowsPerPage,
      selectedColumn,
      sortDirection,
    },
    dispatch,
  ] = React.useReducer<React.Reducer<TableState<T>, Action<T>>>(tableReducer, {
    // Checkbox
    allSelected: false,
    selectedCount: 0,
    selectedRows: [],
    toggleOnSelectedRowsChange: false,
    // Pagination
    currentPage: paginationDefaultPage,
    rowsPerPage: paginationPerPage,
    // Sorting
    selectedColumn: columns[0] || {},
    sortDirection: SortOrder.ASC,
  });

  React.useEffect(() => {
    onSelectedRowsChange({ allSelected, selectedCount, selectedRows });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleOnSelectedRowsChange]);

  const sortedData = React.useMemo(() => {
    // return [...data].sort();
    console.log('COLUMN >>> ', selectedColumn);
    return sort(data, sortDirection);
  }, [sortDirection, selectedColumn, data]);

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
      const rowCount = tableRows.length;
      const updatedPage = getNumberOfPages(rowCount, newRowsPerPage);
      const recalculatedPage = Math.min(currentPage, updatedPage);

      dispatch({
        type: 'CHANGE_ROWS_PER_PAGE',
        page: recalculatedPage,
        rowsPerPage: newRowsPerPage,
      });
    },
    [currentPage, tableRows.length]
  );

  const handlePageChange = React.useCallback((page: number) => {
    dispatch({
      type: 'CHANGE_PAGE',
      page,
    });
  }, []);

  const handleSelectedRow = React.useCallback((action: SingleRowAction<T>) => {
    console.log('single row select');
    dispatch(action);
  }, []);

  const handleSelectAllRow = React.useCallback((action: AllRowsAction<T>) => {
    dispatch(action);
  }, []);

  const handleSort = React.useCallback((action: SortAction<T>) => {
    dispatch(action);
  }, []);

  return (
    <div>
      <Table role="table">
        <Header role="row-group">
          <HeaderRow role="row">
            {selectableRows && (
              <ColumnCheckbox
                allSelected={allSelected}
                selectedRows={selectedRows}
                onSelectAllRows={handleSelectAllRow}
                rows={tableRows}
              />
            )}

            {columns.map((column) => (
              <Column
                key={column.id}
                column={column}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
            ))}
          </HeaderRow>
        </Header>
        <Body role="row-group">
          {tableRows.map((row, i) => {
            const isRowSelected = selectedRows.some((r) => r === row);

            return (
              <TableRow
                key={i}
                id={i}
                rowIndex={i}
                columns={columns}
                row={row}
                keyField={keyField}
                selected={isRowSelected}
                selectableRows={selectableRows}
                selectableRowsSingle={selectableRowsSingle}
                onSelectedRow={handleSelectedRow}
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
          onPageChange={handlePageChange}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </div>
  );
}
