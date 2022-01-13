import styled from 'styled-components';

import { SortOrder } from '../types';

import { ColumnSortableProps, TableColumnProps } from './types';

const ColumnStyled = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
`;

const ColumnSortable = styled.div<ColumnSortableProps>`
  display: inline-flex;
  align-items: center;
  justify-content: inherit;
  height: 100%;
  width: 100%;
  outline: none;
  user-select: none;
  overflow: hidden;
`;

export function Column<T>({
  column,
  sortDirection,
  onSort,
}: TableColumnProps<T>): JSX.Element | null {
  // const sortActive =

  const handleSortChange = () => {
    const direction = sortDirection === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC;

    onSort({
      type: 'SORT_CHANGE',
      sortDirection: direction,
      selectedColumn: column,
    });
  };
  return (
    <ColumnStyled>
      {column.name && (
        <ColumnSortable
          data-column-id={column.id}
          data-sort-id={column.id}
          role="columnheader"
          onClick={handleSortChange}
          sortActive
        >
          {column.name}
        </ColumnSortable>
      )}
    </ColumnStyled>
  );
}
