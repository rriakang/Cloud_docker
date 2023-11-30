# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port that the app will run on
EXPOSE 8080

# Command to run the application
CMD ["node", "server.js"]
