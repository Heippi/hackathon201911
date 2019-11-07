# Based on Node.js, to build and compile Angular
FROM node:10.16.0 as compiler

MAINTAINER Murphy Horta Camargo <murphy@heippi.com>

RUN apt-get update && apt-get install -y wget --no-install-recommends

WORKDIR /app

COPY ./code /app/

ARG DEV=prod

RUN npm install

RUN npm run build-prod


# Stage based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.13

COPY --from=compiler /app/dist/fuse/ /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf