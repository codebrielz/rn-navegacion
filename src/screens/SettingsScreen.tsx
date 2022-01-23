import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const SettingsScreen = () => {

  const { authState } = useContext(AuthContext);

  // El hook useSafeAreaInsets() nos ofrece propiedades para ajustar los limites de la pantalla a mi gusto (con un control más elevado que con la etiqueta <SafeAreaView></SafeAreaView> )
  const insets = useSafeAreaInsets();

  return (
  <View style={{
    ...styles.globalMargin,
    marginTop: insets.top + 20
    }} >
      <Text style={ styles.title}>SettingsScreen</Text>
      <Text>{JSON.stringify(authState,null,4)}</Text>
  </View>
  );
};
