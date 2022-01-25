import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

//el primer parametro <Es nuestro type creado en StackNavigator, y el segundo parametro la pagina a la que pertenece>
interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{}

export const PersonaScreen = ({route, navigation}: Props) => {

    const {changeUsername} = useContext(AuthContext);
    
    const params = route.params;

    useEffect(()=>{
        navigation.setOptions({
            title:params.nombre
        })
    },[]);
    
    useEffect(() => {
        changeUsername(params.nombre);
    }, []);
    

    return (
        <View style={styles.globalMargin}>
            <Text>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    );
};
