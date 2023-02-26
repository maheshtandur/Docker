# Specify a base image
FROM node:14-alpine
 
# Map working dir
WORKDIR /simpleweb 
 
#install some dependencies
COPY ./ ./
RUN npm install
 
#Default Command
CMD ["npm", "start"]
