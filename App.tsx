import 'react-native-gesture-handler';
import React from 'react';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

import { LogBox } from 'react-native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { DrawerNav } from './src/navigator/DrawerNav';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  '[new NativeEventEmitter]'
]);
LogBox.ignoreAllLogs(); //Ignore all log notifications
export const App = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
      {/* <DrawerNavigator /> */}
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
};
