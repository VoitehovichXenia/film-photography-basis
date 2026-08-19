import type { SECTIONS_IDS } from '@content/data/sections';
import type { WithId } from '@shared/types/with-id';

type ContentClassNames = 'card-container';

export interface SectionProps extends WithId<SECTIONS_IDS> {
  step: number;
  stepText: string;
  title: string;
  titleAccent?: string;
  epigraph: string;
  contentClassName?: `section__${ContentClassNames}`;
}
