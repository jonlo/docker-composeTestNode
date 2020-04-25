FROM node:12
WORKDIR /tmp
COPY package.json /tmp/
COPY .npmrc /tmp/ 
RUN npm install
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
# RUN npm run build
CMD npm run start:dev
EXPOSE 8080