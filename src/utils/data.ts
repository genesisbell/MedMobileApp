import { valuesDataType } from "types";

export function getCurrentDataBasedOnAge(data:valuesDataType, age: number){
  let left = 0;
  while (left <= data.length - 1) {

    if(data[left].age === age || left + 1 === data.length ){
      return data[left];
    }

    if(data[left].age < age && data[left + 1].age > age){
      return data[left];
    }

    left = left + 1;

  }

  return data[left];
}