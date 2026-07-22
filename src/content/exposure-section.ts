import type { SectionProps } from '@ui/section/section.types';
import { SECTIONS_IDS } from './data/sections';
import type { ExposureCardProps } from '@entities/exposure/ui/exposure-card/exposure-card.types';

type ExposureSectionProps = SectionProps & {
  cards: Omit<ExposureCardProps, 'step' | 'theme'>[];
  rule: Omit<ExposureCardProps, 'step'>;
};

export const exposureSectionContent: ExposureSectionProps = {
  id: SECTIONS_IDS.Expousure,
  step: 5,
  stepText: 'Exposure',
  title: 'Three parameters, one frame',
  epigraph:
    'Proper exposure is a balance of aperture, shutter speed, and ISO. Understanding how they relate means controlling light intentionally.',
  cards: [
    {
      id: 'aperture',
      title: 'The aperture controls light and sharpness.',
      description:
        'f/1.8 — lots of light, blurred background. f/16 — little light, everything sharp.',
    },
    {
      id: 'shutter',
      title: 'Shutter speed controls motion.',
      description: '1/500 sec — freezes motion. 1/15 sec — creates blur.',
    },
    {
      id: 'iso',
      title: 'The ISO setting applies to the entire roll.',
      description:
        'Film is more forgiving of overexposure than underexposure.When in doubt, slightly overexpose.',
    },
    {
      id: 'exposure',
      title: 'Three parameters—one system. Changing one requires compensation by another.',
      description:
        'A single step in adjusting a parameter is called a "stop"; if one parameter changes by one stop, then to maintain the same exposure, one of the other two parameters must also be adjusted by one stop.',
    },
  ],
  rule: {
    id: 'sunny-16',
    title: '☀ Sunny 16 Rule',
    description: 'On a sunny day: f/16, shutter speed = 1/film ISO.',
    theme: 'dark',
  },
};
