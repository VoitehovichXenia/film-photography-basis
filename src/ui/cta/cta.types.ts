import type { WithId } from '@shared/types/with-id';

export interface CtaProps extends WithId {
  text: string;
  url: `#${string}`;
  kind: 'primary' | 'secondary';
}
