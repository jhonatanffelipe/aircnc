<p align="center">
    <img src="https://raw.githubusercontent.com/jhonatanffelipe/aircnc/master/readmeAssets/logo2.png"/>
</p>

Projeto desenvolvido ao longo da Semana OmniStack 09 - Rocketseat. Todo o projeto foi denvolvido com a stack NodeJS, React e React Native.

<p align="center">
   <img alt="Tecnologias" src="https://img.shields.io/github/languages/count/jhonatanffelipe/aircnc?color=f05a5b">
   <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/jhonatanffelipe/aircnc?color=f05a5b">
   <img alt="Ultimo commit no Github" src="https://img.shields.io/github/last-commit/jhonatanffelipe/aircnc?color=f05a5b">
   <img alt="Criado por" src="https://img.shields.io/badge/made%20by-jhonatanffelipe-%20?color=f05a5b">
   <img alt="Linguagens mais usadas no programa" src="https://img.shields.io/github/languages/top/jhonatanffelipe/aircnc?color=f05a5b">
</p> 

<p align="center">
  <a href="#rocket-sobre-o-projeto">Sobre o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-backend">Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-frontend">Frontend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iphone-mobile">Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrow_forward-como-executar-a-aplicação">Executar a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>


## :rocket: Sobre o projeto
A ideia do projeto é desenvolver uma aplicação baseada no Aircn com um conceito diferente. Empresas oferecem espaços para desesenvolvedores qua atuam com as mesmas tecnologias. O intúito é que com isso possa haver uma ponte entre empresa e desenvolvedores. 

<p align="center">
    <img src="https://raw.githubusercontent.com/jhonatanffelipe/aircnc/master/readmeAssets/aircnc.png" width="800px"/>
</p>

## :gear: Backend

#### Sobre
Uma API REST desenvolvida em NodeJS. É responsável por servir os dados para as aplicações web e mobile;

#### Tecnologia utilizadas na construção do Backend

-  [VS Code](https://code.visualstudio.com/)
-  [Node.js](https://nodejs.org/)
-  [Express](https://expressjs.com/)
-  [Javascript](https://www.typescriptlang.org/)
-  [MongoDB](https://www.mongodb.com/)
-  [Mogoose](https://mongoosejs.com/docs/)
-  [Multer](https://github.com/expressjs/multer)
-  [Cors](https://www.npmjs.com/package/cors)
-  [Socket.io](https://socket.io/)

## :computer: Frontend

#### Sobre
- A Aplicação web tem por responsabilidade permitir que as empresas cadastre spots que serão utilizados pelos desenvolvedores externos que possuam interesse na mesma tecnologia trabalhada na empresa. 
- Possui comunicação em tempo real utilizando socket.io, que permite receber e responder em tempo real as solicitações de agendamentos de spots.

#### Tecnologia utilizadas na construção do Frontend

-  [VS Code](https://code.visualstudio.com/)
-  [Node.js](https://nodejs.org/)
-  [Javascript](https://www.typescriptlang.org/)
-  [Socket.io](https://socket.io/)
-  [React](https://pt-br.reactjs.org/)
-  [React-router-dom](https://reactrouter.com/web/guides/quick-start)
-  [Axios](https://www.npmjs.com/package/axios)

## :iphone: Mobile

#### Sobre
- A Aplicação mobile permite que o desenvolvedor filtre pelas tecnologias e encontre spots disponíveis;
- Utiliza comunicação em tempo real com socke.io para realizar as solicitação de agendamento para os spots.



#### Tecnologia utilizadas na construção da aplicação Mobile

-  [VS Code](https://code.visualstudio.com/)
-  [Node.js](https://nodejs.org/)
-  [Javascript](https://www.typescriptlang.org/)
-  [Socket.io](https://socket.io/)
-  [React](https://pt-br.reactjs.org/)
-  [React Native](https://reactnative.dev/)
-  [React-navigation](https://reactnavigation.org/)
-  [Axios](https://www.npmjs.com/package/axios)


# :arrow_forward: Executar a aplicação

- O primeiro passo é clonar o repositório nossa base;
- Em seguida dentro de cada um dos diretórios server, web e mobile iremos executar no terminal o comando `yarn`, para baixar as dependências de nossas aplicação;
- Iremos começar executando nosso server, para isso devemos executar o camando `yarn dev`;
- Com nosso servidor executando podemos executar nossa aplicação web com o comando `yarn start`;
- Para executar nosssa aplicação mobile, precisamos ter instalado em nosso dispositivo mobile um Aplicativo chamado Expo, e estar conectado na mesma rede wi-fi do nosso servidor;
- Executaremos o comando `yarn start`, e iremos com nosso aplicativo, escanear o QRCode gerado em nosso terminal;



