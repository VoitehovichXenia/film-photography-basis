import type { WithClassName } from '@shared/types';

export interface BadgeProps extends WithClassName {
  kind?: 'default' | 'success' | 'error';
}
