# TRYBE FOOTBALL CLUB

<div align="center">

![](https://github.com/gabesouto/Trybe-Football-Club/blob/main/ezgif.com-video-to-gif.gif)

</div>

## Description

In this project, I developed a website for tracking football teams and matches. The full-stack application utilizes Node.js and Express, with TypeScript for security and maintainability improvements. Containerization is done with Docker, providing scalability and ease of distribution.

The main focus is to allow users to add matches, edit scores, include teams, and view scores with specific filters. For authentication and authorization, I implemented JWT (JSON Web Tokens) in the API. Data modeling uses Sequelize to ensure integrity according to business rules.

On the front-end, React and CSS were employed to create an intuitive and user-friendly interface, facilitating user interaction with the features offered by the website.


<br />

## Features

1. **Login:**
   - Allows secure authentication of users using JSON Web Tokens (JWT).

2. **Manage Teams:**
   - Add new teams.
   - Edit information of existing teams.

3. **Manage Matches:**
   - Add new matches.
   - Edit match-related information.

4. **Filter Scores:**
   - View scores based on specific filters.
<br/>

<details>
<summary>💻 Documentação Backend</summary>

## Database

![ER Diagram](https://github.com/gabesouto/Trybe-Football-Club/blob/main/diagrama-er.png)

⚠️ The `package.json` in the `app/backend` directory contains a script `db:reset` that is responsible for dropping the database, recreating it, and running migrations and seeders. You can execute it with the command `npm run db:reset` if you need to recreate the database for any reason.

⚠️ There are already ready seeders in `app/backend/src/database/seeders`. You can also use them as a reference to create your migrations according to the fields and tables that the seeders will populate. Once you create a migration, you should rename the corresponding seeder by removing the underscore (`_`) at the end of it. This way, the `db:reset` script will use it in tests, and you will ensure that your migration worked as expected.

## API Endpoints

### Teams

1. **List All Teams:**
   - Method: GET
   - Endpoint: `/teams`
   - Description: Returns an array with all registered teams.

2. **Get Team by ID:**
   - Method: GET
   - Endpoint: `/teams/:id`
   - Description: Returns an object with the team corresponding to the specified ID.

3. **Create New Team:**
   - Method: POST
   - Endpoint: `/teams`
   - Description: Creates a new team based on the provided data.
  
### Matches

7. **List All Matches:**
   - Method: GET
   - Endpoint: `/matches`
   - Description: Returns an array with all registered matches.

8. **Get Match by ID:**
   - Method: GET
   - Endpoint: `/matches/:id`
   - Description: Returns an object with the match corresponding to the specified ID.

9. **Create New Match:**
   - Method: POST
   - Endpoint: `/matches`
   - Description: Creates a new match based on the provided data.

10. **Update Match by ID:**
    - Method: PUT
    - Endpoint: `/matches/:id`
    - Description: Updates an existing match corresponding to the specified ID.

## Leaderboard

11. **View Leaderboard:**
   - Method: GET
   - Endpoint: `/leaderboard`

12. **Filter Leaderboard by Home Wins**
   - Method: GET
   - Endpoint: `/leaderboard/home`
     
13. **Filter Leaderboard by Away Wins**
   - Method: GET
   - Endpoint: `/leaderboard/away`

</details>


## Stacks 

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

## Running the Application

To run the application, start by cloning this repository:

```bash
   git clone git@github.com:gabesouto/trybe-futebol-clube.git
```

Navigate to the project directory:

    cd trybe-futebol-clube/

  </br>
 
<strong>Note:</strong> To run the application this way, you must have Docker installed on your machine.

  </br>
  
After cloning the project, install the dependencies:
  
   ```
      npm run install:apps
   ```
  
In the "app" folder of the project, start the containers <strong>app_backend</strong>, <strong>app_frontend</strong>, and db using the docker-compose.dev.yaml file. Use the following command:
  
      npm run compose:up
    
Open the terminal of the <strong>app_backend</strong> container to check the server through the container's logs:
  
      docker-compose logs backend -f

To run the backend tests, open a local terminal in the backend folder and run the following command:
  
      npm test


