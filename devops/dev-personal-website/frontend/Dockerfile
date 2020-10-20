FROM node:11.10

WORKDIR /app/backend
COPY backend/package.json package.json
COPY backend/package-lock.json package-lock.json
RUN npm install

WORKDIR /app/frontend
COPY frontend/package.json package.json
COPY frontend/package-lock.json package-lock.json
RUN npm install

COPY . /app

EXPOSE 4200

WORKDIR /app/frontend

ENTRYPOINT [ "npm" ]

CMD [ "run", "start:dev" ]
