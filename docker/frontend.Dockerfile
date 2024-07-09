ARG NODE_VERSION=lts-alpine

FROM node:${NODE_VERSION} as build

WORKDIR /app

COPY package*.json .

RUN corepack enable && pnpm install

COPY public src next* tsconfig*.json tailwind* postcss* ./

RUN pnpm build

FROM node:${NODE_VERSION} as production

WORKDIR /app

COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules


ENTRYPOINT ["npm", "start"]