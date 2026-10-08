import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { GlobalStyles } from '../../theme/theme';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={GlobalStyles.containter}>
      <Pressable
        style={GlobalStyles.primaryButton}
        onPress={() => navigation.navigate('Products' as never)}
      >
        <Text style={GlobalStyles.buttonText}>Products</Text>
      </Pressable>
    </View>
  );
};
