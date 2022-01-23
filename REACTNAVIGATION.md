# Instalacion de React Navigation

#### Documentacion:
```
https://reactnavigation.org/docs/getting-started/
```

#### Code instalacion:
```
npm install @react-navigation/native
```

#### Instalacion de dependencias de un proyecto de React sin nada
```
npm install react-native-screens react-native-safe-area-context
```

#### Tenemos que reinstalar los paquetes de los sistemas operativos (en el caso de ios solamente):
```
npx pod-install ios
```

#### Tenemos que hacer un pequeño parentesis a esta instalacion y dirigirnos al siguiente directorio para pegar un codigo necesario en la parte de android
* android/app/src/main/java/com/{navegacionapp (este nombre es en funcion al nombre de tu carpeta)}/MainActivity.java
```
package com.navegacionapp;

import com.facebook.react.ReactActivity;
(
    ESTA IMPORTACION SE TIENE QUE AÑADIR SIN LOS PARENTESIS:
    import android.os.Bundle;
)

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "NavegacionApp";
  }
 (
     ESTE ES EL CODIGO QUE HAY QUE AÑADIR SIN LOS PARENTESIS:
    @Override
    protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
 )
}

```