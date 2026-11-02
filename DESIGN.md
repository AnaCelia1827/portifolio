---
name: Portfólio — Ana Célia Amaral
description: Um arquivo pessoal de objetos, código e descobertas.
colors:
  ink: "#313738"
  muted: "#646a6a"
  paper: "#f9f7f1"
  desk: "#f2eee9"
  blue: "#b4d1d9"
  blue-dark: "#44646f"
  pink: "#e8bdcf"
  pink-light: "#f7e4ec"
  notebook-cover: "#a2c4cf"
  notebook-page: "#fffefa"
  notebook-text: "#454c43"
  index-paper: "#fffefa"
typography:
  signature:
    fontFamily: "Pinyon, cursive"
    fontSize: "82px"
    fontWeight: 400
    lineHeight: 0.84
  headline:
    fontFamily: "Instrument, serif"
    fontSize: "52px"
    fontWeight: 400
    lineHeight: 1.08
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.8
  case:
    fontFamily: "Poppins, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.95
rounded:
  folder-tab: "9px 9px 0 0"
  closed-cover: "2px 10px 10px 2px"
spacing:
  section: "65px"
  section-mobile: "36px"
components:
  notebook-page:
    backgroundColor: "{colors.notebook-page}"
    textColor: "{colors.notebook-text}"
  index-slip:
    backgroundColor: "{colors.index-paper}"
    textColor: "#343a39"
    padding: "22px 19px 25px"
  stack-note:
    backgroundColor: "#f9e8ef"
    textColor: "{colors.ink}"
    padding: "44px 32px 36px"
---

# Design System: Ana Célia — Arquivo pessoal

## Overview

A referência atual é um scrapbook romântico com objetos físicos: latinha de metal, caderno azul, fichas de papel, clipes, corações e estrelas pontilhadas. O trabalho real da autora permanece como conteúdo. Cabeçalho e contato usam assinatura delicada; a abertura também tem um impresso escuro com brilho discreto.

## Colors

Mesa em papel creme, azul acinzentado, rosa suave e metal prateado. O caderno fechado tem capa azul. Aberto, mostra folhas brancas com texto escuro, perfurações discretas e uma moldura de foto com clipe junto ao índice, conforme as referências de papel da usuária. A legenda da moldura acompanha o projeto selecionado. Os tons antigos de céu saturado, lima e amarelo não orientam esta versão.

## Typography

Pinyon dá a voz caligráfica; Instrument Serif organiza títulos e nomes dos projetos; Poppins mantém o texto factual legível. As três famílias são locais. Texto funcional tem pelo menos 11px. Os cases usam 13px com entrelinha 1.95; a descrição principal usa 14px. A altura acompanha o texto, sem comprimi-lo para encaixar numa moldura.

## Layout

Container de até 1120px. O hero reúne impresso escuro e crachá pessoal na mesma posição da ficha anterior. Depois vêm caderno, latinha de stacks, cartões de hackathons, apresentação/formação e pasta dos clubes. O livro é centralizado e retangular, com seção de até 900px e altura intrínseca de aproximadamente 469px no desktop. A folha esquerda tem só o índice; a direita reúne foto, estágio e descrição breve, com link para conhecer o projeto. Nenhuma folha tem altura máxima ou rolagem interna.

Até 760px, o livro mostra uma página por vez: índice ou resumo. O retorno ao índice fica dentro da folha. A rolagem vertical é a da página do site. Não impor largura mínima de 680px nem rolagem horizontal ao leitor. As outras composições se empilham até 800px. Os detalhes dos seis projetos são páginas HTML próprias, com uma folha de narrativa e uma coluna de foto e stack; até 620px, essa composição se empilha e preserva a leitura integral.

## Elevation & Depth

Sombras suaves e deslocadas dão espessura a fichas e metal. A capa e a folha esquerda giram pela mesma lombada em 850ms, sem fade, com a mesma altura do miolo; o corpo acompanha a abertura. Fechar pela fitinha inverte o movimento e devolve o foco à capa. A forração clara, a dobra central, as abas, a fita e o clipe pertencem ao mesmo objeto. A pasta dos clubes abre sua aba e espalha as fichas suavemente. O fundo tem estrelas leves em trajetórias lentas e respeita movimento reduzido, sem controle visual de movimento.

## Shapes

Cantos de fichas discretamente arredondados, abas de arquivo, etiquetas e fita recortada. O coração da capa é um traço fino em baixo contraste. Estrelas e coração pontilhados são SVGs nativos, decorativos e não interativos. Ícones funcionais usam o mesmo conjunto de traços.

## Components

- Caderno: capa azul, coração em relevo, abas laterais e marcador. Aberto: folhas brancas, índice à esquerda e foto com clipe junto ao resumo à direita. Os seis capítulos mostram só nome, estágio, descrição e “Conhecer o projeto”. Filtros e favoritos preservados. A capa abre pela lombada e a fitinha fecha o livro. Sem barra externa de controles; no celular há retorno ao índice dentro da folha. A aba Hackathons navega para a seção independente.
- Páginas de projetos: papel marfim com perfurações, textos completos preservados, foto em moldura com clipe e ficha azul-esverdeada para stacks específicas. Dono Agro identifica ferramentas previstas; Martenare não tem tecnologias específicas informadas. Repositórios de Fibrac e GeoRisco mantêm os links fornecidos; links ausentes têm indicação explícita. Navegação entre projetos e retorno ao capítulo do livro. Fibrac usa assets/fibrac.png; os demais reservam espaço para fotos reais.
- Latinha: a mesma imagem com transparência é dividida em base e tampa por CSS. A tampa gira no eixo X pela dobradiça a 48,5% da altura, acompanhando o scroll de entrada e invertendo ao voltar. Os 12 logos permanecem controles HTML. Respeitar movimento reduzido, foco de teclado e ausência de JavaScript deixando o objeto aberto. Links dos projetos levam às páginas completas, mantendo hackathons na sua seção. Logos do Devicon são locais; SQL usa pictograma próprio.
- Crachá: porta-cartão transparente em formato vertical, com bordas moldadas, presilha, argola, correntes e pingentes metálicos de coração e estrela. Frente com cartão marfim, foto real, nome, curso, instituição, interesses e assinatura; verso com apresentação baseada no texto existente. Código de barras decorativo. Construído em HTML/CSS/SVG, com faces separadas em profundidade, perspectiva e giro de 180° ao clicar ou tocar. O mouse inclina o objeto; o clique produz balanço curto pela argola, com amplitude menor no celular. Botão nativo acessível por teclado; só a face atual fica disponível à leitura assistiva. Movimento reduzido troca as faces sem giro ou balanço. Sem JavaScript, a frente continua visível. Implementação em badge.css e badge.js. As fichas de formação e os cartões de hackathons permanecem independentes.
- Comunidade: uma pasta ilustrada verde suave, com fichas e logos reais, expande os quatro clubes usando details/summary. Banco Inter no Inteli Blockchain, Martenare na GraceHopper; Code Club e Inteli Júnior preparados para futuros projetos. Links diretos abrem também a pasta principal; teclado e funcionamento sem JavaScript preservados.
- Contato: e-mail, GitHub e LinkedIn. A cópia do e-mail anuncia o resultado.

## Do's and Don'ts

Preservar os oito cases e sua redação factual. Manter a leitura integral em todas as larguras. Não esconder parágrafos por altura fixa, cortar palavras para forçar encaixe ou acrescentar barras de rolagem dentro das folhas. Não transformar a página em uma imagem com texto incorporado. Não copiar marcas, nomes de empresas ou estatísticas das referências decorativas.
