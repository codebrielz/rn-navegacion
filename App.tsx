import 'react-native-gesture-handler';
import React from 'react';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

import { LogBox } from 'react-native';
// import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { DrawerNav } from './src/navigator/DrawerNav';

LogBox.ignoreLogs(['Sending','new NativeEventEmitter()','[react-native-gesture-handler]'],);
export const App = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
      {/* <DrawerNavigator /> */}
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
};
