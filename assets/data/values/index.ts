import { en, es } from 'translations';
import { valuesType } from 'types';
import { bloodCountData } from './bloodCount';
import { liverFunctionData } from './liverFunction';
import { infectiousData } from './infectious';
import { serumElectrolytesData } from './serumElectrolytes';
import { bloodChemistryData } from './bloodChemistry';
import { ironProfileData } from './ironProfile';
import { variousData } from './various';
import { gasometryData } from './gasometry';
import { vitaminsAndElementsData } from './vitaminsAndElements';
import { cerebrospinalFluidData } from './cerebrospinalFluid';
import { urinaryValuesData } from './urinaryValues';
import { fluidsData } from './fluid';
import { lipidProfileData } from './lipidProfile';

export function values(lang: string):Array<valuesType>{

  const languages = {
    en,
    es
  }

  return [
    {
      key: 'bloodCount',
      name: languages[lang as keyof typeof languages].values.bloodCount,
      reference: 'Nelson. Essentials of pediatrics. 9th ed. Philadelphia: Elsevier; 2023',
      data: bloodCountData(languages[lang as keyof typeof languages]),
    },
    // {
    //   key: 'liver',
    //   name: languages[lang as keyof typeof languages].values.liverFunction,
    //   reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
    //   data: liverFunctionData(languages[lang as keyof typeof languages]),
    // },
    // {
    //   key: 'infectious',
    //   name: languages[lang as keyof typeof languages].values.infectious,
    //   reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
    //   data: infectiousData(languages[lang as keyof typeof languages]),
    // },
    // {
    //   key: 'serum',
    //   name: languages[lang as keyof typeof languages].values.serumElectrolytes,
    //   reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
    //   data: serumElectrolytesData(languages[lang as keyof typeof languages]),
    // },
    // {
    //   key: 'bloodChemistry',
    //   name: languages[lang as keyof typeof languages].values.bloodChemistry,
    //   reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
    //   data: bloodChemistryData(languages[lang as keyof typeof languages]),
    // },
    // {
    //   key: 'iron',
    //   name: languages[lang as keyof typeof languages].values.ironProfile,
    //   reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
    //   data: ironProfileData(languages[lang as keyof typeof languages]),
    // },
    // {
    //   key: 'gasometry',
    //   name: languages[lang as keyof typeof languages].values.gasometry,
    //   reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
    //   data: gasometryData(languages[lang as keyof typeof languages]),
    // },
    // {
    //   key: 'various',
    //   name: languages[lang as keyof typeof languages].values.various,
    //   reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
    //   data: variousData(languages[lang as keyof typeof languages]),
    // },
    // {
    //   key: 'vitamins',
    //   name: languages[lang as keyof typeof languages].values.vitaminsAndElements,
    //   reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
    //   data: vitaminsAndElementsData(languages[lang as keyof typeof languages]),
    // },
    // {
    //   key: 'lipid',
    //   name: languages[lang as keyof typeof languages].values.lipidProfile,
    //   reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
    //   data: lipidProfileData(languages[lang as keyof typeof languages]),
    // },
    // {
    //   key: 'cerebral',
    //   name: languages[lang as keyof typeof languages].values.cerebrospinalFluid,
    //   reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
    //   data: cerebrospinalFluidData(languages[lang as keyof typeof languages]),
    // },
    // {
    //   key: 'urinary',
    //   name: languages[lang as keyof typeof languages].values.urinaryValues,
    //   reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
    //   data: urinaryValuesData(languages[lang as keyof typeof languages]),
    // },
    // {
    //   key: 'fluids',
    //   name: languages[lang as keyof typeof languages].values.fluids,
    //   reference: 'K. KLEINMAN. The Harriet Lane Handbook. The John Hopkins Hospital. 21ed. Elsevier.',
    //   data: fluidsData(languages[lang as keyof typeof languages]),
    // },
  ]
}

