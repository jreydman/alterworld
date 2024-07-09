ARG NODE_VERSION=lts-alpine

FROM node:${NODE_VERSION}

RUN apk add --update python3 openssl && rm -rf /var/cache/apk/*

WORKDIR /project/packages/prisma
COPY packages/prisma .

WORKDIR /project/services/backend
COPY services/backend .

WORKDIR /project
COPY package.json pnpm-workspace.yaml ./
RUN set -x && corepack enable && pnpm recursive install

WORKDIR /project/packages/prisma
RUN pnpm install && pnpm generate

WORKDIR /project/services/backend
ENTRYPOINT ["pnpm", "start:dev"]