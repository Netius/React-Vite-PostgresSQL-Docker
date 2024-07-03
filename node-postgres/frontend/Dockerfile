# base image
FROM node:20

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json /app/
RUN npm install

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 5173

# start app dev-mode
CMD ["npm", "run", "preview"]