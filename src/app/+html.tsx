import { ScrollViewStyleReset } from "expo-router/html";
import { type PropsWithChildren } from "react";

// HTML base da versão web (só roda no build, não no celular).
// lang="pt-BR" e translate="no" impedem o Chrome de traduzir o app:
// a tradução troca os textos da tela e o React deixa de atualizá-los
// (o preço ficava "R$ 0,00" e "Home" virava "Lar").
export default function Root({ children }: PropsWithChildren) {
    return (
        <html lang="pt-BR" translate="no">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="google" content="notranslate" />

                {/* Instalar como app (PWA): nome, ícone e cores ficam no public/manifest.json */}
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#e07a85" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-title" content="Cantinho Donuts" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <ScrollViewStyleReset />
            </head>
            <body>{children}</body>
        </html>
    );
}
