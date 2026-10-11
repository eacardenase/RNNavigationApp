import { View, Text } from 'react-native';
import { GlobalStyles } from '../../theme/theme';
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';

export const Tab2Screen = () => {
  return (
    <View style={GlobalStyles.containter}>
      <HamburguerMenu />
      <Text style={GlobalStyles.title}>Tab2 Screen</Text>
    </View>
  );
};
