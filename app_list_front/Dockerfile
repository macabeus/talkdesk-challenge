FROM node:11.15.0

WORKDIR /app

RUN npm install -g node-gyp

COPY package.json package-lock.json /app/

RUN npm i

COPY . /app
