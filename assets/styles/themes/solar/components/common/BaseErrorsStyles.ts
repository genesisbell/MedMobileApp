import { StyleSheet } from "react-native";
import { errColor } from "../../constants";
import { mdSpace } from "../../../../CommonStyles";

export const BaseErrorsStyles = StyleSheet.create({
    error:{
        color: errColor,
        marginHorizontal: mdSpace,
    },
})