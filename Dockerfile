FROM vaeum/nginx-static:spa
RUN rm -rf /usr/share/nginx/html/*
COPY build /usr/share/nginx/html/
