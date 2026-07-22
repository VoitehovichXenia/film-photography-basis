import type { RadioInputProps } from '@ui/radio-input/radio-input.types';
import type { SelectProps } from '@ui/select/select.types';

interface PriorityFieldset {
  label: string;
  radios: RadioInputProps[];
}

interface Result {
  title: string;
  result: string;
  dataFor: string;
  hidden?: boolean;
}

interface ResultsBlock {
  title: string;
  blocks: Result[];
  footnote: string;
}

export interface ExposureCalculatorProps {
  isoSelect: SelectProps;
  evSelect: SelectProps;
  apertureSelect: SelectProps;
  shutterSelect: SelectProps;
  priority: PriorityFieldset;
  resultBlock: ResultsBlock;
}
