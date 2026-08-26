export interface TableProps<T = unknown> {
  header: string[];
  rows: T;
}
