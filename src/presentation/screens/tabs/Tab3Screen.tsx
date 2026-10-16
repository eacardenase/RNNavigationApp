import { View, Text } from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import { GlobalStyles } from '../../theme/theme';
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';

export const Tab3Screen = () => {
  return (
    <View style={GlobalStyles.containter}>
      <HamburguerMenu />
      <Text style={GlobalStyles.title}>Tab3 Screen</Text>
      <Icon name="rocket-outline" size={100} color="#900" />
    </View>
  );
};
