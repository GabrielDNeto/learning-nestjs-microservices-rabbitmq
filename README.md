# Simple NestJS Microservices with RabbitMQ

## Resume

A monorepo app built with [Nx](https://nx.dev/), [NestJS](https://nestjs.com/) and [RabbitMQ](https://www.rabbitmq.com/).

These services process orders and payment, and then notificate.
Services use _console.log()_ to return messages in terminal, simulating the steps.

This app was just created to learn about microservices and how they communicate to each other using RabbitMQ.

## Instructions

- Clone App

```bash
git clone https://github.com/GabrielDNeto/learning-nestjs-microservices-rabbitmq.git
```

- Certify that you have Docker installed

- Open up the clone folder and run RabbitMQ container with Docker Compose

```bash
docker-compose up -d
```

- Running All Services

```bash
    # Install nx globally with "npm i -g nx@latest"
    nx run-many --target=serve --all --parallel
```
