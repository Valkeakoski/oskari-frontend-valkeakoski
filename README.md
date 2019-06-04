# Oskari frontend Valkeakoski

Bundles & application configuration for Valkeakoski.

## Installation on Valkeakoski

Run following code in `/home/oskari` -folder:
```
sudo sh install.sh
```

Now all are installed and you can test it when jetty starts (if not then try to start again).


## Minifying

```
npm run build -- --env.appdef=1.00:applications/valkeakoski
```