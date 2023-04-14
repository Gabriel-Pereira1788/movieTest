# movieTest

Explicação do uso e build do projeto

tecnologias utilizadas e suas versões OBS: Garanta que as versões do seu sistema estejam compativeis

- yarn:1.22.19
- npm:9.2.0
- node:19.4.0

## Observações
- Em Modo de desenvolvimento o expo caso desconectado da internet não renderiza os icones por isso disponibilizeI uma versão apk de release 
ela esta disponivel na pasta "public" na raiz do projeto. Voce pode arrastar e soltar essa versão apk dentro do emulador e ele o instalara,ou
pode utilizar essa versão no seu dispositivo fisico. Observe  a imagem abaixo.


![Caminho apk](https://github.com/Gabriel-Pereira1788/movieTest/blob/main/public/screenshots/apkPath.png)

Adotei essa medida para melhorar o teste no fluxo offline.

## Passos para instalação em desenvolvimento
Caso queira rodar o projeto na versão de desenvolvimento siga esse passo a passo.

- Depois de verificar as versões acima utilize o comando yarn para instalar as dependencias
- Depois de instalado as dependencias , utilize o comando "npx expo run:android" para instalar a aplicação no dispositivo.
- Feito isso basta esperar a build e testar.

Caso haja qualquer erro nesse fluxo voce ainda pode optar por instalar a versão apk citada anteriormente.


### Tela inicial 
<div align="center">
  <img src="https://github.com/Gabriel-Pereira1788/movieTest/blob/main/public/screenshots/home.png" width="300px" />
</div>

### Tela de filme individual

<div align="center">
   <img src="https://github.com/Gabriel-Pereira1788/movieTest/blob/main/public/screenshots/singleMovie.png" width="200px" />
   <img src="https://github.com/Gabriel-Pereira1788/movieTest/blob/main/public/screenshots/singleMovie2.png" width="200px" />
   <img src="https://github.com/Gabriel-Pereira1788/movieTest/blob/main/public/screenshots/singleMovie3.png" width="200px" />
   <img src="https://github.com/Gabriel-Pereira1788/movieTest/blob/main/public/screenshots/singleMovie4.png" width="200px" />
</div>


### Tela de explorar 

<div align="center">
   <img src="https://github.com/Gabriel-Pereira1788/movieTest/blob/main/public/screenshots/explore.png" width="300px" />
   <img src="https://github.com/Gabriel-Pereira1788/movieTest/blob/main/public/screenshots/explore2.png" width="300px" />
</div>


### Tela de favoritos

<div align="center">
   <img src="https://github.com/Gabriel-Pereira1788/movieTest/blob/main/public/screenshots/favorites.png" width="300px" />
   <img src="https://github.com/Gabriel-Pereira1788/movieTest/blob/main/public/screenshots/favorites2.png" width="300px" />
</div>





