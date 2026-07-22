import type { WithId } from '@shared/types/with-id';

export enum CtaVariants {
  primary = 'primary',
  primaryDarkText = 'primary_dark-text',
  secondary = 'secondary',
  secondaryDarkText = 'secondary_dark-text',
}

export interface CtaProps extends WithId {
  text: string;
  url: `#${string}`;
  kind: `${CtaVariants}`;
}
