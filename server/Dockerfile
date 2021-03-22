FROM node:latest as builder
WORKDIR /app
ENV NODE_ENV=production
COPY package.json ./
COPY yarn.lock ./
RUN yarn
RUN yarn global add typescript
COPY . .
RUN yarn build

FROM node:latest
WORKDIR /app
ENV NODE_ENV=production
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY --from=builder /app/build .
CMD [ "node", "./build/index.js" ]