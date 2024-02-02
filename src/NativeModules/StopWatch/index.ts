import { NativeModules } from "react-native";

type StopWatchTypes = {
  startStopWatch: Function;
  stopStopWatch: Function;
  getElapsedTime: () => Promise<number>;
  testModule: () => Promise<string>;
}


export const StopWatch:StopWatchTypes = NativeModules.StopWatch;

// export const StopWatch = {
  

//   getStopWatch(){
//     // console.log(stopWatch.getStopWatch((value:string) => value))
//     let stop;
//     void (function(){ stopWatch.getStopWatch((value:string) => stop = value)})();
//     return stop;
//   }

// }