import React, { createContext } from "react";

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
    SignIn: () => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado tambien conocido como higher-order component

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