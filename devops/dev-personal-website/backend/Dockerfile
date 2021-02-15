FROM node:lts

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

RUN npm link

ENTRYPOINT [ "npm" ]

CMD [ "run", "start:dev" ]
