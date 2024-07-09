# @test_deploy_next_ssl

## Setup and Installation

### Requirements: `hosts-editor` `http` `docker`

127.0.0.1 test-ssl-app.com
127.0.0.1 api.test-ssl-app.com
127.0.0.1 odbc.test-ssl-app.com
127.0.0.1 db.test-ssl-app.com

To set up the project, follow these steps:

1. Install the necessary dependencies:

   ```sh
   pnpm install
   ```

2. Start the services:

   ```sh
   make up # services="<*>"
   ```

## Available Commands

- To stop the services:

  ```sh
  make down
  ```

- To restart the services:

  ```sh
  make restart
  ```

- To scan the services:

  ```sh
  make scan
  ```

- To list the services:

  ```sh
  make ps
  ```

## Notes

- Prisma studio runs at `localhost:5555`.

## Tasks

(Add your tasks here)

## Tests

We have conducted tests on worker threads. Here are the results:

- Native fib endpoint per 50 requests: 1.5s
- Worker fib endpoint per 50 requests: 16.3s
