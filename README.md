# Portfólio — Ana Célia

Portfólio responsivo em HTML, CSS e JavaScript puro, na branch `redesign/glass`. A identidade atual segue as referências Y2K fornecidas: céu azul com scanlines, botões verde-lima e rosa brilhantes, Instrument Serif itálica com contorno, Polaroid e janelas retrô. Poppins e Instrument Serif são locais. Fotos, logos e conteúdo do Figma original foram preservados; não houve nova geração de imagens.

## Executar

Abra `index.html` diretamente ou, com Node.js instalado:

```sh
npm run dev
```

Acesse `http://localhost:4173`. Se a porta estiver ocupada, o servidor tenta as próximas portas e informa o endereço no terminal. A variável `PORT` permite escolher outra porta.

## Conteúdo e interações

Sobre mim, projetos, habilidades, formação, comunidade e contato permanecem acessíveis por âncoras. Fibrac, Dono Agro / Agro App, GeoRisco Santo André, LDC, Banco Inter e Martenare ficam na seleção geral; Stark (Hack4Freedom Brasil 2026) e Ecoa (Youth Challenge Blockchain 2026) têm uma seção própria de projetos de hackathons em `#hackathons`, com demonstrações e repositórios. Formação reúne Inteli e Fundação Matias Machline; comunidade apresenta Inteli Blockchain, Code Club e GraceHopper.

Projetos usam `details` nativo. O menu móvel fecha ao navegar, clicar fora ou pressionar Escape. A navegação destaca a seção visível e preserva endereços antigos de abas. Copiar e-mail aparece quando a Clipboard API está disponível em contexto seguro e anuncia o resultado.

A colagem tem uma breve entrada e links recebem pequenos movimentos no hover. `prefers-reduced-motion` desativa animações, transições e rolagem suave. Sem JavaScript, conteúdo, âncoras, menu e detalhes continuam disponíveis. Há foco visível e atalho para pular ao conteúdo.

## Arquivos

- `index.html`: estrutura semântica e conteúdo.
- `styles.css`: identidade Y2K, fontes locais e responsividade.
- `script.js`: menu, navegação, compatibilidade de âncoras e cópia de e-mail.
- `assets/`: fotos, logos, SVGs e fontes com licenças incluídas.
- `server.mjs`: servidor local sem dependências.
- `PRODUCT.md`, `DESIGN.md` e `.impeccable/`: contexto, tokens e direção da superfície.

O endereço do Fibrac foi mantido conforme fornecido; retornou 404 na verificação pública anterior e pode exigir acesso privado ou atualização.

## Verificação

Âncoras, assets, sintaxe JavaScript e verificações isoladas de interação passaram. Revisão estática concluída com ajustes para habilidades em telas estreitas e menu sem JavaScript. Sem screenshots de QA ou aprovação visual: o navegador IAB estava indisponível, e a tentativa no Chrome foi interrompida porque a URL atual não pôde ser verificada.
