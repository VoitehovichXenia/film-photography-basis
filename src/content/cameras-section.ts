import { SECTIONS_IDS, type SectionBlockProps } from './data/sections';
import type { LensMountCardProps, FilmFormatCardProps } from '@entities/cameras';

type CamerasSectionProps = SectionBlockProps & {
  filmFormatCards: FilmFormatCardProps[];
  lensMount: {
    title: string;
    descriptionText: string;
    descriptionAccentText: string;
    cards: LensMountCardProps[];
  };
};

export const camerasSectionContent: CamerasSectionProps = {
  section: {
    id: SECTIONS_IDS.Cameras,
    step: 2,
    stepText: 'cameras',
    title: 'How to choose a camera',
    titleAccent: 'camera',
    epigraph:
      'Film format and lens mount type are two decisions that will determine your entire path forward.',
  },
  filmFormatCards: [
    {
      id: '35mm-format',
      pretitle: '35mm format',
      title: 'Standard format',
      description:
        'The most popular format. A standard roll yielding 24 or 36 exposures, with a frame size of 24×36 mm. There is a huge selection of cameras and lenses available - ranging from inexpensive point-and-shoots to professional SLRs. It is ideal for getting started: compact, affordable, and easy to find both film and processing labs.',
      tags: ['Canon AE-1', 'Nikon FM2', 'Pentax K1000', 'Olympus OM-1', 'Minolta X-700'],
      sampleShotWidth: 35,
      sampleShotHeight: 24,
      sampleShotText: '35 mm sample shot',
    },
    {
      id: '120mm-format',
      pretitle: '120mm medium format',
      title: 'Medium format',
      description:
        '120mm film produces a frame ranging from 6×4.5 to 6×9 cm — 3 to 5 times larger than 35mm. The result is exceptional detail, soft grain, and unique image depth. The cameras are bulkier and more expensive, and the lens selection is more limited. It is the choice for those who have already shot on 35mm and want something more.',
      tags: ['Hasselblad 500C', 'Mamiya RB67', 'Bronica SQ-A', 'Pentax 645', 'Rolleiflex'],
      sampleShotWidth: 120,
      sampleShotHeight: 120,
      sampleShotText: 'Medium format sample shot',
    },
  ],
  lensMount: {
    title: 'Lens mount',
    descriptionText:
      'The type of mount determines the range of lenses available to you. The more unique the mount, the more limited the selection and the higher the prices. Universal screw-mount standards offer the widest choice but are less convenient than bayonet systems.',
    descriptionAccentText: 'the range of lenses available to you',
    cards: [
      {
        title: 'M42',
        subtitle: '42 mm thread',
        text: 'A unified Soviet and German standard from the 1950s and 1960s. A vast array of lenses from around the world—Soviet Helios and Jupiter models, Zeiss, Pentax, Fujinon. Changing a lens requires several full turns of the screw mount.',
        tags: ['Pentax Spotmatic', 'Zenit', 'Praktica'],
        ranges: {
          glassSelection: { label: 'Lenses variety', value: 95 },
          changeSpeed: { label: 'Change speed', value: 10 },
        },
        prosAndCons: [
          {
            type: 'pro',
            text: 'Hundreds of available lenses',
          },
          {
            type: 'pro',
            text: 'Cheep vintage lenses',
          },
          {
            type: 'cons',
            text: 'Slow lens change',
          },
          {
            type: 'cons',
            text: 'No autofocus',
          },
        ],
      },
      {
        title: 'Nikon F',
        subtitle: 'Bayonet',
        text: 'One of the oldest bayonet mount standards, in production since 1959. With a wide selection of lenses available for both film and modern digital cameras, it represents a sound investment, as the glass can be used on digital bodies as well.',
        tags: ['Nikon FM2', 'FE2', 'F3', 'FA'],
        ranges: {
          glassSelection: { label: 'Lenses variety', value: 85 },
          changeSpeed: { label: 'Change speed', value: 90 },
        },
        prosAndCons: [
          {
            type: 'pro',
            text: 'Quick change — twist and click',
          },
          {
            type: 'pro',
            text: 'Compatibility with Nikon digital cameras',
          },
          {
            type: 'cons',
            text: 'Original lenses are more expensive than M42',
          },
          {
            type: 'cons',
            text: 'Many versions; not everything is compatible',
          },
        ],
      },
      {
        title: 'Canon FD',
        subtitle: 'Bayonet',
        text: 'Canon’s proprietary lens mount for film cameras (1971–1992). It is incompatible with modern Canon EF/RF mounts, meaning these lenses remain exclusive to the film photography niche. This makes them surprisingly affordable while offering excellent quality.',
        tags: ['Canon AE-1', 'A-1', 'F-1'],
        ranges: {
          glassSelection: { label: 'Lenses variety', value: 50 },
          changeSpeed: { label: 'Change speed', value: 90 },
        },
        prosAndCons: [
          {
            type: 'pro',
            text: 'Affordable lenses',
          },
          {
            type: 'pro',
            text: 'Excellent optical quality',
          },
          {
            type: 'cons',
            text: 'No compatibility with modern Canon cameras',
          },
          {
            type: 'cons',
            text: 'Limited ecosystem',
          },
        ],
      },
      {
        title: 'Pentax K',
        subtitle: 'Bayonet',
        text: 'The Pentax standard, compatible with modern Pentax DSLRs. A vast array of available lenses—ranging from inexpensive film-era models to modern ones. A sound investment if you plan to shoot digitally as well.',
        tags: ['Pentax K1000', 'ME Super', 'LX'],
        ranges: {
          glassSelection: { label: 'Lenses variety', value: 85 },
          changeSpeed: { label: 'Change speed', value: 90 },
        },
        prosAndCons: [
          {
            type: 'pro',
            text: 'Compatible with Pentax Digital',
          },
          {
            type: 'pro',
            text: 'Affordable film cameras',
          },
          {
            type: 'cons',
            text: 'Smaller selection than Nikon F',
          },
          {
            type: 'cons',
            text: 'Rare market offerings',
          },
        ],
      },
      {
        title: 'Leica M',
        subtitle: 'Rangefinder',
        text: 'The legendary mount used by Leica rangefinder cameras. Minimalist lenses—designed without a mirror box—offer exceptional sharpness and compactness. It is a closed and expensive ecosystem, yet the lenses retain their value for decades.',
        tags: ['Leica M2', 'M3', 'M6', 'M7'],
        ranges: {
          glassSelection: { label: 'Lenses variety', value: 40 },
          changeSpeed: { label: 'Change speed', value: 95 },
        },
        prosAndCons: [
          {
            type: 'pro',
            text: 'Benchmark optical quality',
          },
          {
            type: 'pro',
            text: 'Compact system',
          },
          {
            type: 'cons',
            text: 'High initial cost',
          },
          {
            type: 'cons',
            text: 'Limited lens selection',
          },
        ],
      },
      {
        title: 'Hasselblad V',
        subtitle: 'Medium format',
        text: 'A modular medium-format system—the lens, body, and film back are interchangeable independently. The lenses are rare and expensive, but they deliver an image quality unattainable with any 35mm system. For those who are serious about photography.',
        tags: ['Hasselblad 500C', '503CW', 'SWC'],
        ranges: {
          glassSelection: { label: 'Lenses variety', value: 30 },
          changeSpeed: { label: 'Change speed', value: 85 },
        },
        prosAndCons: [
          {
            type: 'pro',
            text: 'Unrivaled image quality',
          },
          {
            type: 'pro',
            text: 'Modularity — swappable cartridges',
          },
          {
            type: 'cons',
            text: 'Very expensive ecosystem',
          },
          {
            type: 'cons',
            text: 'Few available lenses',
          },
        ],
      },
    ],
  },
};
