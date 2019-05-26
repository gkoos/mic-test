# MakeItCheaper Code Test
Technical test as per [`techtest.md`](techtest.md)

## Architecture
The backend is written in node.js with koa, the frontend is a react app created by create-react-app.  
I was trying to keep things simple so the react app is not ejected but it leaves us with some compromises, eg. there are two
instances of jest installed.

## Requirements
- Node.js v10+
- yarn

## Install
```
yarn && cd client && yarn && cd ..
```

## Start Dev Server
```
yarn start
```
This starts both the backend server and a separate dev webserver to serve the frontend so for development we have
hot module reloading and all that good stuff. There are yarn scripts to separately start the frontend and the backend server
as well: `yarn start:devserver` and `yarn start:client`.  
The requests are proxied from the client to the server. The idea here is to run the two servers concurrently during development
and in production we make a build of the client being served by the same server that handles the backend API requests.  

### Backend
The backend here is a simple proxy between the frontend and the Lead API. All it does is validate the incoming data and forward it.
Honestly, as the Lead API does a quite thorough validation, it could just pass it on as is, but this is a backend exercise after all.

### Frontend
The frontend is a react app with two routes: one has the form the other is a little thank you message. Before the form data is sent
we validate the data on the client side as well and display meaningful error messages in case something went wrong.

## Build frontend
```
yarn build:client
```

## Running test
For the backend:
```
yarn test
```
For the frontend:
```
yarn test:client
```
The app uses jest to run tests. To avoid ejecting the client app the frontend and the backend tests have to be run separately.


