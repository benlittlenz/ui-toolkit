// import { Selector } from './Column/types';
import { SortOrder } from './types';

export function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export function getNumberOfPages(rowCount: number, rowsPerPage: number): number {
  return Math.ceil(rowCount / rowsPerPage);
}

export function sort<T>(
  rows: T[],
  // selector: Selector<T> | string | null | undefined,
  direction: SortOrder
): T[] {
  return rows.slice(0).sort((a: T, b: T) => {
    if (direction === 'asc') {
      if (a < b) return -1;

      if (a > b) return 1;
    }
    if (direction === 'desc') {
      if (a > b) return -1;

      if (a < b) return 1;
    }

    return 0;
  });
}
