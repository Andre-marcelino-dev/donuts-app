# Cantinho Donuts — onde paramos e como continuar

Última atualização: 29/10/2026.

Este documento resume o app e o site do Cantinho Donuts, como rodar em outro computador, como atualizar o servidor da Locaweb e o que ainda falta. Não tem senhas: elas ficam só nos arquivos `.env` (que não vão para o Git).

O projeto nasceu como cópia do The Gusta / Confeitaria DaVilla. Por isso muitas telas, rotas e decisões são iguais.

---

## 0. Onde paramos (29/10/2026)

- **App em produção** em `https://donuts-app.expo.app`, usando o servidor da Locaweb (`https://confeitaria.adminfo.dev.br`).
- **Novo em 29/10:**
  - **Criar conta** funcionando (`POST /auth/cadastro`). CPF, nascimento, endereço e foto do cliente viraram opcionais; o cliente completa depois no perfil.
  - **Esqueci minha senha** com código de 6 números por e-mail (`POST /auth/esqueci-senha` e `POST /auth/redefinir-senha`). Testado e funcionando.
  - E-mail do site saindo por `contato.cantinho_donuts@adminfo.dev.br` (SMTP da Locaweb).
  - Sacola: card "Entrega em" reorganizado.
  - Janelas no visual do app no lugar do alerta do navegador (`SucessoModal` e o `avisar()`).
  - Termos de uso: a caixinha e o texto "Aceito os" marcam juntos; botão "Li e aceito" na janela dos termos.
  - **Localização da loja** salva no painel (Configurações da loja): `-23.5109284`, `-46.4156827` (Rua Augusto Fiordelice, Parque Santa Rita). Testado: CEP 08161-540 → Zona 1 pelo nome do bairro; CEP 08410-070 (Vila Princesa Isabel) → 4,2 km → Zona 2, R$ 8,00. A medida por distância está funcionando.
  - **Instalar o app pelo navegador (PWA)** — testado e funcionando. Configurações → Instalar: no Chrome/Android abre a instalação; no iPhone mostra os passos (Compartilhar → Adicionar à Tela de Início); depois de instalado aparece "✓ Instalado". Arquivos: `public/manifest.json`, ícones em `public/`, `src/utils/instalarApp.ts` (o aviso do Chrome é guardado no `_layout`). Mudanças no app chegam sozinhas no app instalado depois do `eas deploy --prod`. Logo depois do deploy o `manifest.json` pode dar 404 por alguns segundos.
  - Decidido: **PWA em vez de APK ou loja** por enquanto (grátis, Android e iPhone). Se um dia for para a Google Play: tirar a permissão `RECORD_AUDIO` do `app.json` (o app não usa microfone).
- **Combinado com o André (29/10):** WhatsApp, endereço da loja e zonas de entrega estão com **dados de teste de propósito**. Só trocar quando ele avisar que o site e o app estão prontos.
- **Falta:** ver o item 8.

---

## 1. Os dois projetos

| Projeto | O que é | Repositório | Onde está neste PC |
|---|---|---|---|
| **donuts-app** (este) | App do cliente em Expo / React Native (Expo SDK 57) | `github.com/Andre-marcelino-dev/donuts-app` | `C:\xampp\htdocs\donuts-app` |
| **cantinho-donuts** | Site + painel admin + API em Laravel 13 | `github.com/Andre-marcelino-dev/cantinho-donuts` | WSL: `~/dev/senac/cantinho-donuts` (código em `src/`) |

O endereço do servidor que o app usa fica num lugar só: `src/config/api.ts` (`SERVIDOR`).

---

## 2. Endereços

| O quê | Endereço |
|---|---|
| Site | `https://confeitaria.adminfo.dev.br` |
| Painel admin | `https://confeitaria.adminfo.dev.br/admin` |
| API (o app usa) | `https://confeitaria.adminfo.dev.br/api/v1/...` |
| Documentação da API | `https://confeitaria.adminfo.dev.br/api/documentacao` |
| App publicado na web | `https://donuts-app.expo.app` |

