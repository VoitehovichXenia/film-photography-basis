import { SECTIONS_IDS } from './data/sections';

export const footerContent = {
  logo: {
    logoText: 'Shoot.Film',
    tagline: 'A Guide to Film Photography. Made with love for analog.',
  },
  links: [
    { href: SECTIONS_IDS.GetStarted, label: 'Get started' },
    { href: SECTIONS_IDS.Cameras, label: 'Cameras' },
    { href: SECTIONS_IDS.Films, label: 'Films' },
    { href: SECTIONS_IDS.Lenses, label: 'Lenses' },
    { href: SECTIONS_IDS.Expousure, label: 'Expousure' },
    { href: SECTIONS_IDS.ExpousureCalculator, label: 'Calculator' },
  ],
  personal: {
    fullName: 'Ksenya Voitekhovich',
    position: 'Senior Frontend developer',
    contacts: [
      { href: 'https://github.com/VoitehovichXenia', label: 'Github' },
      { href: 'https://www.linkedin.com/in/ksenya-voitekhovich/', label: 'Linkedin' },
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Web Components'],
  },
};
