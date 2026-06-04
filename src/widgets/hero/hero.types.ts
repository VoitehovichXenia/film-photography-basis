import type { CtaProps } from '../../ui/cta/cta.types';
import type { ImageMetadata } from 'astro';

export interface HeroProps {
  title: string;
  description: string;
  sideText: string;
  image: {
    src: ImageMetadata;
    alt: string;
  };
  cta: CtaProps;
}
