import type { Film } from '@entities/film/film.types';
import {
  FilmTypes,
  FilmOriginCountries,
  FilmRangs,
  FilmISOs,
  FilmBadgeColors,
} from '@entities/film/film.types';

export const FILMS: Film[] = [
  {
    id: 'ilford-hp-5-plus',
    name: 'Ilford HP5 Plus',
    description: 'Soft contrast, very flexible, classic street photography',
    originCountry: FilmOriginCountries.uk,
    iso: FilmISOs.iso400,
    type: FilmTypes.blackWhite,
    rang: FilmRangs.pro,
    badge: FilmBadgeColors.bw,
  },
  {
    id: 'kodak-gold',
    name: 'Kodak Gold',
    description: 'Warm tones, soft colors, good for daytime or golden hour photography',
    originCountry: FilmOriginCountries.usa,
    iso: FilmISOs.iso200,
    type: FilmTypes.color,
    rang: FilmRangs.base,
    badge: FilmBadgeColors.gold,
  },
];
