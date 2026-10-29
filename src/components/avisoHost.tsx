import { useEffect, useState } from "react";
import { Modal, View, Text, Pressable } from "react-native";

import linkSenhaModalStyle from "@/styles/linkSenhaModalStyle";
import { registrarAviso } from "@/utils/avisar";

// Janela usada pelo avisar() em qualquer tela (no lugar do alert do navegador)
export default function AvisoHost() {
  const [mensagem, setMensagem] = useState<string | null>(null);

  useEffect(() => {
    registrarAviso(setMensagem);
    return () => registrarAviso(null);
  }, []);

  return (
    <Modal
      visible={mensagem !== null}
      transparent
      animationType="fade"
      onRequestClose={() => setMensagem(null)}
    >
      <View style={linkSenhaModalStyle.sobrepor}>
        <View style={linkSenhaModalStyle.conteudo}>
          <View style={linkSenhaModalStyle.iconeAviso}>
            <Text style={linkSenhaModalStyle.txtIconeAviso}>!</Text>
          </View>

          <Text style={linkSenhaModalStyle.titulo}>Atenção</Text>

          <Text style={linkSenhaModalStyle.textoCentro}>{mensagem}</Text>

          <Pressable
            style={({ pressed }) => [
              linkSenhaModalStyle.btnOk,
              pressed && linkSenhaModalStyle.btnOkPressed,
            ]}
            onPress={() => setMensagem(null)}
          >
            <Text style={linkSenhaModalStyle.txtOk}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
