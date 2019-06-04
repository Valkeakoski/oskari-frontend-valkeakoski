/**
 * @class Oskari.valkeakoski.bundle.trackLocation.Bundle
 *
 * Definition for bundle. See source for details.
 */
Oskari.clazz.define("Oskari.valkeakoski.bundle.trackLocation.Bundle", function () {

}, {
    "create": function () {
        var me = this,
            inst = Oskari.clazz.create("Oskari.valkeakoksi.bundle.trackLocation.BundleInstance");
        return inst;

    },
    "update": function (manager, bundle, bi, info) {

    }
}, {

    "protocol": ["Oskari.bundle.Bundle"],
    "source": {

        "scripts": [
            {
                "type": "text/javascript",
                "src": "../../../../bundles/valkeakoski/track-location/instance.js"
            }
        ]
    },
    "bundle": {
        "manifest": {
            "Bundle-Identifier": "track-location",
            "Bundle-Name": "track-location",
            "Bundle-Author": [{
                "Name": "Marko Kuosmanen",
                "Organisation": "Sitowise Oy",
                "Temporal": {
                    "Start": "2019",
                    "End": "2019"
                },
                "Copyleft": {
                    "License": {
                        "License-Name": "EUPL",
                        "License-Online-Resource": "http://www.paikkatietoikkuna.fi/license"
                    }
                }
            }],
            "Bundle-Name-Locale": {
                "fi": {
                    "Name": "track-location",
                    "Title": "track-location"
                },
                "en": {}
            },
            "Bundle-Version": "1.0.0",
            "Import-Namespace": ["Oskari", "jquery"],
            "Import-Bundle": {}
        }
    },

    /**
     * @static
     * @property dependencies
     */
    "dependencies": ["jquery"]

});

Oskari.bundle_manager.installBundleClass("track-location", "Oskari.valkeakoski.bundle.trackLocation.Bundle");