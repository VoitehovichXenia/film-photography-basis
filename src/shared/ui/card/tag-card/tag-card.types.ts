import type { WithId } from '@shared/types/with-id';

export interface TagCardProps extends WithId {
  pretitle?: string;
  title?: string;
  tags: string[];
  tagsClassName?: string;
  tagsSeparator?: string;
  description?: string;
  className?: string;
}
