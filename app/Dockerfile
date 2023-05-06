FROM node:14-alpine as base

WORKDIR /app

RUN yarn 

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]