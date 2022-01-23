import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any,any>{}

export const Pagina3Screen = ({navigation}:Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina3Screen</Text>

            <Button 
                title='Regresar'
                onPress={()=>navigation.pop()} //popToTop vuelve a la carta anterior
            />
            <Button 
                title='Ir a la Pagina1'
                onPress={()=>navigation.popToTop()} //popToTop vuelve a la primera carta
            />
        </View>
    );
};
