import type { ImageMetadata } from 'astro';

export interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  sideText: string;
  image: {
    src: ImageMetadata;
    alt: string;
  };
}
