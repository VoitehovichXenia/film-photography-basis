import { SECTIONS_IDS, type SectionBlockProps } from './data/sections';
import type { FilmFormatCardProps } from '@entities/cameras/ui/film-format-card';

type CamerasSectionProps = SectionBlockProps & {
  filmFormatCards: FilmFormatCardProps[];
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
};
