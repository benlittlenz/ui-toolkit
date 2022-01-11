export function getNumberOfPages(rowCount: number, rowsPerPage: number): number {
  return Math.ceil(rowCount / rowsPerPage);
}
