import { en } from 'translations';
import { OptionsType } from 'types';

// General Options
export function getYears() {
  const years: OptionsType = [];

  for (let i = 0; i < 18; i++) {
    years.push({
      text: `${i}`,
      info: { key: i },
    });
  }

  return years;
}
export function getMonths() {
  const months: OptionsType = [];

  for (let i = 0; i < 12; i++) {
    months.push({
      text: `${i}`,
      info: { key: i },
    });
  }

  return months;
}


export const langOptions:OptionsType = [
  {
    text: 'English',
    info: {
      key: 'en'
    }
  },
  {
    text: 'Español',
    info: {
      key: 'es'
    }
  },
]

export function getSolutionsByOptions(lang: typeof en){

  return [
    {
      text: 'Holliday Segar',
      info: {
        key: 'holliday_segar',
      }
    },
    {
      text: lang.solutions.bodySurface,
      info: {
        key: 'body_surface',
      }
    },
  ]
}

export function getSolutionsWithOptions(lang: typeof en){

  return [
    {
      text: lang.solutions.naConcentrate,
      info: {
        key: 'na_concentrate',
      }
    },
    {
      text: lang.solutions.salineSolution,
      info: {
        key: 'saline_solution',
      }
    },
  ]
}