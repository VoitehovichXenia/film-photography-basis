type ContentClassNames = 'card-container';

export interface SectionProps {
  id: string;
  step: number;
  stepText: string;
  title: string;
  description: string;
  contentClassName?: `section__${ContentClassNames}`;
}
