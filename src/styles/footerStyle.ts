import { StyleSheet } from "react-native"
import { cores } from "./variaveis";
import { fontes } from "./variaveis";

const footerStyle = StyleSheet.create({

    menuInferior: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: cores.branco,
        shadowColor: cores.chocolate,
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 6,
    },

    itemMenu: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgMenu: {
        width: 26,
        height: 26,
        tintColor: cores.cinza,
    },

    imgMenuAtivo: {
        tintColor: cores.rosa,
    },

    txtMenu: {
        fontSize: 11,
        fontFamily: fontes.comum,
        color: cores.cinza,
        marginTop: 4,
    },

    txtMenuAtivo: {
        color: cores.rosa,
        fontFamily: fontes.negrito,
    },

});

export default footerStyle;
