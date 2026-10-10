import { View, Text } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        ...GlobalStyles.containter,
        marginTop: top,
      }}
    >
      <Text style={GlobalStyles.title}>ProfileScreen</Text>

      <PrimaryButton
        label="Open menu"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
      />
    </View>
  );
};
