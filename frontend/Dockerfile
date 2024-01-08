FROM node:18-alpine
WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY codegen.yml /.
COPY next.config.js ./
COPY public ./public

RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD npm run start