export type NumericRange<
  Start extends number,
  End extends number,
  Arr extends unknown[] = [],
  Acc extends number = never,
> = Arr['length'] extends End
  ? Acc | End
  : NumericRange<
      Start,
      End,
      [...Arr, unknown],
      Arr['length'] extends Start ? Arr['length'] : Acc extends never ? never : Acc | Arr['length']
    >;
