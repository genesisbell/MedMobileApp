import React from 'react';
import { View } from 'react-native';
import { useAppSelector } from '../../app/hooks';

interface CustomScreenProps {
  children: JSX.Element | JSX.Element[];
}

export default function CustomScreen({ children }: CustomScreenProps) {
  const theme = useAppSelector(({ theme }) => theme.value);

  return (
    <View style={{ backgroundColor: theme.mainBackgroundColor, height: '100%' }}>{children}</View>
  );
}
