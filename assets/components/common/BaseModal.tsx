import React, { useEffect, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

/** @Assets */
import { 
  mdBrRadius,
} from "styles";
import { useAppSelector } from "../../../src/app/hooks";
/** */
export interface BaseModalProps extends ViewProps{
  icon?: React.ReactNode,
  disabled?: boolean,
  iconStyle?: StyleProp<ViewStyle>,
  getModalVisibilityState?: (isModalOpen: boolean) => void,
  showModal?: {
    key: number,
    show: boolean,
  },
  header?: React.ReactNode,
  headerStyle?: StyleProp<ViewStyle>,
  isScrollable?: boolean,
  customContent?: boolean,
  closeOnTouchBackdrop?: boolean;
}

export function BaseModal(props: BaseModalProps){

  /** @Variables */
  const { 
    children,
    icon,
    style,
    iconStyle,
    disabled,
    showModal,
    getModalVisibilityState,
    header,
    headerStyle,
    isScrollable,
    customContent,
    closeOnTouchBackdrop,
  } = props;
  const [handleShowModal, setHandleShowModal] = useState(showModal?.show || false);
  const scrollable = isScrollable === undefined ? true : isScrollable;
  const theme = useAppSelector(({ theme }) => theme.value); 
  /** */
  
  const conditionalStyles = StyleSheet.create({
    modalContent:{
      borderTopRightRadius: header ? 0 : mdBrRadius,
      borderTopLeftRadius: header ? 0 : mdBrRadius,
    }
  })

  /** @Handlers */
  useEffect(() => {
    if(showModal !== undefined){
      setHandleShowModal(showModal.show);
    }
  }, [showModal]);

  useEffect(() => {
    if(getModalVisibilityState){
      getModalVisibilityState(handleShowModal);
    }
  }, [handleShowModal]);
  /** */

  /** @Handlers */
  const handleToggleModal = () => {
    if(closeOnTouchBackdrop !== undefined && closeOnTouchBackdrop === false) return;
    setHandleShowModal((prevState) => !prevState);
  }
  /** */
  
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={handleToggleModal}
        disabled={disabled}
      >
        <View style={iconStyle}>{icon}</View>
      </TouchableWithoutFeedback>

      <Modal
        visible={handleShowModal}
        transparent
        onRequestClose={handleToggleModal}
        animationType="fade"
      >
        <View style={theme.BaseModalStyles.modalContainer}>
            <TouchableWithoutFeedback onPress={handleToggleModal}>
                <View style={theme.BaseModalStyles.modalOverlay} />
            </TouchableWithoutFeedback>

              {
                header && (
                  <View style={headerStyle || theme.BaseModalStyles.headerModalContainer}>
                    {header}
                  </View>
                )
              }

              {
                customContent ? (
                  children
                ):(
                  <View style={[theme.BaseModalStyles.modalContent, conditionalStyles.modalContent, style]}>
                    {
                      scrollable ? (
                        <ScrollView 
                          alwaysBounceVertical={false}
                          showsVerticalScrollIndicator={false}
                          style={theme.BaseModalStyles.scrollContainer}
                        >
                          {children}
                        </ScrollView>
                      ):(
                        <View style={theme.BaseModalStyles.scrollContainer}>
                          {children}
                        </View>
                      )
                    }
                  </View>
                )
              }

        </View>
      </Modal>
    </View>
  );
}
