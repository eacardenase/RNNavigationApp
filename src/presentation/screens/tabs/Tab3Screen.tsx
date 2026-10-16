import { View, Text } from 'react-native';
import { GlobalStyles } from '../../theme/theme';
import { HamburguerMenu, IonIcon } from '../../components/shared/';

export const Tab3Screen = () => {
  return (
    <View style={GlobalStyles.containter}>
      <HamburguerMenu />
      <Text style={GlobalStyles.title}>Tab3 Screen</Text>
      <IonIcon name="rocket-outline" size={100} color="#900" />
    </View>
  );
};
