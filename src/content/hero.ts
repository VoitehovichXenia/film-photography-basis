import heroImage from '@assets/hero_image.jpeg';
import type { ImageMetadata } from 'astro';

import type { HeroProps } from '@ui/hero';
import { CtaVariants, type CtaProps } from '@ui/cta';
import { SECTIONS_IDS } from '@content/data/sections';

export const heroContent: HeroProps & { cta: CtaProps[] } = {
  subtitle: 'A guide to analog photography',
  title: 'The art of photography',
  description:
    'A comprehensive guide to film photography. Master the fundamentals of exposure, composition, and technique through the discipline of analog capture.',
  sideText: 'FILM',
  image: {
    src: heroImage as ImageMetadata,
    alt: 'Film photo authored by Ksenya Voitekhovich, 2026, Olympus OM-1, Kodak color plus 200',
  },
  cta: [
    {
      id: 'get-started',
      text: 'Start from scratch',
      href: `#${SECTIONS_IDS.GetStarted}`,
      kind: CtaVariants.primaryDarkText,
    },
    {
      id: 'calculator-cta',
      text: 'Calculate exposition',
      href: `#${SECTIONS_IDS.ExpousureCalculator}`,
      kind: CtaVariants.secondaryDarkText,
    },
  ],
};
