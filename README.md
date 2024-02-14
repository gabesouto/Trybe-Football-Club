# TRYBE FOOTBALL CLUB

<div align="center">

![](https://github.com/gabesouto/Trybe-Football-Club/blob/main/ezgif.com-video-to-gif.gif)

</div>

## Descrição

Neste projeto, desenvolvi um site para o acompanhamento de times de futebol e partidas. A aplicação full-stack utiliza Node.js e Express, com TypeScript para melhorias de segurança e manutenibilidade. A containerização é feita com Docker, proporcionando escalabilidade e facilidade de distribuição.

O foco principal é permitir aos usuários adicionar partidas, editar placares, incluir times e visualizar placares com filtros específicos. Para autenticação e autorização, implementei JWT (JSON Web Tokens) na API. A modelagem de dados utiliza Sequelize para garantir a integridade de acordo com as regras de negócio.

No front-end, React e CSS foram empregados para criar uma interface intuitiva e amigável, facilitando a interação dos usuários com as funcionalidades oferecidas pelo site.

<br />

## Funcionalidades

1. **Login:**
   - Permite autenticação segura dos usuários utilizando JSON Web Tokens (JWT).

2. **Gerenciar Times:**
   - Adicionar novos times.
   - Editar informações de times existentes.

3. **Gerenciar Partidas:**
   - Adicionar novas partidas.
   - Editar informações relacionadas a partidas.

4. **Filtrar Placares:**
   - Visualizar placares com base em filtros específicos.
  
<br/>

<details>
<summary>💻 Documentação Backend</summary>

## Banco de dados

 ![](https://github.com/gabesouto/Trybe-Football-Club/blob/main/diagrama-er.png)

  ⚠️ O `package.json` do diretório `app/backend` contém um script `db:reset` que é responsável por "dropar" o banco, recriar e executar as _migrations_ e _seeders_. Você pode executá-lo com o commando `npm run db:reset` se por algum motivo precisar recriar a base de dados;

  ⚠️ Já existem _seeders_ prontas em `app/backend/src/database/seeders`. Você também pode usá-las como referência para criar suas _migrations_ de acordo com os campos e tabelas que as _seeders_ irão popular.  Assim que criar uma _migration_ você deve renomear a _seeder_ correspondente retirando o underline (`_`) ao fim dela, assim o script `db:reset` vai usá-la nos testes e você se certificará se sua _migration_ funcionou como o esperado.

  ## API endpoints
  
  ### Produtos

1. **Listar Todos os Times:**
   - Método: GET
   - Endpoint: `/teams`
   - Descrição: Retorna um array com todos os times cadastrados.

2. **Buscar Time por ID:**
   - Método: GET
   - Endpoint: `/teams/:id`
   - Descrição: Retorna um objeto com o time que corresponde ao ID especificado.

3. **Criar Novo Time:**
   - Método: POST
   - Endpoint: `/teams`
   - Descrição: Cria um novo time com base nos dados fornecidos.
  
### Matches

7. **Listar Todas as Vendas:**
   - Método: GET
   - Endpoint: `/matches`
   - Descrição: Retorna um array com todas as partidas registradas.

8. **Buscar Partida por ID:**
   - Método: GET
   - Endpoint: `/matches/:id`
   - Descrição: Retorna um objeto com a partida que corresponde ao ID especificado.

9. **Criar Nova Partida:**
   - Método: POST
   - Endpoint: `/matches`
   - Descrição: Cria uma nova venda com base nos dados fornecidos.

10. **Atualizar Partida por ID:**
    - Método: PUT
    - Endpoint: `/matches/:id`
    - Descrição: Atualiza uma partida existente que corresponde ao ID especificado.

##@ Leaderboard

11. **Visualizar o placar:**
   - Método: GET
   - Endpoint: `/leaderboard`

12. **Filtrar Placar Por Vitórias Em Casa**
   - Método: GET
   - Endpoint: `/leaderboard/home`
     
13. **Filtrar Placar Por Vitórias Fora De Casa**
   - Método: GET
   - Endpoint: `/leaderboard/away`

   </details>


## Stacks Utilizadas

<div>
   <img src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' alt='HTML' />
    <img src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' alt='CSS3' />
    <img src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' alt='JavaScript' />
    <img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' alt='ReactJS' />
    <img src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white' alt='React-router' />
    <img src='https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white' alt='ESlint' />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
    <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="Mysql"/>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS"/>
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
    <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="Sequelize"/>
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="jwt"/>
    <img src="https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white" alt="mocha"/>
</div>

## Executando a Aplicação

Para executar a aplicação, comece clonando este repositório:

    git clone git@github.com:gabesouto/trybe-futebol-clube.git
    
Acessa a página do projeto

    cd trybe-futebol-clube/

  </br>
 
  
  <strong>Note:</strong>Para executar a aplicação desta maneira, você deve ter o [Docker](https://www.docker.com/) instalado em sua máquina.

  </br>
  
Após clonar o projeto instale as depêndencias
  
   ```
      npm run install:apps
   ```
  
Na pasta "app" do projeto, inicie os containers <strong>app_backend</strong>, <strong>app_frontend</strong> e db utilizando o arquivo docker-compose.dev.yaml. Utilize o seguinte comando.
  
      npm run compose:up
    
Abra o terminal do container <strong>app_backend</strong> para verificar o servidor por meio dos registros (logs) do container.
  
      docker-compose logs backend -f

Para executar os testes do back-end, abra um terminal local na pasta do back-end e execute o seguinte comando.
  
      npm test


