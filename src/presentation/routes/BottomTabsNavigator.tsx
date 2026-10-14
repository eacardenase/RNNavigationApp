import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab3Screen } from '../screens';
import { GlobalColors } from '../theme/theme';
import { StackNavigator, TopTabsNavigator } from './';

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
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: ({ color }) => <Text style={{ color }}>Tab1</Text>,
        }}
        component={StackNavigator}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({ color }) => <Text style={{ color }}>Tab2</Text>,
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({ color }) => <Text style={{ color }}>Tab3</Text>,
        }}
        component={Tab3Screen}
      />
    </Tab.Navigator>
  );
};
