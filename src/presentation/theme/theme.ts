import { StyleSheet } from 'react-native';

export const GlobalColors = {
  background: '#FFFFFF',
  primary: '#7037EB',
  secondary: '#F72585',
  tertiary: '#3A0CA3',
  success: '#4CC9F0',
  warning: '#FCA311',
  danger: '#E71D36',
  dark: '#22223B',
};

export const GlobalStyles = StyleSheet.create({
  containter: {
    flex: 1,
    padding: 20,
    backgroundColor: GlobalColors.background,
  },
  primaryButton: {
    backgroundColor: GlobalColors.primary,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: GlobalColors.background,
    fontSize: 18,
  },
});
