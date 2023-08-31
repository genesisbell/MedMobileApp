export function getBodySurface(weight: number){

  if(weight > 10){
    return (weight*4+7)/(weight+90);
  }

  return (weight*4+9)/(100);

}

export function solutions(){

}

export function getHollidayVolume(weight: number, percentage: number){

  let volume = 0;

  if(weight < 10){
    volume = volume + (weight * 100);
  }else{
    volume = volume + (10 * 100);
    if(weight > 20 ){
      volume = volume + (10 * 50);
      if(weight - 20 > 0){
        volume = volume + ((weight - 20) * 20);
      }
    }else{
      volume = volume + ((weight - 10) * 50);
    }
  }

  return volume * (percentage/100);


}

export function getSodium(sodium: number){

  if(sodium <= 0) return;

}