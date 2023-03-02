# Specify a base image
FROM node:14-alpine
 
# Map working dir
WORKDIR /simpleweb 
 
#install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

#Default Command
CMD ["npm", "start"]
