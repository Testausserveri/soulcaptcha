FROM node:16 AS builder

WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install 
COPY . ./
RUN npm run build

FROM caddy

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /usr/src/app/build/ /srv

