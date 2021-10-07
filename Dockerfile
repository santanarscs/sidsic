FROM node:14.15.4-alpine3.12

# ENV http_proxy http://10.1.101.101:8080/
# ENV https_proxy http://10.1.101.101:8080/

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app