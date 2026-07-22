import heroImage from '@assets/hero_image.JPG';
import type { ImageMetadata } from 'astro';

import type { HeroProps } from '@ui/hero/hero.types';
import { CtaVariants, type CtaProps } from '@ui/cta/cta.types';
import { SECTIONS_IDS } from '@content/data/sections';

export const heroContent: HeroProps & { cta: CtaProps[] } = {
  subtitle: 'A guide to analog photography',
  title: 'The art of photography',
  description:
    'A comprehensive guide to film photography. Master the fundamentals of exposure, composition, and technique through the discipline of analog capture.',
  sideText: 'FILM',
  image: {
    src: heroImage as ImageMetadata,
    alt: 'Film photo example authored by Ksenya Voitekhovich in 2026',
  },
  cta: [
    {
      id: 'get-started',
      text: 'Start from scratch',
      url: `#${SECTIONS_IDS.GetStarted}`,
      kind: CtaVariants.primaryDarkText,
    },
    {
      id: 'calculator-cta',
      text: 'Calculate exposition',
      url: `#${SECTIONS_IDS.ExpousureCalculator}`,
      kind: CtaVariants.secondaryDarkText,
    },
  ],
};
