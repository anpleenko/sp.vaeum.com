FROM node:alpine as build
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM anpleenko/nginx-static-spa:latest
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build/ /usr/share/nginx/html/
