FROM node:lts-alpine3.16

WORKDIR /app

EXPOSE 3000

COPY . .

RUN npm install

ENTRYPOINT [ "npm", "run"]

CMD [ "start" ]