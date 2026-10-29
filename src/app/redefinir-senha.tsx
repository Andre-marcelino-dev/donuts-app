import { router, useLocalSearchParams } from "expo-router";
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


import globalStyle from "@/styles/globalStyle";
import redefinirSenhaStyle from "@/styles/redefinirSenhaStyle";
import SucessoModal from "@/components/sucessoModal";
import { pedirCodigoSenha, redefinirSenha } from "@/utils/auth";

export default function RedefinirSenhaScreen() {
  // O e-mail vem da tela Esqueci minha senha
  const params = useLocalSearchParams<{ email?: string }>();

  const [verSenha, setVerSenha] = useState(false);
  const [verConfirmarSenha, setVerConfirmarSenha] = useState(false);

  const [email, setEmail] = useState(params.email ?? "");
  const [codigo, setCodigo] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [senhaAlterada, setSenhaAlterada] = useState(false);

  async function salvarSenha() {
    setMensagem("");
    const emailLimpo = email.trim();
    if (!/^\S+@\S+\.\S+$/.test(emailLimpo)) {
      setErro("Informe um e-mail válido.");
      return;
    }
    if (!/^\d{6}$/.test(codigo)) {
      setErro("Digite o código de 6 números que chegou no e-mail.");
      return;
    }
    if (senha.length < 6) {
      setErro("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }
    if (senha !== confirmarSenha) {
      setErro("As senhas não conferem.");
      return;
    }

    setErro("");
    setCarregando(true);
    try {
      await redefinirSenha({
        email: emailLimpo,
        codigo,
        senha,
        senha_confirmation: confirmarSenha,
      });
      setSenhaAlterada(true);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Não foi possível salvar a senha.");
    } finally {
      setCarregando(false);
    }
  }

  async function reenviarCodigo() {
    setMensagem("");
    const emailLimpo = email.trim();
    if (!/^\S+@\S+\.\S+$/.test(emailLimpo)) {
      setErro("Informe um e-mail válido.");
      return;
    }

    setErro("");
    try {
      await pedirCodigoSenha(emailLimpo);
      setMensagem("Enviamos um novo código. O anterior não vale mais.");
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Não foi possível enviar o código.");
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
            <View style={redefinirSenhaStyle.conteudo}>
              <Image
                source={require("@/assets/images/img/logo.png")}
                style={globalStyle.logoMaior}
              />
              <Text style={redefinirSenhaStyle.titulo}>
                Redefinir senha
              </Text>
              <Text style={redefinirSenhaStyle.subtitulo}>
                Digite o código que enviamos para o seu e-mail e crie uma nova senha
              </Text>

              <View style={redefinirSenhaStyle.form}>
                {/* Só aparece se a tela foi aberta sem o e-mail */}
                {!params.email && (
                  <View style={redefinirSenhaStyle.input}>
                    <Image
                      source={require("@/assets/images/img/email.png")}
                      style={redefinirSenhaStyle.icone}
                    />
                    <TextInput
                      placeholder="E-mail"
                      placeholderTextColor="#888888"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      style={redefinirSenhaStyle.TextInput}
                      value={email}
                      onChangeText={setEmail}
                    />
                  </View>
                )}

                <View style={redefinirSenhaStyle.input}>
                  <Image
                    source={require("@/assets/images/img/senha.png")}
                    style={redefinirSenhaStyle.icone}
                  />
                  <TextInput
                    placeholder="Código de 6 números"
                    placeholderTextColor="#888888"
                    keyboardType="number-pad"
                    maxLength={6}
                    style={redefinirSenhaStyle.TextInput}
                    value={codigo}
                    onChangeText={(texto) => setCodigo(texto.replace(/\D/g, ""))}
                  />
                </View>

                <View style={redefinirSenhaStyle.input}>
                  <Image
                    source={require("@/assets/images/img/senha.png")}
                    style={redefinirSenhaStyle.icone}
                  />
                  <TextInput
                    placeholder="Nova senha"
                    placeholderTextColor="#888888"
                    style={redefinirSenhaStyle.TextInput}
                    secureTextEntry={!verSenha}
                    value={senha}
                    onChangeText={setSenha}
                  />

                  <Pressable
                    style={redefinirSenhaStyle.btnMostrarSenha}
                    onPress={() => setVerSenha((current) => !current)}
                  >
                    <Image
                      source={
                        verSenha
                          ? require("@/assets/images/img/esconder.png")
                          : require("@/assets/images/img/mostrar.png")
                      }
                      style={redefinirSenhaStyle.mostrarSenha}
                    />
                  </Pressable>
                </View>

                <View style={redefinirSenhaStyle.input}>
                  <Image
                    source={require("@/assets/images/img/senha.png")}
                    style={redefinirSenhaStyle.icone}
                  />
                  <TextInput
                    placeholder="Confirmar nova senha"
                    placeholderTextColor="#888888"
                    style={redefinirSenhaStyle.TextInput}
                    secureTextEntry={!verConfirmarSenha}
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                  />

                  <Pressable
                    style={redefinirSenhaStyle.btnMostrarSenha}
                    onPress={() => setVerConfirmarSenha((current) => !current)}
                  >
                    <Image
                      source={
                        verConfirmarSenha
                          ? require("@/assets/images/img/esconder.png")
                          : require("@/assets/images/img/mostrar.png")
                      }
                      style={redefinirSenhaStyle.mostrarSenha}
                    />
                  </Pressable>
                </View>

                {erro !== "" && <Text style={redefinirSenhaStyle.txtErro}>{erro}</Text>}
                {mensagem !== "" && (
                  <Text style={redefinirSenhaStyle.txtMensagem}>{mensagem}</Text>
                )}

                <Pressable
                  style={({ pressed }) => [
                    redefinirSenhaStyle.btnSalvar,
                    pressed && redefinirSenhaStyle.btnSalvarPressed,
                    carregando && { opacity: 0.6 },
                  ]}
                  onPress={salvarSenha}
                  disabled={carregando}
                >
                  <Text style={redefinirSenhaStyle.txtVoltar}>
                    {carregando ? "Salvando..." : "Salvar senha"}
                  </Text>
                </Pressable>

                <Pressable onPress={reenviarCodigo}>
                  <Text style={redefinirSenhaStyle.txtReenviar}>
                    Não recebeu? Enviar outro código
                  </Text>
                </Pressable>

                <Pressable
                  style={({ pressed }) => [
                    redefinirSenhaStyle.btnVoltar,
                    pressed && redefinirSenhaStyle.btnVoltarPressed,
                  ]}
                  onPress={() => router.navigate("/")}
                >
                  <Text style={redefinirSenhaStyle.txtVoltar}>
                    Voltar ao login
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>

          <SucessoModal
            visible={senhaAlterada}
            titulo="Senha alterada"
            texto="Sua nova senha já está valendo. Por segurança, encerramos os acessos anteriores. Entre novamente com a nova senha."
            textoBotao="Ir para o login"
            onClose={() => {
              setSenhaAlterada(false);
              router.replace("/");
            }}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
