import type { WithId, WithClassName } from '@shared/types';

export interface AbstractCardProps extends WithId, WithClassName {
  title: string;
  pretitle: string;
  description: string;
}

export enum CardVariants {
  StarterKit = 'starter-kit',
  Nav = 'nav',
}
