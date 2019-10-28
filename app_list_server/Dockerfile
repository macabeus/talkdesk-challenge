FROM mhart/alpine-node:12.9.1

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm i

COPY . /app
