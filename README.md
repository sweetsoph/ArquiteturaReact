# React Boiler Plate

O Objetivo deste projeto é implementar uma arquitetura de pastas e arquivos coerente, seguindo as práticas de mercado e servindo de base para as próximas aplicações.

## Inicialização do Projeto

Para inicializar o projeto utilizei o Vite, que é uma ferramenta de build muito eficiente e popular em projetos React, pois é muito competente no trabalho de agilizar o desenvolvimento, muito pelo fato dele não precisar empacotar todo o seu código antes de iniciar o servidor, como faziam ferramentas mais antigas, e como ele divide o código em módulos, só é processado código sob demanda quando o navegador realmente o solicita.

Para inicializar, é só rodar:

```cmd
npm create vite@latest
```

Se a pasta *node_modules* não tiver sido inicializada junto com o projeto, basta rodar:

```cmd
npm install
```

Por fim, para iniciar o desenvolvimento e visualizar o código no servidor local:

```cmd
npm run dev
```

## Arquitetura das Pastas

Alguns arquivos que vêm junto com a inicialização são desnecessários, e eles são excluídos em determinado commit deste repositório. Após isso, foram criadas algumas pastas dentro da pasta src:

### Pages
Guardará nossas páginas completas, onde cada página é representada por uma pasta, pasta essa composta pelo arquivo .jsx com seu conteúdo e os demais utilitários necessários.

### Components
Guardará os componentes, ou seja, os elementos que se repetem continuamente ao longo das páginas, como botões, links, inputs de formulários, entre muitos outros. Cada componente é representado por uma pasta, composta pelo arquivo .jsx com seu conteúdo e os demais utilitários necessários.

### Services
Esta pasta guardará os serviços, como conexões com APIs ou bibliotecas, que sejam necessárias para todo o sistema. Cada serviço é representado por um arquivo .jsx que inicializa o serviço e pode ser importado em qualquer página do sistema.

### Routes
Esta pasta guardará as rotas do sistema.

### Assets
Esta pasta guardará todos os complementos, como imagens, vídeos, ícones, entre outros, que forem utilizados ao longo da aplicação. Podem ser feitas diversas organizações diferentes aqui, como uma pasta para imagens, que então se ramifica em pastas ordenando as imagens por arquivo.
