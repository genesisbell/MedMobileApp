import { ObjectType } from "./common";

export const valuesKey = {
  bloodCount: 'bloodCount',
  liver: 'liver',
  infectious: 'infectious',
  serum: 'serum',
  bloodChemistry: 'bloodChemistry',
  iron: 'iron',
  gasometry: 'gasometry',
  various: 'various',
  vitamins: 'vitamins',
  lipid: 'lipid',
  cerebral: 'cerebral',
  urinary: 'urinary',
  fluids: 'fluids',
}

export interface valueDataType{
  age: number;
  titles: Array<string>
  values: Array<{
    name: string;
    measure: string | null;
    isGirl: boolean | null;
    values: Array<string | number> | null;
  }>
  extraValues?: Array<{
    name: string;
    measure: string | null;
    values: {
      names: null | Array<string>;
      values: Array<{
        isGirl: boolean | null;
        values: Array<string> | Array<number>;
      }>;
    };
  }>
}; 

export type valuesDataType = Array<valueDataType>;

export interface valuesType{
  key: keyof typeof valuesKey,
  name: string;
  reference: string;
  data:valuesDataType;
}