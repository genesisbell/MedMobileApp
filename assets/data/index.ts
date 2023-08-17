import { en, es } from 'translations';
import {bloodCountData} from './values/bloodCount';
import { liverFunctionData } from './values/liverFunction';

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
  ]
} 