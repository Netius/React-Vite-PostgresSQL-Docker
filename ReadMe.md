# Overview 

## Template project with React-Vite (Javascript) + PostgreSQL with hot-reload running in Docker.

This repository is a template to create a application in React Vite using PostgreSQL database running in Docker.
Using Express as a middleware to connect with PostgreSQL. 

Template also includes api calls to PostgreSQL. 

## Features
  - Hot reloads when changing code in the frontend or backend  
  - Full integrasjon with PostgreSQL database
  - One docker-compose.yml for the whole application
  - Api calls for Get, Post, Delete, Put with some dummy data

## Versions
  - Docker version 26.1.4
  - Docker Compose version v2.27.1-desktop.1
  - Node v20.11.0

## Getting Started

Before you start you must have Docker Desktop and Node installed in your PC.

In the terminal run: 
   - git clone https://github.com/Netius/React-Vite-PostgresSQL-Docker.git
   - cd React-Vite-PostgresSQL-Docker
   - docker-compose build
   - docker-compose up

#### PostgreSQL Admin (root folder)
Docker container name: adminer
http://localhost:8080/

See file create-db.sql in root folder for more details on user

  - System: PostgreSQL
  - Server: db
  - Username: my_user
  - Password: root
  - Database: my_database

#### React-Vite (frontend folder)
Docker container name: my-frontend
  - http://localhost:5173/

#### Server (backend folder)
See file create-db.sql in root folder for more details on data in database
  - http://localhost:3001/

## References
Postgres and React 
  - https://blog.logrocket.com/getting-started-postgres-react-app/

