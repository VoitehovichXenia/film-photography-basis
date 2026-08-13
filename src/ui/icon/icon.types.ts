export const ICONS_SIZES = {
  sm: 16,
  md: 24,
  lg: 32,
} as const;

export const ICON_KINDS = {
  primary: 'primary',
  default: 'default',
} as const;

type IconNames = 'menu';
type IconSizes = keyof typeof ICONS_SIZES;
type IconKinds = keyof typeof ICON_KINDS;

export type IconProps = {
  name: IconNames;
  size: IconSizes;
  kind?: IconKinds;
  className?: string;
};
