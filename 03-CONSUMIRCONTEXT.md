# CONSUMIR CONTEXT EN MI APLICACION

- Nos dirigimos al archivo SettingsScreen.tsx y vamos a utilizar el hook useContext el cual recibe el context que necesito recibir, es decir, AuthContext

```
  import { AuthContext } from '../context/AuthContext';

  const { authState } = useContext(AuthContext);
```

- Recibo el authState para obtener el estado de la autenticacion
```
export const SettingsScreen = () => {

  const { authState } = useContext(AuthContext); <-- Mi context

  // El hook useSafeAreaInsets() nos ofrece propiedades para ajustar los limites de la pantalla a mi gusto (con un control más elevado que con la etiqueta <SafeAreaView></SafeAreaView> )
  const insets = useSafeAreaInsets();

  return (
  <View style={{
    ...styles.globalMargin,
    marginTop: insets.top + 20
    }} >
      <Text style={ styles.title}>SettingsScreen</Text>
      <Text>{JSON.stringify(authState,null,4)}</Text> <-- Aqui muestro la informacion en formato JSON para verificar que realmente obtengo la data
  </View>
  );
};
```
* Ahora tenemos que llamar el signIn (de mi context) y de alguna manera tiene que cambiar el estado de isLoggedIn a true y para actualizar los estados, vamos a estar trabajando con el useReducer
* El useReducer es practicamente lo mismo que el useState, trabajan para lo mismo, mantener el estado, solo que el useReducer se utiliza más cuando tenemos estados más complejos o en un estado del cual no estamos seguros cuantas propiedades va a tener o si tiene propiedades anidadas o es un estado bastante grande, que alguna accion puede hacer varias modificaciones y dejar los anteriores como estaban.
* Usualmente en los context se trabaja con el reducer