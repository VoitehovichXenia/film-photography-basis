import type { SectionProps } from '@ui/section/section.types';
import { SECTIONS_IDS } from './data/sections';
import type { LensCardProps } from '@entities/lenses/ui/lens-card/lens-card.types';
import { FilmingObjects } from '@entities/objects/objects.types';

type LensesSectionProps = SectionProps & {
  cards: LensCardProps[];
};

export const lensesSectionContent: LensesSectionProps = {
  id: SECTIONS_IDS.Lenses,
  step: 3,
  stepText: 'Lenses',
  title: 'Lens: the "Eye" of Your Camera',
  epigraph:
    'The lens determines not only what ends up in the frame but also how — the angle, perspective, and depth of field.',
  cards: [
    {
      id: 'wide-angle',
      pretitle: '< 50mm',
      title: 'Wide angle',
      description:
        'Wide angle of view, a sense of depth and volume. Slight distortion at the edges.',
      tags: [FilmingObjects.architecture, FilmingObjects.landscape, FilmingObjects.interior],
      isHighlighted: false,
      angleScale: 96,
    },
    {
      id: 'standard',
      pretitle: '50mm',
      title: 'Standard ★ Recommended',
      description:
        'Close to natural vision. Distortion - free and versatile. An ideal starting point.',
      tags: [FilmingObjects.casual, FilmingObjects.street, FilmingObjects.travel],
      isHighlighted: true,
      angleScale: 60,
    },
    {
      id: 'portrait',
      pretitle: '50mm - 135mm',
      title: 'Portrait',
      description:
        'It compresses perspective, and the face looks natural. Beautiful background blur.',
      tags: [FilmingObjects.portrait, FilmingObjects.products],
      isHighlighted: true,
      angleScale: 40,
    },
    {
      id: 'telephoto',
      pretitle: '135mm - 200mm',
      title: 'Telephoto',
      description:
        'Strong magnification, compression of perspective. Distant objects appear close to the foreground.',
      tags: [FilmingObjects.wildlife, FilmingObjects.sports],
      isHighlighted: false,
      angleScale: 20,
    },
  ],
};
