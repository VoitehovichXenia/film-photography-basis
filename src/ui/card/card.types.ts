export interface AbstractCardProps {
  id: string;
  title: string;
  pretitle: string;
  description: string;
}

export enum CardVariants {
  StarterKit = 'starter-kit',
  Nav = 'nav',
}
