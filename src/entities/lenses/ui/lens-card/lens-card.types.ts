import type { AbstractCardProps } from '@ui/card/card.types';
import type { FilmingObjects } from '@entities/objects/objects.types';
import type { NumericRange } from '../../../../shared/types/numeric-range';

export type LensCardProps = AbstractCardProps & {
  tags: FilmingObjects[];
  isHighlighted: boolean;
  angleScale: NumericRange<1, 100>;
};
