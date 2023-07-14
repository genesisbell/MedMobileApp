import React from 'react';
import { View } from 'react-native';
import { useAppSelector } from '../../app/hooks';

interface MedScreenProps {
  children: JSX.Element | JSX.Element[];
}

export default function MedScreen({ children }: MedScreenProps) {
  const theme = useAppSelector(({ theme }) => theme.value);

  return (
    <View style={{ backgroundColor: theme.mainBackgroundColor, height: '100%' }}>{children}</View>
  );
}
