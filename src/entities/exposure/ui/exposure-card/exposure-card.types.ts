import type { NumericRange } from '@shared/types/numeric-range';
import type { AbstractCardProps } from '@ui/card/card.types';

export type ExposureCardProps = Omit<AbstractCardProps, 'pretitle'> & {
  step: NumericRange<1, 4>;
  theme: 'dark' | 'light';
};
