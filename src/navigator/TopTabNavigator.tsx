import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const TopTab = createMaterialTopTabNavigator();

let iconTabTop = '';

export const TopTabNavigator = () => {

  const {top} = useSafeAreaInsets();

  return (
    <TopTab.Navigator
      style={{
        paddingTop: top
      }}
      sceneContainerStyle={{
        backgroundColor:'white'
      }}
      screenOptions={({route})=>({
        tabBarPressColor: colores.primary, //tabBarPressColor es un efecto como de splash al dar click en el boton, esto es para modificar su color que muestra al dar click
        tabBarShowIcon: true, //Permite mostrar iconos
        tabBarIndicatorStyle:{ //tabBarIndicatorStyle es para modificar el color del borde cuando hay un boton activo
          backgroundColor: colores.primary
        },
        tabBarStyle: { //Estilo de la barra
          borderBottomColor: colores.primary, //establecer el borde de la parte inferior
          borderBottomWidth: 0, //Tamaño del borde de la parte inferior
          // IOS:
          shadowColor:'transparent',
          //General
          elevation: 0 //Elevacion (sombreado) de la borde superior de la barra inferior
        },
        tabBarIcon:({color,focused}) => {
          switch (route.name) {
            case 'Chat':
              iconTabTop ='chatbox-outline'
              break;  
              case 'Contact':
                iconTabTop ='call-outline'
                break;
                case 'Albums':
              iconTabTop ='albums-outline'
              break;
            default:
              break;
          }
          return <Icon name={iconTabTop} size={25} color={color} />;
        }
        })
      }
    >
                
      <TopTab.Screen name="Chat" component={ChatScreen} />
      <TopTab.Screen name="Contact" component={ContactScreen} />
      <TopTab.Screen name="Albums" component={AlbumScreen} />
    </TopTab.Navigator>
  );
}