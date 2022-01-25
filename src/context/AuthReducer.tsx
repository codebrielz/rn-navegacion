import { AuthState } from './AuthContext';
// Aqui colocaré el reducer que quiero que maneje mi contexto
// El reducer genera un nuevo estado de mi aplicacion cada vez que cambia su estado
// Nuestra funcion pura siempre tiene que regresar un estado, y en nuestro caso, el estado que tiene que manejar es el AuthState
// funcion pura, es una funcion que resuelve todo en su mismo scope sin depender de otros metodos o funciones externas
// Porque ponemos que el authReducer tiene que regresar un estado tipo AuthState? Porque si el dia de mañana se me olvida implementar un case o algun action y si ese action no está controlado y regresa algo que no sea de tipo AuthState eso reventaría mi aplicación.

//La idea del reducer es que basado al action que recibe, genera un nuevo estado
//1- Recibimos una accion
//2- Esa accion hará que el reducer regrese un nuevo estado
//3- Manejaremos las acciones mediante el switch ya que usualmente suelen ser más de una accion


//Definimos como va a ser nuestra accion:
//Para mandar más de una accion tenemos que utilizar el condicionador or |
type AuthAction = 
|{type: 'signIn'}
|{type:'changeFavIcon', payload:string}
|{type:'signOff'}
|{type:'changeUsername', payload:string}

export const authReducer = ( state:AuthState, action:AuthAction ):AuthState => {
    switch (action.type) {
        case 'signIn':
            return{
                ...state, //<-- Con el operador spreed obtenemos todas las propiedades del state
                isLoggedIn: true, //<-- Gracias a la desestructuracion puedo actualizar el estado a true
                username:'no-username-yet' //<-- y tambien el estado del username
            };
            case 'changeFavIcon':
            return{
                ...state, //<-- Con el operador spreed obtenemos todas las propiedades del state
                favoriteIcon: action.payload
            };
            case 'signOff':
                return{
                    ...state,
                    isLoggedIn:false,
                    favoriteIcon:undefined,
                    username:undefined,
                }
            case 'changeUsername':
                return{
                    ...state,
                    username: action.payload
                }
        default:
            return state;
    }
}