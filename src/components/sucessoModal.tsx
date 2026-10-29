import { Modal, View, Text, Pressable } from "react-native";

import linkSenhaModalStyle from "@/styles/linkSenhaModalStyle";

interface SucessoModalProps {
  visible: boolean;
  titulo: string;
  texto: string;
  textoBotao?: string;
  onClose: () => void;
}

// Janela de sucesso no visual do app (no lugar do alert do navegador)
export default function SucessoModal({
  visible,
  titulo,
  texto,
  textoBotao = "OK",
  onClose,
}: SucessoModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={linkSenhaModalStyle.sobrepor}>
        <View style={linkSenhaModalStyle.conteudo}>
          <View style={linkSenhaModalStyle.iconeSucesso}>
            <Text style={linkSenhaModalStyle.txtIconeSucesso}>✓</Text>
          </View>

          <Text style={linkSenhaModalStyle.titulo}>{titulo}</Text>

          <Text style={linkSenhaModalStyle.textoCentro}>{texto}</Text>

          <Pressable
            style={({ pressed }) => [
              linkSenhaModalStyle.btnOk,
              pressed && linkSenhaModalStyle.btnOkPressed,
            ]}
            onPress={onClose}
          >
            <Text style={linkSenhaModalStyle.txtOk}>{textoBotao}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
