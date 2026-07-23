import { SECTIONS_IDS } from './data/sections';

type Link = { href: `http${string}`; label: string };
type NavLink = { href: `#${SECTIONS_IDS}`; label: string };

type FooterContent = {
  logo: {
    logoText: string;
    tagline: string;
  };
  links: NavLink[];
  personal: {
    fullName: string;
    position: string;
    contacts: Link[];
    techStack: string[];
  };
  licence: string;
};

export const footerContent: FooterContent = {
  logo: {
    logoText: 'Shoot.Film',
    tagline: 'A Guide to Film Photography. Made with love for analog.',
  },
  links: [
    { href: `#${SECTIONS_IDS.GetStarted}`, label: 'Get started' },
    { href: `#${SECTIONS_IDS.Cameras}`, label: 'Cameras' },
    { href: `#${SECTIONS_IDS.Films}`, label: 'Films' },
    { href: `#${SECTIONS_IDS.Lenses}`, label: 'Lenses' },
    { href: `#${SECTIONS_IDS.Expousure}`, label: 'Expousure' },
    { href: `#${SECTIONS_IDS.ExpousureCalculator}`, label: 'Calculator' },
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
  licence: 'all rights reserved',
};
