import type { WithId } from '@shared/types/with-id';

export interface AbstractCardProps extends WithId {
  title: string;
  pretitle: string;
  description: string;
  className?: string;
}

export enum CardVariants {
  StarterKit = 'starter-kit',
  Nav = 'nav',
}
