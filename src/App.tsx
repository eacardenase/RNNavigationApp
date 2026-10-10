import { NavigationContainer } from '@react-navigation/native';
import {
  SideMenuNavigator,
  // StackNavigator
} from './presentation/routes';

function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
    </NavigationContainer>
  );
}

export default App;
