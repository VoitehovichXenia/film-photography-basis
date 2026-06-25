import { BREAKPOINTS } from '../../config/main';

export interface CardGridProps {
  columns: Record<keyof typeof BREAKPOINTS, number>;
  colGap: `${number}px`;
  rowGap: `${number}px`;
}
