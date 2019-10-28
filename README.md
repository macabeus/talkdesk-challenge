<img src="http://www.chasetek.com/wp-content/uploads/2019/05/talkdesk.png" width="200px" height="200px" align="left"/>

# talkdesk-challenge
🛃 Talkdesk challenge application

> Developer challenge solution<br>
> A simple yet powerful app using Node.js + React Hooks + Docker + Koa + Ava + React Testing Library!

<p align="center">
  <img src="https://i.imgur.com/LCti9OM.png" width=780>
</p>

## What does it do?

It is an aplication to list and search other apps, that the API provides.

## How it works?

Despite being a simple app, I opted for two core decisions:

### Dockerize the entire application

The main reason why I'm using Docker is to have an easier setup. With that we can ensure that everyone is using the same Node version, and on a real project it is better to maintain. Maybe we would like to add a database, so is easer to do it using Docker, instead of install the database on real machine.<br>
That is a simpler setup on a new environment.

### Use a single repo

Yeah, we could build the entire application on a single project, but I chose to build two: `app_list_server` and `app_list_server`. The first application is responsible for providing an API that the second application uses to render a web app. We could have `app_list_server` using Koa to provide static content, but it would result in extra coupling between the front and the back-end - which can become something critical at scale.

These two decisions are also handy when deploying: we could write a `Dockerfile` focused to deploy the `app_list_server` project on something like AWS Fargate, and then deploy the `app_list_server` on a static content provider, such as AWS S3.

### Other decisions

- explicar a razão de porque não usei o exemplo (apesar dele demonstrar muito bem o que se desejava, sendo uma excelente ferramenta de comunicação, não era react-first)
- falar porque usei o former-kit, e os prós e contras dele (contras: mexe no build do projeto [o que não é exxatamente ruim, pois eu já usaria um processo de build bem parecido], não da para importar apenas parte dos componentes)
  - tem vários recursos de acessibilidade (você consegue acessar todos os recursos desse desafio só usando o teclado! experimente!)
  - exemplificar que o beginExpanded foi algo qe eu implementei mesmo após ter saído da pagarme
  - os estilos são facilmente customizáveis
  - foi a primeira vez que fiz um projeto em que estava testando a UI com o former-kit, e vi que ele é bem dificil de se testar; isso é algo que precisa ser levado em conta se fosse usar me um projeto real
- justificar o uso do koa (é bem simples e microframework, diferente de outras libs como o Hapi que prende no ecosistema dele; uma das desvantagens do koa é causar side-effect, o que pode ser confuso para quem nao esta acostumado)
- justificar o porque de usar provider pattern (linkar a minha talk e a postagem no medium do cara)
- justificar a mudança naquela parte do layout (ao invés dos foo/bar, usei o <Tag>, para não da ideia de diretório e um estar dentro do outro)
- dizer que já havia usado ava para fazer uma api, e foi a primeira vez que fui usar no front, e achei okay, mas acabou complicado mais o processo de build, e isso é algo que teria que ser levado em consideraçao num outro projeto

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
