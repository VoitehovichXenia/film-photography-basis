import type { NavCardProps } from '../ui/card/nav-card/nav-card.types';
import type { StarterKitCardProps } from '../ui/card/starter-kit-card/starter-kit-card.types';
import type { SectionProps } from '../ui/section/section.types';
import { SECTIONS_IDS } from './data/sections';

type GetStartedSectionProps = SectionProps & {
  starterKit: StarterKitCardProps[];
  navCards: NavCardProps[];
};

export const getStartedSectionContent: GetStartedSectionProps = {
  id: SECTIONS_IDS.GetStarted,
  step: 1,
  stepText: 'Start',
  title: 'All you need for your first shot',
  epigraph:
    "Film photography is intimidating because it's seems so difficult, but you only need a little to get started.",
  starterKit: [
    {
      id: 'starter-kit-camera',
      step: 1,
      pretitle: 'Camera',
      title: 'Film camera',
      description:
        'Start with a 35mm SLR—reliable, affordable, and with a huge selection of lenses. Pentax K1000, Canon AE-1, Nikon FM2, Olympus OM-1 ',
    },
    {
      id: 'starter-kit-lens',
      step: 2,
      pretitle: 'Lens',
      title: 'Standart lens kit: 50mm f 1/1.8 or f 1/2',
      description:
        'A versatile focal length close to human vision. One of the most affordable lenses on the market. Suitable for most subjects (portrait, landscape).',
    },
    {
      id: 'starter-kit-film',
      step: 3,
      pretitle: 'Film',
      title: 'ISO 200 - 400',
      description:
        'Forgiving of exposure errors and suitable for most conditions, Kodak Gold 200 or Kodak UltraMax 400 are excellent choices.',
    },
  ],
  navCards: [
    {
      id: 'nav-card-camera',
      pretitle: 'Camera',
      title: 'How to choose camera?',
      url: `#${SECTIONS_IDS.Cameras}`,
    },
    {
      id: 'nav-card-lenses',
      pretitle: 'Lenses',
      title: "Let's talk about lenses",
      url: `#${SECTIONS_IDS.Lenses}`,
    },
    {
      id: 'nav-card-film',
      pretitle: 'Film',
      title: 'How choose the right film?',
      url: `#${SECTIONS_IDS.Films}`,
    },
    {
      id: 'nav-card-exposure',
      pretitle: 'Exposure',
      title: 'Exposure rules',
      url: `#${SECTIONS_IDS.Expousure}`,
    },
    {
      id: 'nav-card-exposure-calc',
      pretitle: 'Exposure',
      title: 'Calculate exposure',
      url: `#${SECTIONS_IDS.ExpousureCalculator}`,
    },
  ],
};
