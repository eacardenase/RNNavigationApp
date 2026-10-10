import { StyleSheet, useWindowDimensions, View } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { ProfileScreen } from '../screens';
import { StackNavigator } from './StackNavigator';
import { GlobalColors } from '../theme/theme';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: width >= 758 ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: GlobalColors.primary,
        drawerActiveTintColor: GlobalColors.background,
        drawerInactiveTintColor: GlobalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 15,
        },
      }}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.sideMenuHeader} />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  sideMenuHeader: {
    height: 200,
    backgroundColor: GlobalColors.primary,
    margin: 30,
    borderRadius: 50,
  },
});
