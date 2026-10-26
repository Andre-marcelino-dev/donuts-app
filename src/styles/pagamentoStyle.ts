import { StyleSheet } from "react-native"
import { cores } from "./variaveis";
import { fontes } from "./variaveis";

const pagamentoStyle = StyleSheet.create({

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

    card: {
        width: '100%',
        backgroundColor: cores.branco,
        borderColor: cores.rosa,
        borderWidth: 2,
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
    },

    linhaTopoCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    iconeEndereco: {
        width: 18,
        height: 18,
        marginRight: 8,
        tintColor: cores.rosa,
    },

    iconeCarteira: {
        width: 18,
        height: 18,
        marginRight: 8,
        tintColor: cores.rosa,
    },

    labelCard: {
        fontSize: fontes.fontmedia,
        fontFamily: fontes.negrito,
        color: cores.rosa,
    },

    txtAlterar: {
        fontSize: 13,
        fontFamily: fontes.negrito,
        color: cores.rosa,
        textDecorationLine: 'underline',
    },

    txtEnderecoTitulo: {
        fontSize: fontes.fontmedia,
        fontFamily: fontes.titulo,
        color: cores.chocolate,
        marginTop: 8,
    },

    txtEndereco: {
        fontSize: 13,
        fontFamily: fontes.comum,
        color: cores.cinza,
        marginTop: 4,
        lineHeight: 18,
    },

    // Endereço fora da área de entrega
    txtAvisoEntrega: {
        fontSize: 12,
        fontFamily: fontes.comum,
        color: "#d32f2f",
        marginTop: 6,
        lineHeight: 16,
    },

    linhaEntregaRetirada: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    segmentado: {
        flexDirection: 'row',
        borderColor: cores.rosa,
        borderWidth: 2,
        borderRadius: 10,
        overflow: 'hidden',
    },

    segmentoItem: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },

    segmentoItemAtivo: {
        backgroundColor: cores.rosa,
    },

    txtSegmento: {
        fontSize: 13,
        fontFamily: fontes.negrito,
        color: cores.rosa,
    },

    txtSegmentoAtivo: {
        color: cores.branco,
    },

    previsao: {
        alignItems: 'flex-end',
    },

    txtPrevisaoValor: {
        fontSize: fontes.fontmedia,
        fontFamily: fontes.negrito,
        color: cores.chocolate,
    },

    txtPrevisaoLabel: {
        fontSize: 11,
        fontFamily: fontes.comum,
        color: cores.cinza,
        marginTop: 2,
    },

    segmentado3: {
        flexDirection: 'row',
        borderColor: cores.rosa,
        borderWidth: 2,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 10,
    },

    segmentoItem3: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    linhaObservacao: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconeObservacao: {
        width: 18,
        height: 18,
        marginRight: 8,
        tintColor: cores.rosa,
    },

    inputObservacao: {
        width: '100%',
        borderColor: cores.rosa,
        borderWidth: 2,
        borderRadius: 10,
        padding: 12,
        marginTop: 10,
        minHeight: 50,
        fontSize: 13,
        color: cores.chocolate,
        fontFamily: fontes.comum,
        textAlignVertical: 'top',
    },

    iconeResumo: {
        width: 20,
        height: 20,
        marginRight: 8,
        tintColor: cores.rosa,
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
        width: 22,
        height: 22,
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

    btnConfirmar: {
        width: '80%',
        alignSelf: 'center',
        backgroundColor: cores.rosa,
        borderRadius: 15,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 20,
    },

    txtConfirmar: {
        fontSize: fontes.fontmedia,
        fontFamily: fontes.negrito,
        color: cores.chocolate,
    },

    txtErro: {
        color: "#d32f2f",
        fontSize: 14,
        textAlign: "center",
        marginHorizontal: 20,
        marginBottom: 10,
    },

});

export default pagamentoStyle;
