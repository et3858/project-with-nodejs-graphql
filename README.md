# Install

```sh
npm install
```


# Migrations

```sh
npm run migrations:run
```

# Run in dev mode

```sh
npm run dev
```

# Run in prod mode

```sh
npm run start
```

# Connect to DB from Docker

```sh
docker-compose exec postgres bash
psql -h localhost -d db_store -U eduardo
\d+
SELECT * FROM users;
DELETE FROM users WHERE id=<id>;
```
