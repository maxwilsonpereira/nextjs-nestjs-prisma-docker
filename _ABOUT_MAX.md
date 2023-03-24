## START:

Initialize Docker Desktop
`docker compose -f ./packages/database/docker-compose.yml up -d`
`npm install`
`yarn dev` WILL RUN BE and FE
API: apps\api: `npm run dev`
WEBAPP: apps\webapp: `npm run dev`

## TROUBLESHOOTING:

- API STUCK: File change detected. Starting incremental compilation...
  -- Change typescript version on api "package.json" to: "typescript": "4.8.3"
  -- npm install

## PRISMA UPDATE:

1- Add the new field to: `packages\database\prisma\schema.prisma`
2- Run inside `...\nextjs-nestjs-prisma-docker\packages\database`: `npx prisma migrate dev --name add-product-image-field` OR `npx prisma migrate dev --create-only --name add-expire-date-field`
3- Add the new field to: `apps\api\src\products\dto\create-product.dto.ts`

## RESET DATABASE (erase all tables and data): `npx prisma migrate reset --force`

## MIGRATION

CREATING MIGRATION from file `schema.prisma`: `npx prisma migrate dev` OR `npx prisma migrate dev --name "optional_migration_name"`

## DOCKER:

With current setup `.../nextjs-nestjs-prisma-docker\packages\database\docker-compose.yml`, he actual data for the Postgres database is saved in a Docker volume named "db" that is created by the Docker Compose file. The volume is mounted to the container's "/var/lib/postgresql/data" directory, which is where Postgres stores its data files by default. So, any data that is written to the database will be saved in the Docker volume, which is persisted even if the container is removed or recreated.
To **DELETE ALL DATA** from the Postgres database in this setup, you can stop the Docker Compose services and then remove the "db" volume that is used to store the database data. On same directory of file `docker-compose.yml`:
`docker-compose down`
`docker volume rm database_db`
`npm install`
START AGAIN: `docker compose -f docker-compose.yml up -d`
