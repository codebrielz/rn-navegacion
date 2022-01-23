import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const DrawerNav = () => {

  const { width } = useWindowDimensions(); //Obtener las dimensiones de la pantalla

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 758 ? 'permanent' : 'front', //Menú modo horizontal
        headerShown: false, // Oculta la hamburguesa por defecto
      }}
      // Le mandamos las props a nuestro drawerContent y en nuestro MenuInterno lo desestructuramos para poder utilizar sus propiedades
      drawerContent={(props) => <MenuInterno {...props} />} //{...props} <-- desestructuramos las props que vienen del funtional component
    >
      {/* Definicion de rutas de mi aplicación */}
      <Drawer.Screen name="Tabs" component={Tabs} /> 
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} /> 
    </Drawer.Navigator>
  );
}

// Funtional Component
// Como he obtenido el tipo de las props? Si dejamos el raton encima de drawerContent que se encuentra en nuestro jsx, nos indica que sus props reciben como tipo el DrawerContentComponentProps
const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View
        style={styles.avatarContainer}
      >
        <Image
          source={{
            uri: 'https://gladstoneentertainment.com/wp-content/uploads/2018/05/avatar-placeholder.gif'
          }}
          style={
            styles.avatar
          }
        />
      </View>

      {/* Opciones de menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('Tabs')} //<-- Path al que quiero navegar (Anteriormente en este archivo tienen que estar definidas, mirar más arriba para verlo)
        >
          <Text style={styles.menuTexto}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuBoton} >
          <Text
            style={styles.menuTexto}
            onPress={() => navigation.navigate('SettingsScreen')} //<-- Path al que quiero navegar (Anteriormente en este archivo tienen que estar definidas, mirar más arriba para verlo)
          >Ajustes</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  )
}