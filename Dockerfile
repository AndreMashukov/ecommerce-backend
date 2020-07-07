FROM node:alpine

# Create work directory
WORKDIR /usr/src/app

# Install runtime dependencies
# RUN npm install yarn -g

# Copy app source to work directory
COPY . /usr/src/app

# Install app dependencies
RUN yarn install

# Run migrations if needed
RUN yarn run setup

# Build and run the app
CMD npm start serve
