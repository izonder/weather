import AbstractVendor from 'vendor/abstractVendor';

/**
 * OpenWeatherMap Vendor Class
 */
export default class OwmVendor extends AbstractVendor
{
    constructor(search) {
        super(search);
    }

    /**
     * Getting url
     * @returns {*|string}
     */
    getUrl() {
        return this.config.api.endpoints['owm'].url;
    }

    /**
     * Preformat data
     * @param data
     * @returns {*}
     */
    preformat(data) {
        return data;
    }
}