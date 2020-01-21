# CONFIG

Copy example file `config.example.json` located in `./src/config` and create a `config.json` file for `development` environment. Do the same for `production` environment with a file called `config.prod.json`.
Fill its content accordingly:
```javascript
{
  "env": "development",
  "backend": {
    "baseURL": "<Backend URL here>"
  },
  "gmaps": {
    "apiKey": "<Google Maps API Key here>",
    "latitude": "<Latitude for the center of GMaps>",
    "longitude": "<Longitude for the center of GMaps>"
  }
}
```

For setting the server side config, copy example file `config.example.json` located in `./server/config` and create a `config.json` file for `development` environment. Do the same for `production` environment with a file called `config.prod.json`.
Fill its content accordingly:
```javascript
{
  "env": "example",
  "port": "<Listening port of this server>",
  "splyt": {
    "baseURL": "<Base URL of 3rd party API here>"
  }
}
```

The configuration would be automatically pulled by `nconf` and applied inside the project in different areas: webpack, http clients and different entry points.

# EXECUTION

First run:
```bash
yarn install
```
then
```
yarn build
```
and once completed, just run:
```
yarn prod
```

The server will be available in the port `49160`.

# LOCAL INSTALL

For a local install just:
```bash
yarn install
```
and then just:
```
yarn dev
```

The server will be available in the port `8080`.
