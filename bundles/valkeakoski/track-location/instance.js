/**
 * @class Oskari.valkeakoksi.bundle.trackLocation.BundleInstance
 *
 * Track user location
 */
Oskari.clazz.define("Oskari.valkeakoksi.bundle.trackLocation.BundleInstance",

    /**
     * @method create called automatically on construction
     * @static
     */

    function () {
        this.sandbox = null;
        this.started = false;
        this._localization = null;

    }, {
        __name: 'track-location',
        /**
         * @method getName
         * @return {String} the name for the component
         */
        getName: function () {
            return this.__name;
        },
        /**
         * @method setSandbox
         * @param {Oskari.mapframework.sandbox.Sandbox} sandbox
         * Sets the sandbox reference to this component
         */
        setSandbox: function (sbx) {
            this.sandbox = sbx;
        },
        /**
         * @method getSandbox
         * @return {Oskari.mapframework.sandbox.Sandbox}
         */
        getSandbox: function () {
            return this.sandbox;
        },
        /**
         * @method update
         * implements BundleInstance protocol update method - does nothing atm
         */
        update: function () {
            var me = this;
        },

        /**
         * @method start
         * implements BundleInstance protocol start methdod
         */
        start: function () {
            var me = this;
            if (me.started) {
                return;
            }
            me.started = true;

            var conf = me.conf,
                sandboxName = (conf ? conf.sandbox : null) || 'sandbox',
                sandbox = Oskari.getSandbox(sandboxName);
            me.setSandbox(sandbox);

            sandbox.postRequestByName('StartUserLocationTrackingRequest', [{addToMap: 'location', centerMap: 'single'}]);
        },

        stop: function () {
            this.sandbox = null;
            this.started = false;
        }
    }, {
        /**
         * @property {String[]} protocol
         * @static
         */
        protocol: ['Oskari.bundle.BundleInstance']
    });