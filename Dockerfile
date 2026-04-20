FROM node:25.9.0-bookworm AS builder

ADD . /app

WORKDIR /app

RUN yarn install

RUN yarn build

FROM node:25.9.0-bookworm

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

COPY --from=builder /app/dist /app/dist

RUN yarn install --production

COPY .env /app/.env

CMD ["yarn", "start-prod"]