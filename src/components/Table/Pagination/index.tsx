import * as React from 'react';

import { defaultProps } from '../defaultProps';

import { Button, PageList, PaginationWrapper } from './styles';
import { PaginationProps } from './types';

export function Pagination({
  paginationIconFirstPage = defaultProps.paginationIconFirstPage,
  paginationIconLastPage = defaultProps.paginationIconLastPage,
  paginationIconNext = defaultProps.paginationIconNext,
  paginationIconPrevious = defaultProps.paginationIconPrevious,
}: PaginationProps): JSX.Element {
  return (
    <PaginationWrapper>
      <PageList>
        <Button id="pagination-first-page" type="button" aria-label="First Page">
          {paginationIconFirstPage}
        </Button>
        <Button id="pagination-next-page" type="button" aria-label="Next Page">
          {paginationIconNext}
        </Button>
        <Button id="pagination-previous-page" type="button" aria-label="Previous Page">
          {paginationIconPrevious}
        </Button>

        <Button id="pagination-last-page" type="button" aria-label="Last Page">
          {paginationIconLastPage}
        </Button>
      </PageList>
    </PaginationWrapper>
  );
}
