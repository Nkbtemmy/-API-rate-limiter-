# Base image
FROM node:lts-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
RUN npm install -g pm2

ENV NODE_ENV=production
COPY src .
CMD ["pm2-runtime", "start", "npm", "--", "start", "-i", "max"]