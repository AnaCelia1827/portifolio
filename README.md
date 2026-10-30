# Portfólio — Ana Célia

Portfólio responsivo em HTML, CSS e JavaScript puro, baseado no [Figma original](https://www.figma.com/design/agGHXsc44J2MNHlsuX9s6g/Sem-t%C3%ADtulo?node-id=7-178).

A identidade mantém as fontes **Unbounded** e **Poppins**, as fotos e os logos do Figma. A paleta combina azul-marinho, rosa e branco, com pequenos destaques em amarelo-limão, conforme a referência escolhida. Os cartões inclinados e o arquivo com abas incorporam as referências enviadas.

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

Os botões dos projetos apresentam detalhes, acesso aos repositórios e contato por e-mail. Fibrac e Cobasi Shelter preservam as fotografias do Figma. GeoRisco e Stark têm capas tipográficas e conteúdo baseado nos READMEs dos repositórios fornecidos. O LinkedIn foi identificado nos READMEs da equipe.

O endereço de Fibrac foi mantido conforme enviado, embora tenha retornado 404 na verificação pública; ele pode exigir acesso ao repositório privado ou atualização do endereço.

## Cores

| Uso              | Cor       |
| ---------------- | --------- |
| Fundo principal  | `#FFFFFF` |
| Superfície clara | `#F5F5F8` |
| Azul-marinho     | `#0B0B5C` |
| Rosa             | `#F34B9B` |
| Amarelo-limão    | `#D7EB00` |

As imagens foram baixadas dos endereços de exportação do Figma; nenhum link temporário é usado em tempo de execução. As fontes são distribuídas sob a licença SIL Open Font License, incluída em `assets/fonts/`.
