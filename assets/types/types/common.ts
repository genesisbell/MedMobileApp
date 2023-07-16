export type ObjectType = {[key: string]: any}
export type OptionType = {
    text: string;
    info: ObjectType;
    onPress?: (info: ObjectType) => void;
    index?: number,
    component?: React.ReactNode,
  }
  
  export type OptionsType = Array<OptionType>