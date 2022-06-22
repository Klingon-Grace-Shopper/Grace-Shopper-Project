## Setup

- `npm install`
- Create two postgres databases (`MY_APP_NAME` should match the `name`
  parameter in `package.json`): These commands will create both your **development** and **test** databases **Currently set to "fs-app-template"**
- By default, running `npm test` will use your test database, while
  regular development uses development database

## Start

- Sync and seed your database by running `npm run seed`.
- Running `npm run start:dev` will make start up the program
