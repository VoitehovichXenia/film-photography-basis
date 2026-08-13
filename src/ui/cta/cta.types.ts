import type { WithId } from '@shared/types/with-id';
import { ICON_KINDS, type IconProps } from '@ui/icon';

export enum CtaVariants {
  primary = 'primary',
  primaryDarkText = 'primary_dark-text',
  secondary = 'secondary',
  secondaryDarkText = 'secondary_dark-text',
  iconPrimary = 'icon-primary',
}

type CtaIconKinds = Partial<Record<CtaVariants, IconProps['kind']>> & {
  default: IconProps['kind'];
};

export const CtaIconKinds: CtaIconKinds = {
  [CtaVariants.iconPrimary]: ICON_KINDS.primary,
  default: ICON_KINDS.default,
} as const;

export interface CtaProps extends WithId {
  text: string;
  url: `#${string}`;
  kind: `${CtaVariants}`;
  icon?: IconProps;
  className?: string;
}
