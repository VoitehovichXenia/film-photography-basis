import type { CardGridProps } from './card-grid.types';
import { BREAKPOINTS } from '@styles/config';

const BREAKPOINTS_KEYS = Object.keys(BREAKPOINTS);

type BreakpointKey = (typeof BREAKPOINTS_KEYS)[number];

const getResponsiveValue = <T>(
  values: Partial<Record<BreakpointKey, T>>,
  breakpoint: BreakpointKey,
) => {
  const startIndex = BREAKPOINTS_KEYS.indexOf(breakpoint);

  for (let i = startIndex; i >= 0; i--) {
    const value = values[BREAKPOINTS_KEYS[i]];

    if (value !== undefined) {
      return value;
    }
  }

  return undefined;
};

export function getCardGridStyles({
  columns,
  colGap,
  rowGap,
}: Pick<CardGridProps, 'columns' | 'colGap' | 'rowGap'>): string {
  return BREAKPOINTS_KEYS.map((breakpoint) => {
    const columnsValue = getResponsiveValue(columns, breakpoint);
    const colGapValue = getResponsiveValue(colGap ?? {}, breakpoint);
    const rowGapValue = getResponsiveValue(rowGap ?? {}, breakpoint);
    return `
        ${columnsValue ? `--columns-${breakpoint}: ${columnsValue};` : ''}
        ${colGapValue ? `--colGap-${breakpoint}: ${colGapValue};` : ''}
        ${rowGapValue ? `--rowGap-${breakpoint}: ${rowGapValue};` : ''}
      `;
  }).join('');
}
