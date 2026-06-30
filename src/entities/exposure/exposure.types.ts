export enum APERTURES {
  f07 = 'f / 0.7',
  f14 = 'f / 1.4',
  f2 = 'f / 2',
  f28 = 'f / 2.8',
  f4 = 'f / 4',
  f56 = 'f / 5.6',
  f8 = 'f / 8',
  f11 = 'f / 11',
  f16 = 'f / 16',
  f22 = 'f / 22',
  f32 = 'f / 32',
  f64 = 'f / 64',
}

export enum SHUTTER_SPEED {
  tv = 'B',
  t1 = '1',
  t12 = '1/2',
  t14 = '1/4',
  t18 = '1/8',
  t115 = '1/15',
  t130 = '1/30',
  t160 = '1/60',
  t1125 = '1/125',
  t1250 = '1/250',
  t1500 = '1/500',
  t11000 = '1/1000',
  t12000 = '1/2000',
  t13000 = '1/3000',
}

export enum EXPOSURE {
  shutter = 'shutter_speed',
  aperture = 'aperture',
  iso = 'iso',
}
