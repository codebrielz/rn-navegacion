import React, { createContext, useReducer } from "react";
import { authReducer } from './AuthReducer';

// definir como luce que informacion tendré aquí.
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
};

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

// Definir la informacion que voy a proporcionar al resto de componentes
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    signOff: () => void;
    changeFavoriteIcon: (iconName:string) => void;
    changeUsername: (username: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado tambien conocido como higher-order component

export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    //Creamos una funcion que mediante algun elemento JSX vamos a disparar, dentro del scope de esta funcion vamos a hacer el dispatch
    const signIn = () => {
        //El dispatch lo obtenemos mediante el hook useReducer que nos ofrece esa accion, se podria decir que es como el setState pero un poco más complejo, del dispatch obtenemos el type que hemos definido en el authReducer
        dispatch({ type: 'signIn' })
    }

    const signOff = () => {
        //El dispatch lo obtenemos mediante el hook useReducer que nos ofrece esa accion, se podria decir que es como el setState pero un poco más complejo, del dispatch obtenemos el type que hemos definido en el authReducer
        dispatch({ type: 'signOff' })
    }
    const changeFavoriteIcon = (iconName:string)=>{
        dispatch({type:'changeFavIcon',payload:iconName})
    }

    const changeUsername = (username:string) =>{
        dispatch({type:'changeUsername', payload:username});
    }

    return (
        <AuthContext.Provider
            value={{
                // authState:authInitialState,
                authState: authState, //<-- Mi authState será igual al estado(useReducer) de mi context
                signIn: signIn,
                changeFavoriteIcon: changeFavoriteIcon,
                signOff:signOff,
                changeUsername:changeUsername
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}