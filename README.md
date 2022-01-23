# README
#### comando de instalacion de proyecto de RN con TS
```
npx react-native init AwesomeTSProject --template react-native-template-typescript
```

#### Iniciar proyecto de RN con TS
* En caso de android 
```
npx react-native run-android
```

* En caso de IOS 
```
npx react-native run-ios
```

#### npx pod-install
* Se utiliza para reinstalar todas las dependencias en modo de desarrollo, cuando nosotros estamos instalando dependencias, nuestra app algunas veces no las actualiza, entonces tenemos que realizar el npx pod-install para que las compile y utilice.

#### Proteger de los margenes no especificado del movil

* El hook useSafeAreaInsets() sirve para no colocar el componente que nosotros estamos pintando, en partes del movil que pueda taparse
* ejemplo: 
```
<!-- Sin desestructurar -->
  const insets = useSafeAreaInsets();

<!-- Con desestructuracion -->
  const {top,bottom,right,left} = useSafeAreaInsets();
```
```
 <TopTab.Navigator
      style={{ <-- Con esta propiedad
        paddingTop: top <-- Aqui lo ponemos
      }}
    >
      <TopTab.Screen name="Chat" component={ChatScreen} />
      <TopTab.Screen name="Contact" component={ContactScreen} />
      <TopTab.Screen name="Albums" component={AlbumScreen} />
    </TopTab.Navigator>
```