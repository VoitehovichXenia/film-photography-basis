type ContentClassNames = 'card-container';

export interface SectionProps {
  id: string;
  step: number;
  stepText: string;
  title: string;
  epigraph: string;
  contentClassName?: `section__${ContentClassNames}`;
}
