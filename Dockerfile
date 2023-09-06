# Use the official Node.js image as the base
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Copy the .env file to the container
COPY .env .env

# Expose the port that your Node.js application uses (if needed)
EXPOSE 3000

# Start the Node.js application
CMD ["node", "index.js"]

