import { en, es } from 'translations';
import {bloodCountData} from './values/bloodCount';
import { liverFunctionData } from './values/liverFunction';
import { infectiousData } from './values/infectious';
import { serumElectrolytesData } from './values/serumElectrolytes';
import { bloodChemistryData } from './values/bloodChemistry';
import { ironProfileData } from './values/ironProfile';
import { variousData } from './values/various';
import { gasometryData } from './values/gasometry';

export function values(lang: string){

  const languages = {
    en,
    es
  }

  return [
    {
      name: languages[lang as keyof typeof languages].values.bloodCount,
      data: bloodCountData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.liverFunction,
      data: liverFunctionData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.infectious,
      data: infectiousData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.serumElectrolytes,
      data: serumElectrolytesData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.bloodChemistry,
      data: bloodChemistryData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.ironProfile,
      data: ironProfileData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.various,
      data: variousData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.gasometry,
      data: gasometryData(languages[lang as keyof typeof languages]),
    },
  ]
} 