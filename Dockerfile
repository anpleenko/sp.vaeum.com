FROM anpleenko/nginx-static-spa:latest
RUN rm -rf /usr/share/nginx/html/*
COPY build/ /usr/share/nginx/html/
