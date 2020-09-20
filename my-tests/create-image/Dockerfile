# get node running on an OS. here i am using alpine because it is an extremely lightweight linux distribution.
FROM node:10.22.1-alpine3.10

# tell container that port 10000 should be exposed. this is the port the node app is listening and responding to
EXPOSE 10000

# create directory structure to put our app in
RUN mkdir -p /usr/src/app

# navigate to the new app dir we just created
WORKDIR /usr/src/app

# copy our node apps files accross to our app dir and then install dependencies
COPY package.json package.json
COPY server.js server.js
COPY package-lock.json package-lock.json
RUN npm install

# run command to start up our node app
CMD ["node", "server.js"]