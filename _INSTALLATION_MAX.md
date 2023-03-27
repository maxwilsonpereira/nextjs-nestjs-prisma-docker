#### Installation

- **Nx Workspace** for the backend structure

##### API Packages

- **NestJS** for the backend structure
- **Passport.js** for auth
- **Swagger** for documentation
- **Prisma** as ORM
- **PostgreSQL** + **Docker** for local database

##### Webapp Packages

- **Next JS** for the frontend structure
- **Material UI** as a design system
- **Axios** as API client
- **eslint** to find and fix problems on the code

---

#### Start Application

- Initialize Docker Desktop
- `docker compose -f ./packages/database/docker-compose.yml up -d`
- `npm install`
- API: apps\api: `npm run dev`
- WEBAPP: apps\webapp: `npm run dev`
- RUN BE and FE on the same terminal: `yarn dev`

---

#### Troubleshooting

- API Stuck: File change detected. Starting incremental compilation...
  -- Change typescript version on api "package.json" to: "typescript": "4.8.3"
  -- npm install

---

#### Prisma Update Schema

- Add the new field to: `packages\database\prisma\schema.prisma`
- Run inside `...\nextjs-nestjs-prisma-docker\packages\database`: `npx prisma migrate dev --name add-product-image-field` OR `npx prisma migrate dev --create-only --name add-expire-date-field`
- Add the new field to: `apps\api\src\products\dto\create-product.dto.ts`

---

#### Reset Database (erase all tables and data)

`npx prisma migrate reset --force`

---

#### MIGRATION

Migrating from file `schema.prisma`: Run `npx prisma migrate dev` OR `npx prisma migrate dev --name "optional_migration_name"`

---

#### DOCKER

With current setup file `.../nextjs-nestjs-prisma-docker\packages\database\docker-compose.yml`, the actual data for the Postgres database is saved in a Docker volume named "db" that is created by the Docker Compose file. The volume is mounted to the container's "/var/lib/postgresql/data" directory, which is where Postgres stores its data files by default. So, any data that is written to the database will be saved in the Docker volume, which is persisted even if the container is removed or recreated.
To **DELETE ALL DATA** from the Postgres database in this setup, you can stop the Docker Compose services and then remove the "db" volume that is used to store the database data. On same directory of file `docker-compose.yml`, run:

- `docker-compose down`
- `docker volume rm database_db`
- `npm install`
- `docker compose -f docker-compose.yml up -d`
