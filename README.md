# Portfólio — Ana Célia

Portfólio responsivo em HTML, CSS e JavaScript puro, baseado no [Figma original](https://www.figma.com/design/agGHXsc44J2MNHlsuX9s6g/Sem-t%C3%ADtulo?node-id=7-178).

A identidade mantém as fontes **Unbounded** e **Poppins**, a paleta do Figma e suas fotos e logos. Os cartões inclinados e o arquivo com abas incorporam as referências enviadas.

## Como abrir

Abra `index.html` no navegador. Não é necessário instalar dependências.

Para usar um servidor local, com Node.js instalado:

```sh
npm run dev
```

O site estará em `http://localhost:4173`.

## Arquivos

- `index.html`: conteúdo e estrutura semântica.
- `styles.css`: identidade visual, fontes locais e layouts responsivos.
- `script.js`: navegação acessível das abas e detalhes dos projetos.
- `assets/`: imagens e SVGs exportados do Figma e fontes hospedadas localmente.
- `server.mjs`: servidor local opcional, sem dependências.

## Comportamento

As abas aceitam clique, setas do teclado, Home e End. Os detalhes dos projetos abrem com foco contido e podem ser fechados por Escape, pelo botão ou clicando fora. Sem JavaScript, todas as pastas permanecem visíveis. O site respeita a preferência por movimento reduzido.

Os botões dos projetos apresentam os detalhes disponíveis no Figma e uma opção de contato por e-mail. Links externos dos projetos e o endereço do LinkedIn podem ser acrescentados quando fornecidos.

## Cores

| Uso | Cor |
| --- | --- |
| Papel | `#E3D9DA` |
| Roxo | `#71557B` |
| Texto | `#3A335C` |
| Rosa das estrelas | `#DEAFC3` |

As imagens foram baixadas dos endereços de exportação do Figma; nenhum link temporário é usado em tempo de execução. As fontes são distribuídas sob a licença SIL Open Font License, incluída em `assets/fonts/`.
