import placeholder from '../assets/placeholder.png';
import type { ImageMetadata } from 'astro';
import type { HeroProps } from '../widgets/hero/hero.types';

export const heroContent: HeroProps = {
  title: 'The art of film photography',
  description:
    'A comprehensive guide to film photography. Master the fundamentals of exposure, composition, and technique through the discipline of analog capture.',
  sideText: 'FILM',
  image: {
    src: placeholder as ImageMetadata,
    alt: 'Film photo example authored by Ksenya Voitekhovich in 2026',
  },
  cta: {
    text: 'Explore',
    url: '#get-started',
    kind: 'primary',
  },
};
