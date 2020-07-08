FROM node:alpine

# Create work directory
WORKDIR /usr/src/app

# Install runtime dependencies
# RUN npm install yarn -g

# Copy app source to work directory
COPY . /usr/src/app

# Install app dependencies
RUN yarn install

WORKDIR /usr/src/app
RUN wget -r https://s6pfsyn4tusk5yap.s3.eu-central-1.amazonaws.com/config/env.production
RUN mv env.production .env

# Build and run the app
CMD npm start serve
