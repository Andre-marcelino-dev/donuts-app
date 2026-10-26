import { StyleSheet } from "react-native"
import { cores } from "./variaveis";
import { fontes } from "./variaveis";

const alterarSenhaStyle = StyleSheet.create({

    header: {
        width: '80%',
        margin: "auto",
        marginTop: 60,
    },

    conteudo: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        width: '100%',
    },

    btnVoltar: {
        position: 'absolute',
        top: 50,
        left: '10%',
        zIndex: 9999,
        elevation: 20,
        width: 42,
        height: 42,
        borderRadius: "50%",
        backgroundColor: cores.rosa,
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconeVoltar: {
        width: 20,
        height: 20,
        tintColor: cores.branco,
    },

    logo: {
        width: 55,
        height: 55,
        borderRadius: "50%",
    },

    titulo: {
        fontSize: 30,
        color: cores.chocolate,
        textAlign: 'left',
        marginTop: 15,
        fontFamily: fontes.titulo,
    },

    subtitulo: {
        marginTop: 10,
        fontSize: 15,
        color: cores.cinza,
    },

    main: {
        width: '80%',
        margin: "auto",
        marginTop: 25,
    },

    form: {
        width: '100%',
        marginBottom: 20,
    },

    campo: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: cores.branco,
        borderColor: cores.rosa,
        borderWidth: 2,
        borderRadius: 12,
        paddingHorizontal: 14,
        height: 52,
        marginBottom: 14,
    },

    iconeCampo: {
        width: 20,
        height: 20,
        tintColor: cores.rosa,
        marginRight: 10,
    },

    inputCampo: {
        flex: 1,
        fontSize: 13,
        fontFamily: fontes.comum,
        color: cores.chocolate,
    },

    btnMostrarSenha: {
        padding: 4,
    },

    imgMostrarSenha: {
        width: 20,
        height: 20,
        tintColor: cores.cinza,
    },

    cardDicas: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: cores.rosaClaro,
        borderColor: cores.rosa,
        borderWidth: 2,
        borderRadius: 12,
        padding: 14,
        marginBottom: 25,
    },

    iconeCaixaDicas: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: cores.rosa,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },

    imgIconeDicas: {
        width: 16,
        height: 16,
        tintColor: cores.branco,
    },

    infoDicas: {
        flex: 1,
    },

    tituloDicas: {
        fontSize: 14,
        fontFamily: fontes.titulo,
        color: cores.chocolate,
        marginBottom: 6,
    },

    itemDica: {
        fontSize: 12,
        fontFamily: fontes.comum,
        color: cores.chocolate,
        marginBottom: 2,
    },

    btnSalvar: {
        width: '100%',
        backgroundColor: cores.rosa,
        borderRadius: 15,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 12,
    },

    txtSalvar: {
        fontSize: fontes.fontmedia,
        fontFamily: fontes.negrito,
        color: cores.branco,
    },

    btnCancelar: {
        width: '100%',
        borderColor: cores.rosa,
        borderWidth: 2,
        borderRadius: 15,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 20,
    },

    txtCancelar: {
        fontSize: fontes.fontmedia,
        fontFamily: fontes.negrito,
        color: cores.rosa,
    },

    txtErro: {
        color: "#d32f2f",
        fontSize: 14,
        textAlign: "center",
        marginBottom: 10,
    },

    txtSucesso: {
        color: cores.verde,
        fontSize: 14,
        textAlign: "center",
        marginBottom: 10,
    },

});

export default alterarSenhaStyle;
