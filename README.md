# movieTest

Explicação do uso e build do projeto

tecnologias utilizadas e suas versões OBS: Garanta que as versões do seu sistema estejam compativeis

- yarn:1.22.19
- npm:9.2.0
- node:19.4.0

# Observações
-Em Modo de desenvolvimento o expo caso desconectado da internet não renderiza os icones por isso disponibilizeI uma versão apk de release 
ela esta disponivel na pasta "apk" na raiz do projeto. Voce pode arrastar e soltar essa versão apk dentro do emulador e ele o instalara,ou
pode utilizar essa versão no seu dispositivo fisico. 

Adotei essa medida para melhorar o teste no fluxo offline.

# Passos para instalação em desenvolvimento
Caso queira rodar o projeto na versão de desenvolvimento siga esse passo a passo.

-Depois de verificar as versões acima utilize o comando yarn para instalar as dependencias
-Depois de instalado as dependencias , utilize o comando "npx expo run:android" para instalar a aplicação no dispositivo.
-Feito isso basta esperar a build e testar.

Caso haja qualquer erro nesse fluxo voce ainda pode optar por instalar a versão apk citada anteriormente.
