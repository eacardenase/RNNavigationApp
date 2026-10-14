import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen, AboutScreen } from '../screens';
import { HamburguerMenu } from '../components/shared/HamburguerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
      <HamburguerMenu />
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
};
