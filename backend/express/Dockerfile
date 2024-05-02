# Use a base Node.js image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to WORKDIR
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to WORKDIR
COPY . .

# Expose port 3000 (or any other port your Express app listens on)
EXPOSE 3000

# Start the Express.js server
CMD ["npm", "run", "watch"]