- Os endereços `donuts-app--xxxx.expo.app` são **prévias paradas no tempo**. Não usar.

---

## 3. Configurar o outro computador

### App

```bash
git clone https://github.com/Andre-marcelino-dev/donuts-app.git
cd donuts-app
npm install
npx expo start -c
```

- Aperte `w` para abrir no navegador ou leia o QR Code com o **Expo Go**.
- O app já aponta para o servidor da Locaweb, então funciona sem rodar o backend local.
- Para testar com o backend local, troque o `SERVIDOR` em `src/config/api.ts` pela linha comentada do IP do PC (porta 8082). **Volte para a Locaweb antes de publicar.**

### Backend local (opcional)

Roda no **WSL + Docker Desktop** (ative a integração com o WSL nas configurações do Docker Desktop).

```bash
git clone https://github.com/Andre-marcelino-dev/cantinho-donuts.git
cd cantinho-donuts
docker compose up -d
```

- Site local em `http://localhost:8082`; MySQL na porta 3309.
- Crie o `src/.env` a partir do `src/.env.example` e rode `php artisan key:generate` dentro do container PHP.

---

## 4. Servidor (Locaweb) — como atualizar

Não há terminal SSH: tudo é feito pelo **FileZilla** (arquivos) e pelo **phpMyAdmin** (banco), no painel da Locaweb.

**Para mandar uma mudança do backend:**

1. Faça o commit no projeto `cantinho-donuts`.
2. Monte uma pasta em `C:\xampp\htdocs\producao_locaweb\atualizacao_AAAA-MM-DD_assunto\enviar\` com só os arquivos alterados, nas mesmas pastas do `src/` (ex.: `app/...`, `routes/...`, `resources/...`).
3. No FileZilla, **baixe antes uma cópia** dos arquivos que vão ser trocados (para poder voltar).
4. Arraste as pastas de `enviar\` para a pasta do Laravel no servidor e escolha **Sobrescrever**.
5. Se mudou alguma rota: apague `bootstrap/cache/routes-*.php` no servidor, se existir.
6. Se mudou o `.env`: apague `bootstrap/cache/config.php`, se existir.
7. Abra `/api/documentacao` para conferir.

**Migrations:** sem SSH não dá para rodar `php artisan migrate`. Escreva o SQL equivalente num arquivo `rodar_no_phpmyadmin.sql`, rode no phpMyAdmin (aba SQL) e acrescente na tabela `migrations` o nome da migration, para ela não rodar de novo no futuro (veja o exemplo em `producao_locaweb\atualizacao_2026-10-29_cadastro\`).

- **Nunca** rode `DROP`, `TRUNCATE` ou `DELETE` sem `WHERE` no phpMyAdmin.
- Erros do servidor ficam em `storage/logs/laravel.log` (baixe pelo FileZilla e veja as últimas linhas).

### `.env` do servidor (sem as senhas)

```
MAIL_MAILER=smtp
MAIL_SCHEME=smtps
MAIL_HOST=email-ssl.com.br
MAIL_PORT=465
MAIL_USERNAME=contato.cantinho_donuts@adminfo.dev.br
MAIL_PASSWORD=(senha da caixa de e-mail)
MAIL_FROM_ADDRESS="contato.cantinho_donuts@adminfo.dev.br"
MAIL_FROM_NAME="Cantinho Donuts"
MAIL_CONTATO_DESTINO=contato.cantinho_donuts@adminfo.dev.br

LOJA_EMAIL=contato.cantinho_donuts@adminfo.dev.br
LOJA_APP_URL=https://donuts-app.expo.app
```

- Não pode ter duas linhas com o mesmo nome (a última vale).
- Se a senha tiver `#`, `$` ou espaço, coloque entre aspas.
- Erro `535 authentication failed` no log = senha do e-mail errada (teste entrando no Webmail da Locaweb).
- Os dados da loja que aparecem no site e no app (WhatsApp, endereço) vêm de `config/services.php` → `loja`, e podem ser trocados no `.env`: `LOJA_WHATSAPP`, `LOJA_ENDERECO`, `LOJA_BAIRRO`, `LOJA_CIDADE`, `LOJA_CEP`.

