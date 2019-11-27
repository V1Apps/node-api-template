# Node Api Template

This repository is a template for any Node API's that V1 need to create.

If you are cloning this template for the first time, here are some steps you should take.

1. Go to `.github/CODEOWNERS` and change the CODEOWNERS.
1. Go to `.github/pull_request_template.md` and ensure that the template makes sense for this repo.
1. Edit the `package.json` file so that the name and description are relevant to this project.


This template covers:
- [x] - Basic routing
- [x] - Error handling
- [x] - Typescript Setup and Linting
- [x] - VS Code Configuration
- [x] - `dotenv` setup.
- [ ] - Sequelize setup
- [ ] - Basic Authentication Middleware



## Database
|               Command      |                       Description                             |
|----------------------------|---------------------------------------------------------------|
| `yarn make:migration`      | Generates a new migration file  [aliases: migration:create]   |
| `yarn make:model`          | Generates a model and its migration  [aliases: model:create]  |
| `yarn make:seed`           | Generates a new seed file  [aliases: seed:create]             |
| `yarn migrate`             | Run pending migrations                                        |
| `yarn migrate:status`      | List the status of all migrations                             |
| `yarn migrate:rollback`    | Reverts a migration                                           |
| `yarn migrate:refresh`     | Revert all migrations ran and Run all migrations again.       |
| `yarn db:seed`             | Run specified seeder                                          |
| `yarn db:seed:all`         | Run every seeder                                              |



## Overview
Here is a quick overview of the project directories.

| Directory | Description |
| ----------| ----------- |
|`.github`|TBD|
|`.vscode`|TBD|
|`.src`|TBD|
|`.src/controllers`|TBD|
|`.src/database`|TBD|
|`.src/errors`|TBD|
|`.src/middleware`|TBD|
