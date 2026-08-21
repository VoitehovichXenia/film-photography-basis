import type { WithId } from '@shared/types/with-id';

export interface OptionProps<T> extends WithId {
  value: T;
  selected: boolean;
  text: T;
}

export interface SelectProps<T = string> extends WithId {
  name: string;
  options: OptionProps<T>[];
  hidden?: boolean;
  label?: {
    text: string;
    class?: string;
    hidden?: boolean;
  };
  labelPosition?: 'before';
}
