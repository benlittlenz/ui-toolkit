import * as React from 'react';

import { defaultProps } from '../defaultProps';
import { PaginationSelect } from '../Select';
import { getNumberOfPages } from '../utils';

import { Button, Range, PageList, PaginationWrapper } from './styles';
import { PaginationProps } from './types';

export function Pagination({
  currentPage,
  rowsPerPage,
  rowCount,
  paginationIconFirstPage = defaultProps.paginationIconFirstPage,
  paginationIconLastPage = defaultProps.paginationIconLastPage,
  paginationIconNext = defaultProps.paginationIconNext,
  paginationIconPrevious = defaultProps.paginationIconPrevious,
  onChangeRowsPerPage,
}: PaginationProps): JSX.Element {
  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage + 1;
  const numberOfPages = getNumberOfPages(rowCount, rowsPerPage);
  const disabledLesser = currentPage === 1;
  const disabledGreater = currentPage === numberOfPages;
  console.log('currentPage', currentPage);
  console.log('numberOfPages', numberOfPages);
  const range =
    currentPage === numberOfPages
      ? `${currentPage} of ${numberOfPages}`
      : `${firstIndex} of ${rowCount}`;

  const handleRowChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      return onChangeRowsPerPage(Number(e.target.value), currentPage);
    },
    [currentPage, onChangeRowsPerPage]
  );

  const selectOptions = [5, 10, 25].map((num: number) => (
    <option key={num} value={num}>
      {num}
    </option>
  ));
  return (
    <PaginationWrapper>
      <PaginationSelect
        onChange={handleRowChange}
        defaultValue={rowsPerPage}
        // aria-label={options.rowsPerPageText}
      >
        {selectOptions}
      </PaginationSelect>
      <Range>{range}</Range>
      <PageList>
        <Button
          id="pagination-first-page"
          type="button"
          aria-label="First Page"
          aria-disabled={disabledLesser}
          disabled={disabledLesser}
        >
          {paginationIconFirstPage}
        </Button>
        <Button
          id="pagination-next-page"
          type="button"
          aria-label="Next Page"
          aria-disabled={disabledLesser}
          disabled={disabledLesser}
        >
          {paginationIconNext}
        </Button>
        <Button
          id="pagination-previous-page"
          type="button"
          aria-label="Previous Page"
          aria-disabled={disabledGreater}
          // onClick={handleNext}
          disabled={disabledGreater}
        >
          {paginationIconPrevious}
        </Button>

        <Button
          id="pagination-last-page"
          type="button"
          aria-label="Last Page"
          aria-disabled={disabledGreater}
          // onClick={handleNext}
          disabled={disabledGreater}
        >
          {paginationIconLastPage}
        </Button>
      </PageList>
    </PaginationWrapper>
  );
}
