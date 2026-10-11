import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen, Tab2Screen, Tab3Screen } from '../screens';
import { GlobalColors } from '../theme/theme';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          // shadowColor: 'transparent',
        },
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        tabBarStyle: {
          backgroundColor: GlobalColors.background,
          // borderTopWidth: 0,
          // elevation: 0,
        },
      }}
    >
      <Tab.Screen name="Tab1" component={Tab1Screen} />
      <Tab.Screen name="Tab2" component={Tab2Screen} />
      <Tab.Screen name="Tab3" component={Tab3Screen} />
    </Tab.Navigator>
  );
};
