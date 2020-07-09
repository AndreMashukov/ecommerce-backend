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
RUN wget https://s6pfsyn4tusk5yap.s3.eu-central-1.amazonaws.com/config/ecommerce-backend/env.production
RUN mv env.production .env

# Build and run the app
CMD pm2 start serve
