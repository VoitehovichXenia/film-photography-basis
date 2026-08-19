export const BREAKPOINTS = {
  base: 0,
  sm: 360,
  md: 768,
  lg: 996,
  xl: 1200,
  xxl: 1400,
} as const;

export type ResponsiveValues<T> = Partial<Record<keyof typeof BREAKPOINTS, T>> &
  Required<Pick<Record<keyof typeof BREAKPOINTS, T>, 'base'>>;
