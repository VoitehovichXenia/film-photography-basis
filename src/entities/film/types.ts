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

export enum FilmISOs {
  iso100 = 100,
  iso125 = 125,
  iso200 = 200,
  iso400 = 400,
  iso800 = 800,
}

export enum FilmBadgeColors {
  gold = 'film-gold',
  bw = 'gray-400',
}

export type Film = {
  id: string;
  originCountry: FilmOriginCountries;
  name: string;
  iso: FilmISOs;
  type: FilmTypes;
  description: string;
  rang: FilmRangs;
  badge: FilmBadgeColors;
};
