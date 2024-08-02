FROM node:latest
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install express
RUN npm install pg
RUN npm install cors
RUN apt-get install curl

EXPOSE 3000

CMD [ "node", "index.js" ]
