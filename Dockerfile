FROM node:18.13.0
# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
# Setup app
RUN npm install
COPY . .
CMD [ "npm", "start" ]