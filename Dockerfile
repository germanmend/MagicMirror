FROM node:12-buster

WORKDIR /magicmirror

COPY . /magicmirror
RUN ls
RUN npm install --unsafe-perm --silent

EXPOSE 8080
CMD ["npm", "run", "server"]
