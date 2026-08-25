import type { WithId } from '@shared/types';
import type { ResponsiveValues } from '@styles/config';

export interface CardGridProps extends WithId {
  columns: ResponsiveValues<number>;
  colGap: ResponsiveValues<`${number}px`>;
  rowGap: ResponsiveValues<`${number}px`>;
  chooseActiveCard?: boolean;
  activeClassName?: string;
  defaultActiveCardIndex?: number;
}
