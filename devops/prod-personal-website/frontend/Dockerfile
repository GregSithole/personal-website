FROM node

WORKDIR /app

EXPOSE 80

# Build angular app
COPY package.json .
RUN npm install
RUN npm install -g @angular/cli@latest
COPY . .
RUN ng build --prod --aot

# Serve
ENTRYPOINT [ "node" ]
CMD [ "start.js"]