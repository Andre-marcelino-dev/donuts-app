import { StyleSheet } from "react-native"
import { cores } from "./variaveis";
import { fontes } from "./variaveis";

const configuracoesStyle = StyleSheet.create({

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

    cardUsuario: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: cores.branco,
        borderColor: cores.rosa,
        borderWidth: 2,
        borderRadius: 15,
        padding: 15,
        marginBottom: 25,
    },

    avatarUsuario: {
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: cores.rosaClaro,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },

    imgAvatarUsuario: {
        width: 24,
        height: 24,
        tintColor: cores.rosa,
    },

    // Foto real do cliente: ocupa o círculo todo e não recebe cor
    fotoAvatarUsuario: {
        width: 46,
        height: 46,
        borderRadius: 23,
    },

    infoUsuario: {
        flex: 1,
    },

    nomeUsuario: {
        fontSize: fontes.fontmedia,
        fontFamily: fontes.negrito,
        color: cores.chocolate,
    },

    descricaoUsuario: {
        fontSize: 12,
        fontFamily: fontes.comum,
        color: cores.cinza,
        marginTop: 2,
    },

    tituloSecao: {
        fontSize: fontes.fontmedia,
        fontFamily: fontes.titulo,
        color: cores.chocolate,
        marginBottom: 12,
    },

    itemConta: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: cores.branco,
        borderColor: cores.rosa,
        borderWidth: 2,
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
    },

    iconeCaixaItem: {
        width: 38,
        height: 38,
        borderRadius: 10,
        backgroundColor: cores.rosaClaro,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },

    imgItem: {
        width: 20,
        height: 20,
        tintColor: cores.rosa,
    },

    infoItem: {
        flex: 1,
    },

    tituloItem: {
        fontSize: 14,
        fontFamily: fontes.titulo,
        color: cores.chocolate,
    },

    descricaoItem: {
        fontSize: 11,
        fontFamily: fontes.comum,
        color: cores.cinza,
        marginTop: 2,
    },

    txtSeta: {
        fontSize: 18,
        fontFamily: fontes.negrito,
        color: cores.rosa,
        marginLeft: 8,
    },

    btnInstalar: {
        backgroundColor: cores.rosa,
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },

    txtBtnInstalar: {
        fontSize: 12,
        fontFamily: fontes.negrito,
        color: cores.branco,
    },

    secao: {
        marginBottom: 10,
    },

    btnSair: {
        width: '100%',
        backgroundColor: cores.rosa,
        borderRadius: 15,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },

    txtSair: {
        fontSize: fontes.fontmedia,
        fontFamily: fontes.negrito,
        color: cores.branco,
    },

    // Janelinha "Sair da conta?" (abre na parte de baixo da tela)
    modalFundo: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    modalCaixa: {
        width: '100%',
        maxWidth: 480,
        backgroundColor: cores.branco,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 30,
    },

    modalAlca: {
        width: 42,
        height: 5,
        borderRadius: 3,
        backgroundColor: '#dddddd',
        alignSelf: 'center',
        marginBottom: 18,
    },

    modalTitulo: {
        fontSize: fontes.fontgrande,
        fontFamily: fontes.titulo,
        color: cores.chocolate,
    },

    modalSubtitulo: {
        fontSize: 13,
        fontFamily: fontes.comum,
        color: cores.cinza,
        marginTop: 4,
        marginBottom: 20,
    },

    btnConfirmarSair: {
        width: '100%',
        backgroundColor: '#d32f2f',
        borderRadius: 14,
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: 10,
    },

    txtConfirmarSair: {
        fontSize: fontes.fontmedia,
        fontFamily: fontes.negrito,
        color: cores.branco,
    },

    btnFicar: {
        width: '100%',
        backgroundColor: '#f2f2f2',
        borderRadius: 14,
        paddingVertical: 14,
        alignItems: 'center',
    },

    txtFicar: {
        fontSize: fontes.fontmedia,
        fontFamily: fontes.negrito,
        color: '#555555',
    },

    btnPressionado: {
        opacity: 0.6,
    },

});

export default configuracoesStyle;
