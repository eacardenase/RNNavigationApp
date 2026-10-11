import { View, Text } from 'react-native';
import { GlobalStyles } from '../../theme/theme';
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';

export const Tab1Screen = () => {
  return (
    <View style={GlobalStyles.containter}>
      <HamburguerMenu />
      <Text style={GlobalStyles.title}>Tab1 Screen</Text>
    </View>
  );
};
