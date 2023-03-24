FROM node

# Set the container working dir to /app
WORKDIR /app

# copy the files and dir from local to /app inside the container
COPY package.json /app
COPY . /app

# This command is executed when the image is created
RUN npm install

# It documents that a process in the container will expose this port.
EXPOSE 80

# It's not executed when the image is built but when a container is created and started based on that image.
CMD ["node", "server.js"]
