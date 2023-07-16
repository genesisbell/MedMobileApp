import { Platform, StyleSheet } from 'react-native';
//Main Colors
// Light
// #FBF8F1
// #F7ECDE
// #E9DAC1
// #54BAB9
// Dark
// #041C32
// #141E61
// #787A91
// #EEEEEE

export const primaryColor = '#54BAB9';
export const overlayColor = 'rgba(0,0,0,0.5)';

/** @Style_Constants */
//Paddings and Margins
export const xsmSpace = 3;
export const smSpace = 5;
export const mdSpace = 10;
export const bgSpace = 15;
export const xbgSpace = 24;

//Borders
export const smBrRadius = 5;
export const mdBrRadius = 12;
export const thinBorder = 0.5;
export const normalBorder = 1;
export const thickBorder = 2;

//Text Sizes
export const h1Size = 26;
export const h2Size = 24;
export const h3Size = 22;
export const h4Size = 20;
export const h5Size = 18;
export const h6Size = 16;
export const smText = 12;
export const xsmText = 10;

//Other constants
export const tabBarHeight = Platform.OS == 'android' ? 50 : 80;
export const actionSheetOptionsHeight = 60;
export const sectionTabBarHeight = 35;
export const inputHelperButtonWidth = 45;

const textSyles = StyleSheet.create({
  h1: {
    fontSize: h1Size,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: h2Size,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: h3Size,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: h4Size,
    fontWeight: 'bold',
  },
  h5: {
    fontSize: h5Size,
    fontWeight: 'bold',
  },
  h6: {
    fontSize: h6Size,
    fontWeight: 'bold',
  },
  bigText: {
    fontSize: h6Size,
  },
  smallText: {
    fontSize: smText,
  },
  extraSamllText: {
    fontSize: xsmText,
  },
  boldText: {
    fontWeight: 'bold',
  },
  justifyText: {
    textAlign: 'justify',
  },
  centerText: {
    textAlign: 'center',
  },
  rightAlignText: {
    textAlign: 'right',
  },
  emphasisText: {
    color: primaryColor,
  },
  emphasisHeaderText: {
    fontSize: h3Size,
    fontWeight: 'bold',
    textAlign: 'center',
    color: primaryColor,
  },
  // subText:{
  //     color: textSryColor,
  // },
  // subSmText:{
  //     color: textSryColor,
  //     fontStyle: 'italic',
  //     fontSize: smText,
  // },
  // popText:{
  //     color: popTextColor,
  // },
  // tryText:{
  //     color: textTryColor,
  // },
  // errText:{
  //     color: errColor,
  // },
  // successText:{
  //     color: textSuccessColor,
  // }
});

const displayStyles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  flexPointFive:{
    flex: .5,
  },
  flexGrowOne: {
    flexGrow: 1,
  },
  flexDirectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexDirectionRowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexDirectionRowSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  flexWrapContent: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  flexWrapContentSpaceBetween: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // fullScreen:{
  //     height: '100%',
  //     backgroundColor: backgroundPrmColor,
  // },
  absoluteCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignSelfBaseline: {
    alignSelf: 'baseline',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  rotate90deg: {
    transform: [
      {
        rotate: '90deg',
      },
    ],
  },
  rotate180deg: {
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
  rotate270deg: {
    transform: [
      {
        rotate: '270deg',
      },
    ],
  },
});

export const CommonStyles = {
  ...textSyles,
  ...displayStyles,
};
