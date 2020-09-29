# Backend

## Dependencies for development

- Node and npm (some recent version)
- Docker

## Installation

1. Copy `.env.example` to `.env` and change the values according to your configuration. Default values should work for most
of the cases.
1. Start database using docker: Go to `backend/db/` folder and run `docker-compose up -d`
1. Install dependencies `npm install`
1. Run migrations by running these two commands: `npm run migrate` and `NODE_ENV=test npm run migrate`

## Migrations

New migrations are created with: `npm run migrate:create <migration_name>`. For example `npm run migrate:create
add_users`.

Migrations can be run with `npm run migrate` (and remember to run them to test database by defining `NODE_ENV=test`
environment variable as well).

A migration can be rolled back with `npm run migrate:rollback` which rolls back the latest migration.

## Running the server

Run the server with `npm run start`

## Running tests

Tests are run with Jest. Routes are tested with supertest.

Run `npm run test` to run tests once and `npm run test:watch` to run tests in watch mode.
