import type { CtaProps } from '@ui/cta/cta.types';
import { SECTIONS_IDS } from './data/sections';

type HeaderContentProps = {
  logo: string;
  navLinks: {
    href: `#${SECTIONS_IDS}`;
    label: string;
  }[];
  cta: CtaProps;
};

export const headerContent: HeaderContentProps = {
  logo: 'Shoot.Film',
  navLinks: [
    { href: `#${SECTIONS_IDS.GetStarted}`, label: 'Start' },
    { href: `#${SECTIONS_IDS.Cameras}`, label: 'Cameras' },
    { href: `#${SECTIONS_IDS.Films}`, label: 'Films' },
    { href: `#${SECTIONS_IDS.Lenses}`, label: 'Lenses' },
    { href: `#${SECTIONS_IDS.Expousure}`, label: 'Exposure' },
  ],
  cta: {
    id: 'try-calculator',
    text: 'Try Calculator',
    url: `#${SECTIONS_IDS.ExpousureCalculator}`,
    kind: 'primary',
  },
};
