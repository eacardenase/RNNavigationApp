import { NavigationContainer } from '@react-navigation/native';
import {
  BottomTabsNavigator,
  // SideMenuNavigator,
  // StackNavigator
} from './presentation/routes';

function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <SideMenuNavigator /> */}
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}

export default App;
