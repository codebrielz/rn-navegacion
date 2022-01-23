import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';

// En tabs pongo los componentes que quiero mostrar al dar click a alguna opcion de la barra inferior de mi aplicacion

// Nueva variable para gestionar los iconos mediante un switch
let iconName: string;

// Funcion para condicionar entre un sistema operativo y otro
export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsAndroid />
}


// navegador inferior para Android
const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colores.primary
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colores.primary, //Establece el color del boton activo en el que se encuentra el screen relacionado
                tabBarStyle: { //Estilo de la barra
                    borderTopColor: colores.primary, //establecer el borde de la parte superior
                    borderTopWidth: 0, //Tamaño del borde de la parte superior
                    elevation: 0 //Elevacion (sombreado) de la borde superior de la barra inferior
                },
                tabBarLabelStyle: { //El estilo que contendrá nuestro texto o iconos que se encuentran en la barra inferior
                    fontSize: 15 //Tamaño del texto o icono de la barra inferior
                },
                tabBarIcon: ({ color, focused }) => {
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'brush-outline'
                            break;
                        case 'TopTabNavigator':
                            iconName = 'bulb-outline'
                            break;
                        case 'StackNavigator':
                            iconName = 'ellipsis-horizontal-outline'
                            break;
                        default:
                            break;
                    }
                    return <Icon name={iconName} size={25} color={color} />
                }
            })}
        >
            {/* Aqui pongo los componentes que quiero mostrar al dar click a los botones de la barra inferior */}
            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'tab 1' }} component={Tab1Screen} />
            <BottomTabAndroid.Screen name="TopTabNavigator" options={{ title: 'tab 2' }} component={TopTabNavigator} />
            <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'stack' }} component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
}


// navegador inferior para IOS

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {

    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white' //backgroundColor, el color de fondo de la app
            }}
            screenOptions={({ route }) => ({ //route viene de los props, pero desestructurado, esto nos ofrece las rutas de nuestra app
                tabBarActiveTintColor: colores.primary, //Establece el color del boton activo en el que se encuentra el screen relacionado
                tabBarStyle: { //Estilo de la barra inferior
                    borderTopColor: colores.primary, //establecer el borde de la parte superior
                    borderTopWidth: 0, //Tamaño del borde de la parte superior
                    elevation: 0 //Elevacion (sombreado) de la borde superior de la barra inferior
                },
                tabBarLabelStyle: { //El estilo que contendrá nuestro texto o iconos que se encuentran en la barra inferior
                    fontSize: 15 //Tamaño del texto o icono de la barra inferior
                },
                tabBarIcon: ({ color, focused }) => {//Diseño y establecer relacion entre pantalla y boton al dar click
                    switch (route.name) {//route.name es el nombre que contiene nuestra ruta
                        case 'Tab1Screen':
                            iconName = 'brush-outline'//el route.name es igual a Tab1Screen, si es true, ejecuta el codigo siguiente hasta break.
                            break;
                        case 'TopTabNavigator':
                            iconName = 'bulb-outline'
                            break;
                        case 'StackNavigator':
                            iconName = 'ellipsis-horizontal-outline'
                            break;
                        default:
                            break;
                    }
                    return <Text style={{ color: color }}>{iconName}</Text>; //Al ser un JSX tenemos que retornar algo de tipo HTML
                }
            })}
        >

            {/* Primera manera */}
            {/* <Tab.Screen name="Tab1Screen" options={{title:'tab 1', tabBarIcon:({color})=> <Text style={{color: color}}>T1</Text> }}  component={Tab1Screen} /> */}

            {/* Manera recomendada */}
            {/* Aqui pongo los componentes que quiero mostrar al dar click a los botones de la barra inferior */}
            {/* name: nombre de nuestra ruta */}
            {/* options: las opciones de nuestra ruta, como ponerle un titulo que se muestra en nuestra app */}
            {/* component: el componente a mostrar en relacion a nuestra ruta */}
            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'tab 1' }} component={Tab1Screen} />
            <BottomTabIOS.Screen name="TopTabNavigator" options={{ title: 'tab 2' }} component={TopTabNavigator} />
            <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'stack' }} component={StackNavigator} />
        </BottomTabIOS.Navigator>
    );
}