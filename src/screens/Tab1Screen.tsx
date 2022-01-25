import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {
    useEffect(() => {
        console.log('Tab1Screen effect');
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Iconos</Text>
            <View style={{
                flexDirection:'row'
            }}>
                <TouchableIcon iconName="rocket-outline"/>
                <TouchableIcon iconName="airplane-outline"/>
                <TouchableIcon iconName="american-football-outline"/>
                <TouchableIcon iconName="battery-half-outline"/>
            </View>
        </View>
    );
};
