import React, {useEffect, useRef} from 'react';
import {
  PixelRatio,
  UIManager,
  View,
  findNodeHandle,
} from 'react-native';

import {CPRViewManager} from './CPRViewManager';

export function CPRView(){
  return (
    <CPRViewManager
      style={{height:100, width: '100%'}}
    />
  )
}

// const createFragment = (viewId:any) =>
//   UIManager.dispatchViewManagerCommand(
//     viewId,
//     // we are calling the 'create' command
//     UIManager.CPRViewManager.Commands.create.toString(),
//     [viewId],
//   );

// export const CPRView = () => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const viewId = findNodeHandle(ref.current);
//     createFragment(viewId);
//   }, []);

//   return (
//     <View style={{flex:1}}>
//       <CPRViewManager
//         style={{
//           flex: 1,
//           // converts dpi to px, provide desired height
//           // height: PixelRatio.getPixelSizeForLayoutSize(200),
//           // converts dpi to px, provide desired width
//           // width: PixelRatio.getPixelSizeForLayoutSize(200),
//         }}
//         ref={ref}
//       />
//     </View>
//   );
// };