FROM node:latest

MAINTAINER Yang Wang

ENV NODE_ENV=production
ENV PORT=3000

COPY . /var/www

WORKDIR /var/www

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]

RUN npm install