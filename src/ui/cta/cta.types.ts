import type { WithId } from '@shared/types/with-id';
import { ICON_KINDS, type IconProps } from '@ui/icon';

import { CtaVariants } from './cta.const';

type CtaIconKinds = Partial<Record<CtaVariants, IconProps['kind']>> & {
  default: IconProps['kind'];
};

export const CtaIconKinds: CtaIconKinds = {
  [CtaVariants.iconPrimary]: ICON_KINDS.primary,
  default: ICON_KINDS.default,
} as const;

export interface CtaButtonProps extends WithId {
  text?: string;
  kind: `${CtaVariants}`;
  icon?: IconProps;
  className?: string;
}

export interface CtaIconButtonProps extends Omit<CtaButtonProps, 'text'> {
  kind: CtaVariants.iconPrimary;
  icon: IconProps;
}

export interface CtaLinkProps extends CtaButtonProps {
  href: string;
  target?: HTMLAnchorElement['target'];
  rel?: HTMLAnchorElement['rel'];
}

export type CtaProps = CtaButtonProps | CtaIconButtonProps | CtaLinkProps;
