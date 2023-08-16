import {bloodCountData} from './values/bloodCount';
import { en, es } from 'translations';

export function bloodCount(lang: string){

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
      name: languages[lang as keyof typeof languages].values.bloodCount,
      data: bloodCountData(languages[lang as keyof typeof languages]),
    },
  ]
} 