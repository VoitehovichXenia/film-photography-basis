import type { WithClassName } from '@shared/types';
import type { RangeProps } from '@ui/range';
import type { BadgeProps } from '@ui/badge';

interface LensMountRangesProps {
  glassSelection: Pick<RangeProps, 'label' | 'value'>;
  changeSpeed: Pick<RangeProps, 'label' | 'value'>;
}

interface ProAndConsProps extends WithClassName {
  type: 'pro' | 'cons';
  text: string;
}

export type ProAndConsConfig = Record<
  ProAndConsProps['type'],
  {
    kind: Omit<BadgeProps['kind'], 'default'>;
    symbol: '+' | '-';
  }
>;

export interface LensMountCardProps {
  title: string;
  subtitle: string;
  ranges: LensMountRangesProps;
  text: string;
  tags: string[];
  prosAndCons: ProAndConsProps[];
}
