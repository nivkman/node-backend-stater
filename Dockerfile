FROM node:slim AS app

WORKDIR /app

# Copy package files
COPY package*.json ./

# Set up npm authentication and install dependencies
ARG NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc && \
    npm ci && \
    rm -f .npmrc

# Copy the rest of the application code
COPY . .

# Set environment variables
ENV PORT=9090
ENV SERVICE=MyNewService

# Expose the range of ports
EXPOSE 9090

# Start the application
CMD [ "npm", "start" ]