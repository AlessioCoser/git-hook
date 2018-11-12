# Github Hook Example

## Requirements
- [AWS Account Credentials with correct permissions](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
- [Node.js and npm](https://nodejs.org/en/download/package-manager/)

## Setup
Install dependencies
```
npm install
```


## Run tests

To run the tests you have to execute this simple command:
```
npm test
```


## Run in local environment

To run application in local environment you have to execute this simple command:
```
npm start
```
You can view the response at url: `http://localhost:3000/hello`


## Send an Event in an AWSLambda-like local environment

You need docker to be running: this script will pull an AWSLambda-like image and runs the choosen function on it.
```
npm run event handler.hello '{"my":"event"}'
```

Using a real event:
```
npm run event handler.hello '$(cat http-event-example.json)'
```


## Deploy manually
**NB:** you have to configure AWS cli on your machine before your first manual deploy
```
npm run sls deploy
```