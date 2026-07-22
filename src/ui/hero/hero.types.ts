import type { ImageMetadata } from 'astro';

export interface HeroProps {
  title: string;
  titleAccent?: string;
  subtitle: string;
  description: string;
  sideText: string;
  image: {
    src: ImageMetadata;
    alt: string;
  };
}
