export function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export function getNumberOfPages(rowCount: number, rowsPerPage: number): number {
  return Math.ceil(rowCount / rowsPerPage);
}
