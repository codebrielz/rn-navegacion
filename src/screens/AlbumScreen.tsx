import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const AlbumScreen = () => {
  const {signOff, authState:{isLoggedIn}} = useContext(AuthContext);
  return (
  <View style={styles.globalMargin}>
      <Text
        style={styles.title}
      >AlbumScreen</Text>
      {
        (isLoggedIn)
        ?
        <Button
        title='signOff'
        onPress={signOff} //<-- Y la utilizamos aqui
      />:
      null
      }
  </View>
  );
};
