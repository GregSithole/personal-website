FROM node:12.19

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

RUN npm link

ENTRYPOINT [ "npm" ]

CMD [ "run", "start:dev" ]
