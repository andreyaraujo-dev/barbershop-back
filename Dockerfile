FROM node:14-slim

RUN mkdir -p /usr/app && \
  chown -R node:node /usr/app

RUN apt-get update && apt-get install -y procps

WORKDIR /usr/app

USER node

COPY --chown=node:node package.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start:prod" ]
