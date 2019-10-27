# talkdesk-challenge
🛃 Talkdesk challenge application

## How to run?

Start the server:

> docker-compose up app_list_server

Then, the API will be running at `http://localhost:3000`. You can check if everything is fine using the API `GET http://localhost:3000/status`; if you see `{ "status": "ok" }`, then the server is running.

Now, to run the front-end start the following service:

> docker-compose up app_list_front

Finally, just head to `http://localhost:8080` to see the application running!

### Tests & Lint

To run the tests on the server:

> cd app_list_server
> npm run test

Or

> docker-compose run --rm app_list_server_tests

To run the lint on the server:

> cd app_list_server
> npm run lint

Or

> docker-compose run --rm app_list_server_lint

To run the lint on the front:

> cd app_list_front
> npm run lint

Or

> docker-compose run --rm app_list_front_lint

To run the tests on the front:

> cd app_list_front
> npm run test

Or

> docker-compose run --rm app_list_front_tests
