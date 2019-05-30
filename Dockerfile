FROM node:8.15.1
RUN mkdir -p /opt/app
WORKDIR /opt/app
CMD cd ./programs/server
RUN npm install
COPY . .
EXPOSE 3000
CMD node main.js
