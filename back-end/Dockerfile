FROM node:lts-alpine3.16

WORKDIR /app

EXPOSE 8080

COPY . .

RUN npm install

ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]