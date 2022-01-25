import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

interface Props{
    iconName:string,
}
export const TouchableIcon = ({iconName}:Props) => {

    const {changeFavoriteIcon,authState:{favoriteIcon}} = useContext(AuthContext);

    return (
        <TouchableOpacity
            onPress={()=>changeFavoriteIcon(iconName)}
        >
            {(iconName == favoriteIcon)
            ?
            <Icon
                name={iconName}
                size={90}
                color="red"
            />
            :
            <Icon
                name={iconName}
                size={90}
                color="#000"
            />
        }
        </TouchableOpacity>
    );
};
