export function getBodySurface(weight: number){

  if(weight > 10){
    return (weight*4+7)/(weight+90);
  }

  return (weight*4+9)/(100);

}

export function solutions(){

}