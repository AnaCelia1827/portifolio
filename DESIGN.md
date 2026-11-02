---
name: Portfólio — Ana Célia Amaral
description: Um scrapbook digital Y2K de código, criatividade e trajetória real.
colors:
  ink: "#27352d"
  sky: "#c9e5ff"
  blue: "#5991ed"
  paper: "#fffef6"
  lime: "#c6f58b"
  pink: "#f6add5"
  pink-dark: "#863857"
  line: "#61736c"
  canvas: "#d5eaff"
typography:
  display:
    fontFamily: "Instrument, serif"
    fontSize: "clamp(120px, 17.7vw, 248px)"
    fontWeight: 400
    lineHeight: 1.03
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Instrument, serif"
    fontSize: "clamp(46px, 5.3vw, 76px)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-.025em"
  title:
    fontFamily: "Instrument, serif"
    fontSize: "37px"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-.015em"
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Poppins, sans-serif"
    fontSize: "11px"
    fontWeight: 400
rounded:
  pill: "30px"
  tag: "12px"
  tech-tag: "15px"
  circle: "50%"
spacing:
  copy-gap: "16px"
  project-column-gap: "32px"
  section: "96px"
  section-tablet: "70px"
  section-mobile: "55px"
components:
  button-primary:
    backgroundColor: "linear-gradient(#faffef,#c4f28a 49%,#a8e570 51%,#daffac)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "10px 23px"
  button-social:
    backgroundColor: "linear-gradient(#fff0fa,#f4a4ce 48%,#e68bbb 53%,#f8c4e1)"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "8px 20px"
  project-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  project-tag:
    backgroundColor: "#eff3e9"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "2px 10px"
  window-bar:
    backgroundColor: "linear-gradient(#e3f3ff,#badbf3)"
    textColor: "{colors.ink}"
    padding: "8px 12px"
  nav-contact:
    backgroundColor: "#fff9"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
---

# Design System: Portfólio — Ana Célia Amaral

## Overview

**Creative North Star: "Scrapbook digital Y2K"**

Um portfólio pessoal que combina céu azul com scanlines, recortes de papel, janelas de navegador retrô e pequenos objetos brilhantes. As referências enviadas pela usuária definem esse mundo: lettering serifado itálico com contorno, verde-lima e rosa, retrato em Polaroid e stickers.

A expressividade fica nas molduras e na tipografia; o conteúdo continua factual e legível em português brasileiro. Fotografias e logos existentes sustentam a identidade pessoal. A implementação foi feita diretamente em HTML, CSS e JavaScript, sem nova imagem gerada.

**Key Characteristics:**
- Céu com linhas horizontais sutis e luz difusa.
- Instrument Serif expressiva com corpo Poppins local.
- Janelas de papel, Polaroid inclinada e stickers brilhantes.
- Ações verde-lima e rosa com relevo e bordas finas.
- Página contínua, com projetos e trajetória acessíveis por âncoras.

## Colors

A paleta reúne céu claro, papel cremoso e acentos de objetos Y2K, com tinta verde-escura para leitura.

### Primary
- **Verde-lima:** chamadas para projetos, realces, oval do lettering e área de contato. Os botões usam gradientes próprios para criar uma faixa de brilho.

### Secondary
- **Rosa chiclete:** stickers, flores e botões sociais. Rosa escuro e linhas locais dão contorno às peças.

### Tertiary
- **Céu azul:** identidade de fundo e barras de janela; azul está disponível na paleta declarada. O canvas usa o tom de fundo efetivamente aplicado ao body.

### Neutral
- **Tinta verde:** texto principal e detalhes estruturais.
- **Papel cremoso:** janelas, Polaroid e faixa de habilidades.
- **Linha verde-cinza:** contornos de controles e peças.

**The Material Color Rule.** A cor participa do objeto: brilho no botão, papel no painel e céu no fundo. Preserve a leitura do texto sobre cada material.

## Typography

**Display Font:** Instrument Serif, registrada no CSS como `Instrument`, com fallback serif.
**Body Font:** Poppins, com fallback sans-serif. Ambas são hospedadas localmente.

O itálico da Instrument Serif dá fluidez a títulos, anotações e assinatura. Poppins mantém descrições, menus e metadados regulares e legíveis.

### Hierarchy
- **Display:** título principal itálico com contorno fino e sombras deslocadas; tamanho fluido conforme o token, reduzido para (22vw) até (800px) e (23.5vw) até (580px).
- **Headline:** títulos de seção em Instrument Serif; partes em itálico, com ajustes locais para biografia, habilidades e contato.
- **Title:** nomes de projetos em Instrument Serif; títulos menores de habilidades, formação e comunidade seguem a mesma família.
- **Body:** Poppins para descrições, com comprimento de texto de projeto limitado a (48ch).
- **Label:** menus, barras de janela, tags e metadados compactos; o botão principal usa (12px) em desktop.

**The Two Voices Rule.** Use a serif expressiva para identidade e títulos; preserve Poppins para informação e controles.

## Layout

