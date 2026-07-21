import type { WithId } from '@shared/types/with-id';

export interface RadioInputProps extends WithId {
  name: string;
  value: string;
  label: {
    text: string;
  };
}
