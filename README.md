# WoT Configurator

The WoT Configurator provides a web interface that enables users to easily manage Web Things.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Node.JS - https://nodejs.org/en/
NPM - https://www.npmjs.com/
```

### Install

In order to instantiate the WoT Configurator you need to run the following commands:

```console
$ git clone https://github.com/UniBO-PRISMLab/wot-configurator
$ cd wot-configurator/
$ npm install
$ npm install -g @angular/cli
```

## Running locally

In order to instantiate the WoT Configurator locally you need to run the following commands:

```console
$ ng serve
```

access in the browser : http://localhost:4200


## Deployment

In order to deploy and execute the WoT Configurator using docker container, you need to run:

```console
$ docker build -t wotc:1.0 .
$ sudo docker run -v ${PWD}:/app -v /app/node_modules -p 4200:4200 wotc:1.0
```



