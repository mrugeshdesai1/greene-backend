# Green-E

## Introduction:
With the world shifting to the green energy, one of the major sectors that is transforming is the automobile sector where electric vehicles are gaining more popularity. As the number of electrical vehicles will increase in coming years, we would require the network of charging stations. Green-E is Electric Vehicle (EV) Charging Subscription Service platform that provides users with a subscription-based model for accessing a network of electric vehicle charging stations. 

This service can further be expanded to various new initiatives with a vision to support green energy as the charging stations that are developed under this network, has solar panels to support charging of the cars. Each charging station can also have an EV service location or may be located near charging station.

## Problem:
This service aims to simplify and enhance the charging experience for electric vehicle owners by offering various subscription plans tailored to their charging needs.

## User Profile
This application is primarily designed for the EV charging station network owners, who wants to increase their customer base, by providing subscription services to their customers. The end users are the EV owners and businesses who owns fleet of EVs.  End users subscribe to one of the plans based on their charging needs using this application. There is no specific requirement of devices as the users can access the application from their smartphones or tablets or laptops with internet connection. User can start/stop the charging session using the application.

## Getting Started
To run this project, run $ npm install in project folder to get all dependencies and packages.

## .env file and database setup:
Run $ npm i dotenv to install the dependency and create .env file at the root of the project folder.
You will need to add the following environment variables to your .env file:

- PORT
- DB_HOST
- DB_DATABASE
- DB_USER
- DB_PASSWORD
- TOKEN

## knex.js & MySQL
seed-data is included in this repo to get you started with Knex.js migrations and seeds. 
Run this command line for migrations $ npx knex migrate:up
For seeding your DB, run: $ npx knex seed:run

## Now you are all set
Run $ node index.js. OR
Since nodemon is already installed run $ npx nodemon index.js in order to avoid restarting of server at every change.

## Tech Stack used:
- ExpressJS
- PassportJS
- MySQL
- knexJS

### Linkedin: linkedin.com/in/mrugeshdesaiqa
### Email: mrugesh.desai1@gmail.com
