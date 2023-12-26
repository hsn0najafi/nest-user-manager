FROM node:lts-alpine As dev
WORKDIR /app
COPY package*.json ./
RUN npm ci --quiet
COPY ./ ./
RUN npm run build

FROM node:lts-alpine as prod
WORKDIR /app
COPY package*.json ./
RUN npm ci --quiet --omit=dev
COPY --from=dev /app/dist/ dist
COPY .env.prod .env
CMD ["node", "dist/main"]
