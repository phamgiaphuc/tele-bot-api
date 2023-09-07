#name: docker_run.sh
#!/bin/bash

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
docker run -it -e PORT="$PORT" \
-e BOT_TOKEN="$BOT_TOKEN" \
-e BOT_NAME="$BOT_NAME" \
-e BOT_USERNAME="$BOT_USERNAME" \
-e MY_CHAT_ID="$MY_CHAT_ID" \
-e MY_USERNAME="$MY_USERNAME" \
-e MONGODB_USERNAME="$MONGODB_USERNAME" \
-e MONGODB_PASSWORD="$MONGODB_PASSWORD" \
-e MONGODB_URL="$MONGODB_URL" \
--name "TelegramBot" giaphuc/tele-bot-api:1.0.0
