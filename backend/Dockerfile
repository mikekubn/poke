FROM node:18-alpine

# Create an application directory
RUN mkdir -p /src

# The /src as the main src directory
WORKDIR /src

# Copy required files
COPY package*.json ./
COPY src ./

RUN npm install
COPY . .

EXPOSE 4000
CMD ["node", "index.js"]