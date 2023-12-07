# TRYBE FOOTBALL CLUB
## Overview

In this project, I developed a full-stack application using Node.js and Express, employing TypeScript to enhance code security and maintainability. I used Docker to containerize the application, making it easily scalable and distributable. To ensure user authentication and authorization, I implemented the use of JWT (JSON Web Tokens) in the API. Data modeling was performed with Sequelize, ensuring data integrity according to the business rules provided in the project, providing seamless integration between the back-end and front-end layers and for the frontend I used React and CS.

<br />

## Stacks Used

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

## Running Locally

To run the application, start by cloning this repository:

    git clone git@github.com:gabesouto/trybe-futebol-clube.git
    
Navigate to the project root.

    cd trybe-futebol-clube/


   <summary><strong>Running the Application with Docker</strong></summary> 
  </br>
  
  <strong>Note:</strong> To run the application this way, you must have [Docker](https://www.docker.com/) installed on your machine.
  
  </br>
  After cloning the project, install the dependencies in the back-end and front-end folders.
  
      npm run install:apps
  
  In the app folder of the project, bring up the containers <strong>app_backend</strong>, <strong>app_frontend</strong>, and <strong>db</strong> using the docker-compose.dev.yaml. Use the following command.
  
      npm run compose:up
    
  Open the terminal of the <strong>app_backend</strong> container to check the server through the container's logs.
  
      docker-compose logs backend -f
  
  To run the back-end tests, open a local terminal in the back-end folder and run the following command.
  
      npm test


