export function getClock(timer: number){

  const minutes = Math.floor(timer/60);
  const seconds = timer - (minutes * 60);

  let minutesString = `${minutes}`;
  let secondsString = `${seconds}`;

  if(minutes < 10){
    minutesString = `0${minutes}`;
  }

  if(seconds < 10){
    secondsString = `0${seconds}`;
  }

  return `${minutesString}:${secondsString}`;
  
}