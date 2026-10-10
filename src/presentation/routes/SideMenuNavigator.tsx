import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens';
import { StackNavigator } from './StackNavigator';
import { GlobalColors } from '../theme/theme';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
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
