import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

  const { width } = useWindowDimensions(); //Obtener las dimensiones de la pantalla

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 758 ? 'permanent' : 'front', //Menú modo horizontal
        headerShown: false // Oculta la hamburguesa por defecto
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'home' }} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{ title: 'settings' }} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}