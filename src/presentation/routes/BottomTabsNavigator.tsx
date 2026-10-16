import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab3Screen } from '../screens';
import { GlobalColors } from '../theme/theme';
import { StackNavigator, TopTabsNavigator } from './';
import { IonIcon } from '../components/shared';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // headerShown: false,
        tabBarActiveTintColor: GlobalColors.primary,
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
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IonIcon name="home" color={color} />,
        }}
        component={StackNavigator}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Scan',
          tabBarIcon: ({ color }) => <IonIcon name="scan" color={color} />,
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Trips',
          tabBarIcon: ({ color }) => <IonIcon name="airplane" color={color} />,
        }}
        component={Tab3Screen}
      />
    </Tab.Navigator>
  );
};
