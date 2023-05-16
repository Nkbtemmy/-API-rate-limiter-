# Base image
FROM node:lts-alpine
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g pm2

# Set the environment to production
ENV NODE_ENV=production

# Copy the source code
COPY src/ ./

# Start the application with pm2-runtime
CMD ["pm2-runtime", "start", "npm", "--", "start", "-i", "max"]