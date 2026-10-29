import { Platform } from "react-native";

// Instalar o app pelo navegador (PWA).
// O Chrome avisa uma vez só, logo que o app abre, que dá para instalar
// (evento "beforeinstallprompt"). Guardamos esse aviso aqui para usar
// depois, quando o cliente tocar em "Instalar" nas Configurações.

type AvisoInstalacao = Event & {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export type ModoInstalacao =
    | "instalado" // já está aberto como app instalado
    | "chrome" // o navegador abre a janela de instalação
    | "iphone" // Safari: precisa usar Compartilhar > Adicionar à Tela de Início
    | "manual"; // outro navegador: instruções pelo menu

let avisoGuardado: AvisoInstalacao | null = null;
let instaladoAgora = false;
const ouvintes = new Set<() => void>();

function avisarMudanca() {
    ouvintes.forEach((ouvinte) => ouvinte());
}

// Chamado uma vez no _layout, assim que o app abre
export function prepararInstalacao() {
    if (Platform.OS !== "web" || typeof window === "undefined") return;

    window.addEventListener("beforeinstallprompt", (evento) => {
        evento.preventDefault(); // não mostra a barrinha do Chrome; usamos o nosso botão
        avisoGuardado = evento as AvisoInstalacao;
        avisarMudanca();
    });

    window.addEventListener("appinstalled", () => {
        avisoGuardado = null;
        instaladoAgora = true;
        avisarMudanca();
    });
}

// Para a tela se atualizar quando o aviso chegar (ou o app for instalado)
export function ouvirInstalacao(ouvinte: () => void) {
    ouvintes.add(ouvinte);
    return () => {
        ouvintes.delete(ouvinte);
    };
}

export function modoInstalacao(): ModoInstalacao {
    // No celular, o app nativo (Expo Go / loja) já é "instalado"
    if (Platform.OS !== "web") return "instalado";

    const abertoComoApp =
        window.matchMedia?.("(display-mode: standalone)").matches ||
        (navigator as Navigator & { standalone?: boolean }).standalone === true;
    if (abertoComoApp || instaladoAgora) return "instalado";

    if (avisoGuardado) return "chrome";

    const agente = navigator.userAgent;
    const ehIphone =
        /iPhone|iPad|iPod/i.test(agente) ||
        // iPad novo se apresenta como Mac, mas tem tela de toque
        (/Macintosh/i.test(agente) && navigator.maxTouchPoints > 1);
    if (ehIphone) return "iphone";

    return "manual";
}

// Abre a janela de instalação do navegador. Devolve true se o cliente aceitou.
export async function instalarApp(): Promise<boolean> {
    if (!avisoGuardado) return false;

    const aviso = avisoGuardado;
    avisoGuardado = null; // o navegador só deixa usar uma vez
    await aviso.prompt();
    const { outcome } = await aviso.userChoice;
    if (outcome === "accepted") instaladoAgora = true;
    avisarMudanca();
    return outcome === "accepted";
}
