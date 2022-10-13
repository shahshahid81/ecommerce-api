# ecommerce-api

### Prerequisite

- This project uses postgresql as database. If you want to run this project as a standalone http server, you would need to install postgresql database and set the appropriate environment variable values in `.env` file.
- If you want to run this project using docker, you can install docker and run `docker compose up` to run the project. However, run `./docker-scripts/api-bash.sh` command in a separate tab to open a terminal and execute commands there instead of project root folder.

### Installation

1. After cloning the project, run `npm i` to install the packages.
2. Create a new file `.env` and copy the contents of `.env.example` file.
3. In `.env` file, you would need to add database host, port, name, username and password in `PG_HOST`, `PG_PORT`, `PG_USER`, `PG_PASSWORD` and `PG_DB_NAME` respectively. (Note: you won't need to change the env file content if you are using docker).
4. Run `npm run dev` to start the server. (Note: you won't need to run this command if you are using docker)
5. Run the migrations by running `node ace migration:run` command. (Note: run api-bash.sh to connect to container's terminal session and run this command there if you are using docker)
6. You can execute the apis now.
