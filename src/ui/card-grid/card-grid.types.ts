import { BREAKPOINTS } from '@styles/config';

export interface CardGridProps {
  columns: Record<keyof typeof BREAKPOINTS, number>;
  colGap: `${number}px`;
  rowGap: `${number}px`;
}
