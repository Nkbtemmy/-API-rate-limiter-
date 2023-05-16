# Base image
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install pm2 globally
RUN npm install -g pm2

# Copy application code
COPY . .

# Expose a port (optional, depending on your application)
EXPOSE 9099

# Start the application using pm2
CMD ["pm2-runtime", "start", "npm", "--", "start", "-i", "max"]
