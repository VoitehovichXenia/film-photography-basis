import type { WithId } from '@shared/types';

export interface RadioInputProps extends WithId {
  name: string;
  value: string;
  label: {
    text: string;
  };
}
