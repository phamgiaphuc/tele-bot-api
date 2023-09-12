<h1 align="center">Telegram Bot API</h1>

## Contents
- [Brief Description](#brief-description)
- [Languages and Tools](#languages-and-tools-in-this-project)
- [Project Details](#project-details)
- [Docker version](#docker-version)
- [Installation Guide](#installation-guide)
  1. [GitHub](#1-github)
  2. [Docker](#2-docker)
  3. [Shell script](#3-shell-script)
---
## Brief Description
- This is a telegram bot project with several commands. 
- Project link (GitHub): [tele-bot-api](https://github.com/phamgiaphuc/CurriculumVitaeBuilder)
- DockerHub repository link: [giaphuc/tele-bot-api](https://hub.docker.com/r/giaphuc/tele-bot-api)
- Project's author: Pham Gia Phuc - Acus
- Personal profile: [MyProfile](https://github.com/phamgiaphuc)

## Languages and Tools in this project
1. [JavaScript](https://en.wikipedia.org/wiki/JavaScript): Programming language
1. [NodeJS](https://nodejs.org/en): JavaScript runtime environment
2. [ExpressJS](https://expressjs.com/): Web framework
3. [TelegrafJS](https://www.npmjs.com/package/telegraf): Modern Telegram Bot API framework for Node.js
4. [Docker](https://www.docker.com/): To dockerize and run on Docker platform
5. [MongoDB](mongodb.com): Server database
6. [Postman](https://www.postman.com/product/what-is-postman/): Testing tool
7. [Bash](https://www.freecodecamp.org/news/bash-scripting-tutorial-linux-shell-script-and-command-line-for-beginners/#:~:text=A%20bash%20script%20is%20a,process%20using%20the%20command%20line.): Command-line execution

<p>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,nodejs,expressjs,docker,mongodb,postman,bash"/>
  </a>
</p>

## Project Details
This project is about Telegram Bot that can be served as an admin bot in a Telegram group chat with serveral commands:

**Bot commands:**
1. [/start]() : 'Hi there ✋, please type /cmd to see the commands!'
2. [/check]() : check if the bot is listening
3. [/cmd]() : show the commands
4. [/add]() : add telegram member's username to database
5. [/addgithub]() :add github member's username to database
6. [/allTeleMembers]() : print out all Telegram usernames
7. [/allGitMembers]() : print out all GitHub usernames
8. [/all](): mention all people in the group chat
9. [/pdf](): download a PDF file of group data

**Bot messages:** 'bot', 'hey there' and 'hey bot'`

<p align="center">
  <img src="https://drive.google.com/uc?id=1m1BbEvYUpq2_1n4FdBrp-Gs5cqfuDArb"
</p>

## Docker version
| Tag version | Description | Date | Link |
|-------------|-------------|------|------|
| 1.0.0 | Add default commands | Sep 7, 2023 | [Click here](https://hub.docker.com/layers/giaphuc/tele-bot-api/1.0.0/images/sha256-be2bdb26675c14db84f37a3bca876201358db475b77c3a2bb6a3db6995c033a0?context=repo) |
| 2.0.0 | Add [/pdf]() command | Sep 10, 2023 | [Click here](https://hub.docker.com/layers/giaphuc/tele-bot-api/2.0.0/images/sha256-8b75f717868bef28252c83e225a5a2c61f7725d6b8845bf3904a6bedff77891a?context=repo) | 
## Installation Guide
### 1. GitHub:
#### Step 1: Git clone this repository to your local computer
```
git clone git@github.com:phamgiaphuc/tele-bot-api.git
```
#### Step 2: Before executing the project, runs this command to install the following `node_modules` and dependencies in the project
```
npm install
```
#### Step 2: Create the Telegram Bot Token and MongoDB url
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
```
npm start
```

### 2. Docker
#### Step 1: Docker pull this image to your local computer
```
docker pull giaphuc/tele-bot-api:1.0.0
```
#### Step 2: Create the Telegram Bot Token and MongoDB url
- Click this website and follow the instruction on `Register a Bot account` section
> [Create and Host a Telegram Bot with Node.js on Code Capsules](https://codecapsules.io/docs/tutorials/create-nodejs-telegram-bot/#polling-vs-webhooks)
- Click this website and follow the instruction on `Get your cluster’s connection info` section
> [Connect to a MongoDB Database Using Node.js](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database)
#### Step 3: Add environment variables and docker run this image
```
docker run -it -e PORT="$PORT" \
-e BOT_TOKEN="$BOT_TOKEN" \
-e BOT_NAME="$BOT_NAME" \
-e BOT_USERNAME="$BOT_USERNAME" \
-e MY_CHAT_ID="$MY_CHAT_ID" \
-e MY_USERNAME="$MY_USERNAME" \
-e MONGODB_USERNAME="$MONGODB_USERNAME" \
-e MONGODB_PASSWORD="$MONGODB_PASSWORD" \
-e MONGODB_URL="$MONGODB_URL" \
-v /path/to/host/directory:/root/Desktop \
--name "TelegramBot" giaphuc/tele-bot-api:1.0.0
```
> Remember to change the **host path** before running the image
### 3. Shell script
#### Step 1: Create a shell script or use the shell script in this repository and copy the below code to insert into the script
```sh
# Name: docker_run.sh
# !/bin/bash

# Pull the Docker image
docker pull giaphuc/tele-bot-api:1.0.0

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
docker run -it -e PORT="$PORT" \
-e BOT_TOKEN="$BOT_TOKEN" \
-e BOT_NAME="$BOT_NAME" \
-e BOT_USERNAME="$BOT_USERNAME" \
-e MY_CHAT_ID="$MY_CHAT_ID" \
-e MY_USERNAME="$MY_USERNAME" \
-e MONGODB_USERNAME="$MONGODB_USERNAME" \
-e MONGODB_PASSWORD="$MONGODB_PASSWORD" \
-e MONGODB_URL="$MONGODB_URL" \
-v /path/to/host/directory:/root/Desktop \
--name "TelegramBot" giaphuc/tele-bot-api:1.0.0
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

