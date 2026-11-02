# Portfólio — Ana Célia

Portfólio em HTML, CSS e JavaScript puro na branch `feat/nova-ver`. A identidade atual segue as referências de scrapbook: papel creme, azul suave, rosa, estrelas pontilhadas em movimento, fichas de arquivo e objetos interativos.

## Executar

Com Node.js instalado, execute `npm run dev` e acesse `http://localhost:4173`. Não é necessário instalar dependências. O servidor tenta outra porta se a padrão estiver ocupada. Também é possível abrir `index.html` diretamente.

## Interações

- Caderno compacto e retangular, com abertura 3D pela capa e fechamento pela fita. Os seis capítulos mostram resumo e foto na mesma folha, com filtros, favoritos e link “Conhecer o projeto”. Os textos completos, stacks e repositórios informados ficam em páginas HTML próprias dentro de projetos/. Sem barra externa de controles; no celular, o retorno ao índice fica dentro da folha.
- A altura das páginas acompanha o conteúdo. Sem recorte, largura mínima forçada ou rolagem dentro das folhas. No celular, o botão Índice alterna entre lista e case; a rolagem vertical é a do site.
- Latinha prateada com tampa 3D que abre com o scroll e fecha ao voltar, sem prender a rolagem. Com movimento reduzido, foco de teclado ou sem JavaScript, permanece aberta. Doze logos clicáveis, ficha de contexto e links para páginas completas dos projetos quando documentados. Logos SVG do Devicon hospedados em assets/tech/, com licença; SQL usa um pictograma genérico de banco de dados.
- Fundo com SVGs pontilhados em movimento, sem controle visual de movimento; `prefers-reduced-motion` desativa os efeitos e preferências de pausa anteriormente salvas continuam respeitadas.
- Crachá 3D com foto real e informações pessoais no hero, dentro de um porta-cartão transparente vertical com argola, correntes e pingentes metálicos em SVG. Clique, toque, Enter ou Espaço viram a peça; o mouse inclina e o clique provoca um balanço breve. Movimento reduzido troca a face sem giro; sem JavaScript, a frente continua legível. Estilos e interação isolados em badge.css e badge.js.
- Cartões expansíveis de Stark e Ecoa exclusivamente em hackathons, com texto completo, demonstrações e repositórios. A aba do caderno leva até essa seção. Uma pasta ilustrada expande os quatro clubes: Banco Inter no Inteli Blockchain; Martenare na GraceHopper; Code Club e Inteli Júnior sem cases associados ainda.
- Formação e contatos preservados; cópia de e-mail com anúncio de resultado.

Sem JavaScript, o caderno mostra os resumos em fluxo normal e os links abrem as páginas completas. Com JavaScript, um capítulo fica visível por vez e a navegação abre o livro automaticamente. Favoritos continuam funcionando durante a visita se o armazenamento local estiver bloqueado. As páginas de detalhes são estáticas e não dependem de JavaScript.

## Arquivos e imagens

index.html, styles.css e script.js contêm a página principal. Os seis arquivos em projetos/ usam styles.css e project.css e preservam os textos completos. As fontes e licenças estão em assets/fonts/. Fotos, logos e clipe vêm dos assets existentes. assets/stacks-tin-open.png foi gerado com ImageGen, com transparência real; seu prompt está no arquivo adjacente e nos metadados do PNG. A animação usa duas regiões da mesma imagem, sem gerar outra latinha. O caderno é construído em HTML/CSS/SVG. project-book-open.png permanece como referência histórica sem uso.

`DESIGN.md`, `PRODUCT.md` e `.impeccable/` documentam conteúdo, identidade e decisões.

## Verificação

Checagens de IDs, assets locais e sintaxe JavaScript. A revisão do livro compacto e da latinha usou Chromium headless em 1440, 390 e 320px: seis resumos, foto na folha do projeto, links para seis páginas completas, retorno ao livro, scroll de abertura/fechamento e movimento reduzido. Todos os parágrafos originais foram conferidos nas páginas de detalhes. Teclado e navegação sem JavaScript também foram verificados. Screenshots de desktop e celular inspecionados; sem overflow horizontal ou erros JavaScript nesses cenários.

O host de acesso ao navegador está indisponível; não houve screenshots nem aprovação visual da renderização final. A revisão independente da etapa de objetos foi interrompida por limite da ferramenta; as verificações finais foram concluídas localmente.
