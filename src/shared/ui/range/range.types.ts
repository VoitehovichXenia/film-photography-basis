export enum RANGE_TRACK_KINDS {
  green = 'green',
  red = 'red',
}

export interface RangeProps {
  label?: string;
  readonly?: boolean;
  trackColor: `${RANGE_TRACK_KINDS}`;
  value: number;
}
