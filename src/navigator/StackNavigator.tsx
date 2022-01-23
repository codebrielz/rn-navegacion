import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

// Especificamos que rutas van a recibir parametros, en caso de no saber si recibira parametros o no, mejor poner undefined
export type RootStackParams = {
  Pagina1Screen: undefined,
  Pagina2Screen: undefined,
  Pagina3Screen: undefined,
  PersonaScreen: { //"interface" que recibira como generico nuestra interface StackScreenProps (de PersonaScreen)
    id:number,
    nombre:string
  },
}


const Stack = createStackNavigator<RootStackParams>(); //<-- Aqui ponemos nuestro tipado recien creado

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName='Pagina1Screen'
      screenOptions={{
        headerStyle:{
          elevation:0, //Android
          shadowColor:'transparent', //IOS
        },
        cardStyle:{
          backgroundColor:'white'
        }
      }}
    >
      <Stack.Screen name="Pagina1Screen" options={{title:"Pagina 1"}} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{title:"Pagina 2"}} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{title:"Pagina 3"}} component={Pagina3Screen} />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
    </Stack.Navigator>
  );
}