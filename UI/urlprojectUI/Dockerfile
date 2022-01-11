FROM node:14.17.6
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@6.0.8
COPY . /app
EXPOSE 4200
#CMD ng serve --host 0.0.0.0
#RUN npm run build

#FROM nginx:1.16.0-alpine as prod-stage
#COPY --from=build-step /dist/urlprojectui /usr/share/nginx/html
#EXPOSE 60
#CMD ["nginx","-g","daemon off;"]