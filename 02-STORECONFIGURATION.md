# Configuracion de la Store (useContext)

- El store es para indicar que informacion queremos que se herede a nuestros componentes hijos, sin importar donde se encuentre el componente en nuestro arbol de componentes
- creamos un directorio nuevo llamado context donde manejaremos los archivos que queramos compartir, por ejemplo el AuthContext, que es para verificar en TODA la aplicacion si el estado de la autenticacion es true o false
- nosotros antes de crear el context, tenemos que saber que informacion almacenará nuestra store
- Vamos a crear una interface para manejar cierta informacion, como por ejemplo si el usuario está autenticado o no, si el usuario tiene o no un username...

```
// definir como luce que informacion tendré aquí.
export interface AuthState{
    isLoggedIn: boolean;
    username?:string;
    favoriteIcon?:string;
};
```

- Tambien tenemos que configurar el estado inicial de mi aplicacion desde la store y el tipo del estado es la interface anteriormente creada, definimos las propiedades obligatorios y las opcionales, podemos ponerlas como undefined o no ponerlas

```
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username:undefined,
    favoriteIcon:undefined,
}
```

- Y AHORA viene la parte de crear el context
- creamos el contexto con la propiedad createContext() y tenemos que importarla de react

```
import { createContext } from "react";
```

```
export const AuthContext = createContext({});
```

- En los parentesis de createContext tenemos que colocar la informacion que mi context va a proporcionar al resto de componentes (lo que el quiere mostrar)

- Entonces vamos a crear una interface para saber que informacion vamos a pasar a nuestros hijos, es decir, lo usaremos para decirle a React como luce y qué expone el context
- Creamos la interface antes del metodo createContext()

```
// Definir la informacion que voy a proporcionar al resto de componentes
export interface AuthContextProps {
    authState: AuthState; // <-- Queremos proporcionar el authState de tipo AuthState
    SignIn: () => void; // <-- y tambien proporcionar la funcion de iniciar sesion
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps); //<-- Aqui le indicamos que es de tipo AuthContextProps mediante el as
```

- Ahora tenemos que configurar el componente que provee la informacion

```
// Componente proveedor del estado tambien conocido como higher-order component

export const AuthProvider = () => {
    return(
        <AuthContext.Provider>
            {AQUI DENTRO NECESITO PASAR LOS HIJOS}
        </AuthContext.Provider>
    );
}
```

* Para recibir a los hijos, lo haremos mediante los props
```
export const AuthProvider = ({children}) => { <--Mediante los props (AQUI)
    return(
        <AuthContext.Provider>
            {AQUI DENTRO NECESITO PASAR LOS HIJOS}
        </AuthContext.Provider>
    );
}
```

* Hay dos maneras de indicar de que tipo son mis children, una es especificando que son de tipo JSX.Element y otra de tipo any (ya que estoy seguro de que recibiré a los hijos):
* Recibir solamente un hijo mediante props:
```
export const AuthProvider = ({children}:{children:JSX.Element}) =>{...}
```

* Recibir un arreglo de hijos mediante props:
```
export const AuthProvider = ({children}:{children:JSX.Element[]}) =>{...} <-- Ojo las llaves cuadradas
```

* O simplemente poner de tipo any (como en mi caso)
```
export const AuthProvider = ({children}:any) =>{...}
```

* Ahora tengo que indicar que value tiene mi proveedor ( es decir que informacion es necesario pasar a mis hijos )
```
export const AuthProvider = ({children}:any) => {
    return(
        <AuthContext.Provider
            value={{
                authState:authInitialState,
                SignIn:() => {}
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
```

* Ahora nos dirigimos al App.tsx que es el lugar más alto de mi aplicación para colocar el provider

* Para mantener la legibilidad de nuestro codigo vamos a crearnos otro funcional component que contendrá nuestro context 
```
const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
```
* Y ahora vamos a colocar nuestro AppState que retorna un JSX.Element al funcional component principal, en este caso lo pondre en el segundo nivel más alto para respetar el NavigationContainer
```
export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <DrawerNav />
        {/* <DrawerNavigator /> */}
        {/* <StackNavigator /> */}
      </AppState>
    </NavigationContainer>
  );
};
```
* Codigo completo:
```
export const App = () => {
  return (
    <NavigationContainer>
      <AppState> <-- Provider
        <DrawerNav /> <--Hijo obtenido por el momento
        {/* <DrawerNavigator /> */}
        {/* <StackNavigator /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }: any) => { <-- los hijos se obtienen poniendolos dentro de la etiqueta <AppState></AppState>
  return (
    <AuthProvider> <--Nuestro AuthProvider obtiene todos los hijos
      {children} <--aqui
    </AuthProvider>
  )
}
```