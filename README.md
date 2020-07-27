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
</p>


## :rocket: Sobre o projeto
A ideia do projeto é desenvolver uma aplicação baseada no Aircn com um conceito diferente. Empresas oferecem espaços para desesenvolvedores qua atuam com as mesmas tecnologias. O intúito é que com isso possa haver uma ponte entre empresa e desenvolvedores. 

## :gear: Backend

Foi desenvolvida uma API REST desenvolvida em NodeJS utilizando Javascript. O Banco de dados utilizado foi o MongoBD;

## :computer: Frontend

- A Aplicação web tem por responsabilidade permitir que as empresas cadastre spots que serão utilizados pelos desenvolvedores externos que possuam interesse na mesma tecnologia trabalhada na empresa. 
- Foi desenvolvisa em Javascript utilizando o framework ReactJS. 
- Possui comunicação em tempo real utilizando socket.io, que permite receber e responder em tempo real as solicitações de agendamentos de spots.

<img alt="Ecoleta" src="https://raw.githubusercontent.com/jhonatanffelipe/aircnc/master/readmeAssets/web.png" height="350px" />

## :iphone: Mobile

- A Aplicação mobile permite que o desenvolvedor filtre pelas tecnologias e encontre spots disponíveis;
- O desenvolvimento da aplicação mobile foi realizado utilizando a ferramenta Expo, desenvolvida em Javascript utilizando o framework React Native.
- Utiliza comunicação em tempo real com socke.io para realizar as solicitação de agendamento para os spots.

<img alt="Ecoleta" src="https://github.com/jhonatanffelipe/aircnc/blob/master/readmeAssets/mobile.jpeg"  height="350px" />

## Como Executar a aplicação?

- O primeiro passo é clonar o repositório nossa base;
- Em seguida dentro de cada um dos diretórios server, web e mobile iremos executar no terminal o comando `yarn`, para baixar as dependências de nossas aplicação;
- Iremos começar executando nosso server, para isso devemos executar o camando `yarn dev`;
- Com nosso servidor executando podemos executar nossa aplicação web com o comando `yarn start`;
- Para executar nosssa aplicação mobile, precisamos ter instalado em nosso dispositivo mobile um Aplicativo chamado Expo, e estar conectado na mesma rede wi-fi do nosso servidor;
- Executaremos o comando `yarn start`, e iremos com nosso aplicativo, escanear o QRCode gerado em nosso terminal;



