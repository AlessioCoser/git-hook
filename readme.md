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


## Deploy manually
**NB:** you have to configure AWS cli on your machine before your first manual deploy
```
npm run sls deploy
```