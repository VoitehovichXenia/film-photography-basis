import { ICON_NAMES, ICONS_SIZES, ICON_KINDS } from './icon.const';

type IconNames = keyof typeof ICON_NAMES;
type IconSizes = keyof typeof ICONS_SIZES;
type IconKinds = keyof typeof ICON_KINDS;

export type IconProps = {
  name: IconNames;
  size?: IconSizes;
  kind?: IconKinds;
  className?: string;
};
