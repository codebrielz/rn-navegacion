import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from '../theme/appTheme';
// import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {

    //useWindowDimensions(), es para obtener el ancho y alto de la pantalla.
    const { width } = useWindowDimensions();

    //useEffect, renderiza la funcionalidad, componente o lo que sea que escribamos en su cuerpo, una sola vez si no le indicamos nada en sus llaves cuadradas, si indicaramos algúna referencia, cada vez que esa referencia se actualice, se renderizaría el componente que hemos puesto en su cuerpo.
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Icon name="menu-outline" size={30} color="#000" />
                </TouchableOpacity>
            )
        });
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>

            <Button
                title='Ir pagina 2'
                onPress={() => navigation.navigate('Pagina2Screen')}
            />

            <Text
                style={{
                    marginVertical: 20,
                    fontSize: 18,
                    color: 'black'
                }}
            >Navegar con argumentos</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856d6'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'pedro'
                    })}
                >
                    <Icon name="man-outline" size={30} color="#fff" />
                    <Text style={styles.botonGrandeTexto}>
                        Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#ff9427'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Maria'
                    })}
                >
                    <Icon name="woman-outline" size={30} color="#fff" />
                    <Text style={styles.botonGrandeTexto}>Maria</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};
