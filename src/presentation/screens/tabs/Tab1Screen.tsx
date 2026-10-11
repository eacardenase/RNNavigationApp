import { useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../theme/theme';

export const Tab1Screen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
        >
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  });

  return (
    <View style={GlobalStyles.containter}>
      <Text style={GlobalStyles.title}>Tab1 Screen</Text>
    </View>
  );
};
