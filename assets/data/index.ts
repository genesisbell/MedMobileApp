import { en, es } from 'translations';
import {bloodCountData} from './values/bloodCount';
import { liverFunctionData } from './values/liverFunction';
import { infectiousData } from './values/infectious';
import { serumElectrolytesData } from './values/serumElectrolytes';
import { bloodChemistryData } from './values/bloodChemistry';
import { ironProfileData } from './values/ironProfile';
import { variousData } from './values/various';
import { gasometryData } from './values/gasometry';
import { vitaminsAndElementsData } from './values/vitaminsAndElements';
import { cerebrospinalFluidData } from './values/cerebrospinalFluid';
import { urinaryValuesData } from './values/urinaryValues';
import { fluidsData } from './values/fluid';
import { lipidProfileData } from './values/lipidProfile';

export function values(lang: string){

  const languages = {
    en,
    es
  }

  return [
    {
      name: languages[lang as keyof typeof languages].values.bloodCount,
      reference: 'Nelson. Essentials of pediatrics. 9th ed. Philadelphia: Elsevier; 2023',
      data: bloodCountData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.liverFunction,
      reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
      data: liverFunctionData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.infectious,
      reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
      data: infectiousData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.serumElectrolytes,
      reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
      data: serumElectrolytesData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.bloodChemistry,
      reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
      data: bloodChemistryData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.ironProfile,
      reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
      data: ironProfileData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.gasometry,
      reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
      data: gasometryData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.various,
      reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
      data: variousData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.vitaminsAndElements,
      reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
      data: vitaminsAndElementsData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.lipidProfile,
      reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
      data: lipidProfileData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.cerebrospinalFluid,
      reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
      data: cerebrospinalFluidData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.urinaryValues,
      reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
      data: urinaryValuesData(languages[lang as keyof typeof languages]),
    },
    {
      name: languages[lang as keyof typeof languages].values.fluids,
      reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
      data: fluidsData(languages[lang as keyof typeof languages]),
    },
  ]
} 