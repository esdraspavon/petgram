FROM node:8

COPY [".", "/usr/src/"]

WORKDIR /usr/src

EXPOSE 3000

