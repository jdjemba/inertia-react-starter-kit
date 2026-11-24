<div align="center">

  <h1>React application Monorepo Starter Kit</h1>

  <p>
    <strong>A dedicated AdonisJS monorepo starter with Inertia.js alongside React to build a fullstack React application powered by the AdonisJS backend.</strong>
  </p>

</div>

---

## ✨ What's in the Box

- **Website workspace** in `apps/website`
- **Monorepo tooling** with Turborepo and workspaces for coordinated scripts

---

## 🚀 Quick Start

- Install dependencies:

```bash
pnpm install
```

- Run the tests:

```bash
pnpm run test
```

- Build the monorepo:

```bash
pnpm run build
```

- Run the development server:

```bash
pnpm run dev
```

---

## 📁 Workspaces

- [Website workspace docs](./apps/website/README.md)

## Local development

Copy `apps/website/.env.example` to `apps/website/.env`, generate an application key with `pnpm --filter website exec node ace generate:key`, and configure the local database connection. Start Docker before running `pnpm dev`.

`pnpm dev` starts PostgreSQL, waits up to 60 seconds for it to become healthy, runs migrations and seeders, then starts the development server. Each launch runs migrations and seeders against the configured database. A failed step stops the chain. Use a development database and make future seeders safe to run repeatedly.

Use `pnpm db:up` to start PostgreSQL, `pnpm db:push` to start it and run migrations, or `pnpm db:seed` to run the complete database preparation. `pnpm db:down` stops the Compose services and preserves their named volume.

PostgreSQL listens on `127.0.0.1:5432` on your host. To use a custom password, set the same `DB_PASSWORD` in the repository root `.env` and in `apps/website/.env`. Compose uses this setting when it initializes the database. To change the password on an existing volume, change it in PostgreSQL first.

The pinned image uses PostgreSQL 18. If your existing volume uses a different major version, migrate its data before starting it with this image.

### Test the website image locally

From the repository root, build the image with `pnpm docker:build`. Run `pnpm db:push` to start PostgreSQL and apply migrations on a fresh database. If your database already has the migrations, start it with `pnpm db:up`.

In OrbStack, enable **Allow access to container domains & IPs** under **Settings → Network**. Run `pnpm orb:run` and open `https://website.orb.local`. If OrbStack prompts you on first use, install its local certificate.

The command reads the application key and database credentials from `apps/website/.env`, sets `APP_URL=https://website.orb.local`, and connects to PostgreSQL through OrbStack at `host.docker.internal:5432`.
