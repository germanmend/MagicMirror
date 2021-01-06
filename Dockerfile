FROM node:12-buster

WORKDIR /magicmirror

COPY . /magicmirror
RUN ls
RUN npm install --unsafe-perm --silent

EXPOSE 80
CMD ["npm", "run", "server"]
