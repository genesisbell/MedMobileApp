import { Dimensions, StyleSheet } from 'react-native';
import { 
  mdBrRadius,
  mdSpace,
  overlayColor,
  xbgSpace,
} from '../../../../CommonStyles';
import { backgroundPrmColor, backgroundTryColor } from '../../constants';

const vw = Dimensions.get('window').width;
export const MAX_MODAL_WIDTH = vw - 20;

export const BaseModalStyles = StyleSheet.create({
    modalContainer:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center',
    },
    modalContent: {
        backgroundColor: backgroundPrmColor,
        borderBottomLeftRadius: mdBrRadius,
        borderBottomRightRadius: mdBrRadius,
        padding: xbgSpace,
        marginHorizontal: mdSpace,
        maxHeight: '85%',
    },
    headerModalContainer:{
        backgroundColor: backgroundTryColor,
        borderTopRightRadius: mdBrRadius,
        borderTopLeftRadius: mdBrRadius,
        padding: mdSpace,
        marginHorizontal: mdSpace,
        alignSelf: 'stretch',
    },
    scrollContainer:{
        flexGrow: 0
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: overlayColor,
    },
    closeCircle: {
        position: 'relative',
        left: (vw / 2) - 40,
        bottom: 10,
    }
});