import placeholder from '../assets/placeholder.png';
import type { ImageMetadata } from 'astro';

import type { HeroProps } from '../ui/hero/hero.types';
import type { CtaProps } from '../ui/cta/cta.types';
import { SECTIONS_IDS } from '../content/data/sections';

export const heroContent: HeroProps & { cta: CtaProps[] } = {
  subtitle: 'A guide to analog photography',
  title: 'The art of film photography',
  description:
    'A comprehensive guide to film photography. Master the fundamentals of exposure, composition, and technique through the discipline of analog capture.',
  sideText: 'FILM',
  image: {
    src: placeholder as ImageMetadata,
    alt: 'Film photo example authored by Ksenya Voitekhovich in 2026',
  },
  cta: [
    {
      id: 'get-started',
      text: 'Start from scratch',
      url: `#${SECTIONS_IDS.GetStarted}`,
      kind: 'primary',
    },
    {
      id: 'calculator-cta',
      text: 'Calculate exposition',
      url: '#calculator',
      kind: 'secondary',
    },
  ],
};
