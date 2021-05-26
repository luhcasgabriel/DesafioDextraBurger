
<h1 align="center">Desafio Dextra - Projeto Hamburgueria</h1>

<p align="center">🚀 Desenvolvimento de aplicação para uma startup do ramo alimenticio, foi criado uma aplicação back-end em nodeJs utilizando typescript com TypeOrm, persistência de dados no sqlitefunção, padrões restFull e utilização de TDD(Test-driven development) utilizando boas práticas de estruturação, e a criação de uma aplicação front-end em reactJs para consumo da Api</p>

<h1 align="center">
    <a href="https://nodejs.org/">🔗 NodeJs</a>
    <a href="https://typeorm.io/#/">🔗 TypeOrm</a>
    <a href="https://pt-br.reactjs.org/">🔗 ReacJs</a>
</h1>


<br/>
<br/>


## Sumário 

### Backend
   * [Instalação](#Instalação)
   * [Pré requisitos](#Pré-requisitos)
   * [Execução](#Execução)
   * [Descrição da solução](#Descrição-da-solução)
   * [Testes](#Plano-de-testes)
      
### Frontend
* [Instalação](#Instalação)
   * [Pré requisitos](#Pré-requisitos)
   * [Execução](#Execução)
   * [Descrição da solução](#Descrição-da-solução)



<br/>
<br/>
## Backend
<br/>
## Instalação

Baixe o repositório por linha de comando ou fazendo descompactação , dentro da pasta há um arquivo com as funções. <br/>
Acesse a pasta Backend dentro do projeto raiz, nela está contida a aplicação de back-end
É necessário que se tenha o node ou yarn instalado.


<br/>

<br/>
<br/>

## Pré requisitos 

É necessário que se tenha o node ou yarn instalado

<br/>
<br/>

## Execução

<br/>
Acesse a pasta Backend para executar a aplicação
```bash
cd ./Backend
```
<br/>
Execute a instalação das dependêcias:

Se você utiliza npm:

```bash
npm install
```
<br/>
Se você utiliza yarn:

```bash
yarn install
```
<br/>

Após instalar as dependências, é necessário rodar as migrations para que o typeorm crie as tabelas e insira os dados informados nas seeders

Se você utiliza npm:

```bash
npm run typeorm migration:run
```
<br/>
Se você utiliza yarn:

```bash
yarn typeorm migration:run
```
<br/>
Após rodar as migrations, executar a aplicação rode o seguinte comando

Se você utiliza npm:

```bash
npm run dev
```
<br/>
Se você utiliza yarn:

```bash
yarn dev
```

<br/>
<br/>

## Descrição da solução

Aplicação em Nodejs
<br/>
typescript
<br/>
TypeORM
<br/>
Api rest
<br/>
peristencia de dados com slite
<br/>
Testes unitários e integrados utiliando TDD
<br/>
<br/>

<br/>
<br/>


# Testes 
<br/>
<br/>

------------------
Utilizando Jest e superTest
Localizados nas pasta (__Tests__), estão separados em testes unitários para o calculo dos valores do pedido e descontos de promoções e testes integrados que testam as rotas da api

Execute o comando para rodar os testes unitários e testes integrados

É aconcelhavel reverter e rodar as migrations antes dos testes

Se você utiliza npm:
```bash
npm run typeorm migration:revert
npm run typeorm migration:run
```
<br/>
Se você utiliza yarn:
```bash
yarn typeorm migration:revert
yarn typeorm migration:run
```

Após rode os testes

Se você utiliza npm:
```bash
npm run test
```
<br/>
Se você utiliza yarn:
```bash
yarn test
```

<br/>
<br/>

------------------


## Frontend
br/>
## Instalação

Baixe o repositório por linha de comando ou fazendo descompactação , dentro da pasta Frontend contem a aplicação front end  <br/>
Acesse a pasta Backend dentro do projeto raiz, nela está contida a aplicação de front-end
É necessário que se tenha o node ou yarn instalado.


<br/>

<br/>
<br/>

## Pré requisitos 

É necessário que se tenha o node ou yarn instalado

<br/>
<br/>

## Execução

<br/>
Acesse a pasta Frontend para executar a aplicação
```bash
cd ./Frontend
```
<br/>
Execute a instalação das dependêcias:

Se você utiliza npm:
```bash
npm install
```
<br/>
Se você utiliza yarn:
```bash
yarn install
```
<br/>

Execute a aplicação react

Se você utiliza npm:
```bash
npm run start
```
<br/>
Se você utiliza yarn:
```bash
yarn start
```

<br/>
<br/>

## Descrição da solução

Aplicação em React
<br/>
consumo de api com axios

