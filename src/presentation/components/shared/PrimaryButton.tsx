import React from 'react';
import { Pressable, Text } from 'react-native';
import { GlobalStyles } from '../../theme/theme';

interface Props {
  label: string;
  onPress: () => void;
}

export const PrimaryButton = ({ label, onPress }: Props) => {
  return (
    <Pressable style={GlobalStyles.primaryButton} onPress={onPress}>
      <Text style={GlobalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
