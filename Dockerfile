# syntax=docker/dockerfile:1

FROM chainguard/node:latest-dev AS base
USER root
RUN apk add --no-cache !pnpm-11.8 pnpm-12
USER node
WORKDIR /app

FROM base AS pruner
COPY --chown=node:node . .
RUN pnpm dlx turbo@2.11.13 prune website --docker

FROM base AS builder
COPY --from=pruner --chown=node:node /app/out/json/ ./
RUN pnpm install --frozen-lockfile
COPY --from=pruner --chown=node:node /app/out/full/ ./
RUN pnpm exec turbo run build --filter=website

FROM base AS installer
COPY --from=pruner --chown=node:node /app/out/json/ ./
RUN pnpm install --frozen-lockfile --prod

FROM chainguard/node:latest AS runner
ENV NODE_ENV=production \
	HOST=0.0.0.0 \
	PORT=3333 \
	LOG_LEVEL=info \
	SESSION_DRIVER=cookie \
	TZ=UTC
WORKDIR /app/apps/website
COPY --link --from=installer /app/node_modules /app/node_modules
COPY --link --from=installer /app/apps/website/node_modules ./node_modules
COPY --link --from=builder /app/apps/website/build ./
USER node
EXPOSE 3333
ENTRYPOINT []
HEALTHCHECK --timeout=5s CMD ["node", "-e", "fetch('http://127.0.0.1:' + process.env.PORT + '/health').then(response => process.exit(response.ok ? 0 : 1), () => process.exit(1))"]
CMD ["node", "bin/server.js"]
