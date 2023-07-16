import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';

/** @Assets */
import { mdSpace, smSpace } from 'styles';
import { OptionType, OptionsType } from 'types';
/** */

import { useAppSelector } from '../../app/hooks';

export interface BaseActionSheetProps {
  options: OptionsType;
  message?: string;
  customButton?: React.ReactNode;
  customContent?: React.ReactNode;
  customOption?: (option: OptionType, index: number) => JSX.Element;
  customCancel?: {
    backgroundColor?: string;
    text?: string;
    textColor?: string;
  };
  wontHideActionSheet?: boolean;
  getOptionInfo?: (option: OptionType) => void;
  initialOptionIndex?: number;
}

function BaseActionSheet(props: BaseActionSheetProps) {
  /** @Variables */
  const {
    options,
    message,
    customButton,
    customContent,
    customOption,
    wontHideActionSheet,
    getOptionInfo,
    initialOptionIndex,
    customCancel,
  } = props;

  const language = useAppSelector(({ language }) => language.value);
  const theme = useAppSelector(({ theme }) => theme.value);
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const [option, setOption] = useState(
    options[initialOptionIndex === undefined ? 0 : initialOptionIndex],
  );
  /** */

  /** @useEffect */
  useEffect(() => {
    if (initialOptionIndex !== undefined) {
      setOption(options[initialOptionIndex]);
    }
  }, [initialOptionIndex]);
  /** */

  /** @Handlers */
  const showActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const hideActionSheet = () => {
    actionSheetRef.current?.hide();
  };

  const handleActionSheetOnPress = (op: OptionType, index: number) => {
    setOption(op);

    //Main action for any options
    if (getOptionInfo) {
      getOptionInfo({ ...op, index });
    }

    //Custom action for each option
    if (op.onPress) {
      op.onPress({ ...op, index });
    }
    if (!wontHideActionSheet) {
      hideActionSheet();
    }
  };
  /** */

  return (
    <View>
      <TouchableWithoutFeedback onPress={showActionSheet}>
        {customButton ? (
          customButton
        ) : (
          <View style={theme.BaseActionSheetStyles.dropdownSection}>
            <View>
              {message ? (
                <Text style={theme.BaseActionSheetStyles.messageText}>{message}</Text>
              ) : null}
              <View
                style={{
                  marginBottom: message ? smSpace : mdSpace,
                  marginTop: message ? 0 : smSpace,
                }}
              >
                {!option ? (
                  <Text style={theme.subText}>{language.general.chooseOption}</Text>
                ) : (
                  <Text style={theme.prmTxt}>{option.text}</Text>
                )}
              </View>
            </View>
          </View>
        )}
      </TouchableWithoutFeedback>

      <ActionSheet
        ref={actionSheetRef}
        containerStyle={theme.BaseActionSheetStyles.actionSheetContainer}
      >
        {customContent ? (
          customContent
        ) : (
          <View>
            <View style={theme.BaseActionSheetStyles.scrollContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={theme.BaseActionSheetStyles.buttonsContainer}>
                  {options.map((op, index) => (
                    <TouchableWithoutFeedback
                      key={index}
                      onPress={() => handleActionSheetOnPress(op, index)}
                    >
                      {customOption ? (
                        customOption(op, index)
                      ) : (
                        <View style={theme.BaseActionSheetStyles.buttonContainer}>
                          {op.component ? (
                            op.component
                          ) : (
                            <Text style={theme.BaseActionSheetStyles.buttonText}>{op.text}</Text>
                          )}
                        </View>
                      )}
                    </TouchableWithoutFeedback>
                  ))}
                </View>
              </ScrollView>
            </View>

            <TouchableWithoutFeedback onPress={hideActionSheet}>
              <View
                style={[
                  theme.BaseActionSheetStyles.cancelButton,
                  { backgroundColor: customCancel?.backgroundColor || theme.backgroundPrmColor },
                ]}
              >
                <Text
                  style={[
                    theme.BaseActionSheetStyles.buttonCancelText,
                    { color: customCancel?.textColor || theme.systemIosColor },
                  ]}
                >
                  {customCancel?.text || language.general.cancel}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}
      </ActionSheet>
    </View>
  );
}

export default BaseActionSheet;
