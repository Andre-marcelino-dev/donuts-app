import { StyleSheet } from "react-native";
import { cores } from "./variaveis";

const linkSenhaModalStyle = StyleSheet.create({
  sobrepor: {
    flex: 1,
    backgroundColor: cores.chocolate,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  conteudo: {
    width: "100%",
    backgroundColor: cores.branco,
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 24,
    shadowColor: cores.chocolate,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: cores.chocolate,
    marginBottom: 16,
  },

  texto: {
    fontSize: 17,
    color: cores.cinza,
    lineHeight: 20,
    textAlign: "justify",
  },

  textoCentro: {
    fontSize: 16,
    color: cores.cinza,
    lineHeight: 22,
    textAlign: "center",
  },

  // Círculo verde com o ✓ da janela de sucesso
  iconeSucesso: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#e8f5e9",
    borderWidth: 2,
    borderColor: "#2e7d32",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },

  txtIconeSucesso: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2e7d32",
  },

  // Círculo rosa com o ! da janela de aviso
  iconeAviso: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: cores.rosaClaro,
    borderWidth: 2,
    borderColor: cores.rosa,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },

  txtIconeAviso: {
    fontSize: 32,
    fontWeight: "bold",
    color: cores.rosa,
  },

  textoValidade: {
    fontSize: 14,
    color: cores.rosa,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 16,
  },

  btnOk: {
    width: "60%",
    height: 50,
    marginTop: 24,
    backgroundColor: cores.rosa,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  btnOkPressed: {
    opacity: 0.8,
  },

  txtOk: {
    color: cores.chocolate,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default linkSenhaModalStyle;
