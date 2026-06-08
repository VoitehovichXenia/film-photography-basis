import type { CardProps } from '../ui/card/card.types';
import type { SectionProps } from '../widgets/section/section.types';

type ContentSectionProps<T> = SectionProps & {
  content: T;
};

type GetStartedSectionProps = ContentSectionProps<CardProps[]>;

export const getStartedSectionContent: GetStartedSectionProps = {
  id: 'get-started',
  step: 1,
  stepText: 'Start',
  title: 'All you need for your first shot',
  description:
    "Film photography is intimidating because it's seems so difficult, but you only need a little to get started.",
  content: [
    {
      title: 'Film camera',
      subtitle: 'Camera',
      description:
        'Start with a 35mm SLR—reliable, affordable, and with a huge selection of lenses. Pentax K1000, Canon AE-1, Nikon FM2, Olympus OM-1 ',
    },
    {
      title: 'Lens',
      subtitle: 'Standart lens kit: 50mm f 1/1.8 or f 1/2',
      description:
        'A versatile focal length close to human vision. One of the most affordable lenses on the market. Suitable for most subjects (portrait, landscape).',
    },
    {
      title: 'Film',
      subtitle: 'ISO 200 - 400',
      description:
        'Forgiving of exposure errors and suitable for most conditions, Kodak Gold 200 or Kodak UltraMax 400 are excellent choices.',
    },
  ],
};
