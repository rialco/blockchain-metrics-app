FROM node:16.17.1-alpine3.16

ENV DATABASE_URL=postgres://pf:pf@postgres:5432/firepot

WORKDIR /app
COPY . .
RUN npm install 
RUN npm run build
