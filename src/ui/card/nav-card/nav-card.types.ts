import type { AbstractCardProps } from '../card.types';

export type NavCardProps = Omit<AbstractCardProps, 'description'> & {
  url: `#${string}`;
};
