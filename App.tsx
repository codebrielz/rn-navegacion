import 'react-native-gesture-handler';
import React from 'react';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

import { LogBox } from 'react-native';
// import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { DrawerNav } from './src/navigator/DrawerNav';
import { AuthProvider } from './src/context/AuthContext';

LogBox.ignoreLogs(['Sending', 'new NativeEventEmitter()', '[react-native-gesture-handler]'],);
export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <DrawerNav />
        {/* <DrawerNavigator /> */}
        {/* <StackNavigator /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}