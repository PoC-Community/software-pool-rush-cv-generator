FROM node:lts-alpine3.16

WORKDIR /app/front-end

EXPOSE 3000

COPY . .

RUN npm install

ENTRYPOINT [ "npm", "run"]

CMD [ "start" ]