Container central com largura máxima de (1120px) e largura inicial `calc(100% - 96px)`. Os recuos laterais diminuem nos breakpoints de (1100px), (800px), (580px) e (350px). Seções usam o espaçamento vertical documentado nos tokens.

A abertura combina lettering central, retrato e janela de biografia em duas colunas. Até (580px), essa composição se empilha. Projetos formam duas colunas com pequenos deslocamentos e inclinações; no celular passam a uma coluna. Habilidades passam de quatro para duas colunas até (800px) e uma até (380px). Comunidade usa quatro pastas expansíveis em uma lista vertical, com espaçamento reduzido até 650px; formação se reorganiza mantendo logo, período e descrição relacionados.

O cabeçalho usa menu expansível até (800px) com JavaScript. Sem JavaScript, os links permanecem visíveis em uma linha que pode quebrar. Não há dependência de abas para revelar seções.

## Elevation & Depth

O relevo é material: sombras suaves projetam papéis e botões sobre o céu; bordas finas mantêm as peças definidas. Gradientes com mudanças próximas no meio produzem brilho plástico. O lettering usa contorno e sombras deslocadas para relevo gráfico. Inclinações pequenas criam uma colagem sem comprometer a estrutura de leitura.

### Shadow Vocabulary
- **Botão brilhante** (`2px 4px 7px #455c4f2e,inset 0 1px 1px white`): relevo do CTA; hover eleva e amplia a sombra.
- **Polaroid** (`5px 9px 12px #4b658d25`): papel destacado no retrato.
- **Janela de biografia** (`5px 8px 16px #536b8425`): separação do painel e do céu.
- **Projeto** (`4px 6px 12px #536b8420`): profundidade discreta das janelas de projeto.

A colagem entra por (0.9s) com blur e deslocamento vertical apenas quando movimento é permitido. Hovers usam transições de (0.2s) ou (0.25s). A preferência por movimento reduzido remove animações, transições e rolagem suave via CSS.

## Shapes

Janelas e Polaroid têm cantos retos, bordas de (1px) e barras de título. Pílulas arredondadas, círculos, flores e estrelas contrastam com esses retângulos. O lettering repousa sobre um oval verde inclinado; tags e pequenos stickers têm recortes e rotações próprias. Mantenha o contorno visível dos objetos.

## Components

### Buttons

O CTA principal é uma pílula verde com gradiente brilhante, sombra e ícone. No hover sobe (3px). Botões sociais usam o mesmo material em rosa, com cantos menores. Links de projeto são círculos verdes que ficam rosas e giram no hover. Todos os links, botões e summaries recebem outline de foco de (3px), cor `#7f3161`, afastado (6px).

### Chips

Tags de projeto são pequenas cápsulas de fundo neutro, borda fina e Poppins. Tecnologias alternam verde e rosa suave; algumas se inclinam para reforçar a aparência de stickers. São rótulos informativos, sem estado de filtro.

### Cards / Containers

Projetos e biografia usam janelas de papel com barra de título em gradiente e controles decorativos. Projetos têm imagem ou capa tipográfica, descrição, tags, link ao repositório e `details` nativo. As barras dos projetos variam entre azul, rosa, verde e lilás. Habilidades usam divisões superiores em uma faixa de papel. Comunidade usa fundo de céu azul com scanlines, abas verde-lima, logos circulares e linhas brancas. Cada clube é um `details` nativo que revela seus cases; Banco Inter pertence ao Inteli Blockchain e Martenare à GraceHopper. Code Club e Inteli Júnior têm pastas vazias prontas para novos projetos.

### Navigation

Menu Poppins compacto; links recebem sublinhado no hover e quando `aria-current` indica a seção visível. O contato tem contorno de pílula. O menu móvel sincroniza rótulo e `aria-expanded`, fecha ao navegar, clicar fora ou pressionar Escape; Escape devolve foco ao acionador. Há link para pular ao conteúdo.

### Polaroid e stickers

Retrato real com corte por `object-fit: cover`, moldura de papel, legenda serifada e flor. A moldura gira (-6deg) em desktop e (-5deg) no celular. Stickers, estrelas e símbolos de código são composição decorativa; controles das janelas não simulam funções inexistentes.

### Contato

Faixa verde-lima com título grande, endereço `mailto`, links sociais e retorno ao topo. Copiar e-mail só aparece quando a Clipboard API está disponível em contexto seguro, com resultado anunciado em região de status. Não há formulário de entrada.

## Do's and Don'ts

### Do:
- **Do** preservar fotografias, logos e conteúdo factual fornecidos.
- **Do** combinar títulos Instrument Serif e informação em Poppins local.
- **Do** manter links, detalhes e seções utilizáveis sem JavaScript.
- **Do** respeitar movimento reduzido e foco visível em todos os controles.
- **Do** extrair novas decisões do código e das referências explícitas da usuária.

### Don't:
- **Don't** restaurar a direção glass anterior ou a regra antiga de Poppins em todo o site.
- **Don't** substituir o retrato e os projetos reais por imagens geradas.
- **Don't** dar comportamento de botão aos controles decorativos de janela.
- **Don't** registrar a revisão estática como aprovação visual em navegador.
