import type { SectionProps } from '@ui/section';
import type { SelectProps } from '@ui/select/select.types';
import { SECTIONS_IDS } from './data/sections';
import { ISO_STOPS } from '@entities/film/film.types';
import {
  EV_NUMBERS,
  APERTURE_STOPS,
  SHUTTER_STOPS,
  EXPOSURE_PRIORITIES,
} from '@entities/exposure/exposure.types';
import type { ExposureCalculatorProps } from '@features/calculate-exposure/ui/exposure-calculator.types';

type ExposureCalculatorSectionProps = SectionProps & {
  calculator: ExposureCalculatorProps;
};

const DEFAULT_ISO = 400;
const DEFAULT_APERTURE = 16;
const DEFAULT_SHUTTER = 0.002;
const DEFAULT_EV = 15;

const isoSelect: SelectProps = {
  id: 'calculator_iso-select',
  name: 'iso',
  options: ISO_STOPS.map((iso) => ({
    id: iso.label,
    value: String(iso.value),
    selected: DEFAULT_ISO === iso.value,
    text: iso.label,
  })),
};
const evSelect: SelectProps = {
  id: 'calculator_ev-select',
  name: 'ev',
  options: EV_NUMBERS.map((ev) => ({
    id: ev.label,
    value: String(ev.value),
    selected: DEFAULT_EV === ev.value,
    text: ev.label,
  })),
};
const apertureSelect: SelectProps = {
  id: 'exposure-select-priority_aperture',
  name: 'priority_aperture',
  options: APERTURE_STOPS.map((stop) => ({
    id: stop.label,
    value: String(stop.value),
    selected: stop.value === DEFAULT_APERTURE,
    text: stop.label,
  })),
  label: {
    text: 'Aperture priority',
    class: 'exposure-select',
  },
};
const shutterSelect: SelectProps = {
  id: 'exposure-select-priority_shutter',
  name: 'priority_shutter',
  options: SHUTTER_STOPS.map((stop) => ({
    id: stop.label,
    value: String(stop.value),
    selected: DEFAULT_SHUTTER === stop.value,
    text: stop.label,
  })),
  label: {
    text: 'Shutter priority',
    class: 'exposure-select',
    hidden: true,
  },
};

export const exposureCalculatorSectionContent: ExposureCalculatorSectionProps = {
  id: SECTIONS_IDS.ExpousureCalculator,
  step: 6,
  stepText: 'calculator',
  title: 'Exposure Calculator',
  epigraph: 'Select two known parameters — the third will be calculated automatically.',
  calculator: {
    isoSelect,
    evSelect,
    apertureSelect,
    shutterSelect,
    priority: {
      label: 'Priority',
      radios: [
        {
          name: 'priority',
          value: EXPOSURE_PRIORITIES.aperture,
          id: EXPOSURE_PRIORITIES.aperture,
          label: {
            text: 'Aperture',
          },
        },
        {
          name: 'priority',
          value: EXPOSURE_PRIORITIES.shutters,
          id: EXPOSURE_PRIORITIES.shutters,
          label: {
            text: 'Shutter',
          },
        },
      ],
    },
    resultBlock: {
      title: 'RESULT',
      blocks: [
        {
          title: 'Recommended shutters speed',
          result: '1 / 500',
          dataFor: 'exposure-select-priority_aperture',
        },
        {
          title: 'Recommended aperture',
          result: 'f / 16',
          dataFor: 'exposure-select-priority_shutter',
          hidden: true,
        },
      ],
      footnote:
        'Use the nearest standard setting on your camera. The film allows for a margin of ±1 stop.',
    },
  },
};
