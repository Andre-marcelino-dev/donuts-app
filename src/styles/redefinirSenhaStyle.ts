import { StyleSheet, TextInput } from "react-native";
import { cores } from "./variaveis";
import { fontes} from "./variaveis";



const redefinirSenhaStyle = StyleSheet.create({
  conteudo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },

  titulo: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
    color: cores.chocolate,
    textAlign: "center",
    fontFamily:fontes.titulo,
  },

  subtitulo: {
    marginTop: 10,
    fontSize: 18,
    color: cores.cinza,
  },

  form: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    paddingHorizontal: "5%",
  },

  input: {
    height: 50,
    flexDirection: "row",
    borderColor: cores.rosa,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width: "100%",
    marginVertical: 10,
    justifyContent: "space-between",
  },

  icone: {
    width: 30,
    height: 30,
    marginRight: 10,
  },

  TextInput: {
    width: "100%",
  },

  btnMostrarSenha: {
    justifyContent: "center",
  },

  mostrarSenha: {
    width: 20,
    height: 20,
    marginVertical: 5,
  },

  txtEnviar: {
    fontSize: fontes.fontmedia,
    color: cores.chocolate,
    textDecorationLine: "underline",
  },

  termosUso: {
    flexDirection: "row",
    width: "100%",
  },

  btnTermos: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  checkTermos: {
    width: "100%",
    height: "100%",
    backgroundColor: cores.branco,
    borderColor: cores.rosa,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  checkTermosAtivo: {
    backgroundColor: cores.rosa,
  },

  checkOK: {
    fontSize: fontes.fontmedia,
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: 15,
  },

  txtTermos: {
    fontSize: 15,
    color: cores.cinza,
  },

  termoAceito: {
    color: cores.cinza,
  },

  linkTermos: {
    fontSize: 15,
    color: cores.rosa,
    textDecorationLine: "underline",
  },

  btnSalvar: {
    width: "80%",
    height: 50,
    backgroundColor: cores.rosa,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 20,
    
  },




  btnCriarConta: {
    width: "80%",
    height: 50,
    backgroundColor: cores.rosa,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: cores.rosa,
    borderWidth: 2,
  },

  txtCriarConta: {
    color: cores.chocolate,
    fontSize:fontes.fonttitulo,
    fontWeight: "bold",
  },

  btnSalvarPressed: {
    backgroundColor: cores.rosa,
  },


    btnVoltar: {
    width: "80%",
    height: 50,
    backgroundColor: "#fbede6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#e07a85",
    borderWidth: 2,
  },

  txtVoltar: {
    color: "#000000",
    fontSize:fontes.fontmedia,
    fontWeight: "bold",
  },

  btnVoltarPressed: {
    backgroundColor: "#e07a85",
  },

  txtErro: {
    color: "#d32f2f",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },

  txtMensagem: {
    color: "#2e7d32",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },

  txtReenviar: {
    color: cores.rosa,
    fontFamily: fontes.negrito,
    fontSize: 13,
    textAlign: "center",
    textDecorationLine: "underline",
    marginVertical: 12,
  },
});

export default redefinirSenhaStyle;
