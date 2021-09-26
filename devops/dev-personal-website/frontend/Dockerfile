FROM node:lts

WORKDIR /app/frontend
COPY frontend/package.json package.json
COPY frontend/package-lock.json package-lock.json
RUN npm install

COPY . /app

EXPOSE 4200

WORKDIR /app/frontend

ENTRYPOINT [ "npm" ]

CMD [ "run", "start:dev" ]
