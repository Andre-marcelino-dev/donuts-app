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

import cadClienteStyle from "@/styles/cadClienteStyle";
import globalStyle from "@/styles/globalStyle";

import TermosUsoModal from "@/components/termosUsoModal";
import { fazerCadastro } from "@/utils/auth";

export default function CadClienteScreen() {
  const [verSenha, setVerSenha] = useState(false);
  const [verConfirmarSenha, setVerConfirmarSenha] = useState(false);
  const [AceitarTermos, setVerAceitarTermos] = useState(false);

  const [modalTermosUso, setModalTermosUso] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function criarConta() {
    const emailLimpo = email.trim();
    if (!nome.trim() || !emailLimpo || !telefone.trim() || !senha || !confirmarSenha) {
      setErro("Preencha todos os campos.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(emailLimpo)) {
      setErro("Informe um e-mail válido.");
      return;
    }
    if (telefone.replace(/\D/g, "").length < 10) {
      setErro("Informe o telefone com DDD, ex.: 11988887777.");
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
    if (!AceitarTermos) {
      setErro("Aceite os Termos de uso para continuar.");
      return;
    }

    setErro("");
    setCarregando(true);
    try {
      await fazerCadastro({
        nome: nome.trim(),
        email: emailLimpo,
        telefone: telefone.trim(),
        senha,
        senha_confirmation: confirmarSenha,
      });
      router.replace("/home");
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Não foi possível criar a conta.");
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
            <View style={cadClienteStyle.conteudo}>
              <Image
                source={require("@/assets/images/img/logo.png")}
                style={globalStyle.logoMaior}
              />
              <Text style={cadClienteStyle.titulo}>Criar Conta</Text>
              <Text style={cadClienteStyle.subtitulo}>
                cadastre-se para fazer seus pedidos
              </Text>

              {/* Formulario de login */}
              <View style={cadClienteStyle.form}>
                <View style={cadClienteStyle.input}>
                  <Image
                    source={require("@/assets/images/img/user.png")}
                    style={cadClienteStyle.icone}
                  />

                  <TextInput
                    placeholder="Nome completo"
                    placeholderTextColor="#888888"
                    value={nome}
                    onChangeText={setNome}
                    maxLength={50}
                    style={cadClienteStyle.TextInput}
                  />
                </View>

                <View style={cadClienteStyle.input}>
                  <Image
                    source={require("@/assets/images/img/email.png")}
                    style={cadClienteStyle.icone}
                  />

                  <TextInput
                    placeholder="E-mail"
                    placeholderTextColor="#888888"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                    maxLength={80}
                    style={cadClienteStyle.TextInput}
                  />
                </View>

                <View style={cadClienteStyle.input}>
                  <Image
                    source={require("@/assets/images/img/telefone.png")}
                    style={cadClienteStyle.icone}
                  />

                  <TextInput
                    placeholder="Telefone"
                    placeholderTextColor="#888888"
                    keyboardType="phone-pad"
                    value={telefone}
                    onChangeText={setTelefone}
                    maxLength={14}
                    style={cadClienteStyle.TextInput}
                  />
                </View>

                <View style={cadClienteStyle.input}>
                  <Image
                    source={require("@/assets/images/img/senha.png")}
                    style={cadClienteStyle.icone}
                  />
                  <TextInput
                    placeholder="Senha"
                    placeholderTextColor="#888888"
                    style={cadClienteStyle.TextInput}
                    secureTextEntry={!verSenha}
                    value={senha}
                    onChangeText={setSenha}
                  />

                  <Pressable
                    style={cadClienteStyle.btnMostrarSenha}
                    onPress={() => setVerSenha((current) => !current)}
                  >
                    <Image
                      source={
                        verSenha
                          ? require("@/assets/images/img/esconder.png")
                          : require("@/assets/images/img/mostrar.png")
                      }
                      style={cadClienteStyle.mostrarSenha}
                    />
                  </Pressable>
                </View>

                <View style={cadClienteStyle.input}>
                  <Image
                    source={require("@/assets/images/img/senha.png")}
                    style={cadClienteStyle.icone}
                  />
                  <TextInput
                    placeholder="Confirmar Senha"
                    placeholderTextColor="#888888"
                    style={cadClienteStyle.TextInput}
                    secureTextEntry={!verConfirmarSenha}
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                  />

                  <Pressable
                    style={cadClienteStyle.btnMostrarSenha}
                    onPress={() => setVerConfirmarSenha((current) => !current)}
                  >
                    <Image
                      source={
                        verConfirmarSenha
                          ? require("@/assets/images/img/esconder.png")
                          : require("@/assets/images/img/mostrar.png")
                      }
                      style={cadClienteStyle.mostrarSenha}
                    />
                  </Pressable>
                </View>

                <View style={cadClienteStyle.termosUso}>
                  <Pressable
                    style={cadClienteStyle.btnTermos}
                    onPress={() => setVerAceitarTermos((current) => !current)}
                  >
                    <View
                      style={[
                        cadClienteStyle.checkTermos,
                        AceitarTermos && cadClienteStyle.checkTermosAtivo,
                      ]}
                    >
                      {AceitarTermos && (
                        <Text style={cadClienteStyle.checkOK}>✓</Text>
                      )}
                    </View>
                  </Pressable>
                  <Text
                    style={[
                      cadClienteStyle.txtTermos,
                      AceitarTermos && cadClienteStyle.termoAceito,
                    ]}
                  >
                    Aceito os{" "}
                  </Text>
                  <Pressable onPress={() => setModalTermosUso(true)}>
                    <Text style={cadClienteStyle.linkTermos}>
                      Termos de uso
                    </Text>
                  </Pressable>
                </View>

                {erro !== "" && <Text style={cadClienteStyle.txtErro}>{erro}</Text>}

                <Pressable
                  style={({ pressed }) => [
                    cadClienteStyle.btnEntrar,
                    pressed && cadClienteStyle.btnEntrarPressed,
                    carregando && { opacity: 0.6 },
                  ]}
                  onPress={criarConta}
                  disabled={carregando}
                >
                  <Text style={cadClienteStyle.txtEntrar}>
                    {carregando ? "Criando..." : "Criar Conta"}
                  </Text>
                </Pressable>

                <View style={cadClienteStyle.Separador}>
                  <View style={cadClienteStyle.linha}></View>
                  <Text style={cadClienteStyle.textoSeparador}>OU</Text>
                  <View style={cadClienteStyle.linha}></View>
                </View>

                <Pressable
                  style={({ pressed }) => [
                    cadClienteStyle.btnCriarConta,
                    pressed && cadClienteStyle.btnCriarContaPressed,
                  ]}
                  onPress={() => router.navigate("/")}
                >
                  <Text style={cadClienteStyle.txtCriarConta}>Já tenho conta</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>

          <TermosUsoModal
          visible={modalTermosUso}
          onClose={() => setModalTermosUso(false)}          
          />

        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
