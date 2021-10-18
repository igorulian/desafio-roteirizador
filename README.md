

<h1 align="center">
     <p> 🗺️ Roteirizador </p>
</h1>

<p>
      O desafio consiste em criar um simples roteirizador que permita ao usuário ter informações sobre o trajeto desejado. A cada roteirização realizada, o percurso informado pelo usuário deve ser guardado em um banco de dados, para que posteriormente seja possível exibir um histórico. Após a roteirização realizada, o mapa deve ser atualizado e exibir o caminho a ser percorrido, complementando com informações de distância e o tempo estimado.
</p>

<p align="center">
 <img src="https://github.com/igorulian/desafio-roteirizador/blob/main/frontend/assets/Screenshot2.png" alt="register" border="0" width="48%" heigth="18%">
 <img src="https://github.com/igorulian/desafio-roteirizador/blob/main/frontend/assets/Screenshot3.png" alt="register" border="0" width="48%" heigth="18%">
 
 <img src="https://github.com/igorulian/desafio-roteirizador/blob/main/frontend/assets/Screenshot.png" alt="register" border="0" width="48%" heigth="18%">
 <img src="https://github.com/igorulian/desafio-roteirizador/blob/main/frontend/assets/Screenshot4.png" alt="register" border="0" width="48%" heigth="18%">
</p>

## 🚀 Como executar o projeto

Esse projeto é dividido em duas partes:
1. Backend 
2. Frontend

💡 O frontend precisa que o backend esteja rodando para funcionar corretamente.

### 🧪 Requerimentos 

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina: 
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 

Além disso, será necessário preencher os campos do arquivo .env, para isso você poderá encontrar
o arquivo '.env-example' na pasta do servidor, que contém o exemplo das variáveis, conforme o texto abaixo.
Após preencher todos os campos, renomeie o arquivo de '.env-example' para '.env'. 

Para esse projeto o único link necessário será o de conexão com o banco de dados MongoDB, para adquirir um de maneria fácil, basta entrar em https://cloud.mongodb.com/, criar um banco de dados, e pegar o link de conxão com o banco.

```bash  
MONGO_CONNECT_LINK=
```


#### 🎲 Rodando Backend (servidor)

```bash

# Clone esse repositório
$ git clone https://github.com/igorulian/desafio-roteirizador.git

# Vá para a pasta do backend
$ cd backend

# Instale as dependências
$ yarn install (ou 'npm install', caso não possua yarn)

# Rode o servidor em modo de desenvolvimento
$ yarn dev

```

#### 🧭 Rodando Frontend (web)

```bash

# Vá para a pasta do frontend
$ cd frontend  

# Instale as dependências
$ yarn install (ou 'npm install', caso não possua yarn)

# Rode a aplicação web
$ yarn start

```

---

Feito com ❤️ por Igor Ulian

---
