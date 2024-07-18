# Alterworld workspace cluster

## @Deployment

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

<img width="1590" alt="concept-1" src="https://github.com/jreydman/alterworld/assets/58705342/6ed878c0-a4dc-468a-af61-3160c98692ef">
<img width="1590" alt="concept-2" src="https://github.com/jreydman/alterworld/assets/58705342/ad695b0c-a4ab-4bd5-aa5f-c386921811c3">
