import { StyleSheet } from "react-native";

export const colores = {
    primary:'#5856d6',
}

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    title:{
        fontSize:30,
        marginBottom:10
    },
    botonGrande:{
        width:100,
        height:100,
        backgroundColor:'green',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginRight:10
    },
    botonGrandeTexto:{
        fontSize:20,
        color:'white'
    },
    avatarContainer:{
        alignItems:'center',
        marginTop:20
    },
    avatar:{
        width:150,
        height:150,
        borderRadius:100,
    },
    menuContainer:{
        marginVertical:30,
        marginHorizontal:50,
    },
    menuBoton:{
        marginVertical:10
    },
    menuTexto:{
        fontSize:20
    }
});