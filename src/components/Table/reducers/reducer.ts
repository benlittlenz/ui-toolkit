import { TableState } from '../types';

import { Action } from './types';

function removeItem<T>(array: T[] = [], item: T): T[] {
  const arrCopy = [...array];

  arrCopy.splice(
    arrCopy.findIndex((a) => a === item),
    1
  );

  return arrCopy;
}

function insertItem<T>(array: T[] = [], item: T, index = 0): T[] {
  return [...array.slice(0, index), item, ...array.slice(index)];
}

export function tableReducer<T>(state: TableState<T>, action: Action<T>): TableState<T> {
  const toggleOnSelectedRowsChange = !state.toggleOnSelectedRowsChange;
  switch (action.type) {
    case 'CHANGE_PAGE': {
      const { page } = action;

      return {
        ...state,
        currentPage: page,
      };
    }
    case 'CHANGE_ROWS_PER_PAGE': {
      const { rowsPerPage, page } = action;

      return {
        ...state,
        currentPage: page,
        rowsPerPage,
      };
    }
    case 'SELECT_SINGLE_ROW': {
      const { row, isSelected, rowCount } = action;
      console.log('isSelected', isSelected);
      // If row is selected, remove item from state.
      if (isSelected) {
        return {
          ...state,
          selectedCount: state.selectedRows.length ? state.selectedRows.length - 1 : 0,
          allSelected: false,
          selectedRows: removeItem(state.selectedRows, row),
          toggleOnSelectedRowsChange,
        };
      }
      console.log('selected', rowCount, state.selectedRows.length);
      // Append item to state.
      return {
        ...state,
        selectedCount: state.selectedRows.length + 1,
        allSelected: state.selectedRows.length === rowCount,
        selectedRows: insertItem(state.selectedRows, row),
        toggleOnSelectedRowsChange,
      };
    }
    case 'SELECT_ALL_ROWS': {
      const { rows, rowCount } = action;
      const allChecked = !state.allSelected;

      return {
        ...state,
        allSelected: allChecked,
        selectedCount: allChecked ? rowCount : 0,
        selectedRows: allChecked ? rows : [],
        toggleOnSelectedRowsChange,
      };
    }
  }
}
