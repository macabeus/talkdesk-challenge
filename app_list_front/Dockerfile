FROM node:11.15.0-alpine

WORKDIR /app

RUN apk add --no-cache \
  git \
  g++ \
  make \
  python \
  build-base \
  cairo-dev \
  jpeg-dev \
  pango-dev \
  musl-dev \
  giflib-dev \
  pixman-dev \
  pangomm-dev \
  libjpeg-turbo-dev \
  freetype-dev && \
  npm install -g node-gyp

COPY package.json package-lock.json /app/

RUN npm i

COPY . /app
