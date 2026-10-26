import { StyleSheet, TextInput } from "react-native";
import { cores } from "./variaveis";

const cadClienteStyle = StyleSheet.create({
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

  txtEsqueciSenha: {
    fontSize: 12,
    color: cores.rosa,
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
    fontSize: 15,
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

  btnEntrar: {
    width: "80%",
    height: 50,
    backgroundColor: cores.rosa,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
  },

  txtEntrar: {
    color: cores.chocolate,
    fontSize: 25,
    fontWeight: "bold",
  },

  btnEntrarPressed: {
    opacity: 0.8,
  },

  Separador: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
  },

  linha: {
    flex: 1,
    height: 2,
    backgroundColor: cores.rosa,
  },

  textoSeparador: {
    fontSize: 15,
    color: "#888888",
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
    fontSize: 25,
    fontWeight: "bold",
  },

  btnCriarContaPressed: {
    backgroundColor: cores.rosa,
  },
});

export default cadClienteStyle;
