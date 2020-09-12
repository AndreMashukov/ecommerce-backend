FROM node:alpine

# Create work directory
WORKDIR /usr/src/app

# Install runtime dependencies
# RUN npm install yarn -g

# Copy app source to work directory
COPY . /usr/src/app

# Install app dependencies
RUN yarn install --production

WORKDIR /usr/src/app

# Build and run the app
# CMD ./node_modules/.bin/pm2-runtime start npm -- start serve
CMD yarn start serve
