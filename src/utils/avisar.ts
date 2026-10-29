import { Alert, Platform } from "react-native";

// Quem mostra a janela de aviso (o AvisoHost, montado no _layout).
type Mostrar = (mensagem: string) => void;
let mostrarAviso: Mostrar | null = null;

export function registrarAviso(funcao: Mostrar | null) {
    mostrarAviso = funcao;
}

// Mostra um aviso simples na janela do app. Se a janela ainda não estiver
// montada, usa o alert do navegador (web) ou o Alert do celular.
export function avisar(mensagem: string) {
    if (mostrarAviso) mostrarAviso(mensagem);
    else if (Platform.OS === "web") window.alert(mensagem);
    else Alert.alert("Cantinho Donuts", mensagem);
}
