import { StyleSheet } from "react-native"
import { cores } from "./variaveis";
import { fontes } from "./variaveis";

const detalhesPedidoStyle = StyleSheet.create({

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
        fontFamily: fontes.negrito,
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

    cardInfoPedido: {
        width: '100%',
        backgroundColor: cores.branco,
        borderColor: cores.rosa,
        borderWidth: 2,
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
    },

    cardEtapas: {
        width: '100%',
        backgroundColor: cores.branco,
        borderColor: cores.rosa,
        borderWidth: 2,
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
    },

    linhaTopo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    linhaNumeroPedido: {
        flexDirection: 'row',
        alignItems: 'center',
        flexShrink: 1,
        marginRight: 8,
    },

    iconeCaixaPedido: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: cores.rosaClaro,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },

    imgPedido: {
        width: 30,
        height: 30,
        tintColor: cores.rosa,
    },

    txtNumeroPedido: {
        fontSize: fontes.fontmedia,
        fontFamily: fontes.negrito,
        color: cores.chocolate,
        flexShrink: 1,
    },

    txtData: {
        fontSize: 12,
        fontFamily: fontes.comum,
        color: cores.cinza,
        marginTop: 4,
        marginLeft: 40,
    },

    badgeStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: cores.rosa,
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 12,
        flexShrink: 0,
        minWidth: 100,
        justifyContent: 'center',
    },

    imgBadgeStatus: {
        width: 30,
        height: 30,
        marginRight: 6,
        tintColor: cores.branco,
        flexShrink: 0,
    },

    txtBadgeStatus: {
        fontSize: 15,
        fontFamily: fontes.negrito,
        color: cores.branco,
        flexShrink: 0,
        flexGrow: 0,
    },

    linhaEtapas: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 4,
        overflow: 'visible',
    },

    etapaItem: {
        alignItems: 'center',
        width: 76,
        overflow: 'visible',
    },

    circuloEtapa: {
        width: 34,
        height: 34,
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: cores.rosaClaro,
    },

    circuloEtapaAtual: {
        backgroundColor: '#d9f2df',
    },

    imgEtapa: {
        width: 30,
        height: 30,
    },

    blocoTxtEtapa: {
        alignItems: 'center',
        marginTop: 6,
        overflow: 'visible',
    },

    txtEtapa: {
        width: '100%',
        fontSize: 12,
        lineHeight: 15,
        fontFamily: fontes.comum,
        color: cores.cinza,
        textAlign: 'center',
        overflow: 'visible',
    },

    txtEtapaAtivaCompleto: {
        width: '100%',
        fontSize: 12,
        lineHeight: 15,
        fontFamily: fontes.negrito,
        color: cores.cinza,
        textAlign: 'center',
        overflow: 'visible',
    },

    linhaConectora: {
        width: '10%',
        height: 2,
        backgroundColor: cores.rosaClaro,
        marginTop: 17,
       
    },

    linhaConectoraAtiva: {
        backgroundColor: cores.verde,
    },

    caixaPrevisao: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: cores.rosaClaro,
        borderRadius: 10,
        paddingVertical: 10,
        marginTop: 18,
    },

    imgPrevisao: {
        width: 30,
        height: 30,
        marginRight: 8,
        tintColor: cores.rosa,
    },

    txtPrevisao: {
        fontSize: 13,
        fontFamily: fontes.negrito,
        color: cores.rosa,
    },

    card: {
        width: '100%',
        backgroundColor: cores.branco,
        borderColor: cores.rosa,
        borderWidth: 2,
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
    },

    linhaLabelCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    linhaIconeLabel: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconeLabelCard: {
        width: 30,
        height: 30,
        marginRight: 8,
        tintColor: cores.rosa,
    },

    labelCard: {
        fontSize: fontes.fontmedia,
        fontFamily: fontes.negrito,
        color: cores.rosa,
    },

    itemResumo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12,
    },

    linhaItemResumo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },

    imgItemResumo: {
        width: 30,
        height: 30,
        borderRadius: 6,
        marginRight: 10,
    },

    txtItemResumo: {
        fontSize: 13,
        fontFamily: fontes.comum,
        color: cores.chocolate,
        flexShrink: 1,
    },

    txtValorItemResumo: {
        fontSize: 13,
        fontFamily: fontes.negrito,
        color: cores.chocolate,
    },

    divisor: {
        width: '100%',
        height: 1,
        backgroundColor: cores.rosa,
        marginVertical: 12,
    },

    linhaResumo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },

    txtLabelResumo: {
        fontSize: 14,
        fontFamily: fontes.negrito,
        color: cores.chocolate,
    },

    txtValorResumo: {
        fontSize: 14,
        fontFamily: fontes.negrito,
        color: cores.chocolate,
    },

    txtLabelDesconto: {
        fontSize: 14,
        fontFamily: fontes.negrito,
        color: cores.verde,
    },

    txtCodigoCupom: {
        fontSize: 14,
        fontFamily: fontes.negrito,
        color: cores.verde,
    },

    txtValorDesconto: {
        fontSize: 14,
        fontFamily: fontes.negrito,
        color: cores.verde,
    },

    txtLabelTotal: {
        fontSize: fontes.fontmedia,
        fontFamily: fontes.negrito,
        color: cores.chocolate,
    },

    txtValorTotal: {
        fontSize: fontes.fontmedia,
        fontFamily: fontes.negrito,
        color: cores.rosa,
    },

    pillPagamento: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: cores.rosaClaro,
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },

    imgPagamento: {
        width: 30,
        height: 30,
        marginRight: 6,
        tintColor: cores.rosa,
    },

    txtPagamento: {
        fontSize: 15,
        fontFamily: fontes.negrito,
        color: cores.rosa,
    },

    txtObservacao: {
        fontSize: 15,
        fontFamily: fontes.comum,
        color: cores.cinza,
        marginTop: 10,
    },

    linhaAcoes: {
        flexDirection: 'row',
        marginBottom: 20,
    },

    btnCopia: {
        flex: 1,
        flexDirection: 'row',
        borderColor: cores.rosa,
        borderWidth: 2,
        borderRadius: 12,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },

    imgAcao: {
        width: 20,
        height: 20,
        marginRight: 8,
        tintColor: cores.rosa,
    },

    txtCopia: {
        fontSize: 15,
        fontFamily: fontes.negrito,
        color: cores.rosa,
    },

    btnPedirNovamente: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: cores.rosa,
        borderRadius: 12,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgAcaoBranco: {
        width: 20,
        height: 20,
        marginRight: 8,
        tintColor: cores.branco,
    },

    txtPedirNovamente: {
        fontSize: 15,
        fontFamily: fontes.negrito,
        color: cores.branco,
    },

});

export default detalhesPedidoStyle;
