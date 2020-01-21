# CONFIG

Copy example file `config.example.json` located in `./server/config` and create a `config.json` file.
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

The configuration would be automatically pulled by `nconf` and applied inside the project.

# EXECUTION

First run:
```bash
yarn docker:build
```
and once completed, just run:
```
yarn docker:run
```

The container would be deployed and listening in the port `49160`.

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
