# talkdesk-challenge
🛃 Talkdesk challenge application

## How to run?

All scripts are available to be run with Docker and without it.<br>
However, it's better to use only Docker to avoid compatibility issues (such as libraries that are compiled and Node version).

1 - Start the server:

🐳 Using Docker
```
> docker-compose up app_list_server
```

📜 Without Docker
```
> cd app_list_server
> npm i
> npm start
```

Then, the API will be running at `http://localhost:3000`. You can check if everything is fine using the API `GET http://localhost:3000/status`; if you see `{ "status": "ok" }`, then the server is running.

2 - Now, to run the front-end start the following service:

🐳 Using Docker
```
> docker-compose up app_list_front
```

📜 Without Docker
```
> cd app_list_front
> npm i
> npm start
```

Finally, just head to `http://localhost:8080` to see the application running!

### Tests

I'm using the test runner [AVA](https://github.com/avajs/ava).

1 - To run the tests on the server:

🐳 Using Docker
```
> docker-compose run --rm app_list_server_tests
```

📜 Without Docker
```
> cd app_list_server
> npm run test
```

2 - To run the tests on the front:

🐳 Using Docker
```
> docker-compose run --rm app_list_front_tests
```

📜 Without Docker
```
> cd app_list_front
> npm run test
```

### Lint

I'm following [Pagar.me JavaScript Style Guide](https://github.com/pagarme/javascript-style-guide) on `app_list_server` and [the respective lint rules for React application](https://github.com/pagarme/react-style-guide) on `app_list_front`.

These lint rules are based on the loved Airbnb, but are more still more restrictive.

1 - To run the lint on the server:

🐳 Using Docker
```
> docker-compose run --rm app_list_server_lint
```

📜 Without Docker
```
> cd app_list_server
> npm run test
```

2 - To run the lint on the front:

🐳 Using Docker
```
> docker-compose run --rm app_list_front_lint
```

📜 Without Docker
```
> cd app_list_front
> npm run lint
> cd app_list_server
```
