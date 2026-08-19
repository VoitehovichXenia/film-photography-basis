import type { SectionProps } from '@ui/section';

export enum SECTIONS_IDS {
  GetStarted = 'get-started',
  Cameras = 'cameras',
  Lenses = 'lenses',
  Films = 'films',
  Expousure = 'expousure',
  ExpousureCalculator = 'expousure-calc',
}

export type SectionBlockProps = {
  section: SectionProps;
};
