import { TableState } from '../types';

import { Action } from './types';

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
      const { row, isSelected, singleSelect } = action;

      if (singleSelect) {
        if (isSelected) {
          return {
            ...state,
            selectedCount: 0,
            allSelected: false,
            selectedRows: [],
            toggleOnSelectedRowsChange,
          };
        }
        return {
          ...state,
          selectedCount: 1,
          allSelected: false,
          selectedRows: [row],
          toggleOnSelectedRowsChange,
        };
      }

      return {
        ...state,
      };
    }
  }
}
