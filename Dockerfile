FROM node:alpine

EXPOSE 8080

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install --production

COPY . /app

CMD ["yarn", "start"]
