import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps <any,any> {}

export const Pagina2Screen = ({navigation}:Props) => {

    useEffect(()=>{
        navigation.setOptions({
            title:'Hola Mundo', //titulo que aparece en el boton de regresar (arriba izquierda) (en ios este titulo se centra en el header)
            headerBackTitle:'' //IOS titulo que aparece en el boton de regresar (arriba izquierda)
        })
    },[]);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina2Screen</Text>

            <Button
            title='Ir pagina 3'
            onPress={()=> navigation.navigate('Pagina3Screen')} />
        </View>
    );
};
