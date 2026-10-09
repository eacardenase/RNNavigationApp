import { View } from 'react-native';
import { type NavigationProp, useNavigation } from '@react-navigation/native';

import { GlobalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type RootStackParams } from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={GlobalStyles.containter}>
      <PrimaryButton
        label="Products"
        onPress={() => navigation.navigate('Products')}
      />

      <PrimaryButton
        label="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
