import { RANGE_TRACK_KINDS, type RangeProps } from '@ui/range';
import type { ProAndConsConfig } from './lens-mount-card.types';

export const getRangeTrackColor = (value: number): RangeProps['trackColor'] =>
  value > 50 ? RANGE_TRACK_KINDS.green : RANGE_TRACK_KINDS.red;

export const MOUNT_VARIANTS_CONFIG: ProAndConsConfig = {
  pro: {
    kind: 'success',
    symbol: '+',
  },
  cons: {
    kind: 'error',
    symbol: '-',
  },
};
