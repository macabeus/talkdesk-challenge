<img src="http://www.chasetek.com/wp-content/uploads/2019/05/talkdesk.png" width="200px" height="200px" align="left"/>

# talkdesk-challenge

> **Developer challenge solution**<br>
> A simple yet powerful app using Node.js + React Hooks + Provider Pattern + Former-Kit + Docker!

<p align="center">
  <img src="https://i.imgur.com/LCti9OM.png" width=780>
</p>

## What does it do?

It is an aplication to list and search other apps, that the API provides.

## What does it do?

It is a just an app to list others apps, where you can filter and search using the browser – or just the API.

> Tip: you could review my entire codebase looking for each commit and PR, so you'll understand better how the code grew.

## Decisions

Despite being a simple app, I made several core decisions:

### Dockerize the entire application

The main reason I'm using Docker is to have an easier setup. With that we can ensure that everyone is using the same Node version, and on a real project it makes maintenance easier. For example, maybe we would like to add a database, so is easier to do it using Docker, instead of installing the database on a real machine.

### Use a single repo with two projects

Yeah, we could build the entire application on a single big project, but I chose to build two: `app_list_server` and `app_list_front`. The first project is responsible for providing an API that the second project uses to render the web app. We could have `app_list_server` using Koa to provide the static content, but it would result in extra coupling between the front and the backend - which can become critical at scale.

These two decisions are also handy when deploying: we could write a `Dockerfile` focused to deploy the `app_list_server` project on something like AWS Fargate, and then deploy the `app_list_server` on a static content provider, such as AWS S3.

Since this is a very simple monorepo, with only two projects, I decided to not use [Lerna](https://github.com/lerna/lerna), but on a big application, with more projects, Lerna could help a lot to manage the dependencies between the projects and within each project.

### Provider Pattern

Redux is much more complicated than this application requires. We have just one page and few elements with few states to manage, so we don't need to use redux. I chose to use a simple approach to a simple problem. [You might not need Redux!](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)

So I decided to use Provider Pattern, which is a solution that fits better in this project. In this application, I'm using just one provider, `ApiProvider`, to handle the requests to the server. But on others bigger projects I created more providers, following the single responsibility principle and to avoid unnecessary re-renders.

### Former-Kit

Although you sent to me a file with the example of the application, I chose to write a completely new one.

The example that you gave me is an excellent communication tool, but we can create more extendable code using other technologies. For example, I'm using React (a good library to manage the UI state), and it is better to write a project using React component instead of pure HTML code like the example.

For the UI library component, I picked the library [Former-Kit](https://github.com/pagarme/former-kit), because it is a good react-first component library. There are many components, and the styles are very easy to customize. Another important feature is that this library offers accessibility - you could navigate on the entire application using just your keyboard! 

One disadvantage of this library is the build process. Unfortunately you need to set some steps on yor Webpack to can use this library.

### Tests

I'm using Ava on both projects, because it can run the tests asynchronously ~(bye bye tests that demands state of the previous test!)~. I already used it in production and it fits very well - but it was my first time using it on the front-end side, and I didn't like to write the `app_list_front/tests/_init.js` file to work well on the front-end...

On the front-end side, I picked React Testing Library, because it enforces good practices when you are writing the tests. For example, you can't call the methods or see the internal state of your component. You only can see what the user can also see.

## Routes

There are three routes on the server application: `GET /status`, `GET /apps` and `GET /categories`. On the front-end side there is just the index route.

### `GET /status`

Check if the server is running. It takes no parameters and it should returns this:

```json
{
    "status": "ok"
}
```

### `GET /apps`

Get the list of apps. You could use the query string parameters `page`, `filterByCategory` and `filterByName`. For example, `/apps?page=1&filterByCategory=Reporting`. The result will be a part of the `app_list_server/assets/apps.json` file.

### `GET /categories`

Get the list of categories. It doesn't have any parameters and it'll return an array sorted alphabetically.

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

2 - Now, start the front-end service:

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

2 - To run the tests on the front-end:

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

I'm following [Pagar.me JavaScript Style Guide](https://github.com/pagarme/javascript-style-guide) on `app_list_server` and [the respective lint rules for React applications](https://github.com/pagarme/react-style-guide) on `app_list_front`.

These lint rules are based on the loved Airbnb, but are still more restrictive.

1 - To run the lint on the server:

🐳 Using Docker
```
> docker-compose run --rm app_list_server_lint
```

📜 Without Docker
```
> cd app_list_server
> npm run lint
```

2 - To run the lint on the front-end:

🐳 Using Docker
```
> docker-compose run --rm app_list_front_lint
```

📜 Without Docker
```
> cd app_list_front
> npm run lint
```
