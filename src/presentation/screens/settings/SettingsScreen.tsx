import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={GlobalStyles.containter}>
      <Text style={GlobalStyles.title}>Settings Screen</Text>

      <PrimaryButton label="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};