---

## 5. Publicar o app na web (`donuts-app.expo.app`)

No computador onde a conta Expo estiver logada (`npx eas-cli login`):

```bash
npx expo export -p web
npx eas-cli deploy --prod
```

Se a mudança no app depende de rota nova da API, **atualize o servidor primeiro**.

---

## 6. O que tem no app

| Tela / função | Situação |
|---|---|
| Login | API (`POST /auth/login`) |
| **Criar conta** | nome, e-mail, telefone, senha e aceite dos termos; já entra logado |
| **Esqueci minha senha / Redefinir senha** | código de 6 números por e-mail (vale 30 min; 5 tentativas erradas invalidam); ao trocar, encerra os logins antigos |
| Home, Cardápio, banners, categorias, detalhes do produto | do banco |
| Sacola | itens do cliente, cupom, endereço e taxa pela zona de entrega |
| Pagamento | grava o pedido, esvazia a sacola, abre o WhatsApp da loja |
| Meus pedidos / Detalhes | abas "Em preparo" e "Histórico"; Pedir novamente |
| Editar perfil, Alterar senha, Endereços (com ViaCEP), Configurações | API |
| Fale conosco | grava no painel (Mensagens de contato) e manda aviso para `MAIL_CONTATO_DESTINO` |
| Depoimentos | enviados como pendentes para aprovação no painel |

Arquivos de apoio em `src/utils/`: `auth.ts` (login, cadastro, senha), `sacola.ts`, `pedidos.ts`, `enderecos.ts`, `cupons.ts`, `entrega.ts`, `avisar.ts`.

Janelas em `src/components/`: `sucessoModal.tsx` (sucesso com ✓), `avisoHost.tsx` (mostra o `avisar()` em qualquer tela), `termosUsoModal.tsx`, `linkSenhaModal.tsx` ("Código enviado").

---

## 7. Decisões importantes

- **Nunca colocar senha ou e-mail de login no app nem no código.** O app é público; senhas só no `.env` do servidor.
- **Cadastro pelo app** pede só nome, e-mail, telefone e senha. Por isso CPF, nascimento, endereço e foto de `tbl_clientes` aceitam vazio.
- **Código de senha** fica em `password_reset_tokens` (só o hash). A resposta de "esqueci a senha" é sempre a mesma, para não revelar quem tem conta.
- **Cupom = porcentagem** sobre os produtos (a entrega não tem desconto).
- **Status de pedido:** `EM ANDAMENTO` → `SAIU ENTREGA` → `FINALIZADA`, ou `CANCELADA`.
- **Taxa de entrega = zona do endereço** (painel → Sistema → Zonas de entrega).

---

## 8. O que falta

Os itens 1 e 2 esperam o André avisar (por enquanto são dados de teste).

1. **WhatsApp e endereço da loja:** hoje `11 98816-1211` e Rua Augusto Fiordelice, 310 (padrão de `config/services.php`). Quando ele passar os reais, montar as linhas do `.env` (`LOJA_WHATSAPP`, `LOJA_ENDERECO`, `LOJA_BAIRRO`, `LOJA_CIDADE`, `LOJA_CEP`). O botão "Fazer meu pedido" da página Região usa esse WhatsApp.
2. **No painel:** trocar os valores de exemplo das zonas de entrega (km, taxa, prazo, bairros) pelos reais.
3. **Opcional:** gravar no banco a data em que o cliente aceitou os termos de uso.
4. **Backend com mudanças sem commit** (imagem das categorias, em `~/dev/senac/cantinho-donuts`): terminar, fazer o commit e mandar para a Locaweb.

---

## 9. Últimos commits

- **App:** ver `git log --oneline` (29/10: cadastro, esqueci a senha, card da Sacola, janelas no visual do app, termos de uso).
- **Backend:** `1ea399f` — esqueci minha senha com código por e-mail (antes: `d75189c`, cadastro pelo app).
