FROM node:14-alpine as base

WORKDIR /api

RUN yarn 

COPY . .

EXPOSE 8800

CMD [ "yarn", "start" ]