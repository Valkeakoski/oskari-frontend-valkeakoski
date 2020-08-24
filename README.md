# Oskari frontend Valkeakoski

Site running: http://kartat.vlk.fi

This repository contains bundles & application configuration for Valkeakoski.

Support: [Sitowise Oy](https://sitowise.com) / [support@sitowise.com](mailto:support@sitowise.com)


## Installation

## Development

* first time run `npm install`
* start development server `npm start`

## Valkeakoski site

Run following code in `/home/oskari` -folder:
```
sudo sh install.sh
```

Now all are installed and you can test it when jetty starts (if not then try to start again).

### Minifying

If you need minifying front-end code separately, run following:
```
npm run build -- --env.appdef=1.00:applications/valkeakoski
```