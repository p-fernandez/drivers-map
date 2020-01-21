FROM mhart/alpine-node:12

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

# Bundle app source
COPY . /usr/src/app
RUN yarn build

COPY . .

EXPOSE 8000

CMD ["yarn", "prod"]
