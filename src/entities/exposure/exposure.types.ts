// Shutters
export const SHUTTER_STOPS = [
  { value: 30, label: '30s' },
  { value: 15, label: '15s' },
  { value: 8, label: '8s' },
  { value: 4, label: '4s' },
  { value: 2, label: '2s' },
  { value: 1, label: '1s' },
  { value: 1 / 2, label: '1/2s' },
  { value: 1 / 4, label: '1/4s' },
  { value: 1 / 8, label: '1/8s' },
  { value: 1 / 15, label: '1/15s' },
  { value: 1 / 30, label: '1/30s' },
  { value: 1 / 60, label: '1/60s' },
  { value: 1 / 125, label: '1/125s' },
  { value: 1 / 250, label: '1/250s' },
  { value: 1 / 500, label: '1/500s' },
  { value: 1 / 1000, label: '1/1000s' },
  { value: 1 / 2000, label: '1/2000s' },
  { value: 1 / 4000, label: '1/4000s' },
  { value: 1 / 8000, label: '1/8000s' },
] as const;

type ShutterStop = (typeof SHUTTER_STOPS)[number];

export type ShutterStopValues = ShutterStop['value'];

// Apertures
export const APERTURE_STOPS = [
  { value: 0.7, label: 'f / 0.7' },
  { value: 1.4, label: 'f / 1.4' },
  { value: 2, label: 'f / 2' },
  { value: 2.8, label: 'f / 2.8' },
  { value: 4, label: 'f / 4' },
  { value: 5.6, label: 'f / 5.6' },
  { value: 8, label: 'f / 8' },
  { value: 11, label: 'f / 11' },
  { value: 16, label: 'f / 16' },
  { value: 22, label: 'f / 22' },
  { value: 32, label: 'f / 32' },
  { value: 64, label: 'f / 64' },
] as const;

type ApertureStop = (typeof APERTURE_STOPS)[number];

export type ApertureStopValues = ApertureStop['value'];

// Exposure numbers
export const EV_NUMBERS = [
  { value: 15, label: '☀ Bright Sunny day' },
  { value: 12, label: '☁ Cloudy' },
  { value: 10, label: '🏠 Interior' },
  { value: 7, label: '🌆 Twighlight' },
  { value: 4, label: '🌃 Night street' },
] as const;

type EVNumbers = (typeof EV_NUMBERS)[number];

export type EVNumbersValues = EVNumbers['value'];

export enum EXPOSURE {
  shutter = 'shutter_speed',
  aperture = 'aperture',
  iso = 'iso',
}

export enum EXPOSURE_PRIORITIES {
  aperture = 'priority_aperture',
  shutters = 'priority_shutter',
}

export type ExposurePrioritiesType = `${EXPOSURE_PRIORITIES}`;
