<h1 align="center">Telegram Bot API</h1>

## Contents
- [Brief Description](#brief-description)
- [Languages and Tools](#languages-and-tools-in-this-project)
- [Project Details](#project-details)
- [Docker version](#docker-version)
- [Installation Guide](#installation-guide)
  1. [GitHub](#1-github) - Backend and Frontend
  2. [Docker](#2-docker) - Backend, Frontend and Application
  3. [Shell script](#3-shell-script) - Backend and Frontend
- [Images](#images)
---
## Brief Description
- This is a telegram bot project with several commands. 
- Project link (GitHub): [tele-bot-api](https://github.com/phamgiaphuc/CurriculumVitaeBuilder)
- DockerHub repository link: [giaphuc/tele-bot-api](https://hub.docker.com/r/giaphuc/tele-bot-api)
- Project's author: Pham Gia Phuc - Acus
- Personal profile: [MyProfile](https://github.com/phamgiaphuc)

## Languages and Tools in this project
1. [JavaScript](https://en.wikipedia.org/wiki/JavaScript): Programming language
2. [NodeJS](https://nodejs.org/en): JavaScript runtime environment
3. [ExpressJS](https://expressjs.com/): Web framework
4. [TelegrafJS](https://www.npmjs.com/package/telegraf): Modern Telegram Bot API framework for Node.js
5. [Docker](https://www.docker.com/): To dockerize and run on Docker platform
6. [MongoDB](mongodb.com): Server database
7. [Postman](https://www.postman.com/product/what-is-postman/): Testing tool
8. [Bash](https://www.freecodecamp.org/news/bash-scripting-tutorial-linux-shell-script-and-command-line-for-beginners/#:~:text=A%20bash%20script%20is%20a,process%20using%20the%20command%20line.): Command-line execution
9. [ReactJS](https://react.dev/): The library for web and native user interfaces
10. [ViteJS](https://vitejs.dev/): Frontend tool
11. [TailwindCSS](https://tailwindcss.com/): CSS framework 
12. [HTML](https://www.w3schools.com/html/): The standard markup language for Web pages
13. [GitHub](https://github.com/): Version control tool

<p>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,nodejs,expressjs,docker,mongodb,postman,bash,react,vite,tailwindcss,html,github"/>
  </a>
</p>

## Project Details
This project is about Telegram Bot named @pgp_vn_bot that can be served as an admin bot in a Telegram group chat with serveral commands:

**Bot commands:**
1. [/start]() : 'Hi there ✋, please type /cmd to see the commands!'
2. [/check]() : check if the bot is listening
3. [/cmd]() : show the commands
4. [/addTele]() : add telegram member's username to database
5. [/addGitHub]() :add github member's username to database
6. [/allTeleMembers]() : print out all Telegram usernames
7. [/allGitMembers]() : print out all GitHub usernames
8. [/all](): mention all people in the group chat
9. [/pdf](): download a PDF file of group data

**Bot messages:** 'bot', 'hey there' and 'hey bot'`

<p align="center">
  <img src="https://drive.google.com/uc?id=1m1BbEvYUpq2_1n4FdBrp-Gs5cqfuDArb"
</p>

**Routes:**
- For backend: http://localhost:8000 or http://localhost:8000/api/v1/member
- For frontend: http://localhost:8080 or http://localhost:8080/api/v1/member

## Docker version
| Tag version | Description | Date | Link |
|-------------|-------------|------|------|
| 1.0.0-backend | Backend side | Sep 12, 2023 | [Click here](https://hub.docker.com/layers/giaphuc/tele-bot-api/1.0.0-backend/images/sha256-eda0ebdff05d04948aaa292da074dea3cd89f21628b2aec84b5ede56d8b23e94?context=repo) |
| 1.0.0-frontend | Frontend side | Sep 12, 2023 | [Click here](https://hub.docker.com/layers/giaphuc/tele-bot-api/1.0.0-frontend/images/sha256-bb770fcc8e099c939ad534d975437463ca2f6d4a7122a1c3c9e44230055934fd?context=repo) | 

## Installation Guide
### 1. GitHub:
#### Step 1: Git clone this repository to your local computer and go to which folder you want to run
```
git clone git@github.com:phamgiaphuc/tele-bot-api.git
```
- Backend folder:
```
cd backend
```
- Frontend folder:
```
cd frontend
```
#### Step 3: Before executing the project, runs this command to install the following `node_modules` and dependencies in the project
```
npm install
```
#### Step 4: Create the Telegram Bot Token and MongoDB url
- Click this website and follow the instruction on `Register a Bot account` section
> [Create and Host a Telegram Bot with Node.js on Code Capsules](https://codecapsules.io/docs/tutorials/create-nodejs-telegram-bot/#polling-vs-webhooks)
- Click this website and follow the instruction on `Get your cluster’s connection info` section in Connect to a MongoDB Database Using Node.js
> [Connect to a MongoDB Database Using Node.js](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database)
#### Step 3: Create `.env file` and add the environmnet variables
```js
PORT=               // The port -> The default port is 3000
BOT_TOKEN=          // The bot token after you create the Telegram bot
BOT_NAME=           // Your bot name
BOT_USERNAME=       // Your bot username
MY_CHAT_ID=[]       // The chat id
MY_USERNAME=        // Your Telegram username
MONGODB_USERNAME=   // MongoDB username
MONGODB_PASSWORD=   // MongoDB password
MONGODB_URL=        // MongoDB url connection
```
#### Step 4: Apply this command to run the project 
- For backend:
```
npm start
```
- For frontend:
```
npm run dev
```

### 2. Docker
### A. Backend
#### Step 1: Docker pull this image to your local computer
```
docker pull giaphuc/tele-bot-api:1.0.0-backend
```
#### Step 2: Create the Telegram Bot Token and MongoDB url
- Click this website and follow the instruction on `Register a Bot account` section
> [Create and Host a Telegram Bot with Node.js on Code Capsules](https://codecapsules.io/docs/tutorials/create-nodejs-telegram-bot/#polling-vs-webhooks)
- Click this website and follow the instruction on `Get your cluster’s connection info` section
> [Connect to a MongoDB Database Using Node.js](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database)
#### Step 3: Add environment variables and docker run this image
```
docker run -it -p 8000:8000 -e PORT="$PORT" \
-e BOT_TOKEN="$BOT_TOKEN" \
-e BOT_NAME="$BOT_NAME" \
-e BOT_USERNAME="$BOT_USERNAME" \
-e MY_CHAT_ID="$MY_CHAT_ID" \
-e MY_USERNAME="$MY_USERNAME" \
-e MONGODB_USERNAME="$MONGODB_USERNAME" \
-e MONGODB_PASSWORD="$MONGODB_PASSWORD" \
-e MONGODB_URL="$MONGODB_URL" \
-v /path/to/host/directory:/root/Desktop \
--name "tele-bot-api-be" giaphuc/tele-bot-api:1.0.0-backend
```
> Remember to change the **host path** before running the image
#### Step 4: Backend routes
- http://localhost:8000
- http://localhost:8000/api/v1/test
- http://localhost:8000/api/v1/member
- http://localhost:8000/api/v1/member/telegram
- http://localhost:8000/api/v1/member/github
- http://localhost:8000/api/v1/member/:id

### B. Frontend
#### Step 1: Docker pull this image to your local computer
```
docker pull giaphuc/tele-bot-api:1.0.0-frontend
```
#### Step 2: Docker run this image
```
docker run -it -p 8000:8000 \
--name "tele-bot-api-fe" giaphuc/tele-bot-api:1.0.0-frontend
```
> Remember to change the **host path** before running the image
#### Step 3: Frontend routes
- http://localhost:8080
- http://localhost:8080/api/v1/member

### C. Application (Both backend and frontend)
#### Step 1: Create a `docker-compose.yml` file and copy the below code to insert into the script
```docker-compose.yml
version: '3'
services:
  frontend:
    container_name: tele-bot-api-frontend
    image: giaphuc/tele-bot-api:1.0.0-frontend
    ports:
      - "8080:8080"
    depends_on:
      - backend

  backend:
    container_name: tele-bot-api-backend
    image: giaphuc/tele-bot-api:1.0.0-backend
    ports:
      - "8000:8000"
    volumes:
      - /path/to/host/directory:/root/Desktop
    environment:
      - PORT='your_port'
      - BOT_TOKEN='your_bot_token'
      - BOT_NAME='your_bot_name'
      - BOT_USERNAME='your_bot_username'
      - MY_CHAT_ID='your_chat_id'
      - MY_USERNAME='your_telegram_username'
      - MONGODB_USERNAME='your_mongodb_username'
      - MONGODB_PASSWORD='your_mongodb_password'
      - MONGODB_URL='your_mongodb_url'
```
> Make sure to replace **'your_port'**, **'your_bot_token'**, **'your_bot_name'**, **'your_bot_username'**, **'your_chat_id'**, **'your_telegram_username'**, **'your_mongodb_username'**, **'your_mongodb_password'**, **'your_mongodb_url'** and **host path** with your actual values.

#### Step 2: Run the below command
```
docker-compose up
```
#### Step 3: Routes
1. Backend:
- http://localhost:8000
- http://localhost:8000/api/v1/test
- http://localhost:8000/api/v1/member
- http://localhost:8000/api/v1/member/telegram
- http://localhost:8000/api/v1/member/github
- http://localhost:8000/api/v1/member/:id
2. Frontend:
- http://localhost:8080
- http://localhost:8080/api/v1/member

### 3. Shell script
### A. Backend
#### Step 1: Create a shell script or use the shell script in this repository and copy the below code to insert into the script
```sh
# Name: docker_run.sh
# !/bin/bash

# Pull the Docker image
docker pull giaphuc/tele-bot-api:1.0.0-backend

# Set your environment variables
PORT='your_port'
BOT_TOKEN='your_bot_token'
BOT_NAME='your_bot_name'
BOT_USERNAME='your_bot_username'
MY_CHAT_ID='your_chat_id'
MY_USERNAME='your_telegram_username'
MONGODB_USERNAME='your_mongodb_username'
MONGODB_PASSWORD='your_mongodb_password'
MONGODB_URL='your_mongodb_url'

# Run the Docker container
# Remember to change the host path before running the image
docker run -it -p 8000:8000 -e PORT="$PORT" \
-e BOT_TOKEN="$BOT_TOKEN" \
-e BOT_NAME="$BOT_NAME" \
-e BOT_USERNAME="$BOT_USERNAME" \
-e MY_CHAT_ID="$MY_CHAT_ID" \
-e MY_USERNAME="$MY_USERNAME" \
-e MONGODB_USERNAME="$MONGODB_USERNAME" \
-e MONGODB_PASSWORD="$MONGODB_PASSWORD" \
-e MONGODB_URL="$MONGODB_URL" \
-v /path/to/host/directory:/root/Desktop \
--name "TelegramBot" giaphuc/tele-bot-api:1.0.0-backend
```
> Make sure to replace **'your_port'**, **'your_bot_token'**, **'your_bot_name'**, **'your_bot_username'**, **'your_chat_id'**, **'your_telegram_username'**, **'your_mongodb_username'**, **'your_mongodb_password'**, **'your_mongodb_url'** and **host path** with your actual values.

#### Step 2: To run the script, follow these steps
2.1 Make the script executable by running the following command:
```sh
chmod +x docker_run.sh #Your shell file name
```
2.2 Run the script using:
```sh
./docker_run.sh #Your shell file name
```
### B. Frontend
#### Step 1: Create a shell script or use the shell script in this repository and copy the below code to insert into the script
```sh
# Name: docker_run.sh
# !/bin/bash

# Pull the Docker image
docker pull giaphuc/tele-bot-api:1.0.0-frontend


# Run the Docker container
# Remember to change the host path before running the image
docker run -it -p 8000:8000 \
--name "tele-bot-api-fe" giaphuc/tele-bot-api:1.0.0-frontend
```

#### Step 2: To run the script, follow these steps
2.1 Make the script executable by running the following command:
```sh
chmod +x docker_run.sh #Your shell file name
```
2.2 Run the script using:
```sh
./docker_run.sh #Your shell file name
```