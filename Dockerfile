FROM node:alpine
COPY . /opt/bot
WORKDIR /opt/bot
RUN yarn install
RUN npm i -g typescript ts-node
COPY .env .
CMD [ "yarn", "start" ]