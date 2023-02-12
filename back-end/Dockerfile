FROM node:lts-alpine3.16

WORKDIR /app/back-end

EXPOSE 8080

COPY . .

RUN npx prisma generate

RUN npm install

ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]