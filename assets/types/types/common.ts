export type ObjectType = { [key: string]: any };
export type OptionType = {
  text: string;
  info: ObjectType;
  onPress?: (info: ObjectType) => void;
  index?: number;
  component?: React.ReactNode;
};

export type OptionsType = Array<OptionType>;

export type FontWeightType = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
