import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactScreen = () => {

  //Utilizando el useContext vamos a acceder al context que nos interesa para autenticarnos
  //Nos ofrece la accion de signIn (que hemos creado en AuthContext y compartido mediante el provider)
  //Podemos acceder al authState para acceder a sus propiedades y mediante condiciones mostrar o no un componente
  const { signIn, authState:{ isLoggedIn } } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactScreen</Text>
      {
        (isLoggedIn)
          ?
          null
          :
          <Button
            title='SignIn'
            onPress={signIn} //<-- Y la utilizamos aqui
          />
      }
    </View>
  );
};
