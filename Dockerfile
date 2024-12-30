ARG RELEASE_TYPE="preprod"

FROM node:18 AS builder
ARG RELEASE_TYPE

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ${RELEASE_TYPE}.env ./.env
COPY package*.json ./
COPY prisma ./prisma/
COPY views ./views/

# Install app dependencies
RUN yarn

# Generate prisma client
RUN yarn prisma generate

COPY . .

RUN yarn build

FROM node:18

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.env ./.env
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/views ./dist/views
COPY --from=builder /app/views ./views

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]