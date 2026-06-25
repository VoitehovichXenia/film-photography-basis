import type { ISOCardProps } from '@entities/film/ui/iso-card/iso-card.types';
import type { SectionProps } from '@ui/section/section.types';
import type { TableProps } from '@ui/table/table.types';
import { FILMS } from './data/films';
import { SECTIONS_IDS } from './data/sections';

const filmTable: TableProps<typeof FILMS> = {
  header: ['Type', 'Name', 'ISO', 'Rang', 'Country', 'Description'],
  rows: FILMS,
};

type FilmsSectionProps = SectionProps & {
  isoCards: ISOCardProps[];
  filmTable: TableProps<typeof FILMS>;
};

export const filmSectionContent: FilmsSectionProps = {
  id: SECTIONS_IDS.Films,
  step: 4,
  stepText: 'Film',
  title: 'Film: character in every frame',
  epigraph:
    'Each film imparts its own color, grain, and mood.Understanding the differences allows you to choose the right film for the task at hand.',
  isoCards: [
    {
      id: 'iso-100-200',
      pretitle: '100-200',
      title: 'Slow film',
      description: 'Fine grain, rich detail. Sunny day.',
    },
    {
      id: 'iso-400',
      pretitle: '400',
      title: 'Universal',
      description: 'Street, interior, cloudy day.A universal choice.',
    },
    {
      id: 'iso-800',
      pretitle: '800',
      title: 'Fast film',
      description:
        'Concerts, night, reportage photography at short shutter speeds. Expressive, large grain.',
    },
  ],
  filmTable,
};
