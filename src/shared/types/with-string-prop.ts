type WithStringProp<N extends string, T = string> = Record<N, T>;

export type WithId<T = string> = WithStringProp<'id', T>;

export type WithClassName<N extends string = 'className', T = string> = Partial<
  WithStringProp<N, T>
>;
