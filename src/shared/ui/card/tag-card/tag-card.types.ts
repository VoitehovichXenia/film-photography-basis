import type { WithClassName, WithId } from '@shared/types';

export interface TagCardProps extends WithId, WithClassName {
  pretitle?: string;
  title?: string;
  tags: string[];
  tagsClassName?: string;
  tagsSeparator?: string;
  description?: string;
}
