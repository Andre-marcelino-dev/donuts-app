import { router } from "expo-router";
import { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  Image,
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

import esqueciSenhaStyle from "@/styles/esqueciSenhaStyle";
import globalStyle from "@/styles/globalStyle";
import LinkSenhaModal from "@/components/linkSenhaModal";
import { pedirCodigoSenha } from "@/utils/auth";

export default function EsqueciSenhaScreen() {
  const [modalLinkSenha, setModalLinkSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function enviarCodigo() {
    const emailLimpo = email.trim();
    if (!/^\S+@\S+\.\S+$/.test(emailLimpo)) {
      setErro("Informe um e-mail válido.");
      return;
    }

    setErro("");
    setCarregando(true);
    try {
      await pedirCodigoSenha(emailLimpo);
      setModalLinkSenha(true);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Não foi possível enviar o código.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={globalStyle.container}>
      <ImageBackground
        source={require("@/assets/images/img/00_fundo.png")}
        style={globalStyle.background}
        resizeMode="cover"
      >
        <SafeAreaView style={globalStyle.areaConteudo}>
          <ScrollView style={globalStyle.scrollConteudo}>
            <View style={esqueciSenhaStyle.conteudo}>
              <Image
                source={require("@/assets/images/img/logo.png")}
                style={globalStyle.logoMaior}
              />
              <Text style={esqueciSenhaStyle.titulo}>
                Esqueci minha senha
              </Text>
              <Text style={esqueciSenhaStyle.subtitulo}>
                Informe seu e-mail para receber {'\n'} o código de redefinição
              </Text>

              <View style={esqueciSenhaStyle.form}>
                <View style={esqueciSenhaStyle.input}>
                  <Image
                    source={require("@/assets/images/img/email.png")}
                    style={esqueciSenhaStyle.icone}
                  />

                  <TextInput
                    placeholder="E-mail"
                    placeholderTextColor="#888888"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={esqueciSenhaStyle.TextInput}
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>

                {erro !== "" && <Text style={esqueciSenhaStyle.txtErro}>{erro}</Text>}

                <Pressable
                  style={({ pressed }) => [
                    esqueciSenhaStyle.btnEnviar,
                    pressed && esqueciSenhaStyle.btnEnviarPressed,
                    carregando && { opacity: 0.6 },
                  ]}
                  onPress={enviarCodigo}
                  disabled={carregando}
                >
                  <Text style={esqueciSenhaStyle.txtEnviar}>
                    {carregando ? "Enviando..." : "Enviar código"}
                  </Text>
                </Pressable>

                <Pressable
                  style={({ pressed }) => [
                    esqueciSenhaStyle.btnVoltar,
                    pressed && esqueciSenhaStyle.btnVoltarPressed,
                  ]}
                  onPress={() => router.navigate("/")}
                >
                  <Text style={esqueciSenhaStyle.txtVoltar}>
                    Voltar ao login
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>

          <LinkSenhaModal
            visible={modalLinkSenha}
            onClose={() => {
                setModalLinkSenha(false);
                router.navigate({
                  pathname: "/redefinir-senha",
                  params: { email: email.trim() },
                });
            }}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
