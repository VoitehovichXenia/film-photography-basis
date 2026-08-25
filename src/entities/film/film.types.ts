import type { WithId } from '@shared/types';

export enum FilmTypes {
  blackWhite = 'B&W',
  color = 'Color',
}

export enum FilmOriginCountries {
  usa = 'USA',
  uk = 'UK',
  ch = 'China',
}

export enum FilmRangs {
  pro = 'Pro',
  base = 'Base',
}

// ISO
const ISO_100 = { value: 100, label: '100' };
const ISO_125 = { value: 125, label: '125' };
const ISO_200 = { value: 200, label: '200' };
const ISO_400 = { value: 400, label: '400' };
const ISO_800 = { value: 800, label: '800' };

export const ISO_STOPS = [ISO_100, ISO_125, ISO_200, ISO_400, ISO_800] as const;

type IsoStops = (typeof ISO_STOPS)[number];
export type IsoStopsValues = IsoStops['value'];

export enum FilmISOs {
  iso100 = ISO_100.value,
  iso125 = ISO_125.value,
  iso200 = ISO_200.value,
  iso400 = ISO_400.value,
  iso800 = ISO_800.value,
}
export type FilmISOsKeys = keyof typeof FilmISOs;

// Badges
export enum FilmBadgeColors {
  gold = 'accent-glow',
  bw = 'gray-400',
}

// Film entity
export interface Film extends WithId {
  originCountry: FilmOriginCountries;
  name: string;
  iso: FilmISOs;
  type: FilmTypes;
  description: string;
  rang: FilmRangs;
  badge: FilmBadgeColors;
}
