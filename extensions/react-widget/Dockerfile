FROM node:lts as frontend-packages
WORKDIR /code
COPY package.json /code/

RUN npm install --legacy-peer-deps

FROM node:lts as frontend-build

WORKDIR /code

COPY --from=frontend-packages ./code/node_modules ./node_modules
COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=frontend-build /code/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY --from=frontend-build /code/dist/ .
