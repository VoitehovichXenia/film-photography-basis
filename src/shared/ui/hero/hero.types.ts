import type { LocalImageProps } from 'astro:assets';

export interface HeroProps {
  title: string;
  titleAccent?: string;
  subtitle: string;
  description: string;
  image: LocalImageProps;
}
