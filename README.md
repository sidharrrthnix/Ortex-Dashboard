# Ortex Signup and Dashboard Application

This application has client and server functionalities.

Initially Sign up with any credentials and kindly remember it for signing in again. The server will save the user credentials on the local mongo server hosted on Port 27017 and extension auth

## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install the npm registry.

On the Server

```bash
cd server
npm install
npm run dev
```

On the Client

```bash
cd client
npm install
npm run start
```

## Note

The socket connection to stream.tradingeconomics is fluctuating a lot. The socket connection was working while developing if you might encounter the "Keep-alive" from
the live feed, I have used the default values as "placeholder"

## Thank You

I hope you like the application. I really enjoyed building it.
