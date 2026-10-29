import { Modal, View, Text, Pressable } from "react-native";

import linkSenhaModalStyle from "@/styles/linkSenhaModalStyle";

interface LinkSenhaModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function LinkSenhaModal({
  visible,
  onClose,
}: LinkSenhaModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={linkSenhaModalStyle.sobrepor}>
        <View style={linkSenhaModalStyle.conteudo}>
          <Text style={linkSenhaModalStyle.titulo}>Código enviado</Text>

          <Text style={linkSenhaModalStyle.texto}>
            Caso este e-mail esteja cadastrado em nosso sistema, você
            receberá um código de 6 números por e-mail. Confira também a
            caixa de spam.
          </Text>

          <Text style={linkSenhaModalStyle.textoValidade}>
            Validade do código: 30 minutos.
          </Text>

          <Pressable
            style={({ pressed }) => [
              linkSenhaModalStyle.btnOk,
              pressed && linkSenhaModalStyle.btnOkPressed,
            ]}
            onPress={onClose}
          >
            <Text style={linkSenhaModalStyle.txtOk}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
