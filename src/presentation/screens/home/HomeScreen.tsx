import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { GlobalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={GlobalStyles.containter}>
      <PrimaryButton
        label="Products"
        onPress={() => navigation.navigate('Products' as never)}
      />

      <PrimaryButton
        label="Settings"
        onPress={() => navigation.navigate('Settings' as never)}
      />
    </View>
  );
};